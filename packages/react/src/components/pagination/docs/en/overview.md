```tsx
import { useState } from "react";
import Pagination from "@design-system-rte/react/components/pagination/Pagination";

export function MyPage() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Pagination
      activePage={activePage}
      totalPages={10}
      onPageChange={(page) => setActivePage(page)}
    />
  );
}
```
