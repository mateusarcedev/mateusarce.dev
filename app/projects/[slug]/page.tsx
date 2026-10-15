import { ProjectReadme } from "./project-readme"
import { getPublicRepos } from "@/lib/github"
import { findMissingConfiguredRepos } from "@/data/repo-config"

// generateStaticParams runs only at build time on Vercel (not in dev).
// Returns empty in dev; project pages are rendered on-demand.
export async function generateStaticParams() {
  const repos = await getPublicRepos()

  if (repos.length === 0) {
    throw new Error("GitHub API returned no public repositories for static project generation.")
  }

  const missing = findMissingConfiguredRepos(repos.map((r) => r.name))
  if (missing.length > 0) {
    throw new Error(`data/repo-config.ts references repositories that are not public on GitHub: ${missing.join(", ")}`)
  }

  return repos.map((r) => ({ slug: r.name }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectReadme repoName={slug} />
}
