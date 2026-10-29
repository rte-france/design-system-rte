Import `PaginationComponent` and bind `activePage`, `totalPages`, and `(pageChange)`. The component does not update `activePage` on its own — update the bound value in your handler when the user navigates.

```typescript
activePage = 1;
totalPages = 10;

onPageChange(page: number): void {
  this.activePage = page;
}
```

```html
<rte-pagination
  [activePage]="activePage"
  [totalPages]="totalPages"
  (pageChange)="onPageChange($event)"
/>
```

#### Brand

```html
<rte-pagination
  [activePage]="activePage"
  [totalPages]="totalPages"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

Use `appearance="brand"` for brand-colored page numbers and navigation controls.

(`"brand" | "neutral"`)

#### Mid Position

```html
<rte-pagination
  [activePage]="5"
  [totalPages]="10"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

When the active page is in the middle, the list shows the first page, an ellipsis, a window around the active page, another ellipsis, and the last page.

#### Without Ellipsis

```html
<rte-pagination
  [activePage]="4"
  [totalPages]="7"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

When `totalPages` is seven or fewer, all page numbers are shown without ellipsis.

#### Hidden End Controls

```html
<rte-pagination
  [activePage]="3"
  [totalPages]="10"
  [hasGoToFirst]="false"
  [hasGoToPrev]="false"
  [hasGoToNext]="false"
  [hasGoToLast]="false"
  (pageChange)="onPageChange($event)"
/>
```

Hide first, previous, next, and last controls when only direct page selection is needed.
