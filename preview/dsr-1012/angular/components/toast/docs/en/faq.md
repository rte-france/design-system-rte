Q: My toast message is truncated — is this a bug? (DSR-651)

A: See the Limitations / Message length section. The toast intentionally clamps the message to two lines. Shorten the text or use a Banner for longer non-blocking content.

Q: Can we add size variants (S / M / L) for longer messages? (DSR-531)

A: This evolution was rejected. Toast messages must stay short. There is no `size` prop. For longer business content, use a Banner or another appropriate pattern.

Q: I triggered multiple toasts but only one appears

A: See the Limitations / One toast visible at a time section. Toasts are queued and displayed one at a time by priority.

Q: My toast does not auto-dismiss even though I set `autoDismiss` to `true`

A: See the Limitations / Auto-dismiss and action button section. Auto-dismiss is disabled when an action button is visible.

Q: My neutral toast has no icon

A: See the Limitations / Neutral type icon section. Set `iconName` to display a custom icon on the `neutral` type.
