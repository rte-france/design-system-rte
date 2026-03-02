import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, computed } from "@angular/core";
import { TagProps } from "@design-system-rte/core/components/tag/tag.interface";

import { isValidIconName } from "../icon/icon-map";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-tag",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./tag.component.html",
  styleUrl: "./tag.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  readonly tagType = input<TagProps["tagType"]>("status");
  readonly status = input<TagProps["status"]>("success");
  readonly color = input<TagProps["color"]>("brand");
  readonly compactSpacing = input<boolean>(false);
  readonly label = input<string>("");
  readonly showLeftIcon = input<boolean>(false);
  readonly iconName = input<RegularIconIdKey | TogglableIconIdKey>();

  readonly computedIconName = computed(() => {
    if (this.tagType() === "status") {
      const statusIconMap: Record<string, RegularIconIdKey | TogglableIconIdKey> = {
        success: "check-circle",
        information: "info",
        warning: "warning",
        alert: "dangerous",
      };
      const statusValue = this.status();
      if (statusValue && statusIconMap[statusValue]) {
        return statusIconMap[statusValue];
      }
    }
    return this.iconName() ?? "check";
  });

  readonly isValidIconName = computed(() => {
    const iconName = this.computedIconName();
    return !!iconName && isValidIconName(iconName);
  });
}
