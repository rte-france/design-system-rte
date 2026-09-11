Import `Pagination` and pass `activePage`, `totalPages`, and `onPageChange`. Keep `activePage` in component state and update it in the change handler so the displayed page stays in sync.

```tsx
import { useState } from "react";
import Pagination from "@design-system-rte/react/components/pagination/Pagination";

const [activePage, setActivePage] = useState(1);

<Pagination
  activePage={activePage}
  totalPages={10}
  onPageChange={(page) => setActivePage(page)}
/>;
```

#### Brand

```tsx
<Pagination
  activePage={activePage}
  totalPages={10}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

Use `appearance="brand"` for brand-colored page numbers and navigation controls.

(`"brand" | "neutral"`)

#### Mid Position

```tsx
<Pagination
  activePage={5}
  totalPages={10}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

When the active page is in the middle, the list shows the first page, an ellipsis, a window around the active page, another ellipsis, and the last page.

#### Without Ellipsis

```tsx
<Pagination
  activePage={4}
  totalPages={7}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

When `totalPages` is seven or fewer, all page numbers are shown without ellipsis.

#### Hidden End Controls

```tsx
<Pagination
  activePage={3}
  totalPages={10}
  hasGoToFirst={false}
  hasGoToPrev={false}
  hasGoToNext={false}
  hasGoToLast={false}
  onPageChange={(page) => setActivePage(page)}
/>
```

Hide first, previous, next, and last controls when only direct page selection is needed.
