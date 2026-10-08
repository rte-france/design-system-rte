The `<rte-accordion>` component is the public API. Configure it with inputs and project panel content between the opening and closing tags.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | — (required) | Text displayed in the summary row. |
| id | string | auto-generated | Base id used for `aria-controls` wiring. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Visual variant of the summary row. |
| alignement | `"left" \| "right"` | `"right"` | Side on which the chevron icon is displayed. |
| size | `"small" \| "large"` | `"small"` | Summary title typography and row height. |
| icon | string | — | Optional leading icon name displayed before the title. |
| compactSpacing | boolean | `false` | Reduces summary row padding and height. |
| disabled | boolean | `false` | Prevents toggling and applies disabled styling. |
| isOpen | boolean | — | Controls the open state. When omitted, the accordion manages its own state. |

| Output | Payload | Description |
|--------|---------|-------------|
| isOpenChange | boolean | Emitted when the accordion is toggled, with the new open state. |
| clicked | `MouseEvent` | Emitted when the summary button is clicked. |

Panel content is projected via `<ng-content>`.
