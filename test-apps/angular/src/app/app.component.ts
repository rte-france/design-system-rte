import { Component, output, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ButtonComponent,
  IconComponent,
  SplitButtonComponent,
  IconButtonToggleComponent,
  TooltipDirective,
  TextInputComponent,
  ChipComponent,
  BadgeDirective,
  TextareaComponent,
  LinkComponent,
  DividerComponent,
  SwitchComponent
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
    ChipComponent,
    BadgeDirective,
    TextareaComponent,
    LinkComponent,
    DividerComponent,
    SwitchComponent
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
  selected = signal(false);

  readonly click = output<MouseEvent | KeyboardEvent>();

  toggleSelectState(): void {
    this.selected.set(!this.selected());
  }

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit(event);
    this.toggleSelectState();
  }
}
