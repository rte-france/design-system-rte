import { ChangeDetectionStrategy, Component, computed, HostBinding, input } from "@angular/core";
import { BadgeContent } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonSize, ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";

@Component({
  selector: "button[rteButton]",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly rteButtonVariant = input<ButtonVariant>("primary");
  readonly rteButtonSize = input<ButtonSize>("m");
  readonly rteBadgeCount = input<number>();
  readonly rteBadgeContent = input<BadgeContent>();

  @HostBinding("class") get classes() {
    return `rte-button ${this.rteButtonVariant()} size-${this.rteButtonSize()}`;
  }

  readonly shouldDisplayBadge = computed(() => {
    const count = this.rteBadgeCount();
    const content = this.rteBadgeContent();

    return (count && count > 0 && content === "number") || content === "icon";
  });
}
