Import `TextInputComponent` and use `<rte-text-input>` in your template. Provide a unique `id` when a label is present so the label is correctly associated with the input.

Bind `value` and listen to `valueChange` for controlled usage, or connect the component to a reactive form with `formControl` / `formControlName`.

```typescript
import { Component } from "@angular/core";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [TextInputComponent],
  template: `
    <rte-text-input
      id="text-input-default"
      label="Label"
      labelPosition="top"
      [maxLength]="150"
      width="300px"
      [value]="value"
      (valueChange)="value = $event"
    ></rte-text-input>
  `,
})
export class ExampleComponent {
  value = "";
}
```

Do not use `<rte-base-text-input>` in application templates — that selector is internal to the library.

### Character counter

The counter is displayed only when both `showCounter` is `true` and `maxLength` is a number. Counter placement depends on `labelPosition`: above the input bar when `"top"`, beside the container when `"side"`.

### Examples

#### Error

```html
<rte-text-input
  id="text-input-error"
  label="Label"
  [error]="true"
  assistiveAppearance="error"
  [showAssistiveIcon]="true"
  assistiveTextLabel="Error message"
  width="300px"
></rte-text-input>
```

Applies error styling with an assistive error message and icon.

#### Sizes

```html
<rte-text-input id="text-input-default-width" label="Default" width="300px"></rte-text-input>
<rte-text-input id="text-input-narrow" label="20px" width="20px"></rte-text-input>
<rte-text-input id="text-input-full" label="100%" width="100%"></rte-text-input>
```

Sets container width. Values below the minimum input width (`48px`) are clamped.

#### Label position

```html
<rte-text-input id="text-input-top" label="Top" labelPosition="top"></rte-text-input>
<rte-text-input id="text-input-side" label="Side" labelPosition="side"></rte-text-input>
```

Places the label above (`"top"`) or beside (`"side"`) the input.

#### Required indicator

```html
<!-- Required with visible requirement text -->
<rte-text-input
  id="text-input-required-visible"
  label="Label"
  width="400px"
  [required]="true"
  [showLabelRequirement]="true"
></rte-text-input>

<!-- Required with asterisk only -->
<rte-text-input
  id="text-input-required-asterisk"
  label="Label"
  width="400px"
  [required]="true"
  assistiveAppearance="error"
></rte-text-input>

<!-- Optional with requirement text -->
<rte-text-input
  id="text-input-optional-visible"
  label="Label"
  width="400px"
  [showLabelRequirement]="true"
></rte-text-input>
```

Controls how required and optional fields are indicated next to the label.

#### Assistive text

```html
<rte-text-input
  id="text-input-description"
  label="Description"
  assistiveAppearance="description"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-error-assistive"
  label="Error"
  assistiveAppearance="error"
  [error]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-success"
  label="Success"
  assistiveAppearance="success"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-link"
  label="Link"
  assistiveAppearance="link"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-error-icon"
  label="Error + icon"
  assistiveAppearance="error"
  [showAssistiveIcon]="true"
  [error]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-success-icon"
  label="Success + icon"
  assistiveAppearance="success"
  [showAssistiveIcon]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>
```

Displays assistive text below the input in different appearances (`"description"`, `"error"`, `"success"`, `"link"`).
