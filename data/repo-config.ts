/**
 * Static configuration for GitHub repositories displayed in the portfolio.
 * Used to add metadata that isn't available from the GitHub API.
 */

/** Repos that will be featured with special visual treatment */
export const FEATURED_REPOS = ["news-tools-tech"]

/** Repos built during Rocketseat courses */
export const COURSE_REPOS = ["clean-DDD", "api-forum"]

/**
 * Override the homepage URL for specific repos.
 * Useful for subdomains that aren't reflected in GitHub repo settings yet.
 *
 * Example — uncomment when subdomains go live:
 * "news-tools-tech": "https://tools.mateusarce.dev",
 * "sql-vault": "https://sql-vault.mateusarce.dev",
 */
export const HOMEPAGE_OVERRIDES: Record<string, string> = {}
