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
import { BadgeType, BadgeSize, BadgeContent } from "@design-system-rte/core/components/badge/badge.interface";

import { RegularIconIdKey, TogglableIconIdKey } from "../icon/icon.service";

import { BadgeComponent } from "./badge.component";

@Directive({
  selector: "[rteBadge]",
  standalone: true,
})
export class BadgeDirective implements OnInit, OnChanges, OnDestroy {
  readonly rteBadgeType = input<BadgeType>("brand");
  readonly rteBadgeSize = input<BadgeSize>("m");
  readonly rteBadgeContent = input<BadgeContent>("number");
  readonly rteBadgeCount = input<number | undefined>();
  readonly rteBadgeIcon = input<RegularIconIdKey | TogglableIconIdKey>("settings");

  private badgeComponentRef: ComponentRef<BadgeComponent> | null = null;
  private hostElement: HTMLElement;

  private readonly viewContainer = inject(ViewContainerRef);
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    this.hostElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.badgeComponentRef = this.viewContainer.createComponent(BadgeComponent);
    this.assignDirectiveToComponent();
    this.appendComponentToHost();
    this.renderer.setStyle(this.hostElement, "position", "relative");
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
      this.badgeComponentRef.setInput("badgeContent", this.rteBadgeContent());
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
