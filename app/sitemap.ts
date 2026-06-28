import type { MetadataRoute } from "next";

const BASE = "https://besosurmava.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: BASE,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "ka-GE": BASE,
          "en-US": `${BASE}/en`,
          "x-default": BASE,
        },
      },
    },
    {
      url: `${BASE}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "ka-GE": BASE,
          "en-US": `${BASE}/en`,
          "x-default": BASE,
        },
      },
    },
  ];
}
