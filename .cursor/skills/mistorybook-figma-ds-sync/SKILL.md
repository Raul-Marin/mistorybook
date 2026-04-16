---
name: mistorybook-figma-ds-sync
description: Sincroniza tokens CSS y componentes del repo Mistorybook con un archivo Figma vía MCP (use_figma / generate_figma_design). Usar cuando el usuario pida Figma, variables, component sets DS/, captura del showcase, o alinear diseño con tokens.css.
---

# Sincronizar Mistorybook → Figma (MCP)

## Prerrequisitos

- **figma-use**: cargar la skill oficial del plugin Figma MCP (`figma-use`) antes de cada `use_figma` — reglas de `return`, colores 0–1, `loadFontAsync`, scopes de variables, sin `figma.notify`, `skillNames` según doc del servidor.
- **fileKey** del archivo: ver [README — Figma](README.md) del repo (o el que indique el usuario).

## A — Captura pixel del showcase (HTML)

1. Arrancar `npm run dev` (Vite, puerto por defecto **5173**).
2. `generate_figma_design` sin `outputMode` → elegir `newFile` o `existingFile` + `planKey` / `fileKey`.
3. **Local**: insertar en [`index.html`](index.html) `<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>`, abrir macOS `open 'http://localhost:5173/#figmacapture=<id>&figmaendpoint=…&figmadelay=1500'`, hacer **poll** con `captureId` hasta `completed`; luego **quitar** el script del HTML si no se quiere en producción.
4. **Externa**: Playwright según instrucciones del MCP (no usar hash figmacapture en dominios externos).

## B — Variables (Plugin API)

1. Página destino sugerida: **Mistorybook / Components** (`setCurrentPageAsync`).
2. Colección **Mistorybook / Tokens**: modos **Light** / **Dark**; variables `color/…` (hex de [`src/styles/tokens.css`](src/styles/tokens.css)), `space/*`, `radius/*`, `font-size/*` en px (1rem = 16).
3. **COLOR** → `scopes: ['ALL_FILLS']` (no combinar con `STROKE_COLOR` + `ALL_FILLS`).
4. **FLOAT** → `scopes: ['CORNER_RADIUS','GAP','WIDTH_HEIGHT']` (no usar `PADDING` — enum inválido).
5. Si recreás la colección: eliminar la anterior por nombre con cuidado (`remove()`), luego crear de nuevo.

## C — Component sets `DS / …`

- Prefijo **DS /** + nombre alineado al código (`Badge`, `Button`, …).
- Nombres de variantes Figma = props React: `Variant=Primary, Size=md`, `State=Error`, etc.
- **Enlazar** fills, bordes, paddings y radios a variables con `setBoundVariable` / `setBoundVariableForPaint` donde aplique.
- **combineAsVariants** solo con `ComponentNode` ya posicionados en la página; devolver IDs en `return`.
- Trabajar en **varios `use_figma`** si el script riesga timeout o errores atómicos.
- Añadir `description` en cada `COMPONENT_SET` con ruta `src/components/...` y mención a la colección de tokens.

## D — Después del sync

- Actualizar [README](README.md) sección Figma si cambia `fileKey` o la tabla de nodos.
- Commit convencional `docs(figma): …` o `chore(figma): …`.

Detalle de scopes y recuperación de errores: [reference.md](reference.md).
