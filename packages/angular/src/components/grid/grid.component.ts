import { Component, input } from '@angular/core';
import { GridType } from '@design-system-rte/core/components/grid/grid.interface';

@Component({
  selector: 'rte-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  gridType = input<GridType>('fluid');
}
