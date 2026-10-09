import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { BadgeContent, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonType } from "@design-system-rte/core/components/button/button.interface";
import {
  ButtonSize,
  ButtonVariant,
  IconButtonAppearanceInput,
  IconButtonHierarchy,
} from "@design-system-rte/core/components/button/common/common-button";
import { ButtonIconSize } from "@design-system-rte/core/components/button/common/common-button.constants";
import { resolveIconButtonVisual } from "@design-system-rte/core/components/button/common/resolve-icon-button-visual";

import { BadgeDirective } from "../badge/badge.directive";
import { isValidIconName } from "../icon/icon-map";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon-registry.service";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-icon-button",
  imports: [CommonModule, IconComponent, BadgeDirective],
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
  readonly appearance = input<IconButtonAppearanceInput | undefined>(undefined);
  readonly hierarchy = input<IconButtonHierarchy | undefined>(undefined);
  readonly isCritical = input<boolean | undefined>(undefined);
  readonly isReversed = input<boolean | undefined>(undefined);
  readonly iconAppearance = input<"filled" | "outlined" | undefined>(undefined);
  readonly compactSpacing = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledBy = input<string | undefined>(undefined);
  readonly ariaDescribedBy = input<string | undefined>(undefined);
  readonly ariaExpanded = input<boolean | undefined>(undefined);
  readonly ariaHaspopup = input<string | undefined>(undefined);
  readonly badgeCount = input<number>();
  readonly badgeContent = input<BadgeContent>();
  readonly badgeType = input<BadgeType>();
  readonly badgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");
  readonly customStyle = input<Record<string, string>>();
  readonly tabIndex = input<number | undefined>(undefined);

  readonly buttonIconSize = computed(() => ButtonIconSize[this.size()]);

  readonly isValidIconName = computed(() => isValidIconName(this.name()));

  readonly resolvedVisual = computed(() =>
    resolveIconButtonVisual({
      variant: this.variant(),
      appearance: this.appearance(),
      hierarchy: this.hierarchy(),
      isCritical: this.isCritical(),
      isReversed: this.isReversed(),
      iconAppearance: this.iconAppearance(),
    }),
  );

  readonly clickEvent = output<MouseEvent | KeyboardEvent>();

  readonly shouldDisplayBadge = computed(() => {
    const count = this.badgeCount();
    const content = this.badgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });

  onClick(event: MouseEvent | KeyboardEvent): void {
    this.clickEvent.emit(event);
  }
}
