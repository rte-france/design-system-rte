import { CommonModule } from "@angular/common";
import { Component, input, computed, ChangeDetectionStrategy } from "@angular/core";
import { ASSISTIVE_TEXT_ICON_SIZE } from "@design-system-rte/core/components/assistive-text/assistive-text.constants";
import { AssistiveTextProps } from "@design-system-rte/core/components/assistive-text/assistive-text.interface";
import { getIconNameFromAppearance } from "@design-system-rte/core/components/assistive-text/assistive-text.utils";

import { IconComponent } from "../icon/icon.component";
import { LinkComponent } from "../link/link.component";

@Component({
  selector: "rte-assistive-text",
  imports: [CommonModule, IconComponent, LinkComponent],
  standalone: true,
  templateUrl: "./assistive-text.component.html",
  styleUrl: "./assistive-text.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistiveTextComponent {
  readonly label = input<string>();
  readonly appearance = input<AssistiveTextProps["appearance"]>("description");
  readonly showIcon = input<boolean>(false);
  readonly href = input<string>();
  readonly width = input<number>();

  readonly isLink = computed(() => {
    return this.appearance() === "link" && this.href() !== undefined;
  });

  readonly widthStyle = computed(() => {
    return `${this.width()}px`;
  });

  readonly assistiveTextIconSize = ASSISTIVE_TEXT_ICON_SIZE;

  readonly iconName = computed(() => {
    return getIconNameFromAppearance(this.appearance()!);
  });
}
