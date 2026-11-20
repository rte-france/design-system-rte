Import `SplitButtonComponent` and bind the primary action to `(clickLeftButton)`. Pass menu entries through the `options` input and provide `ariaLabelRight` for the menu trigger.

```typescript
import { Component } from "@angular/core";
import { SplitButtonComponent } from "@design-system-rte/angular";
import { SplitButtonItemProps } from "@design-system-rte/core";

@Component({
  imports: [SplitButtonComponent],
  template: `
    <rte-split-button
      label="Button Label"
      ariaLabelRight="Open menu"
      [options]="options"
      (clickLeftButton)="onPrimaryAction()"
      (clickRightButton)="onMenuToggle()"
    />
  `,
})
export class ExampleComponent {
  options: SplitButtonItemProps[] = [
    { id: "option-1", label: "Option 1" },
    { id: "option-2", label: "Option 2" },
    { id: "option-3", label: "Option 3" },
  ];

  onPrimaryAction(): void {
    console.log("Primary action");
  }

  onMenuToggle(): void {
    console.log("Menu trigger clicked");
  }
}
```

The dropdown menu is managed internally. Menu item selection events are not exposed on the component — see [Limitations](./limitations.md).

#### Appearance

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" appearance="primary" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" appearance="secondary" [options]="options" />
```

Switch between primary and secondary styling with `appearance`.

(`"primary" | "secondary"`)

#### Size

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="s" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="m" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="l" [options]="options" />
```

Scale the control with `size`.

(`"s" | "m" | "l"`)

#### Compact spacing

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="s" [compactSpacing]="true" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="m" [compactSpacing]="true" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="l" [compactSpacing]="true" [options]="options" />
```

Reduce vertical height at each size tier with `compactSpacing`.

#### Position

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="top-end" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="top-start" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="bottom-end" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="bottom-start" [options]="options" />
```

Control where the menu panel opens relative to the trigger with `position`.

(`"bottom-start" | "bottom-end" | "top-start" | "top-end"`)
