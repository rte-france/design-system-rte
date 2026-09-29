The `<rte-pagination>` component is the public API. Import `PaginationComponent` in the consuming component's `imports` array and bind inputs on the element.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| activePage | number | `1` | Current active page (1-based). Update this input when handling `pageChange` for controlled usage. |
| totalPages | number | — (required) | Total number of pages available. |
| appearance | `"brand" \| "neutral"` | `"neutral"` | Visual variant applied to page numbers and navigation controls. |
| hasGoToFirst | boolean | `true` | Shows or hides the go-to-first control. |
| hasGoToPrev | boolean | `true` | Shows or hides the go-to-previous control. |
| hasGoToNext | boolean | `true` | Shows or hides the go-to-next control. |
| hasGoToLast | boolean | `true` | Shows or hides the go-to-last control. |
| ariaLabel | string | `"Pagination"` | Accessible name for the navigation landmark. |

| Output | Type | Description |
|--------|------|-------------|
| pageChange | number | Emitted when the user selects a different page or activates a navigation control. |
