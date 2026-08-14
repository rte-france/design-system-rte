Q: My toast message is truncated — is this a bug? (DSR-651)

A: See the Limitations / Message length section. The toast intentionally clamps the message to two lines. Shorten the text or use a Banner for longer non-blocking content.

Q: Can we add size variants (S / M / L) for longer messages? (DSR-531)

A: This evolution was rejected. Toast messages must stay short. There is no `size` prop. For longer business content, use a Banner or another appropriate pattern.

Q: Passing `className` breaks the toast display — can I customize positioning? (DSR-611)

A: See the Limitations / Design customization not supported section. Visual customization via `className` is not supported and can break overlay positioning. Use `placement` for screen position instead.

Q: I triggered multiple toasts but only one appears

A: See the Limitations / One toast visible at a time section. Toasts are queued and displayed one at a time by priority.

Q: My React toasts throw a context error or the queue does not work

A: Wrap your `Toast` components with `ToastQueueProvider`. See the Limitations / ToastQueueProvider required section.

Q: My toast does not auto-dismiss even though I set `autoDismiss` to `true`

A: See the Limitations / Auto-dismiss and action button section. Auto-dismiss is disabled when an action button is visible.
