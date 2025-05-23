import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from './icon.service';
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
  @Input() name!: string;
  @Input() size: string = '20px';
  @Input() color: string = 'currentColor';
  @Input() classes: string ='';

  svgContent: SafeHtml | null = null;
  svg!: Observable<string>;

  constructor(private sanitizer: DomSanitizer,  private iconService: IconService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setSvgContent(this.name);
  }

  private setSvgContent(svgName: string) {

    const svgFile = this.iconService.getSvgForName(svgName)
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
