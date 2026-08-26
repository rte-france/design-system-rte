import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { DividerAppearance } from "@design-system-rte/core/components/divider/divider.interface";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { setNavMenuOpenById } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.utils";
import { NavMenuProps } from "@design-system-rte/core/components/side-nav/nav-menu/nav-menu.interface";
import { getDividerAppearanceBySideNavTheme } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import {
  SideNavAppearance,
  SideNavContrast,
  SideNavHeaderConfig,
  SideNavSize,
} from "@design-system-rte/core/components/side-nav/side-nav.interface";
import {
  getSideNavConfigurationIssues,
  shouldShowSideNavFooter,
  shouldShowSideNavHeader,
  shouldUseSideNavDefaultFooter,
  shouldUseSideNavDefaultHeader,
} from "@design-system-rte/core/components/side-nav/side-nav.utils";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { logWarn } from "@design-system-rte/core/utils/log-handlers";

import { NavigationElement } from "../../utils/navigation/navigation-element";
import { DividerComponent } from "../divider/divider.component";
import { TooltipDirective } from "../tooltip/tooltip.directive";

import { BaseSideNavComponent } from "./base-side-nav/base-side-nav.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { NavMenuComponent, NavMenuOpenChangeEvent } from "./nav-menu/nav-menu.component";
import { SideNavFooterDirective } from "./side-nav-footer.directive";
import { SideNavHeaderDirective } from "./side-nav-header.directive";

export type NavItem = (NavItemProps | NavMenuProps) & NavigationElement;

const TRANSITION_DURATION = 300;

@Component({
  selector: "rte-side-nav",
  imports: [
    CommonModule,
    BaseSideNavComponent,
    DividerComponent,
    NavItemComponent,
    NavMenuComponent,
    TooltipDirective,
    RouterLink,
    SideNavHeaderDirective,
    SideNavFooterDirective,
  ],
  templateUrl: "./side-nav.component.html",
  styleUrl: "./side-nav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  readonly size = input<SideNavSize>("m" as SideNavSize);
  readonly collapsible = input<boolean>(false);
  readonly headerConfig = input<SideNavHeaderConfig | undefined>();
  readonly items = input<NavItem[]>([]);
  readonly footerItems = input<NavItem[] | undefined>();
  readonly isCollapsed = input<boolean>(false);
  readonly appearance = input<SideNavAppearance>("brand");
  readonly contrast = input<SideNavContrast>("high");

  readonly collapsedState = signal<boolean>(false);
  readonly shouldShowTitle = signal<boolean>(true);

  readonly itemClicked = output<string>();

  readonly headerDirective = contentChild(SideNavHeaderDirective);
  readonly footerDirective = contentChild(SideNavFooterDirective);
  readonly projectedHeader = contentChild("[side-nav-header]", { read: ElementRef<HTMLElement> });
  readonly projectedFooter = contentChild("[side-nav-footer]", { read: ElementRef<HTMLElement> });
  readonly headerContentRef = viewChild<ElementRef<HTMLElement>>("headerContent");
  readonly footerContentRef = viewChild<ElementRef<HTMLElement>>("footerContent");

  private titleTimeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly hasHeaderContent = computed(() => {
    const hasTemplate = !!this.headerDirective()?.templateRef;
    const hasProjectedHeader = !!this.projectedHeader()?.nativeElement.children.length;
    const hasContentRef = !!this.headerContentRef()?.nativeElement?.children.length;
    return hasTemplate || hasProjectedHeader || hasContentRef;
  });

  readonly hasFooterContent = computed(() => {
    const hasTemplate = !!this.footerDirective()?.templateRef;
    const hasProjectedFooter = !!this.projectedFooter()?.nativeElement.children.length;
    const hasContentRef = !!this.footerContentRef()?.nativeElement?.children.length;
    return hasTemplate || hasProjectedFooter || hasContentRef;
  });

  readonly shouldDisplayDefaultHeader = computed(() => {
    return shouldUseSideNavDefaultHeader(this.hasHeaderContent(), this.headerConfig());
  });

  readonly shouldDisplayDefaultFooter = computed(() => {
    return shouldUseSideNavDefaultFooter(this.hasFooterContent(), this.footerItems(), this.collapsible());
  });

  readonly shouldShowHeader = computed(() => {
    return shouldShowSideNavHeader(this.hasHeaderContent(), this.headerConfig());
  });

  readonly shouldShowFooter = computed(() => {
    return shouldShowSideNavFooter(this.hasFooterContent(), this.footerItems(), this.collapsible());
  });

  constructor() {
    effect(() => {
      this.collapsedState.set(this.isCollapsed());
    });

    effect(() => {
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
    });

    effect(() => {
      const configurationIssue = getSideNavConfigurationIssues({
        hasCustomHeader: this.hasHeaderContent(),
        hasHeaderConfig: !!this.headerConfig(),
        hasCustomFooter: this.hasFooterContent(),
        hasFooterItems: !!this.footerItems()?.length,
        collapsible: this.collapsible(),
      });

      if (configurationIssue) {
        logWarn("SideNavComponent", configurationIssue);
      }
    });
  }

  readonly collapseIcon = computed<string>(() => {
    return this.collapsedState() ? "arrow-double-right" : "arrow-double-left";
  });

  readonly dividerAppearance = computed<DividerAppearance>(() => {
    return getDividerAppearanceBySideNavTheme(this.appearance(), this.contrast());
  });

  readonly headerTooltip = computed<string>(() => {
    const config = this.headerConfig();
    return config?.tooltip ?? config?.title ?? "";
  });

  readonly showHeaderTooltip = computed<boolean>(() => {
    return this.collapsedState() && !!this.headerTooltip();
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

  hasNestedItems(item: NavItem): item is NavMenuProps & NavigationElement {
    return !!item.items?.length;
  }

  handleItemClick(itemId: string): void {
    this.itemClicked.emit(itemId);
  }

  handleMenuOpenChange(navItems: NavItem[], event: NavMenuOpenChangeEvent): void {
    setNavMenuOpenById(navItems, event.id, event.open);
  }

  handleCollapseClick(): void {
    this.collapsedState.set(!this.collapsedState());
  }
}
