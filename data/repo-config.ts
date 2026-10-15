/**
 * Static configuration for GitHub repositories displayed in the portfolio.
 * Used to add metadata that isn't available from the GitHub API.
 */

/** Repos that will be featured with special visual treatment */
export const FEATURED_REPOS = ["sql-vault", "devlist", "tcc"]

/** Repos built during Rocketseat courses */
export const COURSE_REPOS = ["clean-DDD", "api-forum", "interviews_questions"]

/**
 * Override the homepage URL for specific repos.
 * Useful for subdomains that aren't reflected in GitHub repo settings yet.
 *
 * Example — uncomment when subdomains go live:
 * "devlist": "https://devlist.mateusarce.dev",
 * "sql-vault": "https://sql-vault.mateusarce.dev",
 */
export const HOMEPAGE_OVERRIDES: Record<string, string> = {}

export const EXTERNAL_REPO_LINKS: Record<string, { label: string; url: string }[]> = {
  "sql-vault": [
    {
      label: "VS Code",
      url: "https://marketplace.visualstudio.com/items?itemName=mateusarcedev.sqlvault",
    },
  ],
}

/** Configured repo names that are not in the given list of public repos. */
export function findMissingConfiguredRepos(publicRepoNames: string[]): string[] {
  const available = new Set(publicRepoNames)
  const configured = new Set([
    ...FEATURED_REPOS,
    ...COURSE_REPOS,
    ...Object.keys(HOMEPAGE_OVERRIDES),
    ...Object.keys(EXTERNAL_REPO_LINKS),
  ])
  return [...configured].filter((name) => !available.has(name))
}
