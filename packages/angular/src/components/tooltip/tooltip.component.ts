import { Component, input} from "@angular/core";
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
    position = input('auto');
    alignment = input('center');
    arrow = input(true);

    
    }
