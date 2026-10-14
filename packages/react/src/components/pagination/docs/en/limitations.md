### Controlled active page

Update `activePage` in your `onPageChange` handler. The component maintains internal state for immediate UI feedback, but the displayed page follows the `activePage` prop when it changes.

### One page or fewer

When `totalPages` is less than or equal to `1`, the pagination component is not rendered.
