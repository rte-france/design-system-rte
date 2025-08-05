import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal, OnInit } from "@angular/core";
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
export class SwitchComponent implements OnInit {
  readonly label = input("");
  readonly appearance = input<SwitchProps["appearance"]>("brand");
  readonly showLabel = input(true);
  readonly showIcon = input(true);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly checked = input(false);

  switchHeight = switchHeight;
  switchWidth = switchWidth;

  isChecked = signal(false);

  ngOnInit() {
    this.isChecked.set(this.checked());
  }

  readonly handleClick = (event: MouseEvent | KeyboardEvent) => {
    event.stopPropagation();
    if (this.readOnly() || this.disabled()) {
      return;
    }
    this.isChecked.set(!this.isChecked());
  }

    readonly handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === " ") {
        event.preventDefault();
        this.handleClick(event);
        }
    };
}
