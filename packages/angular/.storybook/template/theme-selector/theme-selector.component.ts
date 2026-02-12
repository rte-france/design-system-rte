import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { Mode, Theme } from "@design-system-rte/core/components/common/common-types";

import { ChipComponent } from "../../../projects/ds-rte-lib/src/lib/components/chip/chip.component";
import { IconButtonComponent } from "../../../projects/ds-rte-lib/src/lib/components/icon-button/icon-button.component";

@Component({
  selector: "rte-theme-selector",
  imports: [ChipComponent, CommonModule, IconButtonComponent],
  standalone: true,
  templateUrl: "./theme-selector.component.html",
  styleUrl: "./theme-selector.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  readonly themes: Array<{ id: Theme; label: string }> = [
    { id: "bleu_iceberg", label: "Bleu Iceberg" },
    { id: "violet", label: "Violet" },
    { id: "vert_foret", label: "Vert Forêt" },
  ];

  readonly selectedTheme = signal<Theme>("bleu_iceberg");

  readonly selectedMode = signal<Mode>("light");

  readonly iconName = computed(() => (this.selectedMode() === "light" ? "mode-dark" : "mode-light"));
  readonly nextMode = computed<Mode>(() => (this.selectedMode() === "light" ? "dark" : "light"));

  selectTheme(theme: Theme): void {
    this.selectedTheme.set(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  selectMode(mode: Mode): void {
    this.selectedMode.set(mode);
    document.documentElement.setAttribute("data-mode", mode);
  }
}
