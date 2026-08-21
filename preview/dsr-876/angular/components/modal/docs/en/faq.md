Q: I need three footer actions (for example delete, download, and close) — can I add a tertiary button?

A: See the Limitations / Two footer action buttons maximum section. The modal footer supports a primary button, an optional secondary button, and the header close button only. A tertiary footer button evolution was reviewed and not validated. For grouped actions, consider a Split Button as the primary action (DSR-838). When previewing content such as an attachment, opening it outside the modal is preferred before performing actions.

Q: Can we get a tertiary button variant on Modal?

A: This evolution was not validated by the Design System committee. Track DSR-838 for the Split Button alternative on the primary action slot. Closing the modal remains available through the header close button or `#secondaryButton`.

Q: Should I use the secondary button for a destructive action like delete?

A: Use the `danger` variant on the primary button for destructive actions, not the secondary button. The secondary button is intended for neutral actions such as cancel. See the `KeyboardInteraction` Storybook story for a delete confirmation example with a danger primary button.

Q: How do I customize the header icon size or color?

A: See the Limitations / Header icon size and color section. Only `rteModalIcon` and `rteModalIconAppearance` are supported. Icon size and color are fixed by design and match the Figma component rules.

Q: The modal does not open — what am I missing?

A: See the Limitations / Primary button required section. A `#primaryButton` template is mandatory. Without it, the directive logs a warning and does not create the overlay.

Q: Does `rteModalIsOpen` open the modal on init?

A: No. The `rteModalIsOpen` input is defined but not wired to visibility. Use `[rteModalTrigger]`, `showModal()`, or call `close()` / `showModal()` on the `rteModal` export. See the Limitations / rteModalIsOpen is not wired section.
