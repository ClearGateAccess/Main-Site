# ClearGate site review — September 4, 2026

## Staged improvements

- Explain the ACNU focus and Gatehouse/Passage responsibilities immediately.
- Replace dense marketing language and clarify sponsor, clinician, and partner responsibilities.
- Disclose demonstration status before example screens. Keep the large Gatehouse example optional and keyboard accessible.
- Preserve the navy/green identity, load the intended Commissioner font locally, retain navigation on phones, and improve small-label contrast.
- Replace the unavailable default inquiry form with a direct email option. Require an explicit secure endpoint and Turnstile key before displaying an online form. Remove the unsupported one-business-day response promise.
- Add visible FAQs and a direct FDA source for ACNU. Improve the title, description, headings, and WebPage structured data while keeping the canonical production domain.
- Replace the cropped sharing image with a readable 1200 × 630 branded card.
- Verify the sitemap, robots, canonical, social metadata, structured data, anchors, headings, image descriptions, generated assets, contact fallback, and 404 indexing in the production export.
- Upgrade Next.js to 16.3.4 and pin the social-image dependency; npm audit reports zero vulnerabilities.
- Make site and contact API publishing manual. Draft changes receive lightweight checks; a complete candidate build can be requested without deployment.

## Validation

- TypeScript, contact configuration tests, production static export, and export verification passed locally.
- Workflow syntax passed actionlint.
- Browser review covered 1280px desktop, 768px tablet, and 390px/320px phones. Navigation remains available with 44px-high targets; no page-level horizontal overflow was observed. The example transaction ledger scrolls within its own labeled region.
- The primary inquiry link reaches the contact section; email links have the intended recipient and subject. FAQ disclosure works with the keyboard. No email was sent during testing.
- The site remains a static export; no application server or new cloud hosting is introduced.

## Outstanding external configuration

The live apex address, https://cleargateaccess.com, responds over HTTPS.
The `www` alias fails TLS hostname verification. Public DNS currently sends the
`www` CNAME to `cleargateaccess.com`. GitHub documents that the alias should point
to the account's Pages hostname, `cleargateaccess.github.io`, instead. Correct
only that record (DNS only), then verify certificate issuance and the redirect
to the existing apex URL. Cloudflare sign-in is required; no DNS records were
changed during this review.

The former default contact endpoint, `contact-api.cleargateaccess.com`, does not
resolve, and this repository has no configured contact variables or secrets.
Direct email is therefore the deliberate release default. Online submission
and end-to-end email delivery still require the setup in README.md.

Search Console ownership and indexing status were not available. Sitemap
submission and search performance measurement should follow the approved release.
No production website deployment was performed for this staged review.

## Sources

- [FDA ACNU framework](https://www.fda.gov/drugs/over-counter-otc-nonprescription-drugs/nonprescription-drug-product-additional-condition-nonprescription-use)
- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
