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
export class TabItemComponent implements AfterViewInit {
  readonly direction = input<"horizontal" | "vertical">("horizontal");
  readonly option = input<TabItemProps>();
  readonly compactSpacing = input<boolean>();
  readonly isSelected = input<boolean>(false);
  readonly click = output<string>();
  readonly handleKeydown = input<() => void>();

  readonly tabItemRef = viewChild<ElementRef<HTMLButtonElement>>("tabItem");

  readonly hoverIndicatorStyle = signal<{
    width?: number;
    left?: number;
    top?: number;
    height?: number;
    opacity?: number;
  } | null>(null);

  readonly displayBadge = (option: TabItemProps): boolean => {
    return !!(option.badgeAppearance || option.badgeType || option.badgeIcon || option.badgeCount);
  };

  ngAfterViewInit() {
    if (this.tabItemRef && this.tabItemRef()?.nativeElement) {
      if (this.option()?.disabled) return;
      if (this.direction() === "horizontal") {
        this.hoverIndicatorStyle.set({
          width: this.tabItemRef()?.nativeElement.offsetWidth,
          height: 2,
          left: this.tabItemRef()?.nativeElement.offsetLeft,
          top: this.tabItemRef()
            ? this.tabItemRef()!.nativeElement.offsetTop + this.tabItemRef()!.nativeElement.offsetHeight
            : undefined,
          opacity: 0,
        });
      } else {
        this.hoverIndicatorStyle.set({
          width: 2,
          height: this.tabItemRef()?.nativeElement.offsetHeight,
          left:
            this.tabItemRef()?.nativeElement.offsetLeft !== undefined
              ? this.tabItemRef()!.nativeElement.offsetLeft - 2
              : undefined,
          top: this.tabItemRef()!.nativeElement.offsetTop,
          opacity: 0,
        });
      }
    }
  }

  onClickTabItem(id: string): void {
    this.hoverIndicatorStyle.set({
      ...this.hoverIndicatorStyle(),
      opacity: 0,
    });
    console.log("Tab item clicked:", id);
    if (!this.isSelected()) {
      this.click.emit(id);
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
}
