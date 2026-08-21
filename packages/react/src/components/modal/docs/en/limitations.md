### Two footer action buttons maximum

The footer supports one primary and one optional secondary action button, plus the header close icon button. A tertiary footer button is not supported. When more actions are needed, prefer opening the content outside the modal, grouping related actions in a Split Button as the primary action (see DSR-838), or placing additional actions in `children`.

### Header icon size and color

The header icon size is fixed and its color follows design tokens. Only the icon name (`icon`) and appearance (`iconAppearance`: `outlined` or `filled`) are configurable. Custom size or color overrides are not supported.

### Primary button required

`primaryButton` is a required prop. The footer always renders a primary action.

### Fixed width per size

Modal width is controlled by size presets, not by consumer CSS. Default widths: `xs` 496px, `s` 656px, `m` 936px, `l` 1168px, `xl` 1328px.

### Body scroll lock

While `isOpen` is `true`, `document.body.style.overflow` is set to `"hidden"`. It restores `"unset"` when the modal closes.

### Escape always closes

Pressing Escape calls `onClose` regardless of `closeOnOverlayClick`. Backdrop clicks respect `closeOnOverlayClick`; Escape does not.

### Focus trap

Focus is trapped inside the dialog while it is mounted and open. Tab cycles through focusable elements within the modal, including footer buttons and the header close button.

### Title truncation

Long titles are truncated with an ellipsis in the header. Keep titles concise.

### Mount and unmount animation

The modal stays mounted for 150ms after `isOpen` becomes `false` so the exit animation can play before the overlay is removed.
