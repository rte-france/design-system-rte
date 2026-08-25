import { ChangeDetectionStrategy, Component, OnInit, signal } from "@angular/core";
import { Mode, Theme } from "@design-system-rte/core";

import { SelectComponent } from "../../../projects/ds-rte-lib/src/lib/components/select/select.component";

type ThemeMode = `${Theme}-${Mode}`;

@Component({
  selector: "rte-theme-selector",
  imports: [SelectComponent],
  templateUrl: "./theme-selector.component.html",
  styleUrl: "./theme-selector.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent implements OnInit {
  readonly themes: Array<{ value: ThemeMode; label: string }> = [
    { value: "bleu_iceberg-light", label: "Bleu Iceberg - Light" },
    { value: "bleu_iceberg-dark", label: "Bleu Iceberg - Dark" },
    { value: "violet-light", label: "Violet - Light" },
    { value: "violet-dark", label: "Violet - Dark" },
    { value: "vert_foret-light", label: "Vert Forêt - Light" },
    { value: "vert_foret-dark", label: "Vert Forêt - Dark" },
  ];

  readonly selectedThemeMode = signal<ThemeMode>("bleu_iceberg-light");

  ngOnInit(): void {
    const theme = document.documentElement.getAttribute("data-theme") as Theme | null;
    const mode = document.documentElement.getAttribute("data-mode") as Mode | null;

    if (theme && mode) {
      this.selectedThemeMode.set(`${theme}-${mode}`);
    }
  }

  selectThemeMode(value: string | string[]): void {
    if (Array.isArray(value)) {
      return;
    }

    const themeMode = value as ThemeMode;
    const [theme, mode] = themeMode.split("-") as [Theme, Mode];

    this.selectedThemeMode.set(themeMode);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-mode", mode);
  }
}
