import { Component } from "@angular/core";
import type { ButtonHierarchy } from "@design-system-rte/core/components/button/common/common-button";
import {
  BUTTON_FIGMA_GRID_HIERARCHIES,
  BUTTON_FIGMA_GRID_SIZE,
  BUTTON_FIGMA_MAIN_GRID_SECTIONS,
  BUTTON_FIGMA_REVERSED_ROWS,
  buttonFigmaSectionSupportsHierarchy,
  type ButtonFigmaMainGridSection,
} from "@design-system-rte/core/components/button/stories/button-figma-variant-grid.constants";

import { IconButtonComponent } from "../icon-button.component";

@Component({
  selector: "rte-icon-button-variant-grid",
  imports: [IconButtonComponent],
  templateUrl: "./icon-button-variant-grid.component.html",
  styleUrl: "./icon-button-variant-grid.component.scss",
})
export class IconButtonVariantGridComponent {
  readonly gridIconName = "settings";
  readonly gridSize = BUTTON_FIGMA_GRID_SIZE;
  readonly iconAppearance = "outlined" as const;
  readonly hierarchies = BUTTON_FIGMA_GRID_HIERARCHIES;
  readonly mainSections = BUTTON_FIGMA_MAIN_GRID_SECTIONS;
  readonly reversedRows = BUTTON_FIGMA_REVERSED_ROWS;

  sectionSupportsHierarchy(section: ButtonFigmaMainGridSection, hierarchy: ButtonHierarchy): boolean {
    return buttonFigmaSectionSupportsHierarchy(section, hierarchy);
  }

  capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  cellAriaLabel(sectionTitle: string, hierarchy: ButtonHierarchy): string {
    return `${sectionTitle} ${this.capitalize(hierarchy)}`;
  }
}
