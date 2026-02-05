import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  SimpleChanges,
  OnInit,
  OnChanges,
  computed,
} from "@angular/core";
import { BannerPosition, BannerType } from "@design-system-rte/core/components/banner/banner.interface";

import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: "rte-banner",
  imports: [CommonModule, IconComponent, IconButtonComponent, ButtonComponent],
  standalone: true,
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnChanges {
  readonly type = input<BannerType>("info");
  readonly message = input.required<string>();
  readonly position = input<BannerPosition>("push");
  readonly title = input<string>();
  readonly closable = input<boolean>(false);
  readonly isOpen = input<boolean>(true);
  readonly actionLabel = input<string>();

  readonly click = output<void>();

  readonly visible = signal(false);
  readonly rendering = signal(false);

  readonly close = output<void>();

  readonly iconTypeMap: Record<string, string> = {
    info: "info",
    error: "dangerous",
    success: "check-circle",
    warning: "warning",
  };

  readonly iconName = computed(() => {
    return this.iconTypeMap[this.type()];
  });

  ngOnInit() {
    this.visible.set(this.isOpen());
    this.rendering.set(this.isOpen());
    if (this.closable() === false && this.position() === "overlay") {
      console.warn("Banner: 'closable' and 'close' props must be set when 'position' has 'overlay' value.");
      return;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isOpen"]) {
      if (this.isOpen()) this.openBanner();
      else {
        this.closeBanner();
      }
    }
  }

  clickAction() {
    this.click.emit();
  }

  closeBanner() {
    this.visible.set(false);
    setTimeout(() => {
      this.rendering.set(false);
      this.close.emit();
    }, 200);
  }

  private openBanner() {
    if (this.rendering()) return;
    this.rendering.set(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.visible.set(true));
    });
  }
}
