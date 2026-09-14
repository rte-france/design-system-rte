import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from "@angular/core";
import { ButtonIconSize } from "@design-system-rte/core";
import { BadgeContent } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonIconAppearance, ButtonIconPosition } from "@design-system-rte/core/components/button/button.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "button[rteButton]",
  imports: [IconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly rteButtonVariant = input<ButtonVariant>("primary");
  readonly rteButtonSize = input<ButtonSize>("m");
  readonly rteBadgeCount = input<number>();
  readonly rteBadgeContent = input<BadgeContent>();
  readonly rteButtonIcon = input<string>();
  readonly rteButtonIconPosition = input<ButtonIconPosition>("left");
  readonly rteButtonIconAppearance = input<ButtonIconAppearance>("filled");

  readonly iconSize = computed(() => ButtonIconSize[this.rteButtonSize()]);

  @HostBinding("class") get classes() {
    return `rte-button ${this.rteButtonVariant()} size-${this.rteButtonSize()}`;
  }

  readonly shouldDisplayBadge = computed(() => {
    const count = this.rteBadgeCount();
    const content = this.rteBadgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });
}
