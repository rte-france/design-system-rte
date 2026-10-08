import {
  BUTTON_FIGMA_GRID_HIERARCHIES,
  BUTTON_FIGMA_GRID_SIZE,
  BUTTON_FIGMA_GRID_SIZE_LABELS,
  BUTTON_FIGMA_MAIN_GRID_SECTIONS,
  BUTTON_FIGMA_REVERSED_ROWS,
  buttonFigmaSectionSupportsHierarchy,
  type ButtonFigmaReversedRow,
} from "@design-system-rte/core/components/button/stories/button-figma-variant-grid.constants";

import Button from "../Button";

import "@design-system-rte/core/components/button/stories/button-figma-variant-grid.scss";

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function ReversedRow({ row }: { row: ButtonFigmaReversedRow }) {
  return (
    <tr>
      <th className="button-figma-variant-grid__row-label" scope="row">
        {row.rowLabel}
      </th>
      <td className="button-figma-variant-grid__cell">
        <Button
          size={row.size}
          appearance={row.appearance}
          hierarchy={row.hierarchy}
          isCritical={row.isCritical}
          isReversed
          label={BUTTON_FIGMA_GRID_SIZE_LABELS[row.size]}
        />
      </td>
    </tr>
  );
}

export default function ButtonVariantGrid() {
  const gridLabel = BUTTON_FIGMA_GRID_SIZE_LABELS[BUTTON_FIGMA_GRID_SIZE];

  return (
    <div className="button-figma-variant-grid">
      <section className="button-figma-variant-grid__size-block">
        <table className="button-figma-variant-grid__table">
          <thead>
            <tr>
              <th scope="col" />
              {BUTTON_FIGMA_MAIN_GRID_SECTIONS.map((section) => (
                <th key={section.key} className="button-figma-variant-grid__section-title" scope="col">
                  {section.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BUTTON_FIGMA_GRID_HIERARCHIES.map((hierarchy) => (
              <tr key={hierarchy}>
                <th className="button-figma-variant-grid__row-label" scope="row">
                  {capitalize(hierarchy)}
                </th>
                {BUTTON_FIGMA_MAIN_GRID_SECTIONS.map((section) => (
                  <td key={`${section.key}-${hierarchy}`} className="button-figma-variant-grid__cell">
                    {buttonFigmaSectionSupportsHierarchy(section, hierarchy) ? (
                      <Button
                        size={BUTTON_FIGMA_GRID_SIZE}
                        appearance={section.appearance}
                        hierarchy={hierarchy}
                        isCritical={section.isCritical}
                        label={gridLabel}
                      />
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="button-figma-variant-grid__size-block button-figma-variant-grid__reversed">
        <h2 className="button-figma-variant-grid__size-title">Reverse</h2>
        <table className="button-figma-variant-grid__table">
          <tbody>
            {BUTTON_FIGMA_REVERSED_ROWS.map((row) => (
              <ReversedRow key={row.rowLabel} row={row} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
