export type GithubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  topics: string[]
  pushed_at: string
  fork: boolean
  default_branch: string
}

export const GITHUB_USER = "mateusarcedev"

export async function getPublicRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?type=public&sort=pushed&per_page=100`,
    { headers: { Accept: "application/vnd.github.v3+json" } },
  )
  if (!res.ok) return []
  const repos: GithubRepo[] = await res.json()
  return repos.filter((r) => !r.fork)
}

export async function getRepoReadme(repoName: string): Promise<string | null> {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`,
    { headers: { Accept: "application/vnd.github.v3+json" } },
  )
  if (!res.ok) return null
  const data = await res.json()
  return Buffer.from(data.content, "base64").toString("utf-8")
}
