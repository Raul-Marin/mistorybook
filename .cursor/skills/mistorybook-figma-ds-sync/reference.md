# Referencia rápida Figma API (Mistorybook)

## Scopes FLOAT válidos (enum)

`ALL_SCOPES`, `TEXT_CONTENT`, `CORNER_RADIUS`, `WIDTH_HEIGHT`, `GAP`, `ALL_FILLS`, `FRAME_FILL`, `SHAPE_FILL`, `TEXT_FILL`, `STROKE_COLOR`, `STROKE_FLOAT`, `EFFECT_FLOAT`, `EFFECT_COLOR`, `OPACITY`, `FONT_FAMILY`, `FONT_STYLE`, `FONT_WEIGHT`, `FONT_SIZE`, `LINE_HEIGHT`, `LETTER_SPACING`, `PARAGRAPH_SPACING`, `PARAGRAPH_INDENT`

## Errores vistos en este proyecto

- `ALL_FILLS` + otros fill scopes en la misma variable → usar solo `ALL_FILLS` para colores semánticos.
- `PADDING` no es scope válido para FLOAT → usar `GAP`, `WIDTH_HEIGHT`, `CORNER_RADIUS`.

## Fonts

Cargar antes de texto: `await figma.loadFontAsync({ family: 'Inter', style: 'Medium' })` (ajustar según `listAvailableFontsAsync` si falla).
