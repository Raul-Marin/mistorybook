---
name: mistorybook-ship
description: Checklist de publicación Mistorybook — lint, builds, tests Storybook, commit, push GitHub y deploy Vercel. Usar cuando el usuario pida subir cambios, release, CI verde, o desplegar Storybook.
---

# Ship (Mistorybook)

## Orden recomendado

```bash
npm run lint
npm run build
npm run build-storybook
npm run test:storybook
```

Corregir hasta cero errores. Si Playwright falla en local: `npx playwright install chromium`.

## Git

```bash
git status
git add -A
git commit -m "feat(scope): descripción breve"
git push origin main
```

Ramas: alinear con [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (`main` / `master`).

## Vercel

- Con repo enlazado, el push suele disparar build; alternativa manual desde raíz: `npx vercel deploy --prod --yes`.
- No commitear `.vercel/` (ya en `.gitignore`); `vercel.json` debe mantener `framework: null` y `build-storybook` → `storybook-static`.

## Tras el deploy

- Confirmar URL de producción en README si cambió el dominio del proyecto Vercel.
