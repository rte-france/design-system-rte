import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { BadgeContent, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";
import { ButtonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";

import { BadgeDirective } from "../badge/badge.directive";
import { isValidIconName } from "../icon/icon-map";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-icon-button",
  imports: [CommonModule, IconComponent, BadgeDirective],
  standalone: true,
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly disabled = input<boolean>(false);
  readonly name = input.required<RegularIconIdKey | TogglableIconIdKey>();
  readonly size = input<ButtonSize>("m");
  readonly variant = input<ButtonVariant>("primary");
  readonly type = input<ButtonType>("button");
  readonly appearance = input<"outlined" | "filled">("outlined");
  readonly compactSpacing = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledBy = input<string | undefined>(undefined);
  readonly badgeCount = input<number>();
  readonly badgeContent = input<BadgeContent>();
  readonly badgeType = input<BadgeType>();
  readonly badgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  readonly buttonIconSize = computed(() => ButtonIconSize[this.size()]);

  readonly isValidIconName = computed(() => isValidIconName(this.name()));

  readonly click = output<MouseEvent | KeyboardEvent>();

  readonly shouldDisplayBadge = computed(() => {
    const count = this.badgeCount();
    const content = this.badgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit(event);
  }
}
