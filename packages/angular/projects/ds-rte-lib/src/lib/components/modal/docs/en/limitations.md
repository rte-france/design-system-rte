### Two footer action buttons maximum

The footer supports one primary and one optional secondary action button, plus the header close icon button. A tertiary footer button is not supported. When more actions are needed, prefer opening the content outside the modal, grouping related actions in a Split Button as the primary action (see DSR-838), or placing additional actions in `#customContent`.

### Configured footer vs legacy templates

Prefer footer action inputs (`rteModalPrimaryActionLabel`, outputs, and related inputs). Legacy `#primaryButton` and `#secondaryButton` templates remain supported for existing applications but are deprecated in published documentation.

When both configured inputs and legacy footer templates are present, the configured footer is rendered and a development console warning is logged.

On the configured path, the primary action must be a design system Button (`rteModalPrimaryActionType` `"button"`) or Split Button (`"split-button"`). The secondary action is always a neutral Button when `rteModalSecondaryActionLabel` is set.

### Header icon size and color

The header icon size is fixed (`xl`) and its color follows design tokens. Only the icon name (`rteModalIcon`) and appearance (`rteModalIconAppearance`: `outlined` or `filled`) are configurable. Custom size or color overrides are not supported.

### Primary action required

The modal does not open without a primary footer action. Provide `rteModalPrimaryActionLabel` on the configured path, or a legacy `#primaryButton` template. If neither is present, the directive logs an error and does not create the overlay.

### Internal component selector

`rte-modal` is an internal overlay component. Application templates must use the `[rteModal]` directive instead.

### Fixed width per size

Modal width is controlled by size presets, not by consumer CSS. Default widths: `xs` 496px, `s` 656px, `m` 936px, `l` 1168px, `xl` 1328px.

### Body scroll lock

While open, the directive sets `document.body.style.overflow` to `"hidden"`. It restores `"unset"` when the modal is destroyed.

### Escape key depends on close-on-outside-click

Pressing Escape closes the modal only when `[rteModalCloseOnClickOutside]` is `true`. When set to `false`, backdrop clicks and Escape are both disabled.

When a design system dropdown menu is open inside the modal (for example the split-button menu), the first Escape closes that menu; a second Escape closes the modal.

### rteModalIsOpen is not wired

The `rteModalIsOpen` input exists on the directive but is not used to control visibility. Open the modal with `[rteModalTrigger]`, `showModal()`, or imperative calls on the `rteModal` export.

### Focus trap

Focus is trapped inside the dialog while it is open. Tab cycles through focusable elements within the modal, including footer buttons and the header close icon button.

### Title truncation

Long titles are truncated with an ellipsis in the header. Keep titles concise.

### Close animation delay

After `close()` is called, the overlay is destroyed after a 200ms delay to allow the exit animation to finish.
