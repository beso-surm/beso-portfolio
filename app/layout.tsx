import type { Metadata } from "next";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/studio/SmoothScroll";

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian", "latin"],
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-noto-serif-georgian",
  subsets: ["georgian", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://besosurmava.com"),
  alternates: { canonical: "/" },
  title: "ბესო სურმავა — ვებსაიტები ქართული ბიზნესებისთვის",
  description:
    "თანამედროვე, მობილურზე მორგებული ვებსაიტები სასტუმროებისთვის, კოტეჯებისთვის, რესტორნებისთვის და მცირე ბიზნესებისთვის. ცოცხალი ნამუშევრები, გამჭვირვალე ფასები, უფასო კონსულტაცია.",
  keywords: [
    "ვებსაიტის დამზადება",
    "სასტუმროს ვებსაიტი",
    "კოტეჯის ვებსაიტი",
    "რესტორნის ვებსაიტი",
    "ვებ დეველოპერი ქუთაისი",
    "საიტის გაკეთება ფასი",
    "website Georgia",
    "hotel website Kutaisi",
  ],
  verification: {
    google: "xMl73cls5EqGrBu6psLLngfytokB8reL9glsI0e13f8",
  },
  authors: [{ name: "Beso Surmava" }],
  creator: "Beso Surmava",
  openGraph: {
    url: "https://besosurmava.com",
    siteName: "Beso Surmava",
    title: "ბესო სურმავა — ვებსაიტები ქართული ბიზნესებისთვის",
    description:
      "თანამედროვე ვებსაიტები სასტუმროებისთვის, კოტეჯებისთვის და რესტორნებისთვის — სუფთა დიზაინი, მობილური ვერსია, მეტი ჯავშანი.",
    locale: "ka_GE",
    type: "website",
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
      <body className="min-h-full bg-ink font-sans text-mist antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
