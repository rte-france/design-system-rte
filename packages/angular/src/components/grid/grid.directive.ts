import { Directive, HostBinding, input } from '@angular/core';
import { GridType } from '@design-system-rte/core/components/grid/grid.interface';

@Directive({
  selector: '[dsGrid]',
  standalone: true
})
export class GridDirective {

    gridType = input<GridType>('fluid');

    @HostBinding("class")
    get hostClasses(): string {
      const base = 'grid';
      const variation = this.gridType();
      return `${base} ${variation}`;
    }
  constructor() { }

}
