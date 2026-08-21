The `Modal` component is the public API.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (required) | Unique id used for ARIA attributes (`{id}-modal-title`, `{id}-modal-desc`). |
| title | string | — (required) | Modal title displayed in the header. |
| isOpen | boolean | — (required) | Controls whether the modal is rendered and animated open. |
| onClose | `() => void` | — (required) | Callback invoked when the modal should close (close button, backdrop, or Escape). |
| primaryButton | `DSButtonElement` | — (required) | Primary action button rendered in the footer. |
| description | string | — | Description paragraph rendered above `children`. |
| icon | string | — | Icon name displayed in the header. |
| iconAppearance | `"outlined" \| "filled"` | — | Visual style of the header icon. |
| size | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Modal width preset. |
| closeOnOverlayClick | boolean | `true` | When `true`, clicking the backdrop calls `onClose`. |
| secondaryButton | `DSButtonElement` | — | Secondary action button rendered before the primary button. |
| children | `React.ReactNode \| React.ReactNode[]` | — | Additional content rendered below the description in the modal body. |
| className | string | — | Additional CSS class merged onto the dialog element. |
| aria-describedby | string | — | Custom `aria-describedby` value when no `description` is provided. Passed through standard dialog HTML attributes. |
