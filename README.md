# ClearGate — GitHub Pages production site

This package is configured as a fully static Next.js export for GitHub Pages. It positions ClearGate as controlled infrastructure for sponsor-defined medication access, with ACNU and adjacent Rx-to-nonprescription initiatives as the initial market and clinician-mediated prescription pathways as a clearly labeled future extension. The marketing site does not require a Node server or database. Contact inquiries are handled separately by the included Cloudflare `contact-api` Worker so GitHub Pages remains entirely static.

## Fast deployment

1. Create a GitHub repository and place the contents of this folder at the repository root.
2. Commit and push the files to the `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and confirm that **Deploy ClearGate to GitHub Pages** completes successfully.

Every later push to `main` or `master` automatically rebuilds, verifies, and deploys the site through `.github/workflows/deploy-pages.yml`.

The workflow uses GitHub's official Pages actions and automatically handles both deployment forms:

- `https://USERNAME.github.io/REPOSITORY/`
- `https://cleargateaccess.com/`

Asset paths are generated from GitHub's reported Pages base path, so logos, CSS, JavaScript, favicons, and the manifest continue working before and after the custom domain is connected.

## Contact form and email delivery

The closing program-inquiry form posts to
`https://contact-api.cleargateaccess.com/contact`. The included Worker validates
the request, verifies Cloudflare Turnstile, applies rate limiting, and sends the
inquiry to `contact@cleargateaccess.com` through Resend.

Before enabling the form in production:

1. Verify `cleargateaccess.com` as a sending domain in Resend.
2. Create a Cloudflare Turnstile widget for `cleargateaccess.com` and `www.cleargateaccess.com`.
3. Add the GitHub repository variable `TURNSTILE_SITE_KEY` containing the public Turnstile site key.
4. Add the repository secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `RESEND_API_KEY`, and `TURNSTILE_SECRET_KEY`.
5. Run **Deploy ClearGate contact API** from the repository’s **Actions** tab, or push a change under `contact-api-worker/`.
6. Confirm `https://contact-api.cleargateaccess.com/health` returns a JSON status of `ok`.

The optional repository variable `CONTACT_API_URL` can override the default
endpoint. Keep it unset when using the supplied custom Worker domain.

Detailed Worker setup and manual deployment instructions are in
`contact-api-worker/README.md`.

## Custom domain

After the first successful deployment:

1. Open **Settings → Pages**.
2. Enter `cleargateaccess.com` under **Custom domain** and save it.
3. Configure the apex-domain DNS records using the current values shown by GitHub Pages or GitHub's custom-domain documentation.
4. Configure `www` to point to the GitHub Pages hostname for the account that owns the repository.
5. Enable **Enforce HTTPS** after GitHub issues the certificate.

The workflow-based publishing method does not require a committed `CNAME` file; the domain is controlled in the repository's Pages settings.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Test the production export locally

Build for the domain root:

```bash
npm ci
npm run build:pages
npm run verify:pages
```

Test the same repository-subpath behavior used by a project Pages URL:

```bash
NEXT_PUBLIC_BASE_PATH=/cleargate-site \
NEXT_PUBLIC_SITE_URL=https://example.github.io/cleargate-site \
npm run build:pages

EXPECTED_BASE_PATH=/cleargate-site npm run verify:pages
```

Static output is written to `out/`.

## Synthetic demonstration notice

Virelixa, Harborstone Therapeutics, Brightwell, people, identifiers, criteria, approvals, metrics, incidents, and transactions shown on the site are fictional demonstration content. They are not clinical guidance or evidence of a live pharmaceutical program.
