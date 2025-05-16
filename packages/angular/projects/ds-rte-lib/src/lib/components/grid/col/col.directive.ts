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
    return [
      'col',
      this.generateColumnClass('col-xxs', this.xxs()),
      this.generateColumnClass('col-xs', this.xs()),
      this.generateColumnClass('col-s', this.s()),
      this.generateColumnClass('col-m', this.m()),
      this.generateColumnClass('col-l', this.l()),
      this.generateColumnClass('col-xl', this.xl()),
    ]
      .filter(Boolean)
      .join(' ');
  }

  constructor() { }

  private generateColumnClass(prefix: string, size?: number): string {
    return size ? `${prefix}-${size}` : '';
  }

}
