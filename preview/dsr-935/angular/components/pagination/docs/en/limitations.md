### Controlled active page

The component does not manage `activePage` internally. When `pageChange` fires, update the bound `activePage` input in the parent; otherwise the visible page does not change.

### Zero total pages

When `totalPages` is `0`, no page buttons are rendered. Ensure `totalPages` reflects the actual page count before displaying the component.
