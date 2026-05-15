import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
  afterNextRender,
} from "@angular/core";
import { SearchBarAppearance, SearchBarProps } from "@design-system-rte/core";
import { buildHeaderHomeAriaLabel, type HeaderIconButtonConfig } from "@design-system-rte/core/components/header";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { DropdownMenuBodyDirective } from "../../dropdown/dropdown-menu/dropdown-menu-body.directive";
import { DropdownMenuComponent } from "../../dropdown/dropdown-menu/dropdown-menu.component";
import { DropdownTriggerDirective } from "../../dropdown/dropdown-trigger/dropdown-trigger.directive";
import { DropdownDirective } from "../../dropdown/dropdown.directive";
import type { DropdownItemConfig } from "../../dropdown/dropdown.types";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { SearchbarComponent } from "../../searchbar/searchbar.component";

const DEFAULT_HOME_LINK = "/";
const DEFAULT_SEARCHBAR_ID = "rte-header-searchbar";
const SEARCH_COLLAPSE_TRANSITION_MS = 200;

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

  readonly mobileMenuButton = input<HeaderIconButtonConfig | undefined>(undefined);
  readonly mobileMenuItems = input<DropdownItemConfig[]>([]);
  readonly hasProjectedMobileMenu = input<boolean>(false);

  readonly isSearchActive = input<boolean>(false);
  readonly isSearchActiveChange = output<boolean>();
  readonly mobileMenuClick = output<void>();
  readonly mobileMenuItemEvent = output<{ event: Event; id: string; item?: DropdownItemConfig }>();

  readonly mobileSearchButtonRef = viewChild<ElementRef<HTMLButtonElement>>("mobileSearchButtonRef");
  readonly rootRef = viewChild<ElementRef<HTMLElement>>("rootRef");

  private outsidePointerDownCleanup: (() => void) | null = null;
  private collapseTransitionTimer: ReturnType<typeof setTimeout> | null = null;

  readonly shouldRenderSearchbar = signal<boolean>(this.isSearchActive());
  readonly isMobileMenuOpen = signal<boolean>(false);

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());
  readonly isDropdownMenuEnabled = computed(() => this.hasProjectedMobileMenu() || !!this.mobileMenuItems().length);

  readonly computedHomeAriaLabel = computed(
    () => this.homeAriaLabel() ?? buildHeaderHomeAriaLabel(this.applicationName()),
  );

  readonly rightSectionPlaceholderWidth = computed(() => (this.hasRightSection() ? "112px" : "0"));
  readonly rightSectionWidth = computed(() => (this.isSearchActive() ? "calc(100% - 40px)" : "80px"));

  readonly searchbarAppearance = computed<SearchBarAppearance>(() =>
    this.appearance() === "neutral" ? "secondary" : "primary",
  );
  readonly searchState = computed<"open" | "closed">(() => (this.isSearchActive() ? "open" : "closed"));

  constructor() {
    effect(
      () => {
        if (!this.hasSearchbar()) {
          this.teardownOutsideCloseListener();
          this.clearCollapseTransitionTimer();
          this.shouldRenderSearchbar.set(false);
          return;
        }

        const isActive = this.isSearchActive();
        this.syncSearchbarRenderState(isActive);

        if (isActive) {
          this.closeMobileMenu();
          this.ensureOutsideCloseListener();
          afterNextRender(
            () => {
              this.focusSearchInput();
            },
            { injector: this.injector },
          );
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
    setTimeout(() => {
      this.mobileSearchButtonRef()?.nativeElement.focus();
    }, SEARCH_COLLAPSE_TRANSITION_MS);
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

  private syncSearchbarRenderState(isActive: boolean): void {
    this.clearCollapseTransitionTimer();
    if (isActive) {
      this.shouldRenderSearchbar.set(true);
      return;
    }
    this.collapseTransitionTimer = setTimeout(() => {
      this.shouldRenderSearchbar.set(false);
      this.collapseTransitionTimer = null;
    }, SEARCH_COLLAPSE_TRANSITION_MS);
  }

  private clearCollapseTransitionTimer(): void {
    if (this.collapseTransitionTimer === null) {
      return;
    }
    clearTimeout(this.collapseTransitionTimer);
    this.collapseTransitionTimer = null;
  }

  private focusSearchInput(): void {
    const searchbarId = this.searchbarProps()?.id || DEFAULT_SEARCHBAR_ID;
    const inputElement = document.getElementById(searchbarId) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.focus();
    }
  }
}
