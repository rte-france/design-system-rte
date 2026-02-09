import AccessibilityTable from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const checkboxAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Accès via TAB",
        expectedResult: "Le focus atteint chaque checkbox dans l’ordre logique",
        testMethod: "Test clavier",
      },
      {
        criterion: "Activation",
        expectedResult: "Espace coche/décoche la case",
        testMethod: "Test clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Indicateur de focus",
        expectedResult: "Un anneau visible encadre la case lors du focus",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d’écran 🖱️",
    criteria: [
      {
        criterion: "Annonce correcte",
        expectedResult: "Chaque case est annoncée comme 'case à cocher' avec son état",
        testMethod: "NVDA / VoiceOver",
      },
      {
        criterion: "État indéterminé",
        expectedResult: "L’état partiel est annoncé comme 'indéterminé'",
        testMethod: "NVDA / VoiceOver",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "Cochée / décochée / indéterminée",
        expectedResult: "Les états visuels sont distincts",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Visibilité de la case et du check",
        expectedResult: "Ratio ≥ 3:1 entre l’icône et le fond",
        testMethod: "Outils (axe, Stark)",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Surface interactive",
        expectedResult: "≥ 24×24 px, espacement ≥ 8 px",
        testMethod: "Test tactile",
      },
    ],
  },
  {
    category: "Alternatives textuelles ✍️",
    criteria: [
      {
        criterion: "Label associé",
        expectedResult: "Chaque case a un label lié (<label for> ou nesting)",
        testMethod: "Inspection DOM",
      },
    ],
  },
];

const CheckboxAccessibilityTable = () => {
  return <AccessibilityTable data={checkboxAccessibilityData} />;
};

export default CheckboxAccessibilityTable;
