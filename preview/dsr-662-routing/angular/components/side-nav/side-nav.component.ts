import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from "@angular/core";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core";
import { SideNavAppearance, SideNavContrast, SideNavHeaderConfig } from "@design-system-rte/core";
import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { setNavMenuOpenById } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { NavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { SideNavSize } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DividerComponent } from "../divider/divider.component";

import { BaseSideNavComponent } from "./base-side-nav/base-side-nav.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { NavMenuComponent, NavMenuOpenChangeEvent } from "./nav-menu/nav-menu.component";

const TRANSITION_DURATION = 300;

@Component({
  selector: "rte-side-nav",
  imports: [CommonModule, BaseSideNavComponent, DividerComponent, NavItemComponent, NavMenuComponent],
  standalone: true,
  templateUrl: "./side-nav.component.html",
  styleUrl: "./side-nav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  readonly size = input<SideNavSize>("m" as SideNavSize);
  readonly collapsible = input<boolean>(false);
  readonly headerConfig = input<SideNavHeaderConfig | undefined>();
  readonly items = input<NavItemProps[]>([]);
  readonly footerItems = input<NavItemProps[] | undefined>();
  readonly isCollapsed = input<boolean>(false);
  readonly appearance = input<SideNavAppearance>("brand");
  readonly contrast = input<SideNavContrast>("high");

  readonly collapsedState = signal<boolean>(false);
  readonly shouldShowTitle = signal<boolean>(true);

  readonly itemClicked = output<string>();

  private titleTimeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(
      () => {
        this.collapsedState.set(this.isCollapsed());
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (this.titleTimeoutId) {
          clearTimeout(this.titleTimeoutId);
          this.titleTimeoutId = null;
        }

        if (this.collapsedState()) {
          this.shouldShowTitle.set(false);
        } else {
          this.titleTimeoutId = setTimeout(() => {
            this.shouldShowTitle.set(true);
            this.titleTimeoutId = null;
          }, TRANSITION_DURATION);
        }
      },
      { allowSignalWrites: true },
    );
  }

  readonly collapseIcon = computed<string>(() => {
    return this.collapsedState() ? "arrow-double-right" : "arrow-double-left";
  });

  readonly dividerAppearance = computed<DividerAppearance>(() => {
    return getDividerAppearanceBySideNavTheme(this.appearance(), this.contrast());
  });

  handleHeaderKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      const config = this.headerConfig();
      if (config?.onClick) {
        config.onClick();
      }
    }
  }

  handleHeaderClick(): void {
    const config = this.headerConfig();
    if (config?.onClick) {
      config.onClick();
    }
  }

  hasNestedItems(item: NavItemProps): item is NavMenuProps {
    return !!item.items?.length;
  }

  handleItemClick(itemId: string): void {
    this.itemClicked.emit(itemId);
  }

  handleFooterItemClick(itemId: string): void {
    this.itemClicked.emit(itemId);
  }

  handleMenuOpenChange(event: NavMenuOpenChangeEvent): void {
    setNavMenuOpenById(this.items(), event.id, event.open);
  }

  handleFooterMenuOpenChange(event: NavMenuOpenChangeEvent): void {
    const footerItems = this.footerItems();
    if (footerItems) {
      setNavMenuOpenById(footerItems, event.id, event.open);
    }
  }

  handleCollapseClick(): void {
    this.collapsedState.set(!this.collapsedState());
  }
}
