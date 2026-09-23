Import `TextareaComponent` in your standalone module or route and use the `rte-textarea` selector. The component implements `ControlValueAccessor`; bind it with `formControl`, `formControlName`, or `ngModel` for two-way integration with Angular forms.

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextareaComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-bio-field",
  imports: [ReactiveFormsModule, TextareaComponent],
  template: `
    <rte-textarea
      id="bio"
      label="Bio"
      labelId="bio-label"
      assistiveTextLabel="Brief description, up to 500 characters."
      [rows]="3"
      [formControl]="bioControl"
    />
  `,
})
export class BioFieldComponent {
  bioControl = new FormControl("");
}
```

Use `assistiveTextLabel` and `assistiveTextAppearance` for help and validation messaging instead of a placeholder.

#### Error

```html
<rte-textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  [maxLength]="100"
/>
```

Set `assistiveTextAppearance` to `"error"` and provide the message in `assistiveTextLabel` to show the error state below the field.

(`assistiveTextAppearance`: `"description" | "error" | "success" | "link"`)
