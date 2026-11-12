### Controlled active page

The component does not manage `activePage` internally. When `pageChange` fires, update the bound `activePage` input in the parent; otherwise the visible page does not change.

### One page or fewer

When `totalPages` is less than or equal to `1`, the pagination component is not rendered.
