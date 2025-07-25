import { CommonModule } from "@angular/common";
import { Component, input, computed, ChangeDetectionStrategy } from "@angular/core";
import { badgeIconSize } from "@design-system-rte/core/components/badge/badge.constants";
import { BadgeAppearance, BadgeSize, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";

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
  readonly count = input<number>(1);
  readonly icon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  readonly isValidIconName = computed(() => isValidIconName(this.icon()));
  readonly showIcon = computed(() => this.badgeAppearance() === "icon" && this.isValidIconName());
  readonly showText = computed(() => this.badgeAppearance() === "text" && this.count() > 0);
  readonly displayCount = computed(() => (this.count() < 1000 ? this.count() : "999+"));
  readonly iconSize = computed(() => badgeIconSize[this.badgeSize()]);
}
