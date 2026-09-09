The `Pagination` component is the public API. Pass the current page, total page count, and an optional change handler through component props.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| activePage | number | — (required) | Current active page (1-based). The component syncs its internal state when this prop changes. |
| totalPages | number | — (required) | Total number of pages available. |
| appearance | `"brand" \| "neutral"` | `"neutral"` | Visual variant applied to page numbers and navigation controls. |
| hasGoToFirst | boolean | `true` | Shows or hides the go-to-first control. |
| hasGoToPrev | boolean | `true` | Shows or hides the go-to-previous control. |
| hasGoToNext | boolean | `true` | Shows or hides the go-to-next control. |
| hasGoToLast | boolean | `true` | Shows or hides the go-to-last control. |
| onPageChange | `(page: number) => void` | — | Called when the user selects a different page or activates a navigation control. |
