import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal, OnInit, output } from "@angular/core";
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

  readonly stateChange = output<Event>();

  switchHeight = switchHeight;
  switchWidth = switchWidth;

  readonly isChecked = signal(false);

  ngOnInit() {
    this.isChecked.set(this.checked());
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isChecked.set(target.checked);
    this.stateChange.emit(event);
  }

  handleClick(event: MouseEvent): void {
    if (this.readOnly() || this.disabled()) {
      event.stopPropagation();
    } else {
      const inputElement = (event.currentTarget as HTMLInputElement).querySelector<HTMLInputElement>(
        'input[type="checkbox"]',
      );
      if (inputElement) {
        inputElement.checked = !this.isChecked();
        const changeEvent = new Event("change", { bubbles: true });
        Object.defineProperty(changeEvent, "target", {
          value: inputElement,
          writable: false,
        });
        this.handleChange(changeEvent);
      }
    }
  }
}
