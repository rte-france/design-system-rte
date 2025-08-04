import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  output,
  viewChildren,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { getSegmentPosition } from "@design-system-rte/core/components/segmented-control/segmented-control-utils";
import {
  SegmentOptions,
  SegmentProps,
} from "@design-system-rte/core/components/segmented-control/segmented-control.interface";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-segmented-control",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./segmented-control.component.html",
  styleUrl: "./segmented-control.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent implements AfterViewInit, OnDestroy {
  readonly options = input<SegmentOptions[]>([]);
  readonly change = output<string>();
  readonly selectedSegment = input<string>();
  readonly ariaLabel = input<string | undefined>();

  readonly segmentRefs = viewChildren<ElementRef<HTMLDivElement>>("segment");

  sliderLeft = 0;
  sliderWidth = 0;

  ngAfterViewInit() {
    this.updateSlider();
    window.addEventListener("resize", this.updateSlider.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateSlider.bind(this));
  }

  async selectSegment(id: string) {
    this.change.emit(id);

    setTimeout(() => this.updateSlider());
  }

  getSegmentPosition(index: number): SegmentProps["position"] {
    return getSegmentPosition(index, this.options().length);
  }

  updateSlider() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedSegment());
    const segment = this.segmentRefs()[idx]?.nativeElement;
    if (segment) {
      this.sliderLeft = segment.offsetLeft;
      this.sliderWidth = segment.offsetWidth;
    }
  }
}
