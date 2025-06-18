import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";
import { buttonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";

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
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledBy = input<string | undefined>(undefined);
  readonly selected = input<boolean>(false);

  readonly click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }

  readonly buttonIconSize = computed(() => buttonIconSize[this.size()]);
}
