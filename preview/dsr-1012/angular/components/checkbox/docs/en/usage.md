Import `CheckboxComponent` from the design system library and add it to the `imports` array of the consuming standalone component. Use `<rte-checkbox>` in the template with a unique `id` and a `label`.

```typescript
import { Component } from "@angular/core";
import { CheckboxComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-preferences",
  imports: [CheckboxComponent],
  template: `
    <rte-checkbox
      id="my-checkbox"
      label="Label"
      description="Description"
      [checked]="isChecked"
      (checkedChange)="isChecked = $event"
    />
  `,
})
export class PreferencesComponent {
  isChecked = false;
}
```

For multiple related options, prefer `rte-checkbox-group` instead of composing several standalone checkboxes manually.

#### Indeterminate

```html
<rte-checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  [indeterminate]="true"
/>
```

Use `indeterminate` to reflect a partially selected group or tree node.

#### Error

```html
<rte-checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  [error]="true"
  errorMessage="Error message"
/>
```

Set both `error` and `errorMessage` to display validation feedback.
