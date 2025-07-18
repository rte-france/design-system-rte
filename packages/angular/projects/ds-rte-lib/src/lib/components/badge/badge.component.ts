import { CommonModule } from "@angular/common";
import { Component, input, computed } from "@angular/core";

import { isValidIconName } from "../icon/icon-map";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-badge",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./badge.component.html",
  styleUrl: "./badge.component.scss",
})
export class BadgeComponent {
  readonly badgeType = input<string>("brand");
  readonly badgeSize = input<string>("M");
  readonly badgeAppearance = input<string>("text");
  readonly count = input<number>(42);
  readonly icon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  readonly isValidIconName = computed(() => isValidIconName(this.icon()));
  readonly showIcon = computed(() => this.badgeAppearance() === "icon" && this.isValidIconName());
  readonly showText = computed(() => this.badgeAppearance() === "text");
  readonly displayCount = computed(() => (this.count() < 1000 ? this.count() : "999+"));
}
