import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BaseTextInputComponent } from "./base-text-input/base-text-input.component";

@Component({
  selector: "rte-text-input",
  imports: [BaseTextInputComponent],
  standalone: true,
  templateUrl: "./text-input.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent extends BaseTextInputComponent {}
