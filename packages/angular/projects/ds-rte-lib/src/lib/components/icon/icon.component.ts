import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, effect, inject, input, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService, RegularIconIdKey, TogglableIconIdKey } from './icon.service';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'rte-icon',
  imports: [CommonModule],
  providers: [IconService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  name = input.required<RegularIconIdKey | TogglableIconIdKey>();
  size = input(20);
  color = input('currentColor');
  classes = input('');
  appearance = input<'outlined' | 'filled'>();
  destroyRef = inject(DestroyRef);

  svgContent: SafeHtml | null = null;
  svg!: Observable<string>;

  constructor(private sanitizer: DomSanitizer,  private iconService: IconService, private cdr: ChangeDetectorRef) {
    effect(() =>  {
      this.setSvgContent(this.name());
    })
  }

  private setSvgContent(svgName: RegularIconIdKey | TogglableIconIdKey) {

    const svgFile = this.iconService.getSvg(svgName, this.appearance() || 'outlined');

    svgFile
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((res) => {

      const size = this.size();
      const svgWithSize = res.replace(
        /<svg([^>]*)>/,
        `<svg$1 width="${size}" height="${size}">`
      );

      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgWithSize);
      this.cdr.markForCheck();
    });
  }
}
