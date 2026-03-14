import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://dr-razdolsky.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/obstetrics`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gynecology`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pregnancy`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/preconception`,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/labor-and-delivery`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/postpartum`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/procedures`,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/research`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/editorial-policy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
