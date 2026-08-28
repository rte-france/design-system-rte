### Trail truncation

When `items` contains more than three entries, the component keeps the first item and the last two visible. All intermediate items move into an overflow dropdown opened from a horizontal-more icon button.

### Current page is not navigable

The last item in the trail is rendered as the current page (`aria-current="page"`). It does not navigate on activation. Ensure the final entry matches the page the user is on.

### Label ellipsis

Ellipsis and the tooltip that reveals the full label only apply when `breadcrumbItemMaxWidth` is set. The check runs once after mount; labels that change dynamically afterward may not update ellipsis state until the item remounts.

### Fixed separator

Items are separated by a `/` character. The separator is not configurable through component props.
