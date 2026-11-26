Import `AccordionComponent` and place panel content between the tags. Each instance manages its own expand/collapse interaction. Stack multiple accordions when you need a list of sections.

```typescript
import { Component } from "@angular/core";
import { AccordionComponent } from "@design-system-rte/angular";

@Component({
  imports: [AccordionComponent],
  template: `
    <rte-accordion title="Accordion title" icon="power-wind">
      <p>First panel content</p>
    </rte-accordion>
    <rte-accordion title="Accordion title" icon="power-wind">
      <p>Second panel content</p>
    </rte-accordion>
  `,
})
export class ExampleComponent {}
```

Bind `[isOpen]` and handle `(isOpenChange)` in the parent when you need to control which section is open (for example an exclusive accordion group).

#### Compact

```html
<rte-accordion title="Accordion title" icon="power-wind" [compactSpacing]="true">
  <p>Content</p>
</rte-accordion>
```

Reduce summary row padding and height with `compactSpacing`.

#### Disabled

```html
<rte-accordion title="Accordion title" icon="power-wind" [disabled]="true">
  <p>Content</p>
</rte-accordion>
```

Prevent toggling and apply disabled styling with `disabled`.

#### Exclusive

```typescript
import { Component, signal } from "@angular/core";
import { AccordionComponent } from "@design-system-rte/angular";

@Component({
  imports: [AccordionComponent],
  template: `
    <rte-accordion
      title="Accordion title"
      icon="power-wind"
      [isOpen]="openIndex() === 0"
      (isOpenChange)="onFirstOpenChange($event)"
    >
      <p>First panel</p>
    </rte-accordion>
    <rte-accordion
      title="Accordion title"
      icon="power-wind"
      [isOpen]="openIndex() === 1"
      (isOpenChange)="onSecondOpenChange($event)"
    >
      <p>Second panel</p>
    </rte-accordion>
  `,
})
export class ExclusiveAccordionComponent {
  protected readonly openIndex = signal<number | null>(null);

  protected onFirstOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 0 : null);
  }

  protected onSecondOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 1 : null);
  }
}
```

Coordinate open state in the parent so only one section is open at a time.
