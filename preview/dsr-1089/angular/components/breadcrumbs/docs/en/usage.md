Import `BreadcrumbsComponent` and bind an ordered `items` array. Each item needs a `label` and a `link`. The last item represents the current page and is rendered without navigation.

```typescript
items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];
```

```html
<rte-breadcrumbs [items]="items" />
```

Do not use `<rte-breadcrumb-item>` directly in application templates. That selector is internal to the breadcrumbs implementation.

When the trail exceeds three items, the component collapses middle entries into an overflow dropdown while keeping the first item and the last two visible.

#### Max width breadcrumb item

```html
<rte-breadcrumbs
  [items]="items"
  [breadcrumbItemMaxWidth]="50"
/>
```

Set `breadcrumbItemMaxWidth` to cap label width. Long labels are truncated with an ellipsis and expose the full text in a tooltip on hover or focus.

#### Multiple elements

```html
<rte-breadcrumbs [items]="oneItem" />
<rte-breadcrumbs [items]="twoItems" />
<rte-breadcrumbs [items]="threeItems" />
<rte-breadcrumbs [items]="fourItems" />
```

The component adapts to trails of one to four or more items. Truncation with an overflow menu starts when there are more than three entries.

#### With badge

```html
<rte-breadcrumbs
  [items]="itemsWithBadges"
  [showBadge]="true"
  badgeContent="empty"
  [badgeCount]="7"
  badgeType="indicator"
  badgeSize="xs"
/>
```

```typescript
itemsWithBadges = [
  { label: "Home", link: "/" },
  {
    label: "Products",
    link: "/products",
    showBadge: true,
    badgeContent: "number",
    badgeType: "indicator",
    badgeCount: 5,
    badgeSize: "m",
  },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];
```

Add badge props on individual items to show indicators next to a label. Container-level badge props apply to the overflow button when the trail is truncated.
