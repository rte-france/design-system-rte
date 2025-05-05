import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RadioButtonComponent } from "../radio-button/radio-button.component";

@Component({
  selector: 'rte-radio-button-group',
  standalone: true,
  imports: [CommonModule, RadioButtonComponent],
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
})

export class RadioButtonGroupComponent {
    groupName = input('');
    items = input<string[]>([]);
    direction = input('horizontal');
    showItemsLabel = input(true);
    groupTitle = input('');
    showGroupTitle = input(false);
    groupHelpText = input('');
    showHelpText = input(false);
    errorMessage = input('');
    error = input(false);
    disabled = input(false);
    readOnly = input(false);

    isInteractive = computed(() => !(this.disabled()==true && this.error()==true));

}

