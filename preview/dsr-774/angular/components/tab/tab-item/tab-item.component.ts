import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  ElementRef,
  AfterViewInit,
  viewChild,
  output,
  OnDestroy,
  computed,
} from "@angular/core";
import { TabItemProps } from "@design-system-rte/core/components/tab/tab.interface";

import { BadgeComponent } from "../../badge/badge.component";
import { IconComponent } from "../../icon/icon.component";

@Component({
  selector: "rte-tab-item",
  imports: [CommonModule, IconComponent, BadgeComponent],
  standalone: true,
  templateUrl: "./tab-item.component.html",
  styleUrl: "./tab-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabItemComponent implements AfterViewInit, OnDestroy {
  readonly direction = input<"horizontal" | "vertical">("horizontal");
  readonly option = input<TabItemProps>();
  readonly compactSpacing = input<boolean>();
  readonly isSelected = input<boolean>(false);
  readonly click = output<string>();
  readonly handleKeydown = input<() => void>();
  readonly inverted = input<boolean>(false);
  readonly isHidden = input<boolean>(false);

  readonly tabItemRef = viewChild<ElementRef<HTMLButtonElement>>("tabItem");

  readonly hoverIndicatorStyle = signal<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  readonly displayBadge = (option: TabItemProps): boolean => {
    return !!(option.badgeContent || option.badgeType || option.badgeIcon || option.badgeCount);
  };

  readonly hoverIndicatorWidth = computed(() => {
    return `${this.hoverIndicatorStyle()?.width}px`;
  });
  readonly hoverIndicatorHeight = computed(() => {
    return `${this.hoverIndicatorStyle()?.height}px`;
  });
  readonly hoverIndicatorLeft = computed(() => {
    return `${this.hoverIndicatorStyle()?.left}px`;
  });
  readonly hoverIndicatorTop = computed(() => {
    return `${this.hoverIndicatorStyle()?.top}px`;
  });
  readonly hoverIndicatorOpacity = computed(() => {
    return this.hoverIndicatorStyle()?.opacity ?? 0;
  });

  ngAfterViewInit() {
    this.computeHoverIndicatorStyle();
    if (this.tabItemRef && this.tabItemRef()?.nativeElement) {
      if (this.option()?.disabled) return;
      window.addEventListener("resize", this.computeHoverIndicatorStyle);
      const parent = this.tabItemRef()?.nativeElement.parentElement?.parentElement;
      if (parent) {
        parent.addEventListener("scroll", this.computeHoverIndicatorStyle);
      }
    }
  }

  ngOnDestroy() {
    const parent = this.tabItemRef()?.nativeElement.parentElement?.parentElement;
    window.removeEventListener("resize", this.computeHoverIndicatorStyle);
    if (parent) {
      parent.removeEventListener("scroll", this.computeHoverIndicatorStyle);
    }
  }

  onClickTabItem(event: MouseEvent, id: string): void {
    this.hoverIndicatorStyle.set({
      ...this.hoverIndicatorStyle(),
      opacity: 0,
    });
    if (!this.option()?.disabled) {
      this.click.emit(id);
    } else {
      event.stopPropagation();
    }
  }

  handleMouseHover() {
    if (!this.isSelected()) {
      this.hoverIndicatorStyle.set({
        ...this.hoverIndicatorStyle(),
        opacity: 1,
      });
    }
  }

  handleMouseOut() {
    this.hoverIndicatorStyle.set({
      ...this.hoverIndicatorStyle(),
      opacity: 0,
    });
  }

  private computeHoverIndicatorStyle = () => {
    if (this.direction() === "horizontal") {
      this.hoverIndicatorStyle.set({
        width: this.tabItemRef()?.nativeElement.offsetWidth,
        height: 2,
        left: this.tabItemRef()?.nativeElement.offsetLeft,
        top: this.tabItemRef()
          ? this.tabItemRef()!.nativeElement.offsetTop + this.tabItemRef()!.nativeElement.offsetHeight
          : 0,
        opacity: 0,
      });
    } else {
      this.hoverIndicatorStyle.set({
        width: 2,
        height: this.tabItemRef()?.nativeElement.offsetHeight,
        left: this.tabItemRef()?.nativeElement.offsetLeft && this.tabItemRef()!.nativeElement.offsetLeft - 4,
        top: this.tabItemRef()!.nativeElement.offsetTop,
        opacity: 0,
      });
    }
  };
}
