// A reproducible text-and-vector social card, using the existing ClearGate logo.
// Run only when changing the card; the PNG is committed for static hosting.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const logo = readFileSync(new URL("../public/cleargate-logo-reversed.svg", import.meta.url), "utf8")
  .replace('<svg ', '<svg x="64" y="46" width="380" height="88" ');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a1922"/>
  ${logo}
  <g fill="#f4f8f7" font-family="DejaVu Sans, Arial, sans-serif" font-size="56" font-weight="600">
    <text x="64" y="246">Medication-access infrastructure</text>
    <text x="64" y="320">for ACNU programs.</text>
  </g>
  <text x="64" y="395" fill="#c5d2ce" font-family="DejaVu Sans, Arial, sans-serif" font-size="28">Gatehouse program control. Passage authorization.</text>
  <path d="M64 472H1136" stroke="#385460"/>
  <text x="64" y="539" fill="#8fcdbf" font-family="DejaVu Sans, Arial, sans-serif" font-size="26">cleargateaccess.com</text>
  <text x="1136" y="539" text-anchor="end" fill="#c5d2ce" font-family="DejaVu Sans, Arial, sans-serif" font-size="23">Explore the demonstration</text>
</svg>`;
writeFileSync(new URL("../public/social-card.svg", import.meta.url), svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("../public/social-card.png", import.meta.url)));
console.log("Generated 1200 × 630 ClearGate social card.");
