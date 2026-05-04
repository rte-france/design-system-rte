# Adding Icons — Integration Guide

This guide describes the two ways to add new icons to the RTE Design System: **automatically** via the Figma MCP (recommended), or **manually** from an exported SVG when the MCP is not available.

---

## Table of contents

1. [Context](#1-context)
   - [Files involved](#files-involved)
   - [Naming convention](#naming-convention)
   - [Component generation](#component-generation)
2. [Process overview](#2-process-overview)
   - [Preliminary step — Create a branch](#preliminary-step--create-a-branch)
   - [Case 1 — Automated addition via Figma MCP](#case-1--automated-addition-via-figma-mcp)
   - [Case 2 — Manual addition](#case-2--manual-addition)

---

## 1. Context

Icons in the Design System are centralized in the `core` package and automatically propagated to the `react` and `angular` packages via a generation script.

### Files involved:

```
packages/core/assets/icons/                              ← single source of truth (SVG files)
packages/react/src/components/icon/generated/            ← auto-generated React components
packages/react/src/components/icon/IconMap.ts            ← auto-generated React map
packages/angular/.../src/lib/assets/icons/               ← SVG files copied for Angular
packages/angular/.../src/lib/components/icon/icon-map.ts ← auto-generated Angular map
```

Only the first step is manual: **placing the correct SVG in `packages/core/assets/icons/`**. The rest is handled by `npm run generate:icons`.

---

### Naming convention

SVG files follow the `snake_case` convention.

| Icon type | Naming | Example |
|---|---|---|
| Simple icon | `icon_name.svg` | `format_align_left.svg` |
| Togglable icon — outlined variant | `icon_name_outlined.svg` | `eraser_outlined.svg` |
| Togglable icon — filled variant | `icon_name_filled.svg` | `eraser_filled.svg` |

Icons whose name ends with `_filled` or `_outlined` are automatically recognized as **togglable icons** and grouped under `TogglableIcons`. All others are placed in `RegularIcons`.

---

### Component generation

The `npm run generate:icons` command chains three operations:

1. **React** — Converts all SVGs from `packages/core/assets/icons/` into `.tsx` components via `@svgr/cli`, then regenerates `IconMap.ts` and `generated/index.ts`
2. **Angular** — Copies SVGs to `packages/angular/.../src/lib/assets/icons/` and regenerates `icon-map.ts`
3. **Lint** — Runs `lint:fix` across the entire project

No manual changes to the generated files are needed.

## 2. Process overview

### Preliminary step — Create a branch

Before making any changes, create a dedicated branch from `main`:

```bash
git switch -c chore/add-icons
```

The branch name can be more descriptive depending on the icons being added, e.g. `chore/add-eraser-icon`.

---

### Case 1 — Automated addition via Figma MCP

This method uses the Figma MCP to extract and create SVG files directly from Figma, without any manual editing.

> Prerequisite: be in **Agent** mode in your tool.

#### Prompt to use

```
Go to the Figma page https://www.figma.com/design/tKntdNwiF1x3jSpJ9Q0O0q/01.3-Iconography?node-id=604-642&m=dev
and retrieve all icons from the "Implémentation en cours" section.

Steps to follow:
1. Use mcp_figma_get_metadata on node 604-642 to list all icon node IDs
2. Use mcp_figma_use_figma with the following plugin code to export all SVGs at once:
   - Call exportAsync({ format: 'SVG' }) on each node
   - Decode the Uint8Array result with: let svg = ''; for (let i = 0; i < buf.length; i++) svg += String.fromCharCode(buf[i]);
   - Return an array of { name, svg } objects
3. For each SVG returned:
   - Remove the width and height attributes from the <svg> tag
   - Replace all hard-coded fill values (e.g. #1F1F1F, #201F1F) with currentColor on <path> tags
   - Create the file in packages/core/assets/icons/ using snake_case naming
   - For togglable icons (eraser, linked_services, etc.), suffix with _outlined or _filled

Do NOT fetch Figma asset URLs directly — they require authentication and will fail.
Once all files are created, confirm the list of added files.
```

#### Next step — Generate the components

```bash
npm run generate:icons
```

---

### Case 2 — Manual addition

> Use this method when the Figma MCP is not available.

#### Step 1 — Export the SVG from Figma

In Figma, select the desired icon and export it as SVG.

#### Step 2 — Clean up the SVG

The SVG exported by Figma contains attributes that must be removed or modified before integration.

**Exported SVG (raw):**
```svg
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="#1F1F1F"/>
</svg>
```

**Expected SVG (corrected):**
```svg
<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." fill="currentColor"/>
</svg>
```

Changes to apply:
- Remove the `width` and `height` attributes from the `<svg>` tag
- Replace any hard-coded `fill` value (e.g. `#1F1F1F`, `#201F1F`) with `currentColor` on `<path>` tags

### Step 3 — Place the file in `core`

Put the corrected SVG file in:

```
packages/core/assets/icons/
```

Follow the naming convention described in [section 1](#naming-convention).

### Step 4 — Generate the components

From the project root:

```bash
npm run generate:icons
```

