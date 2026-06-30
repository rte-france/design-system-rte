import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { IconSizeMap, StatusIndicatorSizeMap } from "@design-system-rte/core/components/avatar";
import {
  AvatarColorType,
  AvatarLayout,
  AvatarSize,
  AvatarStatus,
  AvatarType,
} from "@design-system-rte/core/components/avatar/avatar.interface";
import { computeBackgroundColor, computeMaskImage } from "@design-system-rte/core/components/avatar/avatar.utils";
import { DecorativeColor } from "@design-system-rte/core/components/common/common-types";

import { IconComponent } from "../icon/icon.component";

import { StatusComponent } from "./assets/status/status.component";

@Component({
  selector: "rte-avatar",
  imports: [CommonModule, IconComponent, StatusComponent],
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly size = input<AvatarSize>(32);
  readonly type = input<AvatarType>("user");
  readonly imgSrc = input<string>();
  readonly alt = input<string>("Avatar");
  readonly status = input<AvatarStatus>();
  readonly layout = input<AvatarLayout>("initials");
  readonly initials = input<string>();
  readonly colorType = input<AvatarColorType>("neutral");
  readonly decorativeColor = input<DecorativeColor>();
  readonly isInteractive = input<boolean>(false);

  readonly avatarClick = output<MouseEvent>();

  readonly backgroundColor = computed(() => {
    return computeBackgroundColor(this.layout(), this.colorType(), this.decorativeColor());
  });

  readonly maskImage = computed(() => {
    return computeMaskImage(this.size(), !!this.status());
  });

  readonly iconSize = computed(() => {
    return IconSizeMap[this.size()] || IconSizeMap[32];
  });

  readonly statusIndicatorSize = computed(() => {
    return StatusIndicatorSizeMap[this.size()] || StatusIndicatorSizeMap[32];
  });

  readonly isValidAvatar = computed(() => {
    return (
      (this.layout() === "initials" && !!this.initials() && this.initials()!.length <= 2) ||
      (this.layout() === "image" && this.imgSrc()) ||
      this.layout() === "icon"
    );
  });

  handleClick(e: MouseEvent) {
    if (this.isInteractive()) {
      this.avatarClick.emit(e);
    }
  }
}
