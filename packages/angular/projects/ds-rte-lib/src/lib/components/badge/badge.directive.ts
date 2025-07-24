import {
  Directive,
  input,
  OnChanges,
  OnDestroy,
  ViewContainerRef,
  ComponentRef,
  inject,
  ElementRef,
  Renderer2,
  OnInit,
} from "@angular/core";
import { BadgeType, BadgeSize, BadgeAppearance } from "@design-system-rte/core/components/badge/badge.interface";

import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

import { BadgeComponent } from "./badge.component";

@Directive({
  selector: "[rteBadge]",
  standalone: true,
})
export class BadgeDirective implements OnInit, OnChanges, OnDestroy {
  readonly rteBadge = input.required<string>();
  readonly rteBadgeType = input<BadgeType>("brand");
  readonly rteBadgeSize = input<BadgeSize>("M");
  readonly rteBadgeAppearance = input<BadgeAppearance>("text");
  readonly rteBadgeCount = input<number>(42);
  readonly rteBadgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  private badgeComponentRef: ComponentRef<BadgeComponent> | null = null;

  private viewContainer = inject(ViewContainerRef);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.badgeComponentRef = this.viewContainer.createComponent(BadgeComponent);
    this.assignDirectiveToComponent();
    this.appendComponentToHost();
  }

  ngOnChanges(): void {
    this.assignDirectiveToComponent();
  }

  ngOnDestroy(): void {
    if (this.badgeComponentRef) {
      this.badgeComponentRef.destroy();
    }
  }

  private assignDirectiveToComponent(): void {
    if (this.badgeComponentRef) {
      this.badgeComponentRef.setInput("badgeType", this.rteBadgeType());
      this.badgeComponentRef.setInput("badgeSize", this.rteBadgeSize());
      this.badgeComponentRef.setInput("badgeAppearance", this.rteBadgeAppearance());
      this.badgeComponentRef.setInput("count", this.rteBadgeCount());
      this.badgeComponentRef.setInput("icon", this.rteBadgeIcon());
    }
  }

  private appendComponentToHost(): void {
    if (this.badgeComponentRef) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.badgeComponentRef.location.nativeElement);
    }
  }
}
