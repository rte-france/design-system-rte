import { Component, input, output } from '@angular/core';
import { ButtonSize, ButtonType } from '@design-system-rte/core/components/button/button.interface';

@Component({
  selector: 'rte-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  label = input('');
  type = input<ButtonType>('filled');
  size = input<ButtonSize>('m');
  disabled = input(false);

  click = output<void>();

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit();
  }

}
