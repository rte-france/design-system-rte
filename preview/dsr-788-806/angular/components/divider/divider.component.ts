import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { DividerProps } from "@design-system-rte/core/components/divider/divider.interface";

@Component({
  selector: "rte-divider",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./divider.component.html",
  styleUrl: "./divider.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  readonly orientation = input<DividerProps["orientation"]>("horizontal");
  readonly thickness = input<DividerProps["thickness"]>("light");
  readonly appearance = input<DividerProps["appearance"]>("default");
  readonly endPoint = input<DividerProps["endPoint"]>("round");

  readonly isHorizontal = computed(() => this.orientation() === "horizontal");
}
