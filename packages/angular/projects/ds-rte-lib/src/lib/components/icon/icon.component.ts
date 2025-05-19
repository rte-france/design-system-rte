import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from './icon.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'ds-icon',
  providers: [IconService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() name!: string;
  @Input() size: string = '20px';
  @Input() color: string = 'currentColor';

  svgContent: SafeHtml | null = null;
  svg!: Observable<string>;

  constructor(private sanitizer: DomSanitizer,  private iconService: IconService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setSvgContent(this.name);
  }

  private setSvgContent(svgName: string) {

    const svgFile = this.iconService.getSvgForName(svgName)
      
    svgFile.subscribe((res) => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(res);
      this.cdr.markForCheck();
    });
  }
}
