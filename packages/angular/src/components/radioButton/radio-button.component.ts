import { Component,computed,input } from "@angular/core";
import { labelSize } from "@design-system-rte/core/components/radio-button/radio-button.constants";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'rte-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})

export class RadioButtonComponent {
    label = input('');
    groupName = input('');
    showLabel = input(true);
    disabled = input(false);
    error = input(false);
    readOnly = input(false);
    labelSize = labelSize;

    isInteractive = computed(() => !(this.disabled() && this.readOnly()));
}