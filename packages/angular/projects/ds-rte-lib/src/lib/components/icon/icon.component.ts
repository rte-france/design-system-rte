import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService, RegularIconIdKey, TogglableIconIdKey } from './icon.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'rte-icon',
  imports: [CommonModule],
  providers: [IconService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  @Input() name!: RegularIconIdKey | TogglableIconIdKey;
  @Input() size: number = 20;
  @Input() color: string = 'currentColor';
  @Input() classes: string ='';
  @Input() appearance!: 'outlined' | 'filled';

  svgContent: SafeHtml | null = null;
  svg!: Observable<string>;

  constructor(private sanitizer: DomSanitizer,  private iconService: IconService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setSvgContent(this.name);
  }

  private setSvgContent(svgName: RegularIconIdKey | TogglableIconIdKey) {

    const svgFile = this.iconService.getSvg(svgName)
    console.log('svgName', svgName);

    svgFile.subscribe((res) => {

      const size = this.size
      const svgWithSize = res.replace(
        /<svg([^>]*)>/,
        `<svg$1 width="${size}" height="${size}">`
      );

      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgWithSize);
      this.cdr.markForCheck();
    });
  }
}
