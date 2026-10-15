import { expect, test, type Page } from "@playwright/test"
import { FEATURED_REPOS } from "../../data/repo-config"

const REPOS_API = "https://api.github.com/users/mateusarcedev/repos*"

function repo(id: number, name: string, language: string | null) {
  return {
    id,
    name,
    description: `${name} description`,
    html_url: `https://github.com/mateusarcedev/${name}`,
    homepage: null,
    stargazers_count: 0,
    language,
    topics: [],
    pushed_at: "2026-10-01T00:00:00Z",
    fork: false,
    default_branch: "main",
  }
}

const fixture = [
  repo(1, "sql-vault", "TypeScript"),
  repo(2, "devlist", "TypeScript"),
  repo(3, "tcc", "Python"),
  repo(4, "scripts", "Python"),
  { ...repo(5, "forked-repo", "Go"), fork: true },
]

async function mockRepos(page: Page, status = 200) {
  await page.route(REPOS_API, (route) =>
    status === 200
      ? route.fulfill({ status, contentType: "application/json", body: JSON.stringify(fixture) })
      : route.fulfill({ status, contentType: "application/json", body: JSON.stringify({ message: "rate limited" }) }),
  )
}

test.describe("projects", () => {
  test("highlights only the configured featured repositories", async ({ page }) => {
    await mockRepos(page)
    await page.goto("/projects")

    const cards = page.locator("article.card")
    await expect(cards).toHaveCount(4)

    const featured = page.locator("article.card.featured")
    await expect(featured).toHaveCount(FEATURED_REPOS.length)
    await expect(featured.locator(".card-name")).toHaveText([...FEATURED_REPOS].sort())

    await expect(page.locator("main#main-content")).not.toContainText("prompt-manager")
    await expect(page.locator("main#main-content")).not.toContainText("forked-repo")
  })

  test("shows the rate limit message instead of cards when the API fails", async ({ page }) => {
    await mockRepos(page, 403)
    await page.goto("/projects")

    await expect(page.getByText("GitHub API rate limit reached", { exact: false }).first()).toBeAttached()
    await expect(page.locator("article.card")).toHaveCount(0)
  })

  test("deleted repositories have no project page", async ({ page }) => {
    const response = await page.goto("/projects/prompt-manager")

    expect(response?.status()).toBe(404)
  })
})
