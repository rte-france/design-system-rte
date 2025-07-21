import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ButtonComponent,
  IconComponent,
  SplitButtonComponent,
  IconButtonToggleComponent,
  TooltipDirective,
  TextInputComponent,
} from "@design-system-rte/angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    IconComponent,
    SplitButtonComponent,
    IconButtonToggleComponent,
    TooltipDirective,
    TextInputComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular";

  readonly inputValue = signal("Hello");

  handleInputChange(value: string) {
    this.inputValue.set(value);
  }
}
