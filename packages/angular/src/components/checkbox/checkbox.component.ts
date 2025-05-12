import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'rte-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})

export class CheckboxComponent {
  id = input.required<string>();
  label = input.required<string>();
  value = input('');
  indeterminate = input(false);
  description = input('');
  showLabel = input(true);
  disabled = input(false);
  error = input(false);
  errorMessage = input('');
  readOnly = input(false);
  checked = input(false);
  groupName = input('');

  onKeydown(event: KeyboardEvent) {
    if (event.code === "Space") {
      if(this.readOnly()) {
        event.preventDefault();
      }
    }
  }
}