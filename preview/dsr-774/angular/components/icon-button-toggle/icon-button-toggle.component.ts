import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";
import { ButtonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";

import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-icon-button-toggle",
  imports: [CommonModule, IconButtonComponent],
  standalone: true,
  templateUrl: "./icon-button-toggle.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonToggleComponent {
  readonly disabled = input<boolean>(false);
  readonly name = input.required<RegularIconIdKey | TogglableIconIdKey>();
  readonly size = input<ButtonSize>("m");
  readonly variant = input<ButtonVariant>("primary");
  readonly type = input<ButtonType>("button");
  readonly compactSpacing = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>();
  readonly ariaLabelledBy = input<string | undefined>();

  readonly selected = input<boolean | undefined>();

  readonly internalSelected = signal(false);

  readonly defaultSelected = input<boolean>(false);

  readonly isControlled = computed(() => this.selected() !== undefined);

  readonly click = output<MouseEvent | KeyboardEvent>();

  readonly isSelected = computed(() => {
    return this.isControlled() ? this.selected() : this.internalSelected();
  });

  private toggleInternalSelectedState(): void {
    this.internalSelected.set(!this.internalSelected());
  }

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit(event);
    if (!this.isControlled()) {
      this.toggleInternalSelectedState();
    }
  }

  readonly buttonIconSize = computed(() => ButtonIconSize[this.size()]);
}
