import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, signal, OnInit, OnDestroy } from "@angular/core";
import { BadgeContent, BadgeSize, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { shouldDisplayBadge } from "@design-system-rte/core/components/badge/badge.utils";
import { Alignment, Position } from "@design-system-rte/core/components/common/common-types";
import {
  splitButtonLeftIconSize,
  splitButtonRightIconSize,
} from "@design-system-rte/core/components/split-button/split-button.constants";
import {
  SplitButtonAppearance,
  SplitButtonItemProps,
  SplitButtonPosition,
  SplitButtonSize,
} from "@design-system-rte/core/components/split-button/split-button.interface";
import { ARROW_DOWN_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeDirective } from "../badge/badge.directive";
import { DropdownModule } from "../dropdown";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

@Component({
  selector: "rte-split-button",
  imports: [CommonModule, IconComponent, DropdownModule, BadgeDirective],
  standalone: true,
  templateUrl: "./split-button.component.html",
  styleUrl: "./split-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonComponent implements OnInit, OnDestroy {
  readonly appearance = input<SplitButtonAppearance>("primary");
  readonly size = input<SplitButtonSize>("m");
  readonly label = input.required<string>();
  readonly compactSpacing = input(false);
  readonly position = input<SplitButtonPosition>("bottom-start");
  readonly icon = input<RegularIconIdKey | TogglableIconIdKey | null>(null);
  readonly disabled = input(false);
  readonly ariaLabelRight = input<string>();
  readonly options = input<SplitButtonItemProps[]>([]);
  readonly badgeType = input<BadgeType>();
  readonly showBadge = input<boolean>(false);
  readonly badgeContent = input<BadgeContent>();
  readonly badgeCount = input<number | undefined>(undefined);
  readonly badgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("notification");
  readonly badgeSize = input<BadgeSize>("m");

  readonly splitButtonLeftIconSize = computed(() => splitButtonLeftIconSize[this.size()]);
  readonly splitButtonRightIconSize = computed(() => splitButtonRightIconSize[this.size()]);

  readonly isOpen = signal(false);

  readonly internalPosition = computed(() => {
    return this.position().split("-")[0] as Position;
  });
  readonly internalAlignment = computed(() => {
    return this.position().split("-")[1] as Alignment;
  });

  readonly hasBadge = computed(() =>
    shouldDisplayBadge({
      showBadge: !!this.showBadge(),
      badgeContent: this.badgeContent(),
      badgeCount: this.badgeCount(),
      badgeIcon: this.badgeIcon(),
    }),
  );

  handleClickOutside(event: MouseEvent): void {
    const target = event.target as Element;
    const allDropdowns = document.querySelectorAll("[data-dropdown-id]");
    const clickedInside = Array.from(allDropdowns).some((dropdown) => dropdown.contains(target));

    if (!clickedInside) {
      this.isOpen.set(false);
    }
  }

  ngOnInit(): void {
    window.addEventListener("click", this.handleClickOutside.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener("click", this.handleClickOutside.bind(this));
  }

  handleKeyDownOnRightButton(event: KeyboardEvent): void {
    this.handleKeyDown(event, ARROW_DOWN_KEY, () => this.isOpen.set(true));
    this.handleKeyDown(event, SPACE_KEY, () => this.isOpen.set(true));
    this.handleKeyDown(event, "Escape", () => this.isOpen.set(false));
  }

  handleKeyDownOnMenu(event: KeyboardEvent): void {
    this.handleKeyDown(event, "Escape", () => this.isOpen.set(false));
  }

  private handleKeyDown(event: KeyboardEvent, key: string, callback: () => void): void {
    if (event.key === key) {
      event.preventDefault();
      callback();
    }
  }
}
