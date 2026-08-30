import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cleargateaccess.com").replace(/\/$/, "");
const publicAsset = (path: string) => `${basePath}${path}`;
const absoluteAsset = (path: string) => `${siteUrl}${path}`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const serviceId = `${siteUrl}/#service`;

const title = "ClearGate | Controlled Medication Access Infrastructure";
const description =
  "ClearGate helps pharmaceutical sponsors design, validate, operate, authorize, and evidence technology-assisted medication access, beginning with ACNU programs.";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  applicationName: "ClearGate",
  title,
  description,
  authors: [{ name: "ClearGate", url: `${siteUrl}/` }],
  creator: "ClearGate",
  publisher: "ClearGate",
  category: "Pharmaceutical technology",
  keywords: [
    "controlled medication access infrastructure",
    "ACNU",
    "Additional Condition for Nonprescription Use",
    "ACNU technology platform",
    "Rx-to-nonprescription platform",
    "pharmaceutical program validation software",
    "medication authorization verification",
  ],
  alternates: { canonical: `${siteUrl}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { address: false, email: false, telephone: false },
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
    locale: "en_US",
    title,
    description,
    images: [{ url: absoluteAsset("/og-cleargate.png"), width: 1200, height: 630, alt: "ClearGate — verified access, confident delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteAsset("/og-cleargate.png")],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "ClearGate",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset("/cleargate-logo.png"),
      },
      email: "contact@cleargateaccess.com",
      description:
        "Controlled infrastructure for pharmaceutical sponsors developing and operating technology-assisted medication-access programs, with ACNU as the initial program focus.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "business inquiries",
        email: "contact@cleargateaccess.com",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: "ClearGate",
      description,
      inLanguage: "en-US",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "ClearGate controlled medication-access infrastructure",
      serviceType: "Controlled medication-access program infrastructure",
      url: `${siteUrl}/`,
      description,
      provider: { "@id": organizationId },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Pharmaceutical sponsors, consumer-health companies, research organizations, and medication transaction partners",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

