import type { Metadata } from "next";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/studio/SmoothScroll";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian", "latin"],
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-noto-serif-georgian",
  subsets: ["georgian", "latin"],
});

// Default metadata = Georgian (root /). /en overrides via its own page metadata.
const ka = copy.ka.meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://besosurmava.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ka-GE": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  title: ka.title,
  description: ka.description,
  keywords: [
    "ვებსაიტის დამზადება",
    "სასტუმროს ვებსაიტი",
    "კოტეჯის ვებსაიტი",
    "რესტორნის ვებსაიტი",
    "ვებ დეველოპერი ქუთაისი",
    "საიტის გაკეთება ფასი",
    "website Georgia",
    "hotel website Kutaisi",
    "Kutaisi web developer",
    "hospitality website Georgia",
  ],
  verification: {
    google: "xMl73cls5EqGrBu6psLLngfytokB8reL9glsI0e13f8",
  },
  authors: [{ name: "Beso Surmava" }],
  creator: "Beso Surmava",
  openGraph: {
    url: "https://besosurmava.com",
    siteName: "Beso Surmava",
    title: ka.ogTitle,
    description: ka.ogDescription,
    locale: "ka_GE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ka.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ka.twTitle,
    description: ka.twDescription,
    images: ["/og.png"],
  },
};

// Schema.org JSON-LD — ეუბნება Google-ს რომელია ლოგო, ვინ ვართ, რა ენებზე ვმუშაობთ.
// ეს ის სიგნალია, რომელიც აჩვენებს ჩვენს ლოგოს Google-ში ძიების შედეგებში.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://besosurmava.com/#organization",
      name: site.name,
      alternateName: site.nameKa,
      url: "https://besosurmava.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://besosurmava.com/#logo",
        url: "https://besosurmava.com/logo.png",
        contentUrl: "https://besosurmava.com/logo.png",
        caption: site.name,
        width: 512,
        height: 512,
      },
      image: { "@id": "https://besosurmava.com/#logo" },
      founder: {
        "@type": "Person",
        name: site.name,
        jobTitle: "Web Developer",
        worksFor: { "@id": "https://besosurmava.com/#organization" },
      },
      email: site.email,
      telephone: site.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kutaisi",
        addressRegion: "Imereti",
        addressCountry: "GE",
      },
      sameAs: [`https://instagram.com/${site.instagram}`],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phoneDisplay,
        contactType: "customer service",
        availableLanguage: ["Georgian", "English"],
        areaServed: "GE",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://besosurmava.com/#website",
      url: "https://besosurmava.com",
      name: site.name,
      publisher: { "@id": "https://besosurmava.com/#organization" },
      inLanguage: ["ka-GE", "en-US"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://besosurmava.com/#service",
      name: `${site.name} — Web Studio`,
      description:
        "Premium websites for hotels, restaurants, cottages and small businesses in Georgia.",
      url: "https://besosurmava.com",
      image: "https://besosurmava.com/og.png",
      priceRange: "₾₾",
      areaServed: { "@type": "Country", name: "Georgia" },
      provider: { "@id": "https://besosurmava.com/#organization" },
      serviceType: "Web design and development",
      knowsLanguage: ["ka", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ka"
      className={`${notoGeorgian.variable} ${notoSerifGeorgian.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
