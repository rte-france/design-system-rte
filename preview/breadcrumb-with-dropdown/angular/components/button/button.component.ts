import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";

@Component({
  selector: "rte-button",
  imports: [],
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly label = input("");
  readonly variant = input<ButtonVariant>("primary");
  readonly size = input<ButtonSize>("m");
  readonly disabled = input(false);
  readonly icon = input<string>("");
  readonly ariaLabel = input<string>("");
  readonly ariaLabelledBy = input<string>("");
  readonly buttonType = input<ButtonType>("button");

  readonly click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }
}
