import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";
import {
  splitButtonLeftIconSize,
  splitButtonRightIconSize,
} from "@design-system-rte/core/components/split-button/split-button.constants";
import {
  SplitButtonAppearance,
  SplitButtonPosition,
  SplitButtonSize,
} from "@design-system-rte/core/components/split-button/split-button.interface";

import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-split-button",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./split-button.component.html",
  styleUrl: "./split-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonComponent {
  readonly appearance = input<SplitButtonAppearance>("primary");
  readonly size = input<SplitButtonSize>("m");
  readonly label = input.required<string>();
  readonly compactSpacing = input(false);
  readonly selected = input(false);
  readonly position = input<SplitButtonPosition>("bottom-start");
  readonly icon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly disabled = input(false);
  readonly ariaLabelRight = input<string>();

  readonly splitButtonLeftIconSize = computed(() => splitButtonLeftIconSize[this.size()]);
  readonly splitButtonRightIconSize = computed(() => splitButtonRightIconSize[this.size()]);

  readonly isOpen = signal(false);

  handleKeyDownOnRightButton(event: KeyboardEvent): void {
    this.handleKeyDown(event, "ArrowDown", () => this.isOpen.set(true));
    this.handleKeyDown(event, "Escape", () => this.isOpen.set(false));
  }

  handleKeyDownOnMenu(event: KeyboardEvent): void {
    this.handleKeyDown(event, "Escape", () => this.isOpen.set(false));
  }

  private handleKeyDown(event: KeyboardEvent, key: string, callback: () => void): void {
    if (event.key === key) {
      event.preventDefault();
      callback();
    }
  }
}
