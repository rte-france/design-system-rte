### Controlled active page

Update `activePage` in your `onPageChange` handler. The component maintains internal state for immediate UI feedback, but the displayed page follows the `activePage` prop when it changes.

### No navigation landmark label

The root `<nav>` element does not receive an accessible name. Wrap the component or provide surrounding context if a landmark label is required for assistive technologies.

### Zero total pages

When `totalPages` is `0`, no page buttons are rendered. Ensure `totalPages` reflects the actual page count before displaying the component.
