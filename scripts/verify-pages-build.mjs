import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { isContactConfigured } from "./contact-config.mjs";

const out = join(process.cwd(), "out");
const expectedBasePath = (process.env.EXPECTED_BASE_PATH ?? "").replace(/\/$/, "");
const required = [
  "index.html",
  "404.html",
  ".nojekyll",
  "cleargate-logo-reversed.svg",
  "cleargate-symbol.svg",
  "favicon.svg",
  "social-card.png",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml",
];

const failures = [];

for (const file of required) {
  if (!existsSync(join(out, file))) failures.push(`Missing out/${file}`);
}

if (!existsSync(join(out, "_next")) || !statSync(join(out, "_next")).isDirectory()) {
  failures.push("Missing generated out/_next assets");
}

if (existsSync(join(out, "index.html"))) {
  const html = readFileSync(join(out, "index.html"), "utf8");
  const expectedSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://cleargateaccess.com").replace(/\/$/, "");
  const canonical = `${expectedSiteUrl}/`;
  const check = (condition, message) => { if (!condition) failures.push(message); };
  const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
  const metas = [...html.matchAll(/<meta\s[^>]*>/g)].map((m) => attributes(m[0]));
  const links = [...html.matchAll(/<link\s[^>]*>/g)].map((m) => attributes(m[0]));
  const meta = (name) => metas.find((m) => m.name === name || m.property === name)?.content;
  check(/<html[^>]*lang="en"/.test(html), "Missing English document language");
  check((html.match(/<h1\b/g) || []).length === 1, "Home page must have exactly one main heading");
  check(/<h1[^>]*>[^<]*ACNU/.test(html), "Main heading must explain the ACNU focus");
  check(/<title>[^<]*ClearGate[^<]*ACNU/.test(html), "Missing descriptive ClearGate/ACNU title");
  check(Boolean(meta("description")?.length), "Missing search description");
  check(links.filter((l) => l.rel === "canonical").length === 1 && links.find((l) => l.rel === "canonical")?.href === canonical, "Canonical URL must match the public site");
  check(meta("og:url") === canonical, "Social URL and canonical URL disagree");
  check(meta("og:image") === `${expectedSiteUrl}/social-card.png`, "Missing current social image");
  check(meta("twitter:card") === "summary_large_image", "Missing large sharing card");
  check(meta("robots")?.includes("index") && !meta("robots")?.includes("noindex"), "Production home page must be indexable");

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  check(new Set(ids).size === ids.length, "Duplicate element IDs");
  for (const match of html.matchAll(/href="#([^"]+)"/g)) check(ids.includes(match[1]), `Broken section link: #${match[1]}`);
  for (const match of html.matchAll(/<img\s[^>]*>/g)) check("alt" in attributes(match[0]), "Image is missing alternative text");
  let previousHeading = 0;
  for (const match of html.matchAll(/<h([1-6])\b/g)) {
    const level = Number(match[1]);
    check(level <= previousHeading + 1, `Skipped heading level before h${level}`);
    previousHeading = level;
  }
  try {
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || "null");
    for (const type of ["Organization", "WebSite", "WebPage", "Service"]) {
      check(schema?.["@graph"]?.some((entity) => entity["@type"] === type && entity.url === canonical), `Missing canonical ${type} structured data`);
    }
  } catch { failures.push("Invalid structured data JSON"); }
  check(html.includes("mailto:contact@cleargateaccess.com"), "Missing direct email contact path");
  if (!isContactConfigured(process.env.NEXT_PUBLIC_CONTACT_API_URL, process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)) {
    check(!/<form\b/.test(html), "Unconfigured site must offer email instead of a nonfunctional form");
    check(html.includes("Email ClearGate"), "Missing email fallback call to action");
  }
  const social = readFileSync(join(out, "social-card.png"));
  check(social.readUInt32BE(16) === 1200 && social.readUInt32BE(20) === 630, "Social image must be 1200 × 630 pixels");
  const robots = readFileSync(join(out, "robots.txt"), "utf8");
  const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
  check(robots.includes("Sitemap: https://cleargateaccess.com/sitemap.xml"), "Missing production sitemap discovery");
  check(sitemap.includes("<loc>https://cleargateaccess.com/</loc>"), "Sitemap must list the production home page");
  const localUrls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/"));

  if (expectedBasePath) {
    for (const url of localUrls) {
      if (!url.startsWith(`${expectedBasePath}/`)) {
        failures.push(`Root-relative URL is missing GitHub Pages base path: ${url}`);
      }
    }
  }

  for (const url of localUrls) {
    const withoutBase = expectedBasePath && url.startsWith(expectedBasePath)
      ? url.slice(expectedBasePath.length)
      : url;
    const clean = withoutBase.split(/[?#]/, 1)[0].replace(/^\//, "");
    if (!clean || clean.endsWith("/")) continue;
    if (!existsSync(join(out, clean))) failures.push(`Generated page references a missing file: ${url}`);
  }
}

if (existsSync(join(out, "404.html"))) {
  const notFound = readFileSync(join(out, "404.html"), "utf8");
  if (!/<meta name="robots" content="noindex"/.test(notFound)) failures.push("404 page must not be indexed");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`GitHub Pages output verified${expectedBasePath ? ` for ${expectedBasePath}` : " at the domain root"}.`);
