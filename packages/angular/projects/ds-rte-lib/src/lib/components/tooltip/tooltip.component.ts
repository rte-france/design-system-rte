import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "rte-tooltip",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent {
  readonly label = input.required<string>();
  readonly position = input<string>("auto");
  readonly alignment = input<string>("center");
  readonly arrow = input<boolean>(true);
}
