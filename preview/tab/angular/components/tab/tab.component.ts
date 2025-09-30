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

import { BadgeComponent } from "../badge/badge.component";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-tab",
  imports: [CommonModule, IconComponent, BadgeComponent],
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

  readonly tabItemRefs = viewChildren<ElementRef<HTMLDivElement>>("tabItem");

  readonly selectedTabRef = computed(() => {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx];
    return tabItem;
  });

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedTabId"]) {
      this.updateSelectedTabItemIndicator();
    }
  }

  onClickTabItem(id: string): void {
    if (this.selectedTabId() !== id) {
      this.change.emit(id);
    }
  }

  onKeydownTabItem = (event: KeyboardEvent) => {
    if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY].includes(event.key)) {
      event.preventDefault();
      if (event.key === ARROW_RIGHT_KEY) {
        this.focusItem("next");
      } else {
        this.focusItem("previous");
      }
    }
  };

  private focusItem = (direction: "next" | "previous") => {
    const parent = this.selectedTabRef()?.nativeElement.parentElement;
    const currentIndex = this.tabItemRefs().findIndex((tab) => tab === this.selectedTabRef());
    if (!parent) return;
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % this.tabItemRefs().length;
    } else {
      newIndex = (currentIndex - 1 + this.tabItemRefs().length) % this.tabItemRefs().length;
    }
    this.tabItemRefs()[newIndex].nativeElement.focus();
    this.tabItemRefs()[newIndex].nativeElement.click();
  };

  private updateSelectedTabItemIndicator() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedTabId());
    const tabItem = this.tabItemRefs()[idx]?.nativeElement;

    if (tabItem) {
      console.log(this.direction());
      if (this.direction() === "horizontal") {
        this.sliderTop.set(tabItem.offsetTop + tabItem.offsetHeight);
        this.sliderWidth.set(tabItem.offsetWidth);
        this.sliderLeft.set(tabItem.offsetLeft);
      } else {
        this.sliderTop.set(tabItem.offsetTop);
        this.sliderHeight.set(tabItem.offsetHeight);
        this.sliderLeft.set(tabItem.offsetLeft - 2);
      }
    }
  }
}
