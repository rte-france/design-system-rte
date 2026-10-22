The public API is the `[rteModal]` directive (with `exportAs="rteModal"`), the `[rteModalTrigger]` directive, footer action inputs/outputs, and optional content projection. Do not use the internal `rte-modal` component selector in application templates.

### ModalDirective inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteModalId | `string \| undefined` | `undefined` | Unique id used for ARIA attributes (`{id}-modal-title`, `{id}-modal-desc`). |
| rteModalIcon | `string \| undefined` | `undefined` | Icon name displayed in the header. |
| rteModalIconAppearance | `"outlined" \| "filled"` | `"outlined"` | Visual style of the header icon. |
| rteModalTitle | `string` | — | Modal title displayed in the header. |
| rteModalDescription | `string` | — | Description paragraph rendered above custom content. |
| rteModalIsOpen | `boolean` | `false` | Defined on the directive but not wired to open the modal programmatically. Use `showModal()` or a trigger instead. |
| rteModalSize | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Modal width preset. |
| rteModalAriaDescribedby | `string \| undefined` | `undefined` | Custom `aria-describedby` value when no description is provided. |
| rteModalCloseOnClickOutside | `boolean` | `true` | When `true`, clicking the backdrop or pressing Escape closes the modal. |
| rteModalPrimaryActionLabel | `string \| undefined` | `undefined` | Label for the primary footer action. Required on the configured footer path (with outputs below). |
| rteModalSecondaryActionLabel | `string \| undefined` | `undefined` | Optional label for the secondary footer action (neutral button). |
| rteModalPrimaryActionType | `"button" \| "split-button"` | `"button"` | Primary footer control: design system Button or Split Button. |
| rteModalPrimarySplitButtonOptions | `SplitButtonItemProps[]` | `[]` | Menu items when `rteModalPrimaryActionType` is `split-button`. At least one item is required on that path. |
| rteModalPrimarySplitButtonAriaLabelRight | `string \| undefined` | `undefined` | Accessible name for the split-button menu trigger. Required when `rteModalPrimaryActionType` is `split-button`. |
| rteModalPrimaryActionIsCritical | `boolean` | `false` | When `true` and primary type is `button`, applies critical styling to the primary button (`brand` / `primary` + critical). |

### ModalDirective outputs

| Property | Type | Description |
|----------|------|-------------|
| rteModalPrimaryActionClick | `void` | Emitted when the configured primary button or split-button left segment is activated. |
| rteModalSecondaryActionClick | `void` | Emitted when the configured secondary button is activated. |

### ModalDirective methods

| Method | Description |
|--------|-------------|
| `showModal()` | Creates and opens the modal overlay. Requires `rteModalPrimaryActionLabel` or a legacy `#primaryButton` template. |
| `close()` | Closes the modal with the exit animation, then destroys the overlay. |

### ModalDirective content projection

| Template ref | Required | Description |
|--------------|----------|-------------|
| `#primaryButton` | No (legacy) | Deprecated. Custom primary footer markup. Use action inputs when possible. Required on the legacy path if no `rteModalPrimaryActionLabel` is set. |
| `#secondaryButton` | No (legacy) | Deprecated. Custom secondary footer markup. Use `rteModalSecondaryActionLabel` when possible. |
| `#customContent` | No | Additional content rendered below the description in the modal body. |

### ModalTriggerDirective outputs

| Property | Type | Description |
|----------|------|-------------|
| modalTriggerClicked | `EventEmitter<Event>` | Emitted when the trigger element is clicked. |
| modalTriggerKeyDown | `EventEmitter<KeyboardEvent>` | Emitted on keydown events on the trigger element. |
