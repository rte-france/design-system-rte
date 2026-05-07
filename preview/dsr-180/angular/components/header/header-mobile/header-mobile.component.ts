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
  viewChild,
  afterNextRender,
} from "@angular/core";
import { SearchBarProps } from "@design-system-rte/core";
import { buildHeaderHomeAriaLabel, type HeaderIconButtonConfig } from "@design-system-rte/core/components/header";
import { ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { SearchbarComponent } from "../../searchbar/searchbar.component";

const DEFAULT_HOME_LINK = "/";
const DEFAULT_SEARCHBAR_ID = "rte-header-searchbar";

@Component({
  selector: "rte-header-mobile",
  imports: [CommonModule, IconButtonComponent, SearchbarComponent],
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

  readonly isSearchActive = input<boolean>(false);
  readonly isSearchActiveChange = output<boolean>();
  readonly mobileMenuClick = output<void>();

  readonly mobileSearchButtonRef = viewChild<ElementRef<HTMLButtonElement>>("mobileSearchButtonRef");
  readonly rootRef = viewChild<ElementRef<HTMLElement>>("rootRef");

  private outsidePointerDownCleanup: (() => void) | null = null;

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());

  readonly computedHomeAriaLabel = computed(() => {
    return this.homeAriaLabel() ?? buildHeaderHomeAriaLabel(this.applicationName());
  });

  readonly rightSectionWidth = computed(() => (this.isSearchActive() ? "calc(100% - 40px)" : "80px"));

  constructor() {
    effect(
      () => {
        if (!this.hasSearchbar()) {
          this.teardownOutsideCloseListener();
          return;
        }

        if (this.isSearchActive()) {
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
  }

  handleRootKeyDown(event: KeyboardEvent): void {
    if (event.key !== ESCAPE_KEY) {
      return;
    }
    if (!this.isSearchActive()) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.emitCloseMobileSearch();
  }

  openMobileSearch(): void {
    if (!this.hasSearchbar()) {
      return;
    }
    this.isSearchActiveChange.emit(true);
  }

  emitCloseMobileSearch(): void {
    this.isSearchActiveChange.emit(false);
    queueMicrotask(() => {
      this.mobileSearchButtonRef()?.nativeElement.focus();
    });
  }

  handleMobileMenuClick(): void {
    this.mobileMenuClick.emit();
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

    this.destroyRef.onDestroy(() => {
      this.teardownOutsideCloseListener();
    });
  }

  private teardownOutsideCloseListener(): void {
    this.outsidePointerDownCleanup?.();
  }

  private focusSearchInput(): void {
    const searchbarId = this.searchbarProps()?.id || DEFAULT_SEARCHBAR_ID;
    const inputEl = document.getElementById(searchbarId) as HTMLInputElement | null;
    if (inputEl) {
      inputEl.focus();
    }
  }
}
