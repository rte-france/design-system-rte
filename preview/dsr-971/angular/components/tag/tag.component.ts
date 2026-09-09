import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, computed, AfterViewInit, signal } from "@angular/core";
import { TagProps } from "@design-system-rte/core/components/tag/tag.interface";
import { TAG_ERROR_NO_LABEL } from "@design-system-rte/core/dist";

import { isValidIconName } from "../icon/icon-map";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon-registry.service";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-tag",
  imports: [CommonModule, IconComponent],
  templateUrl: "./tag.component.html",
  styleUrl: "./tag.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements AfterViewInit {
  readonly label = input.required<string>();
  readonly tagType = input<TagProps["tagType"]>("status");
  readonly status = input<TagProps["status"]>("success");
  readonly color = input<TagProps["color"]>("brand");
  readonly compactSpacing = input<boolean>(false);
  readonly iconName = input<RegularIconIdKey | TogglableIconIdKey>();
  readonly ariaLabel = input<string>();

  readonly isValidTag = signal(false);

  ngAfterViewInit(): void {
    if (!this.label()) {
      console.error(TAG_ERROR_NO_LABEL);
    } else {
      this.isValidTag.set(true);
    }
  }

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
    return this.iconName();
  });

  readonly isValidIconName = computed(() => {
    const iconName = this.computedIconName();
    return !!iconName && isValidIconName(iconName);
  });
}
