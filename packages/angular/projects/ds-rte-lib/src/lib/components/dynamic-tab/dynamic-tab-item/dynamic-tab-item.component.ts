import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import {
  DYNAMIC_TAB_CLOSE_ANIMATION_MS,
  DYNAMIC_TAB_ITEM_SMALL_WIDTH,
  DYNAMIC_TAB_ITEM_XSMALL_WIDTH,
  DYNAMIC_TAB_MIN_WIDTH,
} from "@design-system-rte/core/components/dynamic-tab/dynamic-tab.constants";
import {
  DynamicTabAppearance,
  DynamicTabItemOption,
} from "@design-system-rte/core/components/dynamic-tab/dynamic-tab.interface";
import { ENTER_KEY, ESCAPE_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { getTextWidth } from "@design-system-rte/core/utils/string.utils";

import { BadgeComponent } from "../../badge/badge.component";
import { IconComponent } from "../../icon/icon.component";

@Component({
  selector: "rte-dynamic-tab-item",
  imports: [CommonModule, IconComponent, BadgeComponent],
  templateUrl: "./dynamic-tab-item.component.html",
  styleUrl: "./dynamic-tab-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "rte-dynamic-tab-item",
    role: "tab",
    "[attr.data-tab-id]": "option().id",
    "[attr.data-active]": "isActive()",
    "[attr.data-appearance]": "appearance()",
    "[attr.data-compact-spacing]": "compactSpacing()",
    "[attr.data-is-animating]": "isAnimating()",
    "[attr.data-is-disappearing]": "isDisappearing()",
    "[attr.aria-selected]": "isActive()",
    "[attr.aria-label]": "isEditing() ? titleText() : option().title",
    "[tabIndex]": "isActive() ? 0 : -1",
    "[style.width.px]": "tabWidth()",
    "[style.min-width.px]": "tabWidth()",
    "[style.max-width.px]": "tabWidth()",
    "(click)": "onTabClick()",
    "(keydown)": "onTabKeydown($event)",
    "(keyup)": "onTabKeyup($event)",
  },
})
export class DynamicTabItemComponent implements AfterViewInit, OnDestroy {
  readonly hostElement = inject(ElementRef<HTMLElement>);

  readonly option = input.required<DynamicTabItemOption>();
  readonly appearance = input<DynamicTabAppearance>("neutral");
  readonly isActive = input(false);
  readonly compactSpacing = input(false);
  readonly isEditable = input(true);
  readonly isClosable = input(true);
  readonly iconName = input<string | undefined>(undefined);
  readonly tabWidth = input(DYNAMIC_TAB_MIN_WIDTH);
  readonly isMoving = input(false);

  readonly tabClick = output<string>();
  readonly closeTab = output<string>();
  readonly changeTitle = output<{ id: string; title: string }>();
  readonly enterMoveMode = output<void>();
  readonly tabKeydown = output<KeyboardEvent>();

  readonly titleInputElement = viewChild<ElementRef<HTMLInputElement>>("titleInput");

  readonly isEditing = signal(false);
  readonly titleText = signal("");
  readonly previousTabTitle = signal("");
  readonly isAnimating = signal(false);
  readonly isDisappearing = signal(false);

  readonly shouldDisplayBadge = signal(false);
  readonly shouldDisplayIcon = signal(false);
  readonly shouldDisplayText = signal(false);
  readonly shouldDisplayCloseButton = signal(false);
  readonly isZeroToExtraSmall = signal(false);

  private resizeObserver: ResizeObserver | null = null;
  private closeAnimationTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const title = this.option().title;

      if (!this.isEditing()) {
        this.titleText.set(title);
        this.previousTabTitle.set(title);
      }
    });
  }

  ngAfterViewInit(): void {
    this.isAnimating.set(true);
    this.updateDisplayElements(this.hostElement.nativeElement);
    this.resizeObserver = new ResizeObserver(() => this.updateDisplayElements(this.hostElement.nativeElement));
    this.resizeObserver.observe(this.hostElement.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();

    if (this.closeAnimationTimeout) {
      clearTimeout(this.closeAnimationTimeout);
    }
  }

  onTabClick(): void {
    this.tabClick.emit(this.option().id);
  }

  onTabKeydown(event: KeyboardEvent): void {
    if (this.isEditing()) {
      this.handleEditingKeydown(event);
      return;
    }

    this.tabKeydown.emit(event);
  }

  onTabKeyup(event: KeyboardEvent): void {
    if (this.isEditing() || !this.isActive() || event.key !== SPACE_KEY) {
      return;
    }

    this.enterMoveMode.emit();
  }

  onTitleDoubleClick(): void {
    if (!this.isEditable() || !this.isActive()) {
      return;
    }

    this.enableEditingMode();
  }

  onTitleKeydown(event: KeyboardEvent): void {
    if (this.isEditing()) {
      return;
    }

    if ((event.key === ENTER_KEY || event.key === SPACE_KEY) && this.isActive() && this.isEditable()) {
      event.stopPropagation();
      this.enableEditingMode();
    }
  }

  onTitleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.titleText.set(inputElement.value);
    this.updateInputWidth(inputElement);
  }

  onTitleBlur(): void {
    if (this.isEditable()) {
      this.commitTabTitle();
    }
  }

  onCloseClick(event: MouseEvent): void {
    event.stopPropagation();
    this.startCloseAnimation();
  }

  onCloseKeydown(event: KeyboardEvent): void {
    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      event.stopPropagation();
      this.startCloseAnimation();
    }
  }

  onCloseKeyup(event: KeyboardEvent): void {
    if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  hasBadgeContent(): boolean {
    const option = this.option();
    return !!(
      (option.badgeCount && option.badgeCount > 0 && option.badgeContent === "number") ||
      (option.badgeContent === "icon" && option.badgeIcon)
    );
  }

  private updateDisplayElements(hostElement: HTMLElement): void {
    const width = hostElement.offsetWidth || this.tabWidth();
    const isActive = this.isActive();
    const isClosable = this.isClosable();
    const hasBadge = this.hasBadgeContent();
    const hasIcon = !!this.iconName();

    if (width <= DYNAMIC_TAB_MIN_WIDTH && isActive) {
      this.isZeroToExtraSmall.set(true);
      this.shouldDisplayBadge.set(false);
      this.shouldDisplayIcon.set(false);
      this.shouldDisplayText.set(false);
      this.shouldDisplayCloseButton.set(isClosable);
      return;
    }

    const isZeroToExtraSmall = width <= DYNAMIC_TAB_ITEM_XSMALL_WIDTH;
    const isExtraSmallToSmall = width > DYNAMIC_TAB_ITEM_XSMALL_WIDTH && width <= DYNAMIC_TAB_ITEM_SMALL_WIDTH;
    const isSmallOrMore = width > DYNAMIC_TAB_ITEM_SMALL_WIDTH;

    this.isZeroToExtraSmall.set(isZeroToExtraSmall);
    this.shouldDisplayBadge.set(hasBadge && (!isZeroToExtraSmall || !isActive));
    this.shouldDisplayIcon.set(hasIcon && (isSmallOrMore || (isZeroToExtraSmall && !hasBadge) || isExtraSmallToSmall));
    this.shouldDisplayText.set(isExtraSmallToSmall || isSmallOrMore);
    this.shouldDisplayCloseButton.set(
      isClosable && (isSmallOrMore || ((isZeroToExtraSmall || isExtraSmallToSmall) && isActive)),
    );
  }

  private enableEditingMode(): void {
    this.isEditing.set(true);
    this.previousTabTitle.set(this.titleText());

    waitForNextFrame(() => {
      const inputElement = this.titleInputElement()?.nativeElement;

      if (inputElement) {
        this.updateInputWidth(inputElement);
        inputElement.focus();
        inputElement.select();
      }
    });
  }

  private handleEditingKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    if (event.key === ENTER_KEY) {
      this.commitTabTitle();
      return;
    }

    if (event.key === ESCAPE_KEY) {
      this.cancelEditing();
    }
  }

  private commitTabTitle(): void {
    this.isEditing.set(false);
    const trimmedTitle = this.titleText().trim();

    if (trimmedTitle === "") {
      this.titleText.set(this.previousTabTitle());
      return;
    }

    if (trimmedTitle !== this.previousTabTitle()) {
      this.changeTitle.emit({ id: this.option().id, title: trimmedTitle });
    }

    this.previousTabTitle.set(trimmedTitle);
  }

  private cancelEditing(): void {
    this.isEditing.set(false);
    this.titleText.set(this.previousTabTitle());
  }

  private updateInputWidth(inputElement: HTMLInputElement): void {
    const measure = getTextWidth(inputElement);
    inputElement.style.width = `${measure(this.titleText()) + 8}px`;
  }

  private startCloseAnimation(): void {
    this.isDisappearing.set(true);

    this.closeAnimationTimeout = setTimeout(() => {
      this.closeTab.emit(this.option().id);
    }, DYNAMIC_TAB_CLOSE_ANIMATION_MS);
  }
}
