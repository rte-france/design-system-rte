import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
  signal,
  viewChildren,
  ElementRef,
  SimpleChanges,
  output,
  AfterViewInit,
  OnChanges,
} from "@angular/core";
import { Direction } from "@design-system-rte/core/components/common/common-types";
import { TabAlignment, TabItemProps, TabProps } from "@design-system-rte/core/components/tab/tab.interface";
import { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { TabItemComponent } from "./tab-item/tab-item.component";

@Component({
  selector: "rte-tab",
  imports: [CommonModule, TabItemComponent],
  standalone: true,
  templateUrl: "./tab.component.html",
  styleUrl: "./tab.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements AfterViewInit, OnChanges {
  readonly alignment = input<TabAlignment>("start");
  readonly direction = input<Direction>("horizontal");
  readonly options = input<TabProps["options"]>([]);
  readonly selectedTabId = input<TabProps["selectedTabId"]>();
  readonly compactSpacing = input<TabProps["compactSpacing"]>(false);

  readonly sliderLeft = signal(0);
  readonly sliderWidth = signal(2);
  readonly sliderTop = signal(0);
  readonly sliderHeight = signal(2);

  readonly tabItemRefs = viewChildren<TabItemComponent>("tabItem");
  readonly hoverIndicatorRefs = viewChildren<ElementRef<HTMLDivElement>>("hoverIndicator");

  readonly selectedTabRef = computed(() => {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx];
    return tabItem;
  });

  readonly hoverIndicatorStyle = signal<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  readonly change = output<string>();

  displayBadge = (option: TabItemProps): boolean => {
    return (
      !!option.showBadge ||
      (option.badgeCount !== undefined && option.badgeCount > 0 && option.badgeAppearance === "text") ||
      (option.badgeAppearance === "icon" && !!option.badgeIcon)
    );
  };

  isSelected(id: string): boolean {
    return this.selectedTabId() === id;
  }

  readonly tabItemSelectedIndicatorStyle = computed(() => ({
    left: `${this.sliderLeft()}px`,
    top: `${this.sliderTop()}px`,
    width: `${this.sliderWidth()}px`,
    height: `${this.sliderHeight()}px`,
  }));

  ngAfterViewInit() {
    this.updateSelectedTabItemIndicator();
    window.addEventListener("resize", this.updateSelectedTabItemIndicator.bind(this));
    this.hoverIndicatorRefs().forEach((hoverIndicator) => {
      hoverIndicator.nativeElement.style.opacity = "0";
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedTabId"]) {
      console.log("selectedTabId changed:", changes["selectedTabId"]);
      this.updateSelectedTabItemIndicator();
    }
  }

  onKeydownTabItem = (event: KeyboardEvent) => {
    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(event.key)) {
      event.preventDefault();
      if (event.key === ARROW_RIGHT_KEY) {
        console.log("event.key:", event.key);
        this.focusItem("next");
      } else {
        this.focusItem("previous");
      }
    }
  };

  onClickTabItem = (id: string) => {
    if (id !== this.selectedTabId()) {
      this.change.emit(id);
    }
  };

  private focusItem = (direction: "next" | "previous") => {
    const currentIndex = this.tabItemRefs().findIndex((tab) => tab === this.selectedTabRef());
    const maxIterations = this.tabItemRefs().length;
    let newIndex = this.computeNextItemIndex(currentIndex, maxIterations, direction);
    let counter = 0;
    while (
      this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.getAttribute("data-disabled") === "true" &&
      counter < maxIterations
    ) {
      console.log("Tab item is disabled, moving to next/previous");
      newIndex = this.computeNextItemIndex(newIndex, maxIterations, direction);
      counter++;
    }
    this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.focus();
    this.tabItemRefs()[newIndex].tabItemRef()?.nativeElement.click();
  };

  private computeNextItemIndex(currentIndex: number, totalItems: number, direction: "next" | "previous") {
    return direction === "next" ? (currentIndex + 1) % totalItems : (currentIndex - 1 + totalItems) % totalItems;
  }

  private computeIndicatorStyle(tabItem: HTMLElement) {
    if (this.direction() === "horizontal") {
      return {
        width: tabItem.offsetWidth,
        left: tabItem.offsetLeft,
        top: tabItem.offsetTop + tabItem.offsetHeight,
      };
    } else {
      return {
        left: tabItem.offsetLeft - 2,
        top: tabItem.offsetTop,
        height: tabItem.offsetHeight,
      };
    }
  }

  private updateSelectedTabItemIndicator() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx];
    if (tabItem && tabItem.tabItemRef) {
      if (tabItem.option()?.disabled) return;
      const tabItemRef = tabItem.tabItemRef?.();
      if (tabItemRef && tabItemRef.nativeElement) {
        const tabItemElement = tabItemRef.nativeElement;
        const indicatorStyle = this.computeIndicatorStyle(tabItemElement);
        this.sliderHeight.set(indicatorStyle.height ?? 2);
        this.sliderTop.set(indicatorStyle.top);
        this.sliderWidth.set(indicatorStyle.width ?? 2);
        this.sliderLeft.set(indicatorStyle.left);
      }
    }
  }
}
