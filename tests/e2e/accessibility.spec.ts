import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

const routes = ["/", "/projects", "/resume"]

for (const route of routes) {
  test(`${route} has no serious or critical accessibility violations`, async ({ page }) => {
    const response = await page.goto(route)

    expect(response?.ok()).toBeTruthy()

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
