import { Component, input, output } from '@angular/core';
import { ButtonSize, ButtonVariant } from '@design-system-rte/core';

@Component({
  selector: 'rte-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  label = input('');
  variant = input<ButtonVariant>('filled');
  size = input<ButtonSize>('m');
  disabled = input(false);

  click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }

}
