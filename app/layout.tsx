import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const commissioner = localFont({
  src: "../public/fonts/commissioner-latin.woff2",
  variable: "--font-commissioner",
  display: "swap",
  weight: "100 900",
});
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cleargateaccess.com").replace(/\/$/, "");
const publicAsset = (path: string) => `${basePath}${path}`;
const absoluteAsset = (path: string) => `${siteUrl}${path}`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const serviceId = `${siteUrl}/#service`;

const title = "ClearGate | ACNU Program & Medication-Access Infrastructure";
const description =
  "Explore ClearGate’s Gatehouse and Passage platforms for ACNU program design, validation, and pharmacy authorization. Discuss a sponsor or partner demonstration.";

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
    images: [{ url: absoluteAsset("/social-card.png"), width: 1200, height: 630, alt: "ClearGate medication-access infrastructure for ACNU programs. Gatehouse program control and Passage authorization." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteAsset("/social-card.png")],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "ClearGate",
      legalName: "ClearGate Technologies, Inc.",
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset("/cleargate-logo.png"),
      },
      email: "contact@cleargateaccess.com",
      description:
        "Medication-access infrastructure for pharmaceutical sponsors, initially focused on ACNU programs. Gatehouse and Passage are available as working demonstrations.",
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
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": websiteId },
      about: { "@id": serviceId },
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
    <html lang="en" className={commissioner.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

