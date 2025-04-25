import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[dsCol]',
  standalone: true
})
export class ColDirective {

    xxs = input<number>()
    xs = input<number>()
    s = input<number>()
    m = input<number>()
    l = input<number>()
    xl = input<number>()  

    @HostBinding ("class") 
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

  constructor() { }

}
