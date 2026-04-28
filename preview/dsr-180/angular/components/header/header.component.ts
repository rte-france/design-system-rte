import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import {
  buildHeaderHomeAriaLabel,
  HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL,
  HEADER_DEFAULT_NAV_ARIA_LABEL,
  HEADER_DESKTOP_BREAKPOINT_PX,
  HEADER_MOBILE_SEARCH_TRANSITION_MS,
  HEADER_SUBHEADER_HEIGHT_COMPACT_PX,
  HEADER_SUBHEADER_HEIGHT_PX,
  HeaderSubHeaderConfig,
  resolveScrollDirection,
  type HeaderActionButtonConfig,
  type HeaderAppearance,
  type HeaderAvatarConfig,
  type HeaderIconButtonConfig,
  type HeaderLeftSectionType,
  type HeaderMidSectionType,
  type HeaderNavigationItem,
  type HeaderSearchbarConfig,
  type ScrollDirectionState,
} from "@design-system-rte/core/components/header";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { AvatarComponent } from "../avatar/avatar.component";
import { BadgeComponent } from "../badge/badge.component";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";

import { HeaderRightDirective } from "./header-right.directive";

const DEFAULT_HOME_LINK = "/";
const DEFAULT_SEARCHBAR_ID = "rte-header-searchbar";

@Component({
  selector: "rte-header",
  imports: [
    CommonModule,
    IconButtonComponent,
    ButtonComponent,
    SearchbarComponent,
    AvatarComponent,
    BadgeComponent,
    IconComponent,
    BreadcrumbsComponent,
    HeaderRightDirective,
  ],
  standalone: true,
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

  readonly leftSectionType = input<HeaderLeftSectionType>("default");
  readonly hasLogo = input<boolean>(true);
  readonly applicationName = input<string>("");
  readonly logoSrc = input<string | undefined>(undefined);
  readonly homeLink = input<string>(DEFAULT_HOME_LINK);
  readonly homeAriaLabel = input<string | undefined>(undefined);

  readonly hasMidSection = input<boolean>(true);
  readonly midSectionType = input<HeaderMidSectionType>("navigation");
  readonly navigationAriaLabel = input<string>(HEADER_DEFAULT_NAV_ARIA_LABEL);
  readonly navigationItems = input<HeaderNavigationItem[]>([]);

  readonly hasSearchbar = input<boolean>(true);
  readonly searchbarProps = input<HeaderSearchbarConfig | undefined>(undefined);

  readonly hasActionButton = input<boolean>(true);
  readonly actionButton = input<HeaderActionButtonConfig | undefined>(undefined);

  readonly hasIconButtons = input<boolean>(true);
  readonly iconButtons = input<HeaderIconButtonConfig[] | undefined>(undefined);

  readonly hasAvatar = input<boolean>(true);
  readonly avatarProps = input<HeaderAvatarConfig | undefined>(undefined);

  readonly mobileMenuButton = input<HeaderIconButtonConfig | undefined>(undefined);
  readonly mobileSearchButtonAriaLabel = input<string>("Rechercher");

  readonly isSearchActive = input<boolean>(false);
  readonly isSearchActiveChange = output<boolean>();

  readonly navigationItemClick = output<string | undefined>();
  readonly actionButtonClick = output<void>();
  readonly iconButtonClick = output<string | undefined>();
  readonly avatarClick = output<void>();
  readonly mobileMenuClick = output<void>();

  readonly headerRootRef = viewChild<ElementRef<HTMLElement>>("headerRootRef");
  readonly mobileSearchButtonRef = viewChild<ElementRef<HTMLButtonElement>>("mobileSearchButtonRef");

  readonly isDesktop = signal<boolean>(true);
  readonly isVisible = signal<boolean>(true);

  readonly computedHomeAriaLabel = computed(() => {
    const explicitLabel = this.homeAriaLabel();
    if (explicitLabel) {
      return explicitLabel;
    }
    const applicationName = this.applicationName();
    if (!applicationName) {
      return "Accueil";
    }
    return buildHeaderHomeAriaLabel(applicationName);
  });

  readonly shouldRenderMidSection = computed(() => {
    return this.isDesktop() && this.hasMidSection() && this.midSectionType() === "navigation";
  });

  readonly shouldRenderSubheader = computed(() => {
    return this.hasSubHeader() && !!this.subHeaderConfig()?.items?.length;
  });

  readonly breadcrumbsAriaLabel = computed(
    () => this.subHeaderConfig()?.ariaLabel || HEADER_DEFAULT_BREADCRUMBS_ARIA_LABEL,
  );

  readonly breadcrumbsItems = computed(() => this.subHeaderConfig()?.items || []);

  readonly subheaderHeightPx = computed(() => {
    return this.isCompact() ? HEADER_SUBHEADER_HEIGHT_COMPACT_PX : HEADER_SUBHEADER_HEIGHT_PX;
  });

  readonly mobileSearchTransitionMs = HEADER_MOBILE_SEARCH_TRANSITION_MS;

  private scrollState: ScrollDirectionState = { lastScrollY: 0, lastDirection: "up" };

  constructor() {
    effect(
      () => {
        this.syncViewportMode();
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        this.setupScrollBehavior();
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (this.isDesktop()) {
          if (this.isSearchActive()) {
            this.isSearchActiveChange.emit(false);
          }
        }
      },
      { allowSignalWrites: true },
    );

    effect(
      () => {
        if (!this.isDesktop() && this.isSearchActive()) {
          this.focusSearchInput();
        }
      },
      { allowSignalWrites: true },
    );
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

  private setupScrollBehavior(): void {
    const isSticky = this.isSticky();
    const showAtScrollUp = this.showAtScrollUp();

    this.isVisible.set(true);
    this.scrollState = { lastScrollY: window.scrollY || 0, lastDirection: "up" };

    if (!isSticky || !showAtScrollUp) {
      return;
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
    this.destroyRef.onDestroy(() => {
      window.removeEventListener("scroll", onScroll);
    });
  }

  handleNavigationItemClick(item: HeaderNavigationItem, event: MouseEvent): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    this.navigationItemClick.emit(item.id || item.label);
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

  openMobileSearch(): void {
    if (this.isDesktop()) {
      return;
    }
    this.isSearchActiveChange.emit(true);
  }

  closeMobileSearch(): void {
    if (this.isDesktop()) {
      return;
    }
    this.isSearchActiveChange.emit(false);
    this.mobileSearchButtonRef()?.nativeElement.focus();
  }

  handleMobileSearchKeyDown(event: KeyboardEvent): void {
    if (event.key === ESCAPE_KEY) {
      event.preventDefault();
      event.stopPropagation();
      this.closeMobileSearch();
    }
  }

  private focusSearchInput(): void {
    const searchbarId = this.searchbarProps()?.id || DEFAULT_SEARCHBAR_ID;
    const inputEl = document.getElementById(searchbarId) as HTMLInputElement | null;
    if (inputEl) {
      inputEl.focus();
    }
  }
}
