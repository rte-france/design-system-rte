import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, viewChild } from "@angular/core";

import { IconRegistry } from "./icon-registry.service";
import { renderIcon } from "./icon-render";

@Component({
  selector: "rte-icon",
  imports: [CommonModule],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input<number>(20);
  readonly color = input<string>();
  readonly classes = input("");
  readonly appearance = input<"outlined" | "filled">();
  readonly ariaHidden = input<boolean>(true);
  readonly ariaLabel = input<string | undefined>();

  private readonly iconHost = viewChild<ElementRef<HTMLElement>>("iconHost");
  private iconRegistry = inject(IconRegistry);

  constructor() {
    effect(() => {
      const hostRef = this.iconHost();
      if (!hostRef) {
        return;
      }

      renderIcon({
        host: hostRef.nativeElement,
        iconRegistry: this.iconRegistry,
        name: this.name(),
        size: this.size(),
        appearance: this.appearance(),
        color: this.color(),
        ariaHidden: this.ariaHidden(),
        ariaLabel: this.ariaLabel(),
      });
    });
  }
}
