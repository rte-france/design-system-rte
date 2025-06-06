import { Component, input, output } from "@angular/core";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/button.interface";

@Component({
  selector: "rte-button",
  imports: [],
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  readonly label = input("");
  readonly variant = input<ButtonVariant>("primary");
  readonly size = input<ButtonSize>("m");
  readonly disabled = input(false);
  readonly icon = input<string>("");

  readonly click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }
}
