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

function githubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }

  const token = typeof process !== "undefined" ? process.env.GITHUB_TOKEN : undefined
  if (token) headers.Authorization = `Bearer ${token}`

  return headers
}

export async function getPublicRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?type=public&sort=pushed&per_page=100`,
    { headers: githubHeaders() },
  )

  if (!res.ok) {
    throw new Error(`GitHub API request failed while loading repositories: ${res.status} ${res.statusText}`)
  }

  const repos: GithubRepo[] = await res.json()
  return repos.filter((r) => !r.fork)
}

export async function getRepoReadme(repoName: string): Promise<string | null> {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`,
    { headers: githubHeaders() },
  )
  if (!res.ok) return null
  const data = await res.json()
  return Buffer.from(data.content, "base64").toString("utf-8")
}
