# Datepicker Component — Dev Diary & Spec Alignment

> A development diary for the **Date Picker — Single** in the Design System RTE: official spec snapshot, planned work, what shipped in recent history, friction points, and deliberate deviations.  

---

## Table of contents

1. [Official spec — condensed](#1-official-spec--condensed)
2. [Architecture](#2-architecture)
3. [Planning sources (`.cursor/plans/datepicker`)](#3-planning-sources-cursorplansdatepicker)
4. [Recent implementation history (~30 commits)](#4-recent-implementation-history-30-commits)
5. [Alignment, deviations, and open tensions](#5-alignment-deviations-and-open-tensions)
6. [Problems encountered along the way](#6-problems-encountered-along-the-way)
7. [File map](#7-file-map)
8. [Summary](#8-summary)

---

## 1. Official spec — condensed

This is the **starting expectation** for PO and engineering.

### 1.1 Intent

- **User story (Gherkin):** select a **single** date reliably (manual input + calendar).
- **Type:** core component; dependencies include Icon Button (calendar), Typography, **Date Menu — Single**, Calendar Header, Month/Year Cell, Week — Single, Day Cell — Single.

### 1.2 Accessibility (expected)


| Area           | Expectation                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keyboard       | TAB to input; calendar icon focusable; calendar behavior aligned with [W3C APG Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/) |
| Focus visible  | Input and calendar cells                                                                                                                                                              |
| Screen readers | Correct label; announce selected date; calendar navigation announced                                                                                                                  |
| Touch          | Targets ≥ 44×44 px                                                                                                                                                                    |
| Contrast       | ≥ 4.5:1                                                                                                                                                                               |


### 1.3 Content & UX writing

- Format **dd/mm/yyyy**; separators automatic; **no placeholder** on empty input; label required in form context; error copy owned by the **application**.

### 1.4 Product “out of scope” (spec text)

The spec explicitly lists **not** in scope:

- Business validation (invalid format → app).
- **Date constraints:** spec states **min / max / disabled dates are not handled by the DS**, but are **configurable** (“paramétrable”) — interpret with care (see [§5.2](#52-date-constraints-min-max-disabled)).
- No dynamic parsing/format beyond fixed format.
- No global calendar business logic (APIs, timezones).
- **Range mode** — another component.

### 1.5 Options & behaviors (high level)

- **Interaction states:** enabled, hover, activeInput, activeMenu, error, disabled, readOnly (and related props: label, assistive text, required/optional appearance, etc.).
- **Layout:** menu **under the input** only (spec notes possible future evolution for positioning).
- **Focus:** TAB input → icon; opening calendar; on close, return focus to **calendar icon**.
- **Motion:** respect `prefers-reduced-motion`; overlay open/close ~150 ms (modifiable); cell hover feedback ~80–120 ms.
- **Interactions:** icon opens calendar; selection updates input; outside click closes; Cancel resets; Confirm validates; keyboard per APG.

---

## 2. Architecture

### 2.1 High-level structure

```
DatepickerComponent (Angular, CVA, overlay)
├── DatepickerSegmentedFieldComponent (projects segments into rte-base-input shell)
├── DatepickerMenuComponent (day / month / year views, grid, actions)
├── DatepickerMenuService (Angular: DOM queries, active cell; delegates tab order math to core)
└── Stories + play helpers (Storybook)

@design-system-rte/core
├── datepicker.utils.ts (grid builders, navigation, constraints, orchestration helpers)
├── segmented-date-field.ts (pure segmented field state machine)
├── datepicker-menu-focus-order.ts (focus/tab order without RTE-specific selectors)
├── datepicker.interface.d.ts, datepicker.constants.ts
```

### 2.2 Base input

`rte-base-input` was introduced so the datepicker could share the **layout shell** (label, states, right icon) while **projecting** segmented content instead of a plain `<input>`. `BaseTextInput` extends the same shell; datepicker uses `BaseInput` directly. Plan: `.cursor/plans/angular_baseinput_refactor_94e5e7db.plan.md`.

### 2.3 Core vs Angular boundary

- **Core:** pure date math, grid layouts, keyboard step models, segmented-field reducer, **framework-agnostic** focus-order **algorithms** (menu receives pre-resolved active cell from Angular).
- **Angular:** components, overlay, `querySelector` / test ids, `DatepickerMenuService`, templates, SCSS, Storybook.

---

## 3. Planning sources (`.cursor/plans/datepicker`)

These plans record **intent** and trade-offs; they are not always 1:1 with final code, but they explain *why* a direction was taken.


| Plan file                                              | Focus                                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `angular_datepicker_scaffold_67b845e6.plan.md`         | Initial `rte-datepicker` scaffold, CVA, overlay reuse                                      |
| `make_angular_datepicker_match_figma_5c51d037.plan.md` | Visual parity with Figma single date picker                                                |
| `fix_datepicker_keyboard_navigation_0a65a4e9.plan.md`  | Deterministic grid focus, arrows in grid, custom Tab cycle                                 |
| `datepicker_keyboard_navigation_66492ff8.plan.md`      | Tab cycle, roving tabindex, focus trap vs DOM order                                        |
| `datepicker_core_split_185fb7ec.plan.md`               | Move utils/types to core; `DatepickerMenuService` for DOM                                  |
| `datepicker_view_modes_model_796e2d8b.plan.md`         | Month/year/decade model and navigation strategy                                            |
| `mui-style_date_field_42220302.plan.md`                | Segmented DD/MM/YYYY + base-input refactor                                                 |
| `segmented_date_field_fix_29309ba1.plan.md`            | MUI-like sections, focus stability                                                         |
| `segmented_date_field_mui_parity_7c6f67e4.plan.md`     | Clamped navigation, stepping, constraints in reducer                                       |
| `segmented_field_zero-padding_6e2d045b.plan.md`        | Zero-pad partial segments on leave                                                         |
| `angular_datepicker_min_width_b88ce9b9.plan.md`        | 248px min width, menu follows trigger                                                      |
| `datepicker_width_alignment_8a9abae3.plan.md`          | Shared width field + overlay                                                               |
| `segmented_field_internal_props_3e3ef0c0.plan.md`      | Internalize layout defaults; explicit aria from host                                       |
| `month_view_figma_parity_745f09df.plan.md`             | Month/year grids, copy, ellipsis, “current” styling                                        |
| `dynamic_day_grid_rows_9c4c9efb.plan.md`               | Variable week rows instead of fixed 42 cells                                               |
| `datepicker_host_logic_to_core_0d670732.plan.md`       | Thin Angular host; orchestration in `datepicker.utils`                                     |
| `datepicker_hasactions_and_dismiss_b252538a.plan.md`   | `hasActions`, pending vs committed, dismiss restores                                       |
| `calendar_prefill_segmented_field_dfb83df4.plan.md`    | Pending selection in field while menu open; Cancel                                         |
| `month_year_keyboard_paging_35eb62cf.plan.md`          | Arrow paging across month/year “pages”                                                     |
| `datepicker_aria_a11y_e9c66488.plan.md`                | ARIA strategy: less noisy placeholders, fulfilled-date announcement                        |
| `datepicker_menu_figma_parity.plan.md`                 | Header label `:focus-visible`; **keep** `rte-divider`, tune appearance/thickness per Figma |


Related **outside** `plans/datepicker/` but foundational: `angular_baseinput_refactor_94e5e7db.plan.md`.

---

## 4. Recent implementation history (~30 commits)

Below is a **chronological narrative** of the last ~30 commits touching datepicker-related paths (newest first). Commit hashes are short; use `git log` for full detail.


| Commit                | Summary                                                                    |
| --------------------- | -------------------------------------------------------------------------- |
| `3dc7ae425`           | Refactor: simplify/conciliate `datepicker.utils` + `segmented-date-field`  |
| `aaf64781d`           | Refactor: uplift calendar **menu focus order** to core (cross-framework)   |
| `49615ac52`           | Tests: simplify/synthesize Storybook **interaction** tests                 |
| `972e99571`           | Refactor: constants abstracted toward core                                 |
| `c7fae1957`           | Tests: output signal tests                                                 |
| `f3b09d87e`           | Feature: a11y for segmented field + datepicker menu                        |
| `9ef3566d6`           | Fix: segmented value on calendar selection; **Cancel** vs previous value   |
| `8056a692a`           | Feature: **Page Up/Down** (or equivalent) paging for month/year views      |
| `20b4f9f59`           | Fix (Input): `rightIcon` in disabled/readonly (affects datepicker trigger) |
| `635b67dd9`           | Refactor: common manipulation logic in core for React reuse                |
| `4ef7cec50`           | Feature: `**hasAction`** / actions strip control                           |
| `43434b327`           | Fix: day keyboard nav when **changing month pages**                        |
| `4787cd108`           | Fix: **year** view display and rules                                       |
| `ec76d8179`           | Fix: **month/year** focus/navigation order                                 |
| `aa2f7c7ca`           | Feature: **month** view styles                                             |
| `c9096f9ca`           | Feature: month navigation from **day** view (arrows + header)              |
| `98dd0c9d1`           | Fix: day view menu display                                                 |
| `4575e6f09`           | Feature: **min, max, disabled dates**                                      |
| `412239133`           | Fix: field ↔ menu sync                                                     |
| `a3ddca36d`           | Fix: segmented field display                                               |
| `773a2be43`           | Feature: keyboard for segmented field                                      |
| `9839fa55a`           | Feature: **segmented field** inner component                               |
| `33e8f586e`           | Refactor: a11y after core extraction                                       |
| `bed8b355d`           | Refactor: keyboard + types to core                                         |
| `aab2e9608`           | Feature: **day/month/year** view navigation                                |
| `4f32b98ec`           | Fix: grid keyboard + **focus trap**                                        |
| `cae05c597`           | Fix: keyboard **open** behavior                                            |
| `06421d332`           | Refactor: datepicker utils modularity                                      |
| `396ae4d83`           | Refactor: W3C-oriented keyboard + ARIA                                     |
| *(older)* `615474527` | Refactor (input): **base input** abstraction for text vs datepicker        |


---

## 5. Alignment, deviations, and open tensions

### 5.1 Strong alignment with spec

- Single-date product, combined **input + calendar menu**.
- Format **dd/mm/yyyy**, segmented presentation, automatic separators.
- Keyboard and ARIA work explicitly referenced **W3C APG** during implementation.
- Visual and layout work tracked against **Figma** (DSR-212 branch linked from spec).
- Menu placement **under input** as baseline (with ongoing design-system overlay behavior).

### 5.2 Date constraints (min / max / disabled)

- **Spec wording:** constraints are **not “handled by DS”** in the sense of business rules, but are **configurable**.
- **Implementation:** the component **does** implement disabling/limiting dates in the calendar and segmented behavior when consumers pass constraints (`4575e6f09` and follow-ups).
- **Interpretation for PO:** the DS does **not** decide *which* dates are allowed (that remains app logic); it **honors** consumer-provided min/max/disabled predicates. If strict reading of “non gérés côté DS” was “no API at all”, the shipped behavior is a **positive deviation** driven by real usage and Figma/story requirements.

### 5.3 Range mode, timezones, i18n format

- **Unchanged vs spec:** no range picker; fixed display format; no timezone engine — app remains responsible for validation messaging and business rules.

### 5.4 Figma vs implementation details

- **Divider:** Product/design use the **Divider** component in Figma; Angular keeps `**rte-divider`** and tunes `appearance` / `thickness` per view rather than removing dividers from month/year for simplicity (`datepicker_menu_figma_parity.plan.md`).
- **Focus ring on header label:** Plan to match **nav icon** focus ring on the focusable month label (`:focus-visible`).

### 5.5 Testing and CI

- Storybook **play** tests and **a11y** checks are part of quality gates; several components (not only datepicker) have seen **a11y violation** noise in CI at various times. Datepicker interaction tests needed **hardening** (overlay document/iframe, readiness waits, retries) because the menu lives outside the story canvas in some setups.

---

## 6. Problems encountered along the way


| Theme                         | What happened                                                                                 | Response                                                                                                                                                      |
| ----------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Focus and tab order**       | Default DOM order and generic focus trap did not match the intended calendar UX               | Custom tab cycle + roving tabindex patterns; later **core extraction** of ordering math (`datepicker-menu-focus-order.ts`) while keeping selectors in Angular |
| **Month/year complexity**     | Separate grids and paging vs day grid                                                         | Dedicated plans for view model, month/year keyboard paging, year rules                                                                                        |
| **Pending vs committed date** | Calendar selection, Cancel, outside click, and segmented display could disagree               | `hasActions`, restore helpers, prefill/cancel plans; fixes in `9ef3566d6`                                                                                     |
| **Segmented field**           | Focus churn, MUI-like expectations, padding, clamping                                         | Core reducer refactors, zero-padding plan, shared helpers in `segmented-date-field.ts`                                                                        |
| **Storybook / CI**            | `rte-datepicker-menu` not found under canvas; `expect(null).not.toBeNull()`; flaky open/click | Helpers search multiple documents (iframe/parent), wait for host shell, retry open, paste fallback to keyboard                                                |
| **Spec vs scope**             | Doc “out of scope” vs implemented min/max/disabled                                            | Documented as **consumer-driven constraints**, not business validation (see §5.2)                                                                             |


---

## 7. File map

```
packages/angular/.../datepicker/
├── datepicker.component.ts/html/scss
├── datepicker-segmented-field/
│   └── datepicker-segmented-field.component.ts/html/scss
├── datepicker-menu/
│   └── datepicker-menu.component.ts/html/scss
├── datepicker-menu.service.ts
└── stories/
    ├── datepicker.component.stories.ts
    └── datepicker.component.stories.helpers.ts

packages/core/.../datepicker/
├── datepicker.utils.ts
├── segmented-date-field.ts
├── datepicker-menu-focus-order.ts
├── datepicker.interface.d.ts
├── datepicker.constants.ts
└── index.ts

.cursor/plans/datepicker/
└── *.plan.md (see §3)

docs/
└── DATEPICKER_DEVELOPMENT_LOG.md   (this file)
```

---

## 8. Summary

The datepicker is a **single-date** control combining a **segmented dd/mm/yyyy field** (MUI-inspired keyboard model, logic in **core**) and an **overlay menu** with **day / month / year** views. **BaseInput** shares shell styling with text inputs while allowing projected segments. **Angular** owns the DOM and overlay; **core** owns portable math, grids, segmented state, and **focus-order algorithms** (with the active cell injected from Angular so core stays free of `.rte-`* selectors).

The **official spec** defines user goals, a11y targets, content rules, and explicit **out-of-scope** items. The main **spec nuance** to track with PO is **date constraints**: the written spec says they are not “handled” by the DS in the business sense, but the shipped component **does** support **configurable** min/max/disabled dates. **Figma** remains the reference for visual details (including **Divider** usage); plans record pushes for parity and revised decisions (e.g. keep `rte-divider`, adjust props).

**Next readers:** use §3 for decision archaeology, §4 for recent change history, §5–6 for PO/engineering conversations about scope and trade-offs.