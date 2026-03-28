import { ProjectReadme } from "./project-readme"

// generateStaticParams runs only at build time on Vercel (not in dev).
// Returns empty in dev; project pages are rendered on-demand.
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://api.github.com/users/mateusarcedev/repos?type=public&sort=pushed&per_page=100",
      { headers: { Accept: "application/vnd.github.v3+json", "User-Agent": "mateusarce.dev" } },
    )
    if (!res.ok) return []
    const repos: { name: string; fork: boolean }[] = await res.json()
    return repos.filter((r) => !r.fork).map((r) => ({ slug: r.name }))
  } catch {
    return []
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectReadme repoName={slug} />
}
