import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  OnDestroy,
  viewChild,
} from "@angular/core";
import { sideNavCollapsedSize, sideNavPanelSize } from "@design-system-rte/core/components/side-nav/side-nav.constants";
import { SideNavAppearance } from "@design-system-rte/core/components/side-nav/side-nav.interface";

type SideNavSize = "s" | "m" | "l";

@Component({
  selector: "rte-base-side-nav",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./base-side-nav.component.html",
  styleUrl: "./base-side-nav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseSideNavComponent implements AfterViewInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly contentRef = viewChild<ElementRef<HTMLDivElement>>("contentRef");

  private readonly collapsedSize = sideNavCollapsedSize;
  private readonly panelSize = sideNavPanelSize;

  readonly size = input<SideNavSize>("m");
  readonly appearance = input<SideNavAppearance>("brand");
  readonly collapsed = input<boolean>(false);
  readonly showHeader = input<boolean>(true);
  readonly showFooter = input<boolean>(true);

  readonly minWidth = computed<string>(() => {
    return this.collapsed() ? `${this.collapsedSize}px` : `${this.panelSize[this.size()]}px`;
  });

  private resizeObserver?: ResizeObserver;
  private resizeHandler?: () => void;

  ngAfterViewInit(): void {
    this.setupResizeObserver();
  }

  ngOnDestroy(): void {
    this.cleanupResizeObserver();
  }

  private setupResizeObserver(): void {
    const containerEl = this.elementRef.nativeElement;
    const contentEl = this.contentRef()?.nativeElement;
    if (!containerEl || !contentEl) {
      return;
    }

    const setHeightVar = (): void => {
      const height = contentEl.offsetHeight;
      containerEl.style.setProperty("--content-height", `${height}px`);
    };

    this.resizeHandler = setHeightVar;
    setHeightVar();

    this.resizeObserver = new ResizeObserver(() => {
      setHeightVar();
    });
    this.resizeObserver.observe(contentEl);

    window.addEventListener("resize", setHeightVar);
  }

  private cleanupResizeObserver(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = undefined;
    }
  }
}
