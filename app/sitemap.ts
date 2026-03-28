import type { MetadataRoute } from "next"
import { getPublicRepos } from "@/lib/github"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const repos = await getPublicRepos().catch(() => [])
  const projectEntries: MetadataRoute.Sitemap = repos.map((repo) => ({
    url: `https://mateusarce.dev/projects/${repo.name}`,
    lastModified: new Date(repo.pushed_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

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
    ...projectEntries,
  ]
}
