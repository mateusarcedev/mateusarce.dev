import { expect, test } from "@playwright/test"

test.describe("portfolio smoke", () => {
  test("home renders the professional identity", async ({ page }) => {
    const response = await page.goto("/")

    expect(response?.ok()).toBeTruthy()
    await expect(page.locator("main#main-content")).toBeVisible()
    await expect(page.getByText("Mateus Arce", { exact: false }).first()).toBeVisible()
    await expect(page).toHaveTitle(/Mateus Arce/i)
  })

  test("projects route renders", async ({ page }) => {
    const response = await page.goto("/projects")

    expect(response?.ok()).toBeTruthy()
    await expect(page.locator("main#main-content")).toBeVisible()
  })

  test("resume exposes the canonical contact links", async ({ page }) => {
    const response = await page.goto("/resume")

    expect(response?.ok()).toBeTruthy()
    await expect(page.locator("main#main-content")).toBeVisible()
    await expect(page.getByRole("link", { name: "contato@mateusarce.dev" })).toHaveAttribute(
      "href",
      "mailto:contato@mateusarce.dev",
    )
    await expect(page.getByRole("link", { name: /linkedin\.com\/in\/mateus-arce/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/mateus-arce",
    )
  })

  test("robots points to the canonical sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt")

    expect(response.ok()).toBeTruthy()
    const body = await response.text()
    expect(body).toContain("https://mateusarce.dev/sitemap.xml")
  })

  test("sitemap exposes the core routes", async ({ request }) => {
    const response = await request.get("/sitemap.xml")

    expect(response.ok()).toBeTruthy()
    const body = await response.text()
    expect(body).toContain("https://mateusarce.dev")
    expect(body).toContain("https://mateusarce.dev/projects")
    expect(body).toContain("https://mateusarce.dev/resume")
  })
})
