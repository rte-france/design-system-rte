import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs";

import { IconService, RegularIconIdKey, TogglableIconIdKey } from "./icon.service";

@Component({
  selector: "rte-icon",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IconService],
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(20);
  readonly color = input("currentColor");
  readonly classes = input("");
  readonly appearance = input<"outlined" | "filled">();
  destroyRef = inject(DestroyRef);

  svgContent: SafeHtml | null = null;
  svg!: Observable<string>;

  private sanitizer = inject(DomSanitizer);
  private iconService = inject(IconService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      this.setSvgContent(this.name());
    });
  }

  private setSvgContent(svgName: string) {
    const svgFile = this.iconService.getSvg(
      svgName as RegularIconIdKey | TogglableIconIdKey,
      this.appearance() || "outlined",
    );

    svgFile.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      const size = this.size();
      const svgWithSize = res.replace(/<svg([^>]*)>/, `<svg$1 width="${size}" height="${size}">`);

      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgWithSize);
      this.cdr.markForCheck();
    });
  }
}
