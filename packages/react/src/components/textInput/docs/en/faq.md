Q: When `disabled` is `true`, why does the TextInput appear empty even though `value` is set? (DSR-885)

A: By design, `disabled` represents a field the user cannot access and that does not display a value. To show a pre-filled, default, or locked value without allowing edits, use `readOnly` instead. See the Limitations / Disabled value display section.

Q: Can I use a custom CSS class to style the TextInput container?

A: Visual customization via `className` is not a supported consumer pattern. Layout properties (width, height, padding) must go through the documented props (`width`, etc.). This limitation is related to DSR-603 (IconButton / React — CSS classes not applying correctly).
