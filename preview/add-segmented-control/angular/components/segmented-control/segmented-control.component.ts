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
import { SegmentOptions } from "@design-system-rte/core/components/segmented-control/segmented-control.interface";

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
  readonly value = input<string>("");
  readonly change = output<string>();
  readonly selectedSegment = input<string>();
  readonly ariaLabel = input<string | undefined>();

  getSegmentPosition(index: number): "left" | "middle" | "right" {
    const optionsLength = this.options().length;
    if (optionsLength === 2) return index === 0 ? "left" : "right";
    if (index === 0) return "left";
    if (index === optionsLength - 1) return "right";
    return "middle";
  }

  readonly segmentRefs = viewChildren<ElementRef<HTMLDivElement>>("segment");

  sliderLeft = 0;
  sliderWidth = 0;

  ngAfterViewInit() {
    console.log("SegmentedControlComponent initialized");
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

  updateSlider() {
    const idx = this.options().findIndex((opt) => opt.id === this.selectedSegment());
    const segment = this.segmentRefs()[idx]?.nativeElement;
    if (segment) {
      this.sliderLeft = segment.offsetLeft;
      this.sliderWidth = segment.offsetWidth;
    }
  }
}
