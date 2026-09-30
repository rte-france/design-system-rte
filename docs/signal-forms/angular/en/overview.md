```typescript
import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { TextInputComponent } from "@design-system-rte/angular";

interface ProfileModel {
  name: string;
}

@Component({
  selector: "app-profile",
  imports: [FormField, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formField]="profileForm.name" />
  `,
})
export class ProfileComponent {
  readonly profileModel = signal<ProfileModel>({ name: "" });
  readonly profileForm = form(this.profileModel);
}
```

If your application uses **Angular 21+** with [Signal Forms](https://angular.dev/essentials/signal-forms) (`@angular/forms/signals`), use `[formField]` on Luciole components instead of `[formControl]` or `[value]` / `(valueChange)`. Luciole form controls implement `ControlValueAccessor`; Angular’s `FormField` directive binds them to your field tree like a native `<input>`.

