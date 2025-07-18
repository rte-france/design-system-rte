import {
  Directive,
  HostBinding,
  input,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ComponentRef,
  inject,
    ElementRef,
    Renderer2,
} from "@angular/core";

import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

import { BadgeType, BadgeSize, BadgeAppearance } from "@design-system-rte/core/components/badge/badge.interface";
import { BadgeComponent } from "./badge.component";

@Directive({
  selector: "[rteBadge]",
  standalone: true,
})
export class BadgeDirective implements OnInit, OnDestroy {
  readonly rteBadge = input.required<string>();
  readonly rteBadgeType = input<BadgeType>("brand");
  readonly rteBadgeSize = input<BadgeSize>("M");
  readonly rteBadgeAppearance = input<BadgeAppearance>("text");
  readonly rteBadgeCount = input<number>(42);
  readonly rteBadgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  private viewContainer = inject(ViewContainerRef);
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);
  private badgeComponentRef: ComponentRef<BadgeComponent> | null = null;

  ngOnInit() {
    // Create the badge component
    this.badgeComponentRef = this.viewContainer.createComponent(BadgeComponent);

    // Pass the directive inputs to the component's individual input properties
    this.badgeComponentRef.setInput("badgeType", this.rteBadgeType());
    this.badgeComponentRef.setInput("badgeSize", this.rteBadgeSize());
    this.badgeComponentRef.setInput("badgeAppearance", this.rteBadgeAppearance());
    this.badgeComponentRef.setInput("count", this.rteBadgeCount());
    this.badgeComponentRef.setInput("icon", this.rteBadgeIcon());

    // Trigger change detection
    this.renderer.appendChild(this.elementRef.nativeElement, this.badgeComponentRef.location.nativeElement);
  }

  ngOnDestroy() {
    // Clean up the component reference
    if (this.badgeComponentRef) {
      this.badgeComponentRef.destroy();
    }
  }

  @HostBinding("class")
  get badgeClasses(): string {
    return [
      "rte-badge",
      `rte-badge-${this.rteBadgeType()}`,
      `rte-badge-size-${this.rteBadgeSize()}`,
      `rte-badge-appearance-${this.rteBadgeAppearance()}`,
    ].join(" ");
  }
}
