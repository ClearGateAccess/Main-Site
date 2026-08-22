import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const expectedBasePath = (process.env.EXPECTED_BASE_PATH ?? "").replace(/\/$/, "");
const required = [
  "index.html",
  "404.html",
  ".nojekyll",
  "cleargate-logo-reversed.svg",
  "cleargate-symbol.svg",
  "favicon.svg",
  "og-cleargate.png",
  "site.webmanifest",
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

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`GitHub Pages output verified${expectedBasePath ? ` for ${expectedBasePath}` : " at the domain root"}.`);
