import "./AccessibilityTable.scss";

export interface AccessibilityCriterion {
  category?: string;
  criterion: string;
  expectedResult: string;
  testMethod: string;
}

export interface AccessibilityCategory {
  category: string;
  criteria: Omit<AccessibilityCriterion, "category">[];
}

interface AccessibilityTableProps {
  data: AccessibilityCategory[];
}

const AccessibilityTable = ({ data }: AccessibilityTableProps) => {
  return (
    <div className="rte-accessibility-table">
      <table className="rte-accessibility-table-content sb-unstyled">
        <thead>
          <tr>
            <th scope="col">Catégorie</th>
            <th scope="col">Critère d’accessibilité</th>
            <th scope="col">Résultat attendu</th>
            <th scope="col">Méthode de test</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category, categoryIndex) =>
            category.criteria.map((criterion, criterionIndex) => {
              const isFirstRow = criterionIndex === 0;
              const isLastRow = criterionIndex === category.criteria.length - 1;
              const isLastCategory = categoryIndex === data.length - 1;

              return (
                <tr
                  key={`${categoryIndex}-${criterionIndex}`}
                  className={
                    isFirstRow
                      ? "rte-accessibility-table-category-start"
                      : "rte-accessibility-table-category-continuation"
                  }
                  data-is-last-row={isLastRow}
                  data-is-last-category={isLastCategory}
                >
                  {isFirstRow && (
                    <th
                      scope="row"
                      rowSpan={category.criteria.length}
                      className="rte-accessibility-table-category-cell"
                    >
                      {category.category}
                    </th>
                  )}
                  <td className="rte-accessibility-table-criterion-cell">{criterion.criterion}</td>
                  <td className="rte-accessibility-table-result-cell">{criterion.expectedResult}</td>
                  <td className="rte-accessibility-table-method-cell">{criterion.testMethod}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccessibilityTable;
