### Two footer action buttons maximum

The footer supports one primary and one optional secondary action button, plus the header close icon button. A tertiary footer button is not supported. When more actions are needed, prefer opening the content outside the modal, grouping related actions in a Split Button as the primary action (see DSR-838), or placing additional actions in `#customContent`.

### Header icon size and color

The header icon size is fixed (`xl`) and its color follows design tokens. Only the icon name (`rteModalIcon`) and appearance (`rteModalIconAppearance`: `outlined` or `filled`) are configurable. Custom size or color overrides are not supported.

### Primary button required

The modal does not open without a `#primaryButton` template. If it is missing, the directive logs a console warning and returns without creating the overlay.

### Internal component selector

`rte-modal` is an internal overlay component. Application templates must use the `[rteModal]` directive instead.

### Fixed width per size

Modal width is controlled by size presets, not by consumer CSS. Default widths: `xs` 496px, `s` 656px, `m` 936px, `l` 1168px, `xl` 1328px.

### Body scroll lock

While open, the directive sets `document.body.style.overflow` to `"hidden"`. It restores `"unset"` when the modal is destroyed.

### Escape key depends on close-on-outside-click

Pressing Escape closes the modal only when `[rteModalCloseOnClickOutside]` is `true`. When set to `false`, backdrop clicks and Escape are both disabled.

### rteModalIsOpen is not wired

The `rteModalIsOpen` input exists on the directive but is not used to control visibility. Open the modal with `[rteModalTrigger]`, `showModal()`, or imperative calls on the `rteModal` export.

### Focus trap

Focus is trapped inside the dialog while it is open. Tab cycles through focusable elements within the modal, including footer buttons and the header close button.

### Title truncation

Long titles are truncated with an ellipsis in the header. Keep titles concise.

### Close animation delay

After `close()` is called, the overlay is destroyed after a 200ms delay to allow the exit animation to finish.
