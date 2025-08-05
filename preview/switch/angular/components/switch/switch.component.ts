import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal } from "@angular/core";
import { switchHeight, switchWidth } from "@design-system-rte/core/components/switch/switch.constants";
import { SwitchProps } from "@design-system-rte/core/components/switch/switch.interface";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-switch",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  readonly label = input("");
  readonly appearance = input<SwitchProps["appearance"]>("brand");
  readonly showLabel = input(true);
  readonly showIcon = input(true);
  readonly disabled = input(false);
  readonly readOnly = input(false);

  switchHeight = switchHeight;
  switchWidth = switchWidth;

  readonly checked = signal(false);

  handleClick = (event: MouseEvent) => {
    if (this.readOnly() || this.disabled()) {
      event.stopPropagation();
    } else {
      this.checked.set(!this.checked());
    }
  };
}
