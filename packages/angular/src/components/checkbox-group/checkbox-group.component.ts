import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: 'rte-checkbox-group',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})

export class CheckboxGroupComponent {
    groupName = input.required<string>();
    items = input.required<string[]>();
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

    isDisplayed = computed(() => !(this.disabled() && this.error()));

}

