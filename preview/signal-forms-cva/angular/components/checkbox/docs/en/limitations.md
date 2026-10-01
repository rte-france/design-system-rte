### Indeterminate state

The indeterminate state is controlled programmatically through the `indeterminate` input. It does not represent a third submitted value — the native input still resolves to checked or unchecked after user interaction.

### Read-only mode

In read-only mode, click and Space key interactions do not change the checked state. The native input also receives `pointer-events: none`, so only the checkbox box receives focus — not the label, description, or error text.

### Controlled state

Bind `checked` and listen to `(checkedChange)` to keep the parent state in sync. The component mirrors the `checked` input through an internal signal; update the bound property in the parent when handling `checkedChange`.
