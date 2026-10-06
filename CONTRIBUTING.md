# Contributing

Contributions that improve the portfolio, accessibility, documentation, performance or maintainability are welcome.

## Local setup

Use the same baseline as CI:

- Node.js 22
- pnpm 10.34.6

```bash
git clone https://github.com/mateusarcedev/mateusarce.dev.git
cd mateusarce.dev
pnpm install --frozen-lockfile
pnpm dev
```

## Before opening a pull request

Run:

```bash
pnpm lint
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

The E2E suite includes smoke coverage and automated axe checks for serious or critical accessibility violations.

Keep changes focused, avoid unrelated formatting churn and update documentation when behavior or project metadata changes.

## Pull requests

A good pull request should explain:

- what changed;
- why the change is useful;
- how it was validated;
- screenshots for visible UI changes when relevant.

Security issues should not be reported in public issues. See [SECURITY.md](SECURITY.md).
