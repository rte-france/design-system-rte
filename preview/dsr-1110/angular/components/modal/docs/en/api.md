The public API is the `[rteModal]` directive (with `exportAs="rteModal"`), the `[rteModalTrigger]` directive, and the projected footer/content templates. Do not use the internal `rte-modal` component selector in application templates.

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

### ModalDirective methods

| Method | Description |
|--------|-------------|
| `showModal()` | Creates and opens the modal overlay. Requires a `#primaryButton` template. |
| `close()` | Closes the modal with the exit animation, then destroys the overlay. |

### ModalDirective content projection

| Template ref | Required | Description |
|--------------|----------|-------------|
| `#primaryButton` | Yes | Primary action button rendered in the footer. |
| `#secondaryButton` | No | Secondary action button rendered before the primary button. |
| `#customContent` | No | Additional content rendered below the description in the modal body. |

### ModalTriggerDirective outputs

| Property | Type | Description |
|----------|------|-------------|
| modalTriggerClicked | `EventEmitter<Event>` | Emitted when the trigger element is clicked. |
| modalTriggerKeyDown | `EventEmitter<KeyboardEvent>` | Emitted on keydown events on the trigger element. |
