The `Toast` component is the public API. Wrap the app (or the relevant subtree) with `ToastQueueProvider` so queue behavior works correctly.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| message | string | — (required) | Text displayed in the toast. |
| type | `"info" \| "success" \| "warning" \| "error" \| "neutral"` | `"error"` | Visual variant and queue priority. |
| isOpen | boolean | `true` | Controls toast visibility. When set to `false`, the toast is removed from the queue. |
| closable | boolean | `false` | Shows or hides the close button. |
| autoDismiss | boolean | `true` | Automatically closes the toast after `duration` when `true`. Disabled when an action button is displayed. |
| duration | `"short" \| "medium" \| "long"` | `"medium"` | Auto-dismiss delay (`short`: 3s, `medium`: 5s, `long`: 8s). |
| placement | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Screen position of the toast. |
| showActionButton | boolean | `true` | Enables the action button when `actionButtonLabel` is provided. |
| actionButtonLabel | string | — | Label of the optional action button. |
| onActionButtonClick | `() => void` | — | Callback invoked when the action button is clicked. |
| onClose | `() => void` | — | Callback invoked when the toast closes (close button, auto-dismiss, or `isOpen` set to `false`). |
| iconName | string | — | Custom icon name. When valid and `showLeftIcon` is `true`, replaces the default type icon. |
| showLeftIcon | boolean | `true` | Shows the default type icon or a custom icon via `iconName`. The `neutral` type has no default icon. |
| id | string | auto-generated UUID | Unique identifier used for queue management. |
| className | string | — | Additional CSS class merged onto the toast element. Design customization is not supported — do not use to override layout or positioning. |
