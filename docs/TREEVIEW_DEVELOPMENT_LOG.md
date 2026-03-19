# Treeview Component — Dev Diary & Architecture Summary

> A development diary documenting the treeview component implementation for the Design System RTE.  

---

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Component Breakdown](#3-component-breakdown)
4. [Story-Driven Iteration](#4-story-driven-iteration)
5. [Differences from Typical Specs](#5-differences-from-typical-specs)
6. [File Map](#6-file-map)
7. [Development Context & Challenges](#7-development-context--challenges)
8. [Summary](#8-summary)

---

## 1. Overview

The **Treeview** is a hierarchical navigation component that displays expandable/collapsible items with optional checkboxes, icons, badges, and action menus. It supports keyboard navigation, selection, and cascading checkbox state.

**Key characteristics:**

- **Single selection** (exclusive) — one item highlighted at a time
- **Multi-check** — checkboxes with parent/child cascade and indeterminate state
- **Connector lines** — branch/T-shape and corner/L-shape for visual hierarchy
- **Compact mode** — reduced row height and simplified connectors
- **Dotted line variant** — alternative connector style

---

## 2. Architecture

### 2.1 High-Level Structure

```
TreeviewComponent (container)
├── TreeviewItemComponent (recursive, per node)
│   ├── TreeviewItemBorderComponent (connector SVG)
│   ├── CheckboxComponent
│   ├── IconComponent
│   ├── BadgeComponent
│   └── DropdownMenuComponent (action menu)
├── TreeviewSelectionService
├── TreeviewCheckService
└── TreeviewKeyboardService
```

The treeview uses a **recursive component** pattern: each `TreeviewItemComponent` renders its children as nested `TreeviewItemComponent` instances. State is managed by **scoped services** provided at the tree root.

### 2.2 Service Layer

| Service | Responsibility |
|---------|----------------|
| **TreeviewSelectionService** | Holds `selectedId` signal. Supports `select(id)` and `selectByNodePath(pathString, items)` for path-based selection (e.g. `"0-1-0"`). |
| **TreeviewCheckService** | Holds `checkedIds` signal. `toggleChecked(node, rootItems?)` delegates to `computeCheckedIdsAfterToggle` for cascade logic. |
| **TreeviewKeyboardService** | Handles ArrowUp/Down (row navigation), ArrowLeft/Right (focusable zones within row). Manages roving tabindex on focus in/out. |

Services are **provided at the tree level** (`TreeviewComponent`), so each tree instance has isolated selection and check state.

### 2.3 Data Flow

- **Inputs:** `items`, `selectedId`, `selectedPath`, `hasCheckbox`, `isCompact`, `dottedLine`, etc.
- **Effects:** Sync `selectedId` / `selectedPath` into `TreeviewSelectionService`; sync `checkedIds` to `checkedIdsChange` output; sync `items` into `TreeviewCheckService`.
- **Outputs:** `itemClick`, `openChange`, `actionIconClick`, `actionMenuClick`, `selectionChange`, `checkedIdsChange`.

---

## 3. Component Breakdown

### 3.1 TreeviewComponent

- Renders `<ul role="tree">` with root items.
- Passes `nodePath` (e.g. `[0]`, `[0, 1]`) for each item to compute connector borders.
- Sets up keyboard listeners in `ngAfterViewInit` and cleans up on destroy.
- Uses `hasNestedItems` and `hasCheckedItems` computed signals for CSS classes.

### 3.2 TreeviewItemComponent

- **Host bindings:** `role="treeitem"`, `aria-level`, `aria-expanded`, `aria-selected`, `data-item-id`.
- **Focusable zones:** `data-treeview-focusable="checkbox" | "chevron" | "content" | "action"` — order: checkbox → chevron → content → action.
- **Connector logic:** `computeConnectorBorderTypes` and `getChildBorderTypes` produce `vertical`, `branch`, `corner`, `horizontal`, `spacer` for SVG borders.
- **Checkbox:** Uses `TreeviewCheckService` for cascade; `isChecked` and `isIndeterminate` computed from `checkedIds`.

### 3.3 TreeviewItemBorderComponent

- Renders SVG connectors from `TREEVIEW_BORDER_SVG_MAP` (or compact variant).
- Supports `dottedLine` for dashed stroke.

### 3.4 Core Utilities (`@design-system-rte/core`)

- **treeview.utils.ts:** `computeCheckedIdsAfterToggle`, `allDescendantsChecked`, `isNodeIndeterminate`, `getNodeAtPath`, `parsePathString`, `computeConnectorBorderTypes`, etc.
- **treeview.constants.ts:** Row heights (32px / 24px compact), border width (16px), SVG path configs.

---

## 4. Story-Driven Iteration

Stories document the evolution and validation of the component.

### 4.1 Visual & Layout

| Story | Purpose |
|-------|---------|
| **NestedItems** | 4-level hierarchy; branch/T-shape and corner/L-shape connectors. |
| **Compact** | Reduced row height, checkbox mode. |
| **DottedLine** | Dashed connector variant. |
| **Badge** | Red indicator badge between label and action icon. |

### 4.2 Selection

| Story | Purpose |
|-------|---------|
| **PreSelectedState** | `selectedId` or `selectedPath` for initial selection. |
| **SelectionExclusive** | Clicking another item deselects the previous. |
| **SelectionIndependence** | Two trees side by side; selection isolated per instance. |

### 4.3 Checkbox Cascade

| Story | Purpose |
|-------|---------|
| **CheckboxNesting** | Parent check cascades to descendants; visibility on hover/focus. |
| **CheckboxIndeterminate** | Partial children → parent indeterminate. |
| **CheckboxCascadeChecked** | Parent → all children; children → parent when all siblings checked. |
| **CheckboxCascadeUnchecked** | Uncheck parent → all unchecked; uncheck children → parent unchecked when none left. |

### 4.4 Actions

| Story | Purpose |
|-------|---------|
| **ActionIconDropdown** | `more-horiz` + dropdown (Edit, Duplicate, Delete, Rename). |
| **ActionIconCustomBehavior** | `info-i` without menu; consumer handles `actionIconClick`. |

### 4.5 Integration & Keyboard

| Story | Purpose |
|-------|---------|
| **Interactive** | Full demo: selection, checkboxes, action icons, dropdown menu; state and logs. |
| **KeyboardNavigation** | Tab in/out; ArrowUp/Down (rows); ArrowLeft/Right (checkbox→chevron→content→action); Space for select/expand/check/action. |

---

## 5. Differences from Typical Specs

### 5.1 Design Decisions

| Aspect | Implementation | Typical Alternative |
|--------|-----------------|---------------------|
| **Selection vs Check** | Selection (highlight) and check (checkbox) are independent. | Some specs merge them. |
| **Selection model** | Single selection only. | Multi-select often requested but not implemented. |
| **Path-based selection** | `selectedPath` (e.g. `"0-1-0"`) for index-based selection. | Often only `selectedId`. |
| **Checkbox visibility** | Hidden by default; shown on hover/focus or when any item is checked. | Often always visible. |
| **Focus order** | Four focusable zones per row (checkbox, chevron, content, action). | Many implementations only focus the row. |
| **Connector lines** | SVG-based; branch/T-shape and corner/L-shape. | Sometimes simple indentation only. |
| **Compact mode** | Dedicated row height and connector set. | Single density only. |

### 5.2 API Shape

- **Inputs:** `items`, `selectedId`, `selectedPath`, `hasCheckbox`, `isCompact`, `dottedLine`, `id`, per-item overrides.
- **Outputs:** `itemClick`, `openChange`, `actionIconClick`, `actionMenuClick`, `selectionChange`, `checkedIdsChange`.
- **Per-item props:** `TreeviewItemProps` — `id`, `labelText`, `icon`, `disabled`, `isCompact`, `hasCheckbox`, `isOpen`, `hasIcon`, `hasBadge`, `items`, `dottedLine`, `actionIcon`, `actionMenuItems`.

### 5.3 Accessibility

- `role="tree"` / `role="treeitem"` with `aria-level`, `aria-expanded`, `aria-selected`.
- Roving tabindex for keyboard focus.
- Chevron labels: "Replier" / "Déplier" (French).
- Action button: `aria-label="Actions pour {labelText}"`.

---

## 6. File Map

```
packages/angular/.../treeview/
├── treeview.component.ts/html/scss
├── treeview-item/
│   ├── treeview-item.component.ts/html/scss
│   └── treeview-item-border/
│       └── treeview-item-border.component.ts/html/scss
├── treeview-selection.service.ts
├── treeview-check.service.ts
├── treeview-keyboard.service.ts
└── stories/
    ├── treeview.component.stories.ts
    └── treeview-interactive-demo.component.ts/scss

packages/core/.../treeview/
├── treeview-item.interface.d.ts
├── treeview.utils.ts
├── treeview.constants.ts
└── index.ts
```

---

## 7. Development Context & Challenges

This section summarizes the planning process documented in `.cursor/plans/`. Each plan addressed a specific feature or architectural decision.

### 7.1 Planning Sources

| Plan | Focus | Outcome |
|------|-------|---------|
| **treeview_component_angular** | Initial spec from Jira Doc + Figma; base architecture | Hierarchy via nesting (no explicit `level`); data-driven and template composition; alignment with side-nav |
| **treeview_selection_system** | Selection on content click; output bindings vs service | Chose `TreeviewSelectionService` for performance — avoids O(n) tree traversal and cascade of input changes on every selection in deep trees |
| **treeview_checkbox_manipulation** | Checkbox behavior; separation from selection | Introduced `TreeviewCheckService`; selection (highlight) and check (bulk) are orthogonal; checkbox visibility via hover/focus + `has-checked-items` class |
| **treeview_input_output_checkbox** | Alternative: remove service, pure input/output | Considered but not adopted; kept service for simpler wiring and consistency with selection pattern |
| **treeview_connector_lines_fix** | Connector lines mismatch with Figma | L-shape direction wrong; missing T-shape for middle siblings; moved from CSS pseudo-elements to explicit border types |
| **treeview_ui_figma_alignment** | Row dimensions, typography, Figma alignment | Row height 44px→32px, compact 36px→24px; typography-button-m→typography-button-s; connector system per Figma |
| **treeview_core_logic_extraction** | Framework-agnostic logic | Extracted pure utils to `@design-system-rte/core` (treeview.utils.ts) for Angular + future React |
| **treeview_border_svgconfig_extraction** | SVG border instructions | Centralized `TREEVIEW_BORDER_SVG_MAP` in core; `TreeviewItemBorderComponent` consumes `SvgConfig` |
| **treeview_node_id_generation** | Deterministic DOM/ARIA IDs | `buildTreeviewNodeId(treeId, path, itemId)` in core; `nodePath` propagated; `nodeUid` for DOM, `id` for selection |
| **treeview_action_icon** | Action button + dropdown | `actionIcon`, `actionIconClick`, `actionMenuItems`; integrated dropdown when menu provided; custom behavior via `actionIconClick` when not |

### 7.2 Key Architectural Decisions

- **Selection vs Check**: Initially conflated; plans clarified separation. Selection = single highlight (TreeviewSelectionService). Check = multi-select for bulk (TreeviewCheckService).
- **Service vs Input/Output**: Selection and check use scoped services for performance (deep trees) and avoid parent tree traversal. Outputs emit changes for parent sync.
- **Connector rendering**: Evolved from CSS pseudo-elements to SVG-based `TreeviewItemBorderComponent` with `SvgConfig` in core for shared logic.
- **Core extraction**: Pure logic (cascade, border types, IDs, path parsing) lives in `@design-system-rte/core` for framework reuse.

### 7.3 Challenges Addressed

- **Performance**: Service-based selection avoids O(n) tree copy + cascade on every click.
- **Figma alignment**: Row heights, typography, connector shapes (L, T) corrected in multiple iterations.
- **Checkbox cascade**: Parent↔descendants logic with indeterminate state; `removeOrphanedParentIds` when unchecking children.
- **Dropdown integration**: Action icon can trigger custom behavior or show integrated dropdown; `actionMenuItems` drives which mode.

---

## 8. Summary

The treeview is a **recursive, service-driven** component with:

- **Selection** and **check** as separate concerns
- **Path-based** and **id-based** selection
- **Cascading checkboxes** with indeterminate state
- **Four focusable zones** per row for granular keyboard control
- **SVG connector lines** with normal and dotted variants
- **Compact mode** for dense layouts

Stories validate visual states, selection, checkbox cascade, actions, and keyboard navigation. The implementation aligns with the design system tokens and integrates with existing components (Checkbox, Icon, Badge, Dropdown). The planning process in `.cursor/plans/` guided the architecture and resolved performance, Figma alignment, and separation-of-concerns challenges.
