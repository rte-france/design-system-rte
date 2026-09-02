### Indeterminate state

The indeterminate state is controlled programmatically through the `indeterminate` prop, which is applied to the native input in a `useEffect`. It does not represent a third submitted value — the native input still resolves to checked or unchecked after user interaction.

### Read-only mode

In read-only mode, Space key presses are prevented from toggling the state. The native input also receives `pointer-events: none`, so only the checkbox box receives focus — not the label, description, or error text.

### Controlled and uncontrolled usage

Use `checked` with `onChange` for controlled usage, or `defaultChecked` for uncontrolled usage. Do not combine both patterns on the same instance.
