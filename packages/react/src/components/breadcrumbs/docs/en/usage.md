Import `Breadcrumbs` and pass an ordered `items` array. Each item needs a `label` and a `link`. The last item represents the current page and is rendered without navigation.

```tsx
import Breadcrumbs from "@design-system-rte/react/components/breadcrumbs/Breadcrumbs";

const items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

<Breadcrumbs items={items} />;
```

Wrap the component in `NavigationProvider` when breadcrumbs should use a custom router link component instead of a native `<a>` element.

When the trail exceeds three items, the component collapses middle entries into an overflow dropdown while keeping the first item and the last two visible.

#### With custom router

```tsx
import NavigationProvider from "@design-system-rte/react/provider/NavigationProvider";

<NavigationProvider linkComponent={RouterLink}>
  <Breadcrumbs items={items} />
</NavigationProvider>
```

Provide a `linkComponent` to `NavigationProvider` so intermediate breadcrumb links render with your router instead of plain anchor tags.

#### Max width breadcrumb item

```tsx
<Breadcrumbs items={items} breadcrumbItemMaxWidth={50} />
```

Set `breadcrumbItemMaxWidth` to cap label width. Long labels are truncated with an ellipsis and expose the full text in a tooltip on hover or focus.

#### Multiple elements

```tsx
<Breadcrumbs items={items.slice(0, 1)} />
<Breadcrumbs items={items.slice(0, 2)} />
<Breadcrumbs items={items.slice(0, 3)} />
<Breadcrumbs items={items} />
```

The component adapts to trails of one to four or more items. Truncation with an overflow menu starts when there are more than three entries.

#### With badge

```tsx
<Breadcrumbs
  items={itemsWithBadges}
  showBadge
  badgeContent="empty"
  badgeCount={5}
  badgeType="indicator"
/>
```

```tsx
const itemsWithBadges = [
  { label: "Home", link: "/" },
  {
    label: "Products",
    link: "/products",
    showBadge: true,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator",
  },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];
```

Add badge props on individual items to show indicators next to a label. Container-level badge props apply to the overflow button when the trail is truncated.
