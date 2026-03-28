import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mateusarce.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mateusarce.dev/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mateusarce.dev/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]
}
