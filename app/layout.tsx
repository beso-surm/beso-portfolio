import type { Metadata } from "next";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/studio/SmoothScroll";
import { copy } from "@/lib/copy";

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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
