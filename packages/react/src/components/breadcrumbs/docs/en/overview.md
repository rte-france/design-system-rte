```tsx
import Breadcrumbs from "@design-system-rte/react/components/breadcrumbs/Breadcrumbs";

const items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

export function MyPage() {
  return <Breadcrumbs items={items} />;
}
```
