import { Component, input } from '@angular/core';

@Component({
  selector: 'rte-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent {

  xxs = input<number>()
  xs = input<number>()
  s = input<number>()
  m = input<number>()
  l = input<number>()
  xl = input<number>()

  get colClasses(): string {
    const generateColumnClass = (prefix: string, size?: number) =>
      size ? `${prefix}-${size}` : '';
    return [
      'col',
      generateColumnClass('col-xxs', this.xxs()),
      generateColumnClass('col-xs', this.xs()),
      generateColumnClass('col-s', this.s()),
      generateColumnClass('col-m', this.m()),
      generateColumnClass('col-l', this.l()),
      generateColumnClass('col-xl', this.xl()),
    ]
      .filter(Boolean)
      .join(' ');
  }
}
