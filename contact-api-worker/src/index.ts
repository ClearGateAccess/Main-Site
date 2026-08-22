interface RateLimitBinding {
  limit: (options: { key: string }) => Promise<{ success: boolean }>;
}

interface Env {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
  ALLOWED_ORIGINS: string;
  TURNSTILE_EXPECTED_HOSTNAMES?: string;
  CONTACT_RATE_LIMITER: RateLimitBinding;
}

interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  role: string;
  programStage: string;
  details: string;
  website: string;
  turnstileToken: string;
  requestId: string;
}

const PROGRAM_STAGES: Record<string, string> = {
  "candidate-feasibility": "ACNU candidate or feasibility review",
  "active-switch-program": "Active ACNU or switch program",
  "study-validation": "ACNU study or validation planning",
  "physician-mediated-rx": "Clinician-mediated prescription pathway",
  "retail-integration": "Retail or pharmacy integration",
  other: "Another operating need",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUEST_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_REQUEST_BYTES = 16_000;

function list(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, maxLength);
}

function oneLine(value: unknown, maxLength: number) {
  return clean(value, maxLength).replace(/\s+/g, " ");
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body: object, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const source = value as Record<string, unknown>;
  const payload: ContactPayload = {
    name: oneLine(source.name, 100),
    email: oneLine(source.email, 254).toLowerCase(),
    organization: oneLine(source.organization, 160),
    role: oneLine(source.role, 120),
    programStage: oneLine(source.programStage, 64),
    details: clean(source.details, 2500),
    website: oneLine(source.website, 200),
    turnstileToken: oneLine(source.turnstileToken, 2048),
    requestId: oneLine(source.requestId, 64),
  };

  if (
    payload.name.length < 2 ||
    !EMAIL_PATTERN.test(payload.email) ||
    payload.organization.length < 2 ||
    !PROGRAM_STAGES[payload.programStage] ||
    payload.details.length < 10 ||
    !REQUEST_ID_PATTERN.test(payload.requestId)
  ) {
    return null;
  }

  return payload;
}

async function verifyTurnstile(
  token: string,
  remoteIp: string,
  env: Env,
) {
  if (!env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: remoteIp,
      }),
    },
  );

  if (!response.ok) return false;

  const result = (await response.json()) as {
    success?: boolean;
    action?: string;
    hostname?: string;
  };
  const expectedHosts = list(env.TURNSTILE_EXPECTED_HOSTNAMES);

  return Boolean(
    result.success &&
      (!result.action || result.action === "contact_form") &&
      (!expectedHosts.length || (result.hostname && expectedHosts.includes(result.hostname))),
  );
}

function buildEmail(payload: ContactPayload) {
  const stage = PROGRAM_STAGES[payload.programStage];
  const receivedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/New_York",
  }).format(new Date());

  const rows = [
    ["Name", payload.name],
    ["Work email", payload.email],
    ["Organization", payload.organization],
    ["Role or function", payload.role || "Not provided"],
    ["Program stage", stage],
    ["Received", receivedAt],
    ["Request ID", payload.requestId],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:9px 14px 9px 0;border-bottom:1px solid #d7e2de;color:#56636a;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:9px 0;border-bottom:1px solid #d7e2de;color:#102431;font-size:14px;font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html><html><body style="margin:0;background:#f3f8f6;font-family:Arial,sans-serif;color:#10191f"><div style="max-width:680px;margin:0 auto;padding:32px 20px"><div style="background:#0a1922;padding:24px 28px;color:#fff"><strong style="font-size:20px">ClearGate program inquiry</strong><p style="margin:6px 0 0;color:#b8c9c4;font-size:13px">Submitted through cleargateaccess.com</p></div><div style="background:#fff;padding:28px"><table role="presentation" style="width:100%;border-collapse:collapse">${htmlRows}</table><h2 style="margin:28px 0 10px;color:#102431;font-size:16px">Inquiry details</h2><div style="padding:16px;background:#f0f6f4;color:#26373f;font-size:14px;line-height:1.65;white-space:pre-wrap">${escapeHtml(payload.details)}</div><p style="margin:24px 0 0;color:#56636a;font-size:12px">Reply to this email to respond directly to ${escapeHtml(payload.name)}.</p></div></div></body></html>`;

  const text = [
    "ClearGate program inquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Inquiry details",
    payload.details,
  ].join("\n");

  return { html, text, stage };
}

async function sendEmail(payload: ContactPayload, env: Env) {
  const email = buildEmail(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": payload.requestId,
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: payload.email,
      subject: `[ClearGate website] ${payload.organization} — ${email.stage}`,
      html: email.html,
      text: email.text,
      tags: [
        { name: "source", value: "website-contact" },
        { name: "program_stage", value: payload.programStage },
      ],
    }),
  });

  if (!response.ok) {
    console.error("Contact email delivery failed", {
      status: response.status,
      requestId: payload.requestId,
    });
    return false;
  }

  return true;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ status: "ok", service: "cleargate-contact-api" });
    }

    const origin = request.headers.get("Origin") ?? "";
    const allowedOrigins = list(env.ALLOWED_ORIGINS);

    if (!origin || !allowedOrigins.includes(origin)) {
      return json({ message: "Origin not allowed." }, 403);
    }

    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST" || url.pathname !== "/contact") {
      return json({ message: "Not found." }, 404, cors);
    }

    const contentType = request.headers.get("Content-Type") ?? "";
    const contentLength = Number(request.headers.get("Content-Length") ?? "0");

    if (!contentType.toLowerCase().startsWith("application/json")) {
      return json({ message: "Send the inquiry as JSON." }, 415, cors);
    }

    if (contentLength > MAX_REQUEST_BYTES) {
      return json({ message: "The inquiry is too large." }, 413, cors);
    }

    const remoteIp = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const rateLimit = await env.CONTACT_RATE_LIMITER.limit({ key: remoteIp });

    if (!rateLimit.success) {
      return json(
        { message: "Several inquiries were sent from this connection. Wait a minute and try again." },
        429,
        { ...cors, "Retry-After": "60" },
      );
    }

    let rawPayload: unknown;
    try {
      rawPayload = await request.json();
    } catch {
      return json({ message: "The inquiry could not be read. Refresh the page and try again." }, 400, cors);
    }

    const payload = parsePayload(rawPayload);
    if (!payload) {
      return json({ message: "Check the required fields and try again." }, 400, cors);
    }

    // A populated hidden field indicates an automated submission. Return a
    // normal success response without delivering the message.
    if (payload.website) {
      return json({ message: "Inquiry received." }, 200, cors);
    }

    const turnstileValid = await verifyTurnstile(payload.turnstileToken, remoteIp, env);
    if (!turnstileValid) {
      return json(
        { message: "Security verification expired. Complete the check and send your inquiry again." },
        403,
        cors,
      );
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
      console.error("Contact email delivery is not configured");
      return json(
        { message: "Email delivery is temporarily unavailable. Please email contact@cleargateaccess.com." },
        503,
        cors,
      );
    }

    const sent = await sendEmail(payload, env);
    if (!sent) {
      return json(
        { message: "We couldn’t deliver the inquiry. Please email contact@cleargateaccess.com." },
        502,
        cors,
      );
    }

    return json(
      { message: "Your inquiry has been sent to ClearGate." },
      200,
      cors,
    );
  },
} satisfies ExportedHandler<Env>;
