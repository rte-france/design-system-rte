import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonSize, ButtonType } from '@design-system-rte/core/components/button/button.interface';

@Component({
  selector: 'rte-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label = '';
  @Input() type: ButtonType = 'filled';
  @Input() size: ButtonSize = 'm';
  @Input() disabled = false;

  @Output() click = new EventEmitter<void>();

}
