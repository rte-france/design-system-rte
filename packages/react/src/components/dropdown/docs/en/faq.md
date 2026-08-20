Q: The dropdown panel does not appear when I set `isOpen` to `true`.

A: See **Overlay portal** in Limitations. The panel renders inside `#overlay-root`. Ensure the overlay layer is present in your application shell.

Q: Clicking the trigger does not open or close the menu.

A: See **Controlled open state** in Limitations. Open state is fully controlled — update `isOpen` in your trigger handler and reset it in `onClose`.

Q: The panel is capped at 300px and my content is clipped.

A: See **Maximum width** in Limitations. Pass `hasMaxWidth={false}` or set an explicit `style.width` when a wider panel is required.

Q: `hasIndent` has no effect on an item that also has `leftIcon`.

A: See **Indentation and icons** in Limitations. `hasIndent` is ignored when `leftIcon` is provided — use one or the other.

Q: Checkbox items do not update when clicked.

A: See **Checkbox items** in Limitations. Selection is driven by the embedded checkbox — manage `isSelected` (and `isIndeterminate` if needed) in the parent and pass updated props.
