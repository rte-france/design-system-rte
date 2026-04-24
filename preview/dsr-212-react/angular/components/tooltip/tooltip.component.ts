import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { Alignment, Position } from "@design-system-rte/core";

@Component({
  selector: "rte-tooltip",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent {
  readonly label = input.required<string>();
  readonly position = input<Exclude<Position, "auto">>("top");
  readonly alignment = input<Alignment>("center");
  readonly arrow = input<boolean>(true);
}
