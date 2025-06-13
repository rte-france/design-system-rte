import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";
import { buttonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";

import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-icon-button",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly disabled = input<boolean>(false);
  readonly icon = input.required<RegularIconIdKey | TogglableIconIdKey>();
  readonly size = input<ButtonSize>("m");
  readonly variant = input<ButtonVariant>("primary");
  readonly type = input<ButtonType>("button");
  readonly iconAppearance = input<"outlined" | "filled">("outlined");
  readonly compactSpacing = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledBy = input<string | undefined>(undefined);

  get buttonIconSize(): number {
    return buttonIconSize[this.size()];
  }

  readonly click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }
}
