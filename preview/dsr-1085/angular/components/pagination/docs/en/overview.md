```typescript
import { Component } from "@angular/core";
import { PaginationComponent } from "@design-system-rte/angular";

@Component({
  imports: [PaginationComponent],
  template: `
    <rte-pagination
      [activePage]="activePage"
      [totalPages]="10"
      (pageChange)="onPageChange($event)"
    />
  `,
})
export class MyPageComponent {
  activePage = 1;

  onPageChange(page: number): void {
    this.activePage = page;
  }
}
```
