```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [ReactiveFormsModule, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formControl]="nameControl" />
  `,
})
export class ExampleComponent {
  readonly nameControl = new FormControl("");
}
```
