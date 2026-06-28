import type { Metadata } from "next";
import SiteContent from "@/components/studio/SiteContent";
import { copy } from "@/lib/copy";

const t = copy.en.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: {
    canonical: "/en",
    languages: {
      "ka-GE": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    url: "https://besosurmava.com/en",
    siteName: "Beso Surmava",
    title: t.ogTitle,
    description: t.ogDescription,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: t.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.twTitle,
    description: t.twDescription,
    images: ["/og.png"],
  },
};

export default function HomeEn() {
  return <SiteContent lang="en" />;
}
