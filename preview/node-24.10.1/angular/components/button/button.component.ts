import { ChangeDetectionStrategy, Component, HostBinding, input } from "@angular/core";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";

@Component({
  selector: "button[rteButton]",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly rteButtonVariant = input<ButtonVariant>("primary");
  readonly rteButtonSize = input<ButtonSize>("m");

  @HostBinding("class") get classes() {
    return `rte-button ${this.rteButtonVariant()} size-${this.rteButtonSize()}`;
  }
}
