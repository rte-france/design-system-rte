import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from "@angular/core";
import { ButtonIconSize, resolveButtonStyle } from "@design-system-rte/core";
import { BadgeContent } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonIconAppearance, ButtonIconPosition } from "@design-system-rte/core/components/button/button.interface";
import {
  ButtonAppearance,
  ButtonHierarchy,
  ButtonSize,
  ButtonVariant,
} from "@design-system-rte/core/components/button/common/common-button";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "button[rteButton]",
  imports: [IconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly rteButtonAppearance = input<ButtonAppearance>();
  readonly rteButtonHierarchy = input<ButtonHierarchy>();
  readonly rteButtonIsCritical = input<boolean>();
  readonly rteButtonIsReversed = input<boolean>();

  /** @deprecated Prefer `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical`, and `rteButtonIsReversed`. */
  readonly rteButtonVariant = input<ButtonVariant>();

  readonly rteButtonSize = input<ButtonSize>("m");
  readonly rteBadgeCount = input<number>();
  readonly rteBadgeContent = input<BadgeContent>();
  readonly rteButtonIcon = input<string>();
  readonly rteButtonIconPosition = input<ButtonIconPosition>("left");
  readonly rteButtonIconAppearance = input<ButtonIconAppearance>("filled");

  readonly resolvedStyle = computed(() =>
    resolveButtonStyle({
      variant: this.rteButtonVariant(),
      appearance: this.rteButtonAppearance(),
      hierarchy: this.rteButtonHierarchy(),
      isCritical: this.rteButtonIsCritical(),
      isReversed: this.rteButtonIsReversed(),
    }),
  );

  readonly iconSize = computed(() => ButtonIconSize[this.rteButtonSize()]);

  @HostBinding("class") get classes() {
    return `rte-button size-${this.rteButtonSize()}`;
  }

  @HostBinding("attr.data-appearance") get dataAppearance() {
    return this.resolvedStyle().appearance;
  }

  @HostBinding("attr.data-hierarchy") get dataHierarchy() {
    return this.resolvedStyle().hierarchy;
  }

  @HostBinding("attr.data-critical") get dataCritical() {
    return String(this.resolvedStyle().isCritical);
  }

  @HostBinding("attr.data-reversed") get dataReversed() {
    return String(this.resolvedStyle().isReversed);
  }

  @HostBinding("attr.data-variant") get dataVariant() {
    const variant = this.rteButtonVariant();
    return variant ?? null;
  }

  readonly shouldDisplayBadge = computed(() => {
    const count = this.rteBadgeCount();
    const content = this.rteBadgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });
}
