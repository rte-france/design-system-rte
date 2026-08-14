### Message length

The toast message is limited to two lines of text (`-webkit-line-clamp: 2`). Content exceeding this height is truncated. Prefer short, concise labels. Longer business messages belong in another UI pattern (for example a Banner).

There is no `size` prop (S / M / L). Toast dimensions are fixed by design.

### Design customization not supported

Do not use `className` (or other styling overrides) to change layout, positioning, or visual design. Passing custom classes can break overlay positioning and is not a supported consumer pattern (DSR-611).

### One toast visible at a time

Only one toast is displayed at a time. Additional toasts are queued and shown in priority order (error with action button first, then error without, warning, success, info, neutral).

When a toast closes, the next queued toast appears automatically.

### Auto-dismiss and action button

Auto-dismiss is disabled when an action button is displayed (`actionButtonLabel` with `showActionButton` enabled). Consumers must close the toast manually via the close button or programmatically.

### Timer pause on hover

When auto-dismiss is active, hovering the toast pauses the dismiss timer. The timer resumes when the pointer leaves the toast.

### Neutral type icon

The `neutral` type does not display a default type icon. Provide `iconName` with `showLeftIcon` to display a custom icon instead.

### ToastQueueProvider required

The `Toast` component must be rendered inside `ToastQueueProvider` for queue behavior to work. Without the provider, queue context is unavailable and multiple toasts will not be managed correctly.
