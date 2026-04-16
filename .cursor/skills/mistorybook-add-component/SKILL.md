---
name: mistorybook-add-component
description: Añade un componente al mini design system Mistorybook con Storybook, export y tests opcionales. Usar cuando el usuario pida un componente nuevo, variante extra, o ampliar el DS en este repo.
---

# Añadir componente al DS (Mistorybook)

## Checklist

1. **Carpeta** `src/components/<Nombre>/` con:
   - `<Nombre>.tsx` — props tipadas; `variant` / `size` / `state` según el patrón existente (ver `Button`, `Input`).
   - `<Nombre>.module.css` — solo tokens (`var(--color-…)`, `var(--space-…)`); sin duplicar paleta fuera de `tokens.css` salvo decisión explícita de nuevo token.
2. **Barrel** — exportar tipos y componente en [`src/index.ts`](src/index.ts).
3. **Storybook** — `<Nombre>.stories.tsx` (CSF 3, `autodocs`, variantes principales). Si hay interacción crítica, `play` con `storybook/test` y `fn()` para clicks.
4. **Showcase** — si el componente es visible en la app demo, actualizar [`src/App.tsx`](src/App.tsx) + [`src/App.css`](src/App.css) con una sección `#<slug>` coherente con el resto.
5. **Verificación** — `npm run lint && npm run build && npm run build-storybook && npm run test:storybook`.
6. **Documentación** — una línea en [README](README.md) tabla de componentes si aplica.
7. **Figma** — si el DS en Figma debe reflejar el nuevo pieza, seguir [mistorybook-figma-ds-sync](../mistorybook-figma-ds-sync/SKILL.md) en llamadas `use_figma` incrementales.

## Convenciones

- Nombres de props alineados con lo que documentará Storybook (para MCP / `get-documentation`).
- Reutilizar `Text`, `Heading`, tokens antes de crear primitivos nuevos.
