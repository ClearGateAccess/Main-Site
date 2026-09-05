# ClearGate marketing site

Static Next.js site for https://cleargateaccess.com, hosted on GitHub Pages.
The main page explains ACNU program infrastructure, Gatehouse, and Passage.
The product examples contain fictional data and describe the current demonstration stage.

## Stage changes before building or publishing

1. Create a topic branch and open a draft pull request.
2. Review copy and layout locally with `npm run dev`.
3. Commits and pull requests run lightweight TypeScript, contact configuration, and dependency checks. They do not build or deploy the site.
4. When the candidate is ready, manually run **Validate staged site changes** on that branch with **full_validation** enabled. This builds, verifies, and saves a downloadable candidate; it does not publish anything.
5. After review, merge the approved changes into `main`. Merging runs lightweight checks only.
6. To publish, explicitly run **Deploy ClearGate to GitHub Pages** on `main`. It checks the source, tests, dependencies, production export, and SEO before uploading and deploying that artifact. Deployment from other branches is blocked.

The contact API also deploys only through its explicit manual workflow on `main`.
No application hosting or CodeBuild resources are needed for this static site.

## Local development and verification

Use Node.js 24 LTS.

```sh
npm ci --ignore-scripts
npm run dev
```

Lightweight checks:

```sh
npm run check
npm test
npm audit --audit-level=high
```

Build a candidate once it is ready to review:

```sh
npm run build:pages
npm run verify:pages
```

Serve the `out/` directory with a local static server. Verification checks local
assets, anchors, heading structure, image descriptions, canonical URLs, social
metadata, JSON-LD, the sitemap, indexability, the 404 page, and the email fallback.

`NEXT_PUBLIC_BASE_PATH` controls GitHub project subpaths. Production metadata uses
`https://cleargateaccess.com`; `NEXT_PUBLIC_SITE_URL` is available for local export
testing. The committed robots and sitemap files always identify the production domain.
Do not upload a review artifact to an indexable public preview without first adding
`noindex` to that preview's HTTP response headers.

## Contact inquiries

The default contact option is direct email to `contact@cleargateaccess.com`.
It works without JavaScript and does not pretend a message has been sent from the
website. No inquiry form is rendered until both an explicit HTTPS contact endpoint
and a public Turnstile site key are configured.

To enable online delivery later:

1. Configure and verify the sending domain in Resend.
2. Configure Turnstile for the public site hostname.
3. Add repository secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `RESEND_API_KEY`, and `TURNSTILE_SECRET_KEY`.
4. Deploy and verify the contact Worker using **Deploy ClearGate contact API**.
5. Set repository variables `CONTACT_API_URL` to the verified HTTPS `/contact` endpoint and `TURNSTILE_SITE_KEY` to the public key.
6. Review an explicit candidate build, then release the site manually.

Keep the variables unset until delivery is ready. Detailed backend configuration
is in [contact-api-worker/README.md](contact-api-worker/README.md). Never commit
credentials. Email remains available alongside a configured form, including when
JavaScript or delivery fails. Contact messages must not contain patient information,
adverse-event reports, or confidential clinical data.

## Search and sharing

The homepage contains a descriptive title, a single ACNU-focused main heading,
canonical URL, Open Graph/Twitter metadata, and Organization, WebSite, WebPage,
and Service structured data. The visible FAQ links to the FDA ACNU framework.
No unverified certifications, customer claims, approval claims, or response-time
promises are used.

The 1200 × 630 social image is a committed static asset. Its source is
`scripts/generate-social-card.mjs`; run `npm run social-card` only when revising it.
The page uses a self-hosted, compressed Commissioner font with its open license.

Search Console submission and indexing status require owner access and are not
performed by these workflows. Search ranking is not guaranteed by a release.

## Custom domain

GitHub Pages settings retain `cleargateaccess.com` with HTTPS enforced.
For the `www` alias, the expected DNS-only CNAME is `cleargateaccess.github.io`,
not the apex domain. GitHub then handles the alias redirect and certificate.
Preserve the apex, email, and demo records when correcting the alias.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Synthetic demonstration notice

Virelixa, Harborstone, Brightwell, people, identifiers, criteria, approvals, metrics,
incidents, and transactions shown on the site are fictional demonstration content.
They are not clinical guidance or evidence of a live pharmaceutical program.
