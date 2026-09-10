```typescript
import { Component } from "@angular/core";
import { BreadcrumbsComponent } from "@design-system-rte/angular";

@Component({
  imports: [BreadcrumbsComponent],
  template: `<rte-breadcrumbs [items]="items" />`,
})
export class MyPageComponent {
  items = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Electronics", link: "/products/electronics" },
    { label: "Smartphones", link: "/products/electronics/smartphones" },
  ];
}
```
