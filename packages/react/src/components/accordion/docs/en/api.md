The `Accordion` component is the public API. Pass configuration via props and place panel content in `children`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | — (required) | Text displayed in the summary row. |
| children | `React.ReactNode` | — | Content revealed when the accordion is open. |
| id | string | auto-generated | Base id used for `aria-controls` and `aria-labelledby` wiring. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Visual variant of the summary row. |
| alignement | `"left" \| "right"` | `"right"` | Side on which the chevron icon is displayed. |
| size | `"small" \| "large"` | `"small"` | Summary title typography and row height. |
| icon | string | — | Optional leading icon name displayed before the title. |
| compactSpacing | boolean | `false` | Reduces summary row padding and height. |
| disabled | boolean | `false` | Prevents toggling and applies disabled styling. |
| isOpen | boolean | — | Controls the open state. When omitted, the accordion manages its own state. |
| onClick | `(event: React.MouseEvent<HTMLButtonElement>) => void` | — | Called when the summary button is clicked (after the internal toggle). |
| className | string | — | Additional CSS class on the summary button. |

The summary is a `<button>` element. Standard button HTML attributes (except `title`) can be passed through and are spread onto the summary button.
