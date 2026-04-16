# Mistorybook

Mini design system in **React** + **TypeScript** + **Vite**, documented with **Storybook 10** and the official **Storybook MCP** addon for AI-assisted workflows.

## Stack

- Foundations: CSS custom properties in [`src/styles/tokens.css`](src/styles/tokens.css) (color, typography, spacing, radius, shadow).
- Components: **Button**, **Text** (+ **Heading**), **Badge**, **Card**, **Input** — variants via props + CSS Modules.
- Storybook: CSF 3, Docs, a11y, Vitest browser tests for stories, `@storybook/addon-mcp`.

## Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Vite dev server for the demo app                 |
| `npm run build`        | Typecheck + production build of the app          |
| `npm run lint`         | ESLint                                           |
| `npm run storybook`    | Storybook dev server (port **6006**)             |
| `npm run build-storybook` | Static Storybook → `storybook-static/`      |
| `npm run test:storybook`  | Vitest — Storybook project (browser / stories) |

## Storybook MCP (AI)

1. Start Storybook: `npm run storybook`.
2. Open `http://localhost:6006/mcp` in the browser to see available tools.
3. Point your MCP client at **`http://localhost:6006/mcp`** (HTTP). Example with [mcp-add](https://github.com/paoloricciuti/mcp-add):

   ```bash
   npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project
   ```

4. Follow [`AGENTS.md`](./AGENTS.md) when using agents in this repo.

**Note:** The MCP server is served by the Storybook dev process. A static deploy (e.g. Vercel) is for browsing the catalog; remote MCP for teams is available via Chromatic or self-hosted `@storybook/mcp` (see [Storybook docs](https://storybook.js.org/docs/ai/mcp/sharing)).

## Deploy on Vercel

1. Import this Git repository in [Vercel](https://vercel.com).
2. Use the included [`vercel.json`](./vercel.json): build runs `npm run build-storybook` and publishes the `storybook-static` directory.
3. Production and preview URLs will update on each push / PR.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs lint, app build, and Storybook build on pushes and pull requests to `main` / `master`.

## License

Private / MIT — adjust as needed.
