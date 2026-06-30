import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { waitForNextFrame } from "@design-system-rte/core/common/animation";
import { AccordionIconSizeMap } from "@design-system-rte/core/components/accordion/accordion.constants";
import { AccordionProps } from "@design-system-rte/core/components/accordion/accordion.interface";

import { DividerComponent } from "../divider/divider.component";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-accordion",
  imports: [IconComponent, DividerComponent],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  private static nextFallbackId = 0;

  readonly id = input<string | undefined>(undefined);
  readonly title = input<string>();
  readonly appearance = input<AccordionProps["appearance"]>("brand");
  readonly alignement = input<AccordionProps["alignement"]>("right");
  readonly compactSpacing = input(false);
  readonly icon = input<string | undefined>(undefined);
  readonly disabled = input(false);
  readonly isOpen = input<boolean | undefined>(undefined);
  readonly size = input<AccordionProps["size"]>("small");

  readonly isOpenChange = output<boolean>();
  readonly clicked = output<MouseEvent>();

  protected readonly internalOpen = signal(false);
  protected readonly isAnimating = signal(false);
  protected readonly panelHeightPx = signal(0);

  @HostBinding("class")
  get hostClasses(): string {
    return ["rte-accordion", this.internalOpen() ? "is-open" : ""].filter(Boolean).join(" ");
  }

  private readonly generatedInstanceId = AccordionComponent.createInstanceId();
  private readonly contentArea = viewChild<ElementRef<HTMLElement>>("accordionContent");

  constructor() {
    effect(() => {
      const fromParent = this.isOpen();
      if (fromParent !== undefined) {
        this.internalOpen.set(fromParent);
      }
    });

    effect((onCleanup) => {
      const open = this.internalOpen();
      if (open) {
        this.isAnimating.set(false);
        this.panelHeightPx.set(0);
        const cancelWaitForNextFrame = waitForNextFrame(() => {
          this.isAnimating.set(true);
          this.syncPanelHeightFromContent();
        });
        onCleanup(cancelWaitForNextFrame);
      } else {
        this.isAnimating.set(false);
        this.panelHeightPx.set(0);
      }
    });
  }

  protected summaryElementId(): string {
    return `accordion-summary-${this.id() ?? this.generatedInstanceId}`;
  }

  protected contentElementId(): string {
    return `accordion-content-${this.id() ?? this.generatedInstanceId}`;
  }

  protected iconPixelSize(): number {
    const currentSize = this.size() ?? "small";
    return AccordionIconSizeMap[currentSize];
  }

  onSummaryClick(event: MouseEvent): void {
    if (this.disabled()) {
      return;
    }
    this.clicked.emit(event);
    const next = !this.internalOpen();
    this.internalOpen.set(next);
    this.isOpenChange.emit(next);
  }

  private syncPanelHeightFromContent(): void {
    const contentElement = this.contentArea()?.nativeElement;
    if (!contentElement) {
      return;
    }
    this.panelHeightPx.set(contentElement.scrollHeight);
  }

  private static createInstanceId(): string {
    if (typeof globalThis.crypto !== "undefined" && "randomUUID" in globalThis.crypto) {
      return globalThis.crypto.randomUUID();
    }
    AccordionComponent.nextFallbackId += 1;
    return `accordion-${AccordionComponent.nextFallbackId}`;
  }
}
