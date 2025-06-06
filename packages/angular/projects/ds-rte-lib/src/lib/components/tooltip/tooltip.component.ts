import { CommonModule } from "@angular/common";
import { Component, input, model } from "@angular/core";

@Component({
  selector: "rte-tooltip",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent {
  label = input.required<string>();
  position = model<string>("auto");
  alignment = input<string>("center");
  arrow = input<boolean>(true);
}
