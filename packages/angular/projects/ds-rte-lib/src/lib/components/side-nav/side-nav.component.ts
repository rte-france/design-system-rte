import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from "@angular/core";
import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { SideNavAppearance, SideNavHeaderConfig } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { SideNavSize } from "@design-system-rte/core/components/side-nav/side-nav.interface";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DividerComponent } from "../divider/divider.component";

import { BaseSideNavComponent } from "./base-side-nav/base-side-nav.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

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
  readonly collapsed = input<boolean>(false);
  readonly appearance = input<SideNavAppearance>("brand");

  readonly isCollapsed = signal<boolean>(false);
  readonly shouldShowTitle = signal<boolean>(true);

  private titleTimeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(
      () => {
        this.isCollapsed.set(this.collapsed());
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (this.titleTimeoutId) {
          clearTimeout(this.titleTimeoutId);
          this.titleTimeoutId = null;
        }

        if (this.isCollapsed()) {
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
    return this.isCollapsed() ? "arrow-double-right" : "arrow-double-left";
  });

  readonly dividerAppearance = computed<DividerAppearance>(() => {
    return this.appearance() === "neutral" ? "default" : "brand";
  });

  readonly headerTitleClasses = computed<string>(() => {
    const classes: string[] = ["side-nav-header", this.appearance()];
    if (this.isCollapsed()) {
      classes.push("collapsed");
    }
    return classes.join(" ");
  });

  readonly headerVersionClasses = computed<string>(() => {
    return this.shouldShowTitle() ? "" : "hidden";
  });

  collapseSideNav(): void {
    this.isCollapsed.set(!this.isCollapsed());
  }

  getCollapseHandler(): () => void {
    return () => this.collapseSideNav();
  }

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

  hasNestedItems(item: NavItemProps): boolean {
    return !!(item.items && item.items.length > 0);
  }
}
