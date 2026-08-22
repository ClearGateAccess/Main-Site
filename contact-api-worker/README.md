# ClearGate contact API Worker

This Cloudflare Worker receives the static GitHub Pages contact form and sends
the inquiry to `contact@cleargateaccess.com` through Resend. It includes:

- exact-origin CORS enforcement;
- server-side field validation and length limits;
- a honeypot field;
- Cloudflare rate limiting (five requests per IP per minute);
- optional but strongly recommended Turnstile verification;
- Resend idempotency keys to prevent duplicate delivery; and
- plain-text and HTML email bodies with the visitor address set as Reply-To.

## Required services

1. Add and verify `cleargateaccess.com` in Resend.
2. Create a Resend API key with **sending access only**.
3. Create a Cloudflare Turnstile widget for `cleargateaccess.com` and
   `www.cleargateaccess.com`.
4. Confirm that the shared mailbox or distribution address
   `contact@cleargateaccess.com` exists.

## Local setup

```bash
npm ci
cp .dev.vars.example .dev.vars
npm run dev
```

Never commit `.dev.vars`.

## Manual deployment

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
npm run check
npm run deploy
```

The supplied configuration publishes the Worker at
`https://contact-api.cleargateaccess.com/contact`.

## GitHub deployment

The repository workflow `.github/workflows/deploy-contact-api.yml` deploys the
Worker when its files change. Add these repository secrets first:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `RESEND_API_KEY`
- `TURNSTILE_SECRET_KEY`

The Cloudflare token should be scoped to the account and zone used by this
Worker. Do not place any of these values in source control.

## Site configuration

Add the Turnstile public site key as the GitHub repository variable
`TURNSTILE_SITE_KEY`. The Pages workflow bakes it into the static form at build
time. The endpoint defaults to the custom Worker domain; set the optional
repository variable `CONTACT_API_URL` only if the endpoint changes.

If the GitHub Pages site is temporarily served from a `github.io` hostname,
add that exact origin to `ALLOWED_ORIGINS` and its hostname to
`TURNSTILE_EXPECTED_HOSTNAMES` in `wrangler.jsonc`, then redeploy.
