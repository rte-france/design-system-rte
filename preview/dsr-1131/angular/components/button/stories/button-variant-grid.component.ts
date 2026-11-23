import { Component } from "@angular/core";
import type { ButtonHierarchy } from "@design-system-rte/core/components/button/common/common-button";
import {
  BUTTON_FIGMA_GRID_HIERARCHIES,
  BUTTON_FIGMA_GRID_SIZE_LABELS,
  BUTTON_FIGMA_GRID_SIZE,
  BUTTON_FIGMA_MAIN_GRID_SECTIONS,
  BUTTON_FIGMA_REVERSED_ROWS,
  buttonFigmaSectionSupportsHierarchy,
  type ButtonFigmaMainGridSection,
} from "@design-system-rte/core/components/button/stories/button-figma-variant-grid.constants";

import { ButtonComponent } from "../button.component";

@Component({
  selector: "rte-button-variant-grid",
  imports: [ButtonComponent],
  templateUrl: "./button-variant-grid.component.html",
  styleUrl: "./button-variant-grid.component.scss",
})
export class ButtonVariantGridComponent {
  readonly gridSize = BUTTON_FIGMA_GRID_SIZE;
  readonly gridLabel = BUTTON_FIGMA_GRID_SIZE_LABELS[BUTTON_FIGMA_GRID_SIZE];
  readonly hierarchies = BUTTON_FIGMA_GRID_HIERARCHIES;
  readonly mainSections = BUTTON_FIGMA_MAIN_GRID_SECTIONS;
  readonly reversedRows = BUTTON_FIGMA_REVERSED_ROWS;

  sectionSupportsHierarchy(section: ButtonFigmaMainGridSection, hierarchy: ButtonHierarchy): boolean {
    return buttonFigmaSectionSupportsHierarchy(section, hierarchy);
  }

  capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
