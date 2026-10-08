import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  signal,
  ViewEncapsulation,
} from "@angular/core";

import { TabComponent } from "../tab.component";

import { FicheEntiteTabsIds, ficheEntiteTabOptions } from "./dsr-1038-tab.fixture";

interface TabListMetrics {
  clientWidth: number;
  scrollWidth: number;
  overflows: boolean;
  delta: number;
  chevronCount: number;
}

@Component({
  selector: "story-dsr-1038-tab-flicker-precision",
  imports: [TabComponent],
  templateUrl: "./dsr-1038-tab-flicker-precision-demo.component.html",
  styleUrl: "./dsr-1038-tab-flicker-precision-demo.component.scss",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dsr1038TabFlickerPrecisionDemoComponent implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly ngZone = inject(NgZone);

  protected readonly selectedTabId = signal<string>(FicheEntiteTabsIds.PUISSANCES);

  protected readonly tabOptions = ficheEntiteTabOptions;

  protected onSelectedTabChange(tabId: string): void {
    this.selectedTabId.set(tabId);
  }

  protected readonly toolbarWidth = signal(720);
  protected readonly tabSlotMaxWidth = signal<number | undefined>(undefined);
  protected readonly calibratedScrollWidth = signal<number | undefined>(undefined);
  protected readonly thresholdOffset = signal(0);
  protected readonly oscillationActive = signal(false);

  protected readonly metrics = signal<TabListMetrics>({
    clientWidth: 0,
    scrollWidth: 0,
    overflows: false,
    delta: 0,
    chevronCount: 0,
  });

  private metricsObserver?: ResizeObserver;
  private oscillationTimer?: ReturnType<typeof setInterval>;
  private oscillationHigh = true;

  constructor() {
    afterNextRender(() => {
      this.attachMetricsObserver();
      this.refreshMetrics();
    });
  }

  ngOnDestroy(): void {
    this.metricsObserver?.disconnect();
    this.stopOscillation();
  }

  protected calibrate(): void {
    this.stopOscillation();
    this.thresholdOffset.set(0);
    this.toolbarWidth.set(960);
    this.tabSlotMaxWidth.set(undefined);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const tabList = this.readTabListElement();
        const scrollWidth = tabList?.scrollWidth ?? 0;
        this.calibratedScrollWidth.set(scrollWidth);
        this.toolbarWidth.set(720);
        this.applyThresholdOffset(-2);
        this.refreshMetrics();
      });
    });
  }

  protected applyThresholdOffset(offset: number): void {
    this.thresholdOffset.set(offset);
    const baseline = this.calibratedScrollWidth();
    if (baseline === undefined) {
      return;
    }
    this.tabSlotMaxWidth.set(baseline + offset);
    this.refreshMetrics();
  }

  protected onThresholdOffsetInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.applyThresholdOffset(value);
  }

  protected onToolbarWidthInput(event: Event): void {
    this.toolbarWidth.set(Number((event.target as HTMLInputElement).value));
    this.refreshMetrics();
  }

  protected toggleOscillation(): void {
    if (this.oscillationActive()) {
      this.stopOscillation();
      return;
    }

    if (this.calibratedScrollWidth() === undefined) {
      this.calibrate();
    }

    const baseline = this.calibratedScrollWidth();
    if (baseline === undefined) {
      return;
    }

    this.oscillationActive.set(true);
    this.ngZone.runOutsideAngular(() => {
      this.oscillationTimer = setInterval(() => {
        const swing = this.oscillationHigh ? 8 : -8;
        this.oscillationHigh = !this.oscillationHigh;
        this.ngZone.run(() => {
          this.tabSlotMaxWidth.set(baseline + swing);
          this.thresholdOffset.set(swing);
          this.refreshMetrics();
        });
      }, 120);
    });
  }

  private stopOscillation(): void {
    if (this.oscillationTimer) {
      clearInterval(this.oscillationTimer);
      this.oscillationTimer = undefined;
    }
    this.oscillationActive.set(false);
  }

  private attachMetricsObserver(): void {
    const tabList = this.readTabListElement();
    if (!tabList) {
      return;
    }

    this.metricsObserver = new ResizeObserver(() => {
      this.ngZone.run(() => this.refreshMetrics());
    });
    this.metricsObserver.observe(tabList);

    const toolbar = this.host.nativeElement.querySelector(".dsr-1038-precision-tab-slot");
    if (toolbar instanceof HTMLElement) {
      this.metricsObserver.observe(toolbar);
    }
  }

  private refreshMetrics(): void {
    const tabList = this.readTabListElement();
    if (!tabList) {
      return;
    }

    const clientWidth = tabList.clientWidth;
    const scrollWidth = tabList.scrollWidth;
    const chevronCount = this.host.nativeElement.querySelectorAll("rte-icon-button").length;

    this.metrics.set({
      clientWidth,
      scrollWidth,
      overflows: clientWidth < scrollWidth,
      delta: scrollWidth - clientWidth,
      chevronCount,
    });
  }

  private readTabListElement(): HTMLElement | null {
    return this.host.nativeElement.querySelector('[role="tablist"].rte-tab');
  }
}
