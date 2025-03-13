import { Component, Input } from '@angular/core';
// TODO: create alias for core components
import { ButtonType, ButtonSize } from '../../../../core/components/button/button.interface';

@Component({
  selector: 'rte-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = '';
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() disabled: boolean = false;

}
