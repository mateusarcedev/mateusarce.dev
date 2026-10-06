import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const routes = ["/", "/projects", "/resume"]
const themes = ["dark", "light"] as const

for (const theme of themes) {
  for (const route of routes) {
    test(`${route} has no serious or critical accessibility violations in ${theme} theme`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" })
      await page.addInitScript((selectedTheme) => {
        window.localStorage.setItem("theme", selectedTheme)
      }, theme)

      const response = await page.goto(route)

      expect(response?.ok()).toBeTruthy()
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme)

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze()

      const blockingViolations = results.violations.filter(
        (violation) => violation.impact === "serious" || violation.impact === "critical",
      )

      expect(
        blockingViolations,
        blockingViolations
          .map((violation) => {
            const targets = violation.nodes.flatMap((node) => node.target).join(", ")
            return `${violation.id}: ${violation.help} [${targets}]`
          })
          .join("\n"),
      ).toEqual([])
    })
  }
}
