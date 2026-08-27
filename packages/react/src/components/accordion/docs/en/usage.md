Import `Accordion` and place panel content as children. Each instance manages its own expand/collapse interaction. Stack multiple accordions when you need a list of sections.

```tsx
import { Accordion } from "@design-system-rte/react";

function Example() {
  return (
    <>
      <Accordion title="Accordion title" icon="power-wind">
        <p>First panel content</p>
      </Accordion>
      <Accordion title="Accordion title" icon="power-wind">
        <p>Second panel content</p>
      </Accordion>
    </>
  );
}
```

Pass `isOpen` and handle `onClick` in the parent when you need to control which section is open (for example an exclusive accordion group).

#### Compact

```tsx
<Accordion title="Accordion title" icon="power-wind" compactSpacing>
  <p>Content</p>
</Accordion>
```

Reduce summary row padding and height with `compactSpacing`.

#### Disabled

```tsx
<Accordion title="Accordion title" icon="power-wind" disabled>
  <p>Content</p>
</Accordion>
```

Prevent toggling and apply disabled styling with `disabled`.

#### Exclusive

```tsx
import { useState } from "react";
import { Accordion } from "@design-system-rte/react";

function ExclusiveAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Accordion
        title="Accordion title"
        icon="power-wind"
        isOpen={openIndex === 0}
        onClick={() => setOpenIndex((prev) => (prev === 0 ? null : 0))}
      >
        <p>First panel</p>
      </Accordion>
      <Accordion
        title="Accordion title"
        icon="power-wind"
        isOpen={openIndex === 1}
        onClick={() => setOpenIndex((prev) => (prev === 1 ? null : 1))}
      >
        <p>Second panel</p>
      </Accordion>
    </>
  );
}
```

Coordinate open state in the parent so only one section is open at a time.
