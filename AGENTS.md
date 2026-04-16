# Agent instructions — Mistorybook design system

When working on UI components or stories in this repository, use the **Storybook MCP** tools (with `npm run storybook` running) so answers match the real component APIs.

## Critical rules

- **Do not guess component props.** Before using any prop on a design-system component (including names that sound generic, such as `shadow`), use the MCP tools to confirm it exists in our stories or autodocs.
- Query **`list-all-documentation`** to see documented components.
- Query **`get-documentation`** for the component you are changing to read props, types, and examples.
- Use **`get-storybook-story-instructions`** when creating or updating `*.stories.tsx` files so conventions stay aligned with Storybook 10.
- After changing interactive behavior, verify with **`run-story-tests`** (or `npm run test:storybook`) when story tests are configured.

If a prop is not documented in Storybook, do not assume it exists; ask the maintainer or add documentation first.

## Local MCP endpoint

With the dev server on the default port, the MCP server is at `http://localhost:6006/mcp`. Register it in your MCP client (see [README](./README.md)).

## Automatización del repo (Cursor)

- **Rules** (siempre o por glob): [`.cursor/rules/`](.cursor/rules/) — `mistorybook-core`, `mistorybook-storybook`, `mistorybook-release`, `mistorybook-figma`.
- **Skills** (léelos ante tareas repetibles): [`.cursor/skills/`](.cursor/skills/) — `mistorybook-add-component`, `mistorybook-figma-ds-sync`, `mistorybook-ship`.
