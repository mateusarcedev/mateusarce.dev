import { ProjectReadme } from "./project-readme"
import { getPublicRepos } from "@/lib/github"

// generateStaticParams runs only at build time on Vercel (not in dev).
// Returns empty in dev; project pages are rendered on-demand.
export async function generateStaticParams() {
  const repos = await getPublicRepos().catch(() => [])
  return repos.map((r) => ({ slug: r.name }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectReadme repoName={slug} />
}
