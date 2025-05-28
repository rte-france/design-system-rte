import { Component, input, model} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'rte-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})

export class TooltipComponent {
  label = input.required<string>();
  position = model<string>('auto');
  alignment = input<string>('center');
  arrow = input<boolean>(true);
}
