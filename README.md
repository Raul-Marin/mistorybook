# Mistorybook

Mini design system in **React** + **TypeScript** + **Vite**, documented with **Storybook 10** and the official **Storybook MCP** addon for AI-assisted workflows.

## Stack

- Foundations: CSS custom properties in [`src/styles/tokens.css`](src/styles/tokens.css) (color, typography, spacing, radius, shadow).
- Components: **Button**, **Text** (+ **Heading**), **Badge**, **Card**, **Input**, **Footer** (+ **FooterCode** / **FooterLink**) — variants via props + CSS Modules.
- Storybook: CSF 3, Docs, a11y, Vitest browser tests for stories, `@storybook/addon-mcp`.
- Cursor: reglas en [`.cursor/rules/`](.cursor/rules/) y skills en [`.cursor/skills/`](.cursor/skills/) para escalar componentes, sync Figma y release (ver también [`AGENTS.md`](./AGENTS.md)).

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

## Figma (MCP)

Archivo del capture + **sistema de variables y componentes** alineados con [`src/styles/tokens.css`](src/styles/tokens.css):

**[Abrir en Figma](https://www.figma.com/design/lWg4pLV6WIkOUPktJKkifS)**

| Página / nodo | Contenido |
| --- | --- |
| **Mistorybook / Components** | Colección **Mistorybook / Tokens** (modos **Light** / **Dark**) con colores semánticos, `space/*`, `radius/*`, `font-size/*` enlazables. |
| **DS / Badge** | Propiedad `Variant` → Neutral, Success, Warning, Danger (fills y tipografía ligados a variables). |
| **DS / Button** | `Variant` × `Size` (12 variantes); Ghost con borde `color/border`. |
| **DS / Card** | `Variant` × `Padding` (Elevated / Outline / Ghost × none / sm / md). |
| **DS / Footer** | `Variant` → default, subtle, minimal. |
| **DS / Input** | `State` → Default, Error, Disabled, Small. |
| **DS / Heading** | `Level` → 1, 2, 3 (tamaños de fuente por variable). |
| **DS / Text** | `Tone` × tamaño (default / muted / danger). |

Los nombres de variables siguen el prefijo del token CSS (`color/primary`, `space/4`, etc.). Las sombras del CSS no se duplican como variables de efecto en Figma (solo color, espacio, radio y tamaños de fuente).

## Deploy on Vercel

**Producción (Storybook estático):** [https://mistorybook.vercel.app](https://mistorybook.vercel.app)

1. El proyecto está enlazado en Vercel (`raul-marins-projects/mistorybook`) y conectado al repo de GitHub.
2. [`vercel.json`](./vercel.json) fija `framework: null`, `npm run build-storybook` y salida `storybook-static`.
3. Cada push a la rama principal (y PRs) generan despliegue automático si el proyecto sigue conectado en el dashboard de Vercel.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs lint, app build, and Storybook build on pushes and pull requests to `main` / `master`.

## License

Private / MIT — adjust as needed.
