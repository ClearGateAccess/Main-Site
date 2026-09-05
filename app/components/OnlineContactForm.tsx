"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type FormState = "idle" | "sending" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      reset: (widget?: string | HTMLElement) => void;
    };
  }
}

function resetSecurityChallenge() {
  window.turnstile?.reset();
}

export default function OnlineContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const turnstileToken = String(formData.get("turnstileToken") ?? "");

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setState("error");
      setMessage("Complete the security check, then send your inquiry again.");
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    setState("sending");
    setMessage("Sending your inquiry securely…");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          role: formData.get("role"),
          programStage: formData.get("programStage"),
          details: formData.get("details"),
          website: formData.get("website"),
          turnstileToken,
          requestId: crypto.randomUUID(),
        }),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ??
            "We couldn’t send your inquiry. Please review the form and try again.",
        );
      }

      form.reset();
      resetSecurityChallenge();
      setState("success");
      setMessage(
        "Your inquiry has been received. The ClearGate team will reply to the email address you provided.",
      );
    } catch (error) {
      resetSecurityChallenge();
      setState("error");
      setMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Check your connection and try again, or email contact@cleargateaccess.com."
          : error instanceof Error
            ? error.message
            : "We couldn’t reach ClearGate. Try again, or email contact@cleargateaccess.com.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <>
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      ) : null}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-busy={state === "sending"}
      >
        {state === "success" ? (
          <div className="contact-confirmation" role="status" aria-live="polite">
            <span className="success-mark" aria-hidden="true">✓</span>
            <div>
              <h3>Inquiry received.</h3>
              <p>{message}</p>
            </div>
          </div>
        ) : null}

        <noscript><p>JavaScript is needed to send this form. <a href="mailto:contact@cleargateaccess.com">Email the ClearGate team</a> instead.</p></noscript>

        <div className="form-intro">
          <h3>Start a program conversation</h3>
          <p>Tell us where the product or access program stands today.</p>
        </div>

        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Work email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-organization">Organization</label>
            <input
              id="contact-organization"
              name="organization"
              type="text"
              autoComplete="organization"
              minLength={2}
              maxLength={160}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-role">Role or function <span>Optional</span></label>
            <input
              id="contact-role"
              name="role"
              type="text"
              autoComplete="organization-title"
              maxLength={120}
            />
          </div>

          <div className="form-field form-field-wide">
            <label htmlFor="contact-stage">Current program stage</label>
            <select id="contact-stage" name="programStage" defaultValue="" required>
              <option value="" disabled>Select the closest fit</option>
              <option value="candidate-feasibility">ACNU candidate or feasibility review</option>
              <option value="active-switch-program">Active ACNU or switch program</option>
              <option value="study-validation">ACNU study or validation planning</option>
              <option value="physician-mediated-rx">Clinician-mediated prescription pathway</option>
              <option value="retail-integration">Retail or pharmacy integration</option>
              <option value="other">Another operating need</option>
            </select>
          </div>

          <div className="form-field form-field-wide">
            <label htmlFor="contact-details">What should we understand?</label>
            <textarea
              id="contact-details"
              name="details"
              rows={5}
              minLength={10}
              maxLength={2500}
              placeholder="Access model, product stage, intended channels, clinician or retailer involvement, study needs, or evidence requirements."
              required
            />
          </div>

          <div className="form-trap" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </div>

        {TURNSTILE_SITE_KEY ? (
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="light"
            data-size="flexible"
            data-appearance="interaction-only"
            data-action="contact_form"
            data-response-field-name="turnstileToken"
          />
        ) : (
          <input type="hidden" name="turnstileToken" value="" />
        )}

        <div className="form-actions">
          <button
            className="button button-green form-submit"
            type="submit"
            disabled={state === "sending"}
          >
            {state === "sending" ? "Sending inquiry…" : "Send program inquiry"}
            <svg className="arrow" aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 10h12m-5-5 5 5-5 5" /></svg>
          </button>
          <p>Use this form for business inquiries. Do not include patient information, adverse-event reports, or confidential clinical data.</p>
        </div>

        <p className="form-email-fallback">You can also <a href="mailto:contact@cleargateaccess.com">email contact@cleargateaccess.com</a>.</p>

        <p
          className={`form-status${state === "error" ? " error" : ""}`}
          role={state === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {state === "success" ? "" : message}
        </p>
      </form>
    </>
  );
}
