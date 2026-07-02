import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import {
  HEADER_MOBILE_SEARCH_TRANSITION_MS,
  buildHeaderHomeAriaLabel,
  type HeaderIconButtonConfig,
} from "@design-system-rte/core/components/header";
import { SearchBarAppearance, SearchBarProps } from "@design-system-rte/core/components/searchbar";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownMenuBodyDirective } from "../../dropdown/dropdown-menu/dropdown-menu-body.directive";
import { DropdownMenuComponent } from "../../dropdown/dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "../../dropdown/dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../../dropdown/dropdown.directive";
import type { DropdownItemConfig } from "../../dropdown/dropdown.types";
import { RegularIconIdKey, TogglableIconIdKey } from "../../icon/icon.service";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { SearchbarComponent } from "../../searchbar/searchbar.component";

const DEFAULT_HOME_LINK = "/";
const DEFAULT_SEARCHBAR_ID = "rte-header-searchbar";
const MOBILE_SEARCH_TRIGGER_SIZE_PX = 32;

@Component({
  selector: "rte-header-mobile",
  imports: [
    CommonModule,
    IconButtonComponent,
    SearchbarComponent,
    DropdownDirective,
    DropdownMenuComponent,
    DropdownMenuBodyDirective,
    DropdownTriggerDirective,
  ],
  standalone: true,
  templateUrl: "./header-mobile.component.html",
  styleUrl: "./header-mobile.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMobileComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);

  readonly appearance = input<"brand" | "neutral">("brand");
  readonly isCompact = input<boolean>(false);

  readonly hasLeftSection = input<boolean>(true);
  readonly hasRightSection = input<boolean>(true);
  readonly hasLogo = input<boolean>(true);
  readonly applicationName = input<string>("");
  readonly logoSrc = input<string | undefined>(undefined);
  readonly homeLink = input<string>(DEFAULT_HOME_LINK);
  readonly homeAriaLabel = input<string | undefined>(undefined);

  readonly hasSearchbar = input<boolean>(true);
  readonly searchbarProps = input<SearchBarProps | undefined>(undefined);
  readonly mobileSearchButtonAriaLabel = input<string>("Rechercher");

  readonly mobileMenuButton = input<HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey> | undefined>(
    undefined,
  );
  readonly mobileMenuItems = input<DropdownItemConfig[]>([]);
  readonly hasProjectedMobileMenu = input<boolean>(false);

  readonly isSearchActive = input<boolean>(false);
  readonly isSearchActiveChange = output<boolean>();
  readonly mobileMenuClick = output<void>();
  readonly mobileMenuItemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();

  readonly mobileSearchButtonRef = viewChild("mobileSearchButtonRef", { read: ElementRef<HTMLElement> });
  readonly rootRef = viewChild<ElementRef<HTMLElement>>("rootRef");

  private outsidePointerDownCleanup: (() => void) | null = null;
  private collapseTransitionTimer: ReturnType<typeof setTimeout> | null = null;
  private collapsingFieldElement: HTMLElement | null = null;

  readonly shouldRenderSearchbar = signal<boolean>(false);
  readonly isSearchExpanded = signal<boolean>(false);
  readonly isSearchCollapsing = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());
  readonly isDropdownMenuEnabled = computed(() => this.hasProjectedMobileMenu() || !!this.mobileMenuItems().length);

  readonly computedHomeAriaLabel = computed(
    () => this.homeAriaLabel() ?? buildHeaderHomeAriaLabel(this.applicationName()),
  );

  readonly searchbarAppearance = computed<SearchBarAppearance>(() =>
    this.appearance() === "neutral" ? "secondary" : "primary",
  );
  readonly searchState = computed<"open" | "closed">(() => (this.isSearchExpanded() ? "open" : "closed"));

  constructor() {
    effect(
      () => {
        if (!this.hasSearchbar()) {
          this.teardownOutsideCloseListener();
          this.clearCollapseTransitionTimer();
          this.shouldRenderSearchbar.set(false);
          this.isSearchExpanded.set(false);
          this.isSearchCollapsing.set(false);
          return;
        }

        const isActive = this.isSearchActive();
        this.syncSearchVisualState(isActive);

        if (isActive) {
          this.closeMobileMenu();
          this.ensureOutsideCloseListener();
          return;
        }

        this.teardownOutsideCloseListener();
      },
      { allowSignalWrites: true },
    );

    this.destroyRef.onDestroy(() => {
      this.teardownOutsideCloseListener();
      this.clearCollapseTransitionTimer();
    });
  }

  handleRootKeyDown(event: KeyboardEvent): void {
    if (event.key !== ESCAPE_KEY) {
      return;
    }
    if (this.isSearchActive()) {
      event.preventDefault();
      event.stopPropagation();
      this.emitCloseMobileSearch();
      return;
    }
    if (this.isDropdownMenuEnabled() && this.isMobileMenuOpen()) {
      event.preventDefault();
      event.stopPropagation();
      this.closeMobileMenu();
    }
  }

  openMobileSearch(): void {
    if (!this.hasSearchbar()) {
      return;
    }
    this.isSearchActiveChange.emit(true);
  }

  emitCloseMobileSearch(): void {
    this.isSearchActiveChange.emit(false);
  }

  handleMobileMenuClick(): void {
    if (!this.isDropdownMenuEnabled()) {
      this.mobileMenuClick.emit();
      return;
    }
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  handleMobileMenuEvent(event: { event: Event; id: string; item?: DropdownItemConfig }): void {
    this.mobileMenuItemEvent.emit(event);
    this.closeMobileMenu();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  private ensureOutsideCloseListener(): void {
    if (this.outsidePointerDownCleanup) {
      return;
    }
    const handler = (event: PointerEvent): void => {
      if (!this.isSearchActive()) {
        return;
      }
      const rootElement = this.rootRef()?.nativeElement;
      if (!rootElement) {
        return;
      }
      const target = event.target as Node | null;
      if (target && rootElement.contains(target)) {
        return;
      }
      this.emitCloseMobileSearch();
    };

    document.addEventListener("pointerdown", handler, { capture: true });
    this.outsidePointerDownCleanup = () => {
      document.removeEventListener("pointerdown", handler, { capture: true } as AddEventListenerOptions);
      this.outsidePointerDownCleanup = null;
    };
  }

  private teardownOutsideCloseListener(): void {
    this.outsidePointerDownCleanup?.();
  }

  private syncSearchVisualState(isActive: boolean): void {
    this.clearCollapseTransitionTimer();

    if (isActive) {
      this.clearCollapsingFieldInlineStyles();
      this.isSearchCollapsing.set(false);
      this.shouldRenderSearchbar.set(true);
      this.isSearchExpanded.set(false);
      this.scheduleSearchExpandAnimation();
      return;
    }

    this.isSearchCollapsing.set(true);
    this.scheduleSearchCollapseAnimation();
  }

  private scheduleSearchExpandAnimation(): void {
    afterNextRender(
      () => {
        if (!this.isSearchActive()) {
          return;
        }

        const fieldElement = this.rootRef()?.nativeElement.querySelector(".search-action__field") as HTMLElement | null;

        fieldElement?.getBoundingClientRect();

        requestAnimationFrame(() => {
          if (!this.isSearchActive()) {
            return;
          }
          this.isSearchExpanded.set(true);
          this.scheduleSearchInputFocusAfterExpand(fieldElement);
        });
      },
      { injector: this.injector },
    );
  }

  private scheduleSearchInputFocusAfterExpand(fieldElement: HTMLElement | null): void {
    if (!fieldElement) {
      afterNextRender(
        () => {
          if (!this.isSearchActive() || !this.isSearchExpanded()) {
            return;
          }
          this.focusSearchInput();
        },
        { injector: this.injector },
      );
      return;
    }

    const handleTransitionEnd = (event: TransitionEvent): void => {
      if (event.target !== fieldElement || event.propertyName !== "width") {
        return;
      }
      fieldElement.removeEventListener("transitionend", handleTransitionEnd);
      this.focusSearchInput();
    };

    fieldElement.addEventListener("transitionend", handleTransitionEnd);
    setTimeout(() => {
      fieldElement.removeEventListener("transitionend", handleTransitionEnd);
      if (!this.isSearchActive() || !this.isSearchExpanded()) {
        return;
      }
      this.focusSearchInput();
    }, HEADER_MOBILE_SEARCH_TRANSITION_MS);
  }

  private scheduleSearchCollapseAnimation(): void {
    this.blurSearchInput();

    afterNextRender(
      () => {
        if (this.isSearchActive()) {
          return;
        }

        const fieldElement = this.rootRef()?.nativeElement.querySelector(".search-action__field") as HTMLElement | null;

        if (!fieldElement) {
          this.completeSearchCollapse();
          return;
        }

        this.collapsingFieldElement = fieldElement;
        const searchActionElement = fieldElement.parentElement;
        const containerWidthPx = searchActionElement?.getBoundingClientRect().width ?? 0;
        const expandedWidthPx = Math.min(fieldElement.getBoundingClientRect().width, containerWidthPx);

        fieldElement.style.maxWidth = "100%";
        fieldElement.style.transition = `width ${HEADER_MOBILE_SEARCH_TRANSITION_MS}ms ease`;
        fieldElement.style.width = `${expandedWidthPx}px`;
        fieldElement.getBoundingClientRect();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (this.isSearchActive()) {
              this.clearCollapsingFieldInlineStyles();
              return;
            }
            this.isSearchExpanded.set(false);
            fieldElement.style.width = `${MOBILE_SEARCH_TRIGGER_SIZE_PX}px`;
            this.listenForSearchCollapseEnd(fieldElement);
          });
        });
      },
      { injector: this.injector },
    );
  }

  private listenForSearchCollapseEnd(fieldElement: HTMLElement): void {
    const handleTransitionEnd = (event: TransitionEvent): void => {
      if (event.target !== fieldElement || event.propertyName !== "width") {
        return;
      }
      fieldElement.removeEventListener("transitionend", handleTransitionEnd);
      this.completeSearchCollapse();
    };

    fieldElement.addEventListener("transitionend", handleTransitionEnd);
    this.collapseTransitionTimer = setTimeout(() => {
      fieldElement.removeEventListener("transitionend", handleTransitionEnd);
      this.completeSearchCollapse();
    }, HEADER_MOBILE_SEARCH_TRANSITION_MS);
  }

  private completeSearchCollapse(): void {
    if (this.isSearchActive()) {
      return;
    }
    this.clearCollapseTransitionTimer();
    this.clearCollapsingFieldInlineStyles();
    this.shouldRenderSearchbar.set(false);
    this.isSearchCollapsing.set(false);
    this.focusMobileSearchButton();
  }

  private clearCollapsingFieldInlineStyles(): void {
    if (!this.collapsingFieldElement) {
      return;
    }
    this.collapsingFieldElement.style.width = "";
    this.collapsingFieldElement.style.maxWidth = "";
    this.collapsingFieldElement.style.transition = "";
    this.collapsingFieldElement = null;
  }

  private clearCollapseTransitionTimer(): void {
    if (this.collapseTransitionTimer === null) {
      return;
    }
    clearTimeout(this.collapseTransitionTimer);
    this.collapseTransitionTimer = null;
  }

  private blurSearchInput(): void {
    const rootElement = this.rootRef()?.nativeElement;
    if (!rootElement) {
      return;
    }

    const searchbarId = this.searchbarProps()?.id || DEFAULT_SEARCHBAR_ID;
    const inputById = rootElement.querySelector(`#${CSS.escape(searchbarId)}`) as HTMLInputElement | null;
    const inputElement =
      inputById ?? (rootElement.querySelector(".search-action__field input") as HTMLInputElement | null);

    inputElement?.blur();
  }

  private focusSearchInput(): void {
    const rootElement = this.rootRef()?.nativeElement;
    if (!rootElement) {
      return;
    }

    const searchbarId = this.searchbarProps()?.id || DEFAULT_SEARCHBAR_ID;
    const inputById = rootElement.querySelector(`#${CSS.escape(searchbarId)}`) as HTMLInputElement | null;
    const inputElement =
      inputById ?? (rootElement.querySelector(".search-action__field input") as HTMLInputElement | null);

    inputElement?.focus({ preventScroll: true });
  }

  private focusMobileSearchButton(): void {
    const hostElement = this.mobileSearchButtonRef()?.nativeElement;
    if (!hostElement) {
      return;
    }
    const buttonElement = hostElement.querySelector("button") as HTMLButtonElement | null;
    buttonElement?.focus();
  }
}
