The `ToastService` is the public API. Consumers pass a `ToastConfig` object to `addToQueue()`; the service creates and manages the underlying `ToastComponent` instance.

### ToastConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| message | string | — (required) | Text displayed in the toast. |
| type | `"info" \| "success" \| "warning" \| "error" \| "neutral"` | — (required) | Visual variant and queue priority. |
| closable | boolean | `true` | Shows or hides the close button. |
| autoDismiss | boolean | `false` | Automatically closes the toast after `duration` when `true`. Disabled when an action button is displayed. |
| duration | `"short" \| "medium" \| "long"` | `"medium"` | Auto-dismiss delay (`short`: 3s, `medium`: 5s, `long`: 8s). |
| placement | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Screen position of the toast. |
| showActionButton | boolean | `true` | Enables the action button when `actionButtonLabel` and `onActionButtonClick` are provided. |
| actionButtonLabel | string | — | Label of the optional action button. |
| onActionButtonClick | `() => void` | — | Callback invoked when the action button is clicked. |
| iconName | string | — | Custom icon name. When set with `showLeftIcon`, replaces the default type icon. |
| showLeftIcon | boolean | `true` | Shows the default type icon or a custom icon via `iconName`. |

### ToastService methods

| Method | Returns | Description |
|--------|---------|-------------|
| `addToQueue(config: ToastConfig)` | `string` | Creates a toast, adds it to the queue, and returns its id. |
| `removeFromQueue(toastId: string)` | `void` | Removes a toast from the queue and closes it. |
| `isInQueue(toastId: string)` | `boolean` | Returns whether a toast id is currently in the queue. |
