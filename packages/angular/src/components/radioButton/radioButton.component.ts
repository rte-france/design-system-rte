import { Component,input } from "@angular/core";
import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'rte-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radioButton.component.html',
  styleUrl: './radioButton.component.scss',
})

export class RadioButtonComponent {
    label = input('');
    groupName = input('');
    showLabel = input(true);
    disabled = input(false);
    error = input(false);
    readOnly = input(false);
    labelSize = labelSize;
    }