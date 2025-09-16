import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { PopoverAlignment, PopoverPosition } from "@design-system-rte/core/components/popover/popover.interface";

import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "rte-popover",
  imports: [CommonModule, ButtonComponent],
  standalone: true,
  templateUrl: "./popover.component.html",
  styleUrl: "./popover.component.scss",
})
export class PopoverComponent {
  readonly primaryButtonLabel = input.required<string>();
  readonly position = input.required<Exclude<PopoverPosition, "auto">>();
  readonly alignment = input<PopoverAlignment>();
  readonly content = input<string>();
  readonly arrow = input<boolean>();
  readonly title = input<string>();
  readonly secondaryButtonLabel = input<string>();
  readonly isOpen = input<boolean>(false);
  readonly coordinates = input<{ top: number; left: number }>({ top: 0, left: 0 });

  readonly clickPrimaryButton = output<void>();
  readonly clickSecondaryButton = output<void>();

  handleClickPrimaryButton() {
    this.clickPrimaryButton.emit();
  }
  handleClickSecondaryButton() {
    this.clickSecondaryButton.emit();
  }
}
