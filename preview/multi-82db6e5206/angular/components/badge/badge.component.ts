import { CommonModule } from "@angular/common";
import { Component, input, computed, ChangeDetectionStrategy } from "@angular/core";
import { BadgeAppearance, BadgeSize, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import {
  getBadgeIconSize,
  getDisplayCount,
  getShowBadge,
  getShowIcon,
  getShowText,
} from "@design-system-rte/core/components/badge/badge.utils";

import { isValidIconName } from "../icon/icon-map";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-badge",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./badge.component.html",
  styleUrl: "./badge.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly badgeType = input<BadgeType>("brand");
  readonly badgeSize = input<BadgeSize>("m");
  readonly badgeAppearance = input<BadgeAppearance>("text");
  readonly count = input<number | undefined>();
  readonly icon = input<RegularIconIdKey | TogglableIconIdKey>("notification");

  readonly isValidIconName = computed(() => isValidIconName(this.icon()));

  readonly showIcon = computed(() =>
    getShowIcon({
      size: this.badgeSize(),
      appearance: this.badgeAppearance(),
      iconSize: this.iconSize(),
    }),
  );

  readonly showText = computed(() =>
    getShowText({
      size: this.badgeSize(),
      appearance: this.badgeAppearance(),
      count: this.count(),
    }),
  );

  readonly displayCount = computed(() => getDisplayCount(this.count()));
  readonly countOverflow = computed(() => this.showText() && this.displayCount().length > 2);
  readonly iconSize = computed(() => getBadgeIconSize(this.badgeSize()));

  readonly showBadge = computed(() =>
    getShowBadge({
      size: this.badgeSize(),
      appearance: this.badgeAppearance(),
      count: this.count(),
      iconSize: this.iconSize(),
    }),
  );
}
