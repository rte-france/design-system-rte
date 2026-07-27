import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, viewChild } from "@angular/core";

import { IconRegistry, RegularIconIdKey, TogglableIconIdKey } from "./icon-registry.service";

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

  private readonly iconHost = viewChild<ElementRef<HTMLElement>>("iconHost");
  private iconRegistry = inject(IconRegistry);

  constructor() {
    effect(() => {
      this.renderIcon(this.name(), this.size(), this.appearance(), this.color());
    });
  }

  private renderIcon(
    svgName: string,
    size: number,
    appearance: "outlined" | "filled" | undefined,
    color: string | undefined,
  ) {
    const hostRef = this.iconHost();
    if (!hostRef) {
      return;
    }

    const host = hostRef.nativeElement;
    const svg = this.iconRegistry.getIconElement(
      svgName as RegularIconIdKey | TogglableIconIdKey,
      appearance || "outlined",
    );

    svg.setAttribute("width", String(size));
    svg.setAttribute("height", String(size));

    if (color) {
      svg.setAttribute("color", color);
    } else {
      svg.removeAttribute("color");
    }

    host.replaceChildren(svg);
  }
}
