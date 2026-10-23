# Strip business and design documentation from Storybook

This document describes how to remove portal and design-narrative content from Storybook while keeping **Angular and React story composition** (refs), **Accueil (home)** on the shell, and a **dev-oriented** catalog (stories + autodocs). Public design documentation belongs on **Zeroheight** (component `docs/` folders and the zeroheight-component-docs skill), not in Storybook.

## Goals

- Storybook = **developer tool only** (implementation catalog, interaction tests, autodocs) — not the design system website. Design and product documentation live on **Zeroheight**; consumers are expected to use Zeroheight without a separate “broken Storybook URL” comms pass.
- **Keep the composition shell permanently** at the site root (`packages/design-docs` + refs to `/angular/` and `/react/`) to preserve composed URL integrity. No plan to drop the shell or add HTTP/query redirects to replace old paths.
- **Preserve composed component story URLs at the site root** (inbound links must keep working).
- **Preserve Accueil (home)** on the shell for this migration — keeps the default portal entry and avoids breaking inbound links; removing other portal pages only.
- Do not change published npm packages (`@design-system-rte/core`, `angular`, `react`); only dev/build tooling and static Storybook output.



## Current migration scope (Accueil retained)

To reduce risk and implementation cost, **do not remove or replace** the home page in this pass:

- **Keep:** `packages/design-docs/stories/DesignSystem/Home/`** (`Home.mdx`, local components, assets).
- **Keep:** Storybook title `Design system/Accueil` and the docs URL slug derived from it (e.g. `?path=/docs/design-system-accueil--docs` on the root host).
- **Remove later (optional follow-up):** other shell portal content (Fondations, Guidelines, Get Started kits, Luciole, etc.) and eventually Accueil itself once links are migrated.

Accueil may still depend on shell theming (`preview.ts` `storySort`, `modeDev`, addons). Do not strip those without checking the home page still builds and renders.

## Composed story URL contract (do not break)

Many inbound links use the **root** Storybook host with a **ref prefix**, not the standalone Angular/React builds. Example (Angular Accordion, story canvas):

`https://opensource.rte-france.com/design-system-rte/?path=/story/angular_composants-accordion--default`


| Part                                       | Source in repo                                                                                                                 | Must stay stable                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Site root + composition                    | `packages/design-docs` shell built to `storybook-static/`                                                                      | Yes — dropping the shell breaks all `angular_*` / `react_*` root URLs   |
| Ref prefix `angular_` / `react_`           | Ref keys in `design-docs/.storybook/main.ts` (`angular`, `react`) and `composed.remoteId` in each preview (`angular`, `react`) | Yes — renaming keys changes every composed URL                          |
| Child deploy paths                         | `.../storybook-static/angular/`, `.../react/` and `PRODUCTION_PATH` in `main.ts`                                               | Yes — refs must keep resolving                                          |
| Story slug `composants-accordion--default` | `meta.title` in `*.stories.*` (e.g. `Composants/Accordion`) + exported story name (`Default` → `default`)                      | Yes — **do not rename titles or story exports** as part of this cleanup |


Standalone builds use the same slug **without** the ref prefix, e.g. `/angular/?path=/story/composants-accordion--default`. This procedure **does not** target changing those slugs either; keep story `title` and story names unchanged unless you run a dedicated migration with redirects.

**Safe for story URLs:** removing portal MDX, `component-docs` MDX, and co-located `*.mdx` **when you do not change** the underlying `*.stories.`* `title`, story export names, ref keys, or deploy layout.

**Breaks story URLs (out of scope / forbidden for this migration):** dropping the composition shell; changing ref keys or `remoteId`; renaming `meta.title` or stories; moving output dirs without updating refs and CI the same way as today.

**Docs vs story paths:** design MDX often registers separate doc entries (e.g. `Composants/Button` in `component-docs` while stories live under `Composants/Button/Button`). Removing that MDX can break `**/docs/...`** links (e.g. `...?path=/docs/angular_composants-button--docs`) but does **not** by itself change `**/story/...`** slugs derived from `*.stories.*`. Other portal pages (Fondations, Get Started, etc.) may lose `**/docs/...`** links when removed; **Accueil and composed component story links stay stable in this migration.**

## Current architecture

Three Storybook apps are built and merged into one GitHub Pages tree:


| Layer              | Package                | Dev port | Static output                                   |
| ------------------ | ---------------------- | -------- | ----------------------------------------------- |
| Shell (portal MDX) | `packages/design-docs` | 7006     | `packages/design-docs/storybook-static/` (root) |
| Angular            | `packages/angular`     | 7007     | `.../storybook-static/angular/`                 |
| React              | `packages/react`       | 7008     | `.../storybook-static/react/`                   |


Production refs are configured in `packages/design-docs/.storybook/main.ts` (`PRODUCTION_PATH` → `.../angular/` and `.../react/`).

CI (tag deploy and PR preview):

1. `npm run build-design-docs` — shell Storybook
2. `npm run build-base-storybook` — Angular + React into subfolders

Preview workflows patch ref URLs in the built shell `index.html` for branch-specific bases.

The public “Accueil” page (`Design system/Accueil`) lives in `packages/design-docs/stories/DesignSystem/Home/Home.mdx`.

## Four documentation buckets (do not conflate)


| Bucket                   | Location                                                               | In Storybook today?         | After migration                                                                                          |
| ------------------------ | ---------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Portal & process         | `design-docs/stories/**` (DesignSystem, Fondations, Guidelines)        | Yes (shell)                 | **Keep Accueil** (`DesignSystem/Home`); remove other portal sections; link retired content to Zeroheight |
| Shared ComponentDocs MDX | `design-docs/component-docs/**/docs/*.mdx` (8 components)              | Yes (Angular + React globs) | Remove; document on Zeroheight                                                                           |
| Co-located framework MDX | `packages/angular/.../**/*.mdx`, `packages/react/.../**/*.mdx` (8 + 8) | Yes                         | Remove; rely on autodocs + Zeroheight                                                                    |
| Zeroheight source        | `packages/*/.../components/*/docs/**`                                  | No (not in Storybook globs) | **Source of truth** for public docs                                                                      |


Most component stories already use `tags: ['autodocs']`. That remains the Storybook docs surface for developers.

## Coupling to unwind (simplification targets)



### Angular Storybook (`packages/angular/.storybook/main.ts`)

`webpackFinal` compiles React/TSX and SCSS from `design-docs` inside an Angular Storybook (babel-loader, `ProvidePlugin` for React, ngtools excludes, extra SCSS rules). This exists for rich MDX docs, not for component stories. After removing MDX from globs, most of this can be deleted.

### React Storybook (`packages/react/.storybook/preview.tsx`)

Imports `FrameworkProvider` from `design-docs/src/components/ComponentDocs/FrameworkContext` — used for framework tabs in design MDX, not for bare stories. Revisit after MDX removal.

### Asset leaks

- Header stories import `design-docs/src/img/rte.png` (Angular and React). Move to `packages/core/assets` or story-local assets before deleting `design-docs/src`.



### Shell manager

`packages/design-docs/.storybook/manager.ts` — theming and hiding composed ref categories; keep if composition stays.

## Recommended phases



### Phase 0 — Prerequisites

- [x] Inventory inbound links in two buckets:
  - **Must preserve:** composed `**/story/angular_*`** and `**/story/react_*`** URLs at the site root; **Accueil** `**/docs/design-system-accueil--docs`** (or current slug after build).
  - **May break / replace:** Fondations, Guidelines, Get Started / Luciole and other shell `**/docs/*`** pages, ComponentDocs `**/docs/*`** pages, co-located MDX doc pages — content on Zeroheight only (no redirect layer in Storybook).
- [x] Confirm Zeroheight (or equivalent) coverage for content you remove from Storybook.



### Phase 1 — Thin the shell (low risk)

**Intent:** Remove portal content **except Accueil**; keep refs, deploy layout, and home inbound links unchanged.

1. Delete or archive `packages/design-docs/stories/Fundations/**`, `Guidelines/**`, and `**DesignSystem/**` except `DesignSystem/Home/****` (Get Started kits, Luciole, contribution/migration MDX, etc.). Do **not** delete `Home.mdx` or its `components/` and `assets/`.
2. Do **not** add a replacement landing MDX — Accueil remains the shell entry.
3. Update `packages/design-docs/.storybook/preview.ts`:
  - Trim `storySort` / toolbar entries for removed sections only; leave Accueil ordering intact.
4. Run locally: `npm run design-docs` plus `npm run base-storybook` (three servers); verify Accueil and refs open Angular/React.
5. Run `npm run build-design-docs && npm run build-base-storybook` and smoke-test static output.

**Keep:** `design-docs/.storybook/main.ts` `refs`, `staticDirs`, deploy workflows, `DesignSystem/Home/`.

### Phase 2 — Dev-only Angular and React Storybooks

**Intent:** Sidebar = components and autodocs only.

**URL rule:** edit globs and delete MDX only. Do **not** rename `meta.title`, story exports, or `tags: ['autodocs']` on existing stories as a “cleanup” step — that would change slugs and break composed story links.

1. **Angular** — `packages/angular/.storybook/main.ts`:
  - Remove `../../design-docs/component-docs/**/docs/**/*.mdx` from `stories`.
  - Remove co-located `../projects/ds-rte-lib/src/**/*.mdx` from `stories` (delete those `.mdx` files after).
2. **React** — `packages/react/.storybook/main.ts`:
  - Same: drop `component-docs` glob and `../src/**/*.mdx`; delete co-located MDX files.
3. **Angular webpack:** Remove design-docs–specific rules (React ProvidePlugin, babel includes for `design-docs`, SCSS `include: [/design-docs/]` if unused). Trim `tsconfig.json` includes for `design-docs/src/components`.
4. **React preview:** Remove `FrameworkProvider` if nothing in docs still needs it; keep theme decorator and autodocs `docs.page` block.
5. Relocate header logo (and any other `design-docs` imports in stories).
6. Run Storybook test-runner: `packages/angular` and `packages/react` `npm run test:ci` (or equivalent).
7. **Regression:** open composed URLs at the **root** host, e.g. `?path=/story/angular_composants-accordion--default`, before and after the phase.



### Phase 3 — Retire the design-docs doc product

**Intent:** `design-docs` = composition orchestrator only.

1. Delete `packages/design-docs/component-docs/**`.
2. Delete `packages/design-docs/src/**` (ComponentDocs UI, Accordion, etc.) once nothing imports it — **after** confirming Accueil (`DesignSystem/Home`) and any remaining shell MDX do not import from `src/`.
3. Slim `packages/design-docs/package.json`:
  - Remove `@design-system-rte/react` only if the shell (including Accueil) no longer renders DS components in MDX.
  - Drop unused Storybook addons only if Accueil and composition still work (e.g. `@storybook/addon-themes` if Accueil or shell preview still need it).
4. Update changesets / changelog policy for `@design-system-rte/design-docs` if the package scope changes (still valid as deploy shell).



### Phase 4 — Optional hardening

**Explicitly out of scope:**

- Root README note distinguishing Storybook vs Zeroheight (not needed).
- Announcing or redirecting **broken design-doc URLs** removed in Phases 1–3 — Storybook is for developers; Zeroheight is the public doc surface.

**Optional (if you use them):**

- [ ] Chromatic / visual pipelines: confirm projects still match the three-build layout (shell + `angular/` + `react/`).

**Permanent architecture (not optional):**

- Keep the **composition shell** and three-build deploy — required for composed story and Accueil URL stability; no standalone-only deploy and no redirect map for legacy doc paths.



## What not to strip without an explicit decision

- Component `*.stories.*` files and `tags: ['autodocs']`.
- `**meta.title` and story export names** in existing stories (slug stability for inbound links).
- Addons: essentials, a11y, interactions (and test-runner configuration).
- Theme toolbar / preview decorators used by stories.
- **Accueil:** `packages/design-docs/stories/DesignSystem/Home/`** and `Design system/Accueil` meta title (until a later dedicated migration).
- Composition shell (`packages/design-docs` root build) and **ref keys** `angular` / `react` in `main.ts` refs.
- `composed.remoteId` in Angular/React previews (`angular` / `react`) — must match ref keys.
- Output paths: Angular/React builds must still target `packages/design-docs/storybook-static/{angular,react}`.
- `PRODUCTION_PATH` and preview workflow `sed` patches on `storybook-static/index.html` (refs must keep pointing at the same sibling folders).



## Verification checklist

After each phase:

```bash
npm ci
npm run generate:icons
npm run build --prefix packages/core
npm run build --prefix packages/react
npm run build-design-docs
npm run build-base-storybook
```

- Open static `packages/design-docs/storybook-static/index.html` (or serve the folder): Accueil loads; refs load Angular and React.
- **Accueil docs URL smoke test:** `?path=/docs/design-system-accueil--docs` on the root host.
- Spot-check several components: story canvas + autodocs tab.
- **Composed story URL smoke test** (root host, after full deploy build):
  - Angular: `?path=/story/angular_composants-accordion--default`
  - React: pick a stable story, e.g. `?path=/story/react_composants-accordion--default` (same `title` / export naming rules).
- Angular and React: run `test:ci` for Storybook test-runner.



## Related repo assets

- Deploy: `.github/workflows/deploy.yaml`, `.github/workflows/storybook-preview.yaml`
- Root scripts: `package.json` (`design-docs`, `build-design-docs`, `build-base-storybook`)
- Zeroheight authoring: `.agents/skills/zeroheight-component-docs/SKILL.md`
- Production Storybook: [https://opensource.rte-france.com/design-system-rte/](https://opensource.rte-france.com/design-system-rte/)

