import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cleargateaccess.com").replace(/\/$/, "");
const publicAsset = (path: string) => `${basePath}${path}`;
const absoluteAsset = (path: string) => `${siteUrl}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "ClearGate — Controlled Medication Access Infrastructure",
  description:
    "Controlled infrastructure for pharmaceutical medication-access programs, beginning with ACNU and Rx-to-nonprescription development.",
  alternates: { canonical: `${siteUrl}/` },
  manifest: publicAsset("/site.webmanifest"),
  icons: {
    icon: publicAsset("/favicon.svg"),
    shortcut: publicAsset("/favicon.svg"),
    apple: publicAsset("/favicon-512.png"),
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "ClearGate",
    title: "ClearGate — Controlled Medication Access Infrastructure",
    description:
      "Controlled infrastructure for pharmaceutical medication-access programs, beginning with ACNU and Rx-to-nonprescription development.",
    images: [{ url: absoluteAsset("/og-cleargate.png"), width: 1200, height: 630, alt: "ClearGate — verified access, confident delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearGate — Controlled Medication Access Infrastructure",
    description:
      "Controlled infrastructure for pharmaceutical medication-access programs, beginning with ACNU and Rx-to-nonprescription development.",
    images: [absoluteAsset("/og-cleargate.png")],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClearGate",
  url: `${siteUrl}/`,
  logo: absoluteAsset("/cleargate-logo.png"),
  description:
    "Controlled infrastructure for pharmaceutical medication-access programs, beginning with ACNU and Rx-to-nonprescription development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
