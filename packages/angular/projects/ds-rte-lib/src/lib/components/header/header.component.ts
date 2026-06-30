import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  contentChild,
  effect,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { BadgeSize } from "@design-system-rte/core/components/badge/badge.interface";
import { ButtonSize, type ButtonVariant } from "@design-system-rte/core/components/button/common/common-button";
import {
  HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL,
  HEADER_DEFAULT_NAV_ARIA_LABEL,
  HEADER_DESKTOP_BREAKPOINT_PX,
  HeaderSubHeaderConfig,
  resolveScrollDirection,
  type HeaderActionButtonConfig,
  type HeaderAppearance,
  type HeaderAvatarConfig,
  type HeaderIconButtonConfig,
  type HeaderLeftSectionConfig,
  type HeaderNavigationItem,
  type ScrollDirectionState,
} from "@design-system-rte/core/components/header";
import { SearchBarAppearance, SearchBarProps } from "@design-system-rte/core/components/searchbar";

import { AvatarComponent } from "../avatar/avatar.component";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import { ButtonComponent } from "../button/button.component";
import { DividerComponent } from "../divider/divider.component";
import type { DropdownItemConfig } from "../dropdown/dropdown.types";
import { IconComponent } from "../icon/icon.component";
import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";

import { HeaderLeftSectionComponent } from "./header-left-section/header-left-section.component";
import { HeaderLeftDirective } from "./header-left.directive";
import { HeaderMobileComponent } from "./header-mobile/header-mobile.component";
import { HeaderMobileMenuDirective } from "./header-mobile-menu.directive";
import { HeaderRightDirective } from "./header-right.directive";

const DEFAULT_HOME_LINK = "/";

@Component({
  selector: "rte-header",
  imports: [
    CommonModule,
    IconButtonComponent,
    ButtonComponent,
    SearchbarComponent,
    AvatarComponent,
    IconComponent,
    BreadcrumbsComponent,
    HeaderMobileComponent,
    HeaderLeftSectionComponent,
    HeaderRightDirective,
    DividerComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly appearance = input<HeaderAppearance>("brand");
  readonly isCompact = input<boolean>(false);
  readonly hasLeftSection = input<boolean>(true);
  readonly hasRightSection = input<boolean>(true);
  readonly hasSubHeader = input<boolean>(true);
  readonly subHeaderConfig = input<HeaderSubHeaderConfig | undefined>(undefined);

  readonly isSticky = input<boolean>(false);
  readonly showAtScrollUp = input<boolean>(false);

  readonly hasLogo = input<boolean>(true);
  readonly applicationName = input<string>("");
  readonly logoSrc = input<string | undefined>(undefined);
  readonly homeLink = input<string>(DEFAULT_HOME_LINK);
  readonly homeAriaLabel = input<string | undefined>(undefined);

  readonly hasMidSection = input<boolean>(true);
  readonly navigationAriaLabel = input<string>(HEADER_DEFAULT_NAV_ARIA_LABEL);
  readonly navigationItems = input<HeaderNavigationItem[]>([]);

  readonly hasSearchbar = input<boolean>(true);
  readonly searchbarProps = input<SearchBarProps | undefined>(undefined);

  readonly hasActionButton = input<boolean>(true);
  readonly actionButton = input<HeaderActionButtonConfig | undefined>(undefined);

  readonly hasIconButtons = input<boolean>(true);
  readonly iconButtons = input<HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>[] | undefined>(undefined);

  readonly hasAvatar = input<boolean>(true);
  readonly avatarProps = input<HeaderAvatarConfig | undefined>(undefined);

  readonly mobileMenuButton = input<HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey> | undefined>(
    undefined,
  );
  readonly mobileMenuItems = input<DropdownItemConfig[]>([]);
  readonly mobileSearchButtonAriaLabel = input<string>("Rechercher");

  readonly isSearchActive = input<boolean>(false);
  readonly isSearchActiveChange = output<boolean>();

  readonly hasDivider = input<boolean>(false);

  readonly internalIsSearchActive = signal<boolean>(false);
  private readonly lastSeenExternalIsSearchActive = signal<boolean>(false);

  readonly navigationItemClick = output<string | undefined>();
  readonly searchEvent = output<string | undefined>();
  readonly actionButtonClick = output<void>();
  readonly iconButtonClick = output<string | undefined>();
  readonly avatarClick = output<void>();
  readonly mobileMenuClick = output<void>();
  readonly mobileMenuItemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();

  readonly isDesktop = signal<boolean>(HeaderComponent.readIsDesktopFromWindow());
  readonly isVisible = signal<boolean>(true);

  readonly projectedLeftSection = contentChild(HeaderLeftDirective);
  readonly projectedMobileMenu = contentChild(HeaderMobileMenuDirective);

  readonly computedLeftSectionConfig = computed<HeaderLeftSectionConfig | undefined>(() => {
    return {
      hasLogo: this.hasLogo(),
      applicationName: this.applicationName(),
      logoSrc: this.logoSrc(),
      homeLink: this.homeLink(),
      homeAriaLabel: this.homeAriaLabel(),
    };
  });

  readonly shouldRenderSubheader = computed(() => this.hasSubHeader() && !!this.subHeaderConfig()?.items?.length);

  readonly breadcrumbsAriaLabel = computed(
    () => this.subHeaderConfig()?.ariaLabel || HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL,
  );

  readonly actionButtonSize = computed<Exclude<ButtonSize, "l">>(() => (this.isCompact() ? "s" : "m"));

  readonly iconButtonSize = computed<ButtonSize>(() => (this.isCompact() ? "m" : "l"));

  readonly badgeSize = computed<BadgeSize>(() => (this.isCompact() ? "m" : "l"));

  readonly searchbarAppearance = computed<SearchBarAppearance>(() =>
    this.appearance() === "neutral" ? "secondary" : "primary",
  );

  readonly actionButtonVariant = computed<ButtonVariant>(() =>
    this.appearance() === "neutral" ? "neutral" : "primary",
  );

  readonly rightSectionIconButtonsVariant = computed<ButtonVariant>(() =>
    this.appearance() === "neutral" ? "neutral" : "text",
  );

  private scrollState: ScrollDirectionState = { lastScrollY: 0, lastDirection: "up" };

  private static readIsDesktopFromWindow(): boolean {
    if (typeof globalThis === "undefined") {
      return true;
    }
    const windowReference = (globalThis as { window?: Window }).window;
    if (!windowReference || typeof windowReference.innerWidth !== "number") {
      return true;
    }
    return windowReference.innerWidth >= HEADER_DESKTOP_BREAKPOINT_PX;
  }

  constructor() {
    this.internalIsSearchActive.set(this.isSearchActive());
    this.lastSeenExternalIsSearchActive.set(this.isSearchActive());

    effect(() => this.syncViewportMode());

    effect(() => {
      const nextExternal = this.isSearchActive();
      if (nextExternal === this.lastSeenExternalIsSearchActive()) {
        return;
      }
      this.lastSeenExternalIsSearchActive.set(nextExternal);
      this.internalIsSearchActive.set(nextExternal);
    });

    effect((onCleanup) => {
      const teardown = this.setupScrollBehavior();
      onCleanup(teardown);
    });

    effect(() => {
      if (this.isDesktop()) {
        if (this.internalIsSearchActive()) {
          this.handleIsSearchActiveChange(false);
        }
      }
    });
  }

  private syncViewportMode(): void {
    const update = (): void => {
      this.isDesktop.set(window.innerWidth >= HEADER_DESKTOP_BREAKPOINT_PX);
    };

    update();
    window.addEventListener("resize", update);
    this.destroyRef.onDestroy(() => {
      window.removeEventListener("resize", update);
    });
  }

  private setupScrollBehavior(): () => void {
    const isSticky = this.isSticky();
    const showAtScrollUp = this.showAtScrollUp();

    this.isVisible.set(true);
    this.scrollState = { lastScrollY: window.scrollY || 0, lastDirection: "up" };

    if (!isSticky || !showAtScrollUp) {
      return () => {};
    }

    const onScroll = (): void => {
      const nextScrollY = window.scrollY || 0;
      this.scrollState = resolveScrollDirection(this.scrollState, nextScrollY, 2);

      if (nextScrollY <= 0) {
        this.isVisible.set(true);
        return;
      }

      this.isVisible.set(this.scrollState.lastDirection === "up");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }

  handleNavigationItemClick(item: HeaderNavigationItem, event: MouseEvent): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    this.navigationItemClick.emit(item.id || item.label);
  }

  handleSearchEvent(value: string | undefined): void {
    this.searchEvent.emit(value);
  }

  handleActionButtonClick(): void {
    this.actionButtonClick.emit();
  }

  handleIconButtonClick(button: HeaderIconButtonConfig): void {
    this.iconButtonClick.emit(button.id);
  }

  handleAvatarClick(): void {
    this.avatarClick.emit();
  }

  handleMobileMenuClick(): void {
    this.mobileMenuClick.emit();
  }

  handleMobileMenuItemEvent(event: { event: Event; id: string; item?: DropdownItemConfig }): void {
    this.mobileMenuItemEvent.emit(event);
  }

  handleIsSearchActiveChange(nextValue: boolean): void {
    this.internalIsSearchActive.set(nextValue);
    this.isSearchActiveChange.emit(nextValue);
  }
}
