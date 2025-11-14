import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from "@angular/core";
import { BadgeContent, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";

import { BadgeDirective } from "../badge/badge.directive";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "button[rteButton]",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  hostDirectives: [
    {
      directive: BadgeDirective,
      inputs: [
        "rteBadgeType: rteBadgeType",
        "rteBadgeSize: rteButtonSize",
        "rteBadgeContent: rteBadgeContent",
        "rteBadgeCount: rteBadgeCount",
        "rteBadgeIcon: rteBadgeIcon",
      ],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly rteButtonVariant = input<ButtonVariant>("primary");
  readonly rteButtonSize = input<ButtonSize>("m");
  readonly rteBadgeCount = input<number>();
  readonly rteBadgeContent = input<BadgeContent>();
  readonly rteBadgeType = input<BadgeType>();
  readonly rteBadgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  @HostBinding("class") get classes() {
    return `rte-button ${this.rteButtonVariant()} size-${this.rteButtonSize()}`;
  }

  readonly shouldDisplayBadge = computed(() => {
    const count = this.rteBadgeCount();
    const content = this.rteBadgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });
}
