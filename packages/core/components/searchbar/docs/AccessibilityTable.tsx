import AccessibilityTable from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const searchbarAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Le champ est atteignable au clavier",
        expectedResult:
          "L'utilisateur peut accéder au champ avec TAB, en sortir avec TAB ou SHIFT+TAB, et éditer son contenu",
        testMethod: "Navigation clavier avec TAB / SHIFT+TAB",
      },
      {
        criterion: "Les éléments interactifs sont distincts",
        expectedResult:
          "Les boutons intégrés (ex : clear...) peuvent être atteints avec TAB et présentent un focus visible",
        testMethod: "Navigation et tabulation dans le champ",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Le focus est visible à l'interaction",
        expectedResult:
          "Un contour est visible lors du focus clavier et est perceptible dans tous les états (similaire à l'état active)",
        testMethod: "Navigation clavier avec TAB / SHIFT+TAB",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d’écran 🔊",
    criteria: [
      {
        criterion: "Le champ est correctement annoncé",
        expectedResult: 'Le lecteur d\'écran annonce "champ de recherche" ou "search" avec le label associé',
        testMethod: "Test avec NVDA, VoiceOver ou JAWS",
      },
      {
        criterion: "Le label est lu, même s'il est caché",
        expectedResult: "Le champ est associé à un aria-label ou aria-labelledby selon le contexte",
        testMethod: "Inspection du DOM ou test vocal",
      },
      {
        criterion: "Les relations entre éléments sont explicites",
        expectedResult: "En cas de suggestions : aria-controls, aria-owns et aria-expanded sont utilisés correctement",
        testMethod: "Inspecteur a11y / ARIA Live Regions",
      },
      {
        criterion: 'Le bouton "effacer" (croix) est accessible et vocalisé',
        expectedResult: 'L\'icône a un aria-label explicite ("Effacer la recherche")',
        testMethod: "Test vocal en navigation clavier",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Le texte et les éléments visuels sont lisibles",
        expectedResult: "Contraste entre fond et texte ≥ 4.5:1 (texte, icônes)",
        testMethod: "Outils de contraste",
      },
      {
        criterion: "Le contraste reste bon dans tous les états",
        expectedResult: "Aucun état ne diminue la lisibilité (disabled, error...)",
        testMethod: "Outils de contraste",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Les éléments sont accessibles au doigt",
        expectedResult: "Hauteur ≥ 24px (AA) et padding suffisant pour boutons tactiles",
        testMethod: "Vérification manuelle ou test mobile ou simulateur tactile",
      },
    ],
  },
  {
    category: "Alternatives textuelles 📝",
    criteria: [
      {
        criterion: "Présence d'un label ou aria-label",
        expectedResult: "L'information du champ est toujours disponible à l'assistance",
        testMethod: "Inspection du code",
      },
      {
        criterion: "Icônes décoratives masquées",
        expectedResult: 'aria-hidden="true" sur la loupe décorative',
        testMethod: "Lecture du DOM ou test vocal",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "L'état du champ est visible (focus, erreur, rempli...)",
        expectedResult: "L'utilisateur voit en temps réel les changements d'état",
        testMethod: "Vérification visuelle",
      },
      {
        criterion: "Les transitions sont perceptibles mais non bloquantes",
        expectedResult: "L'utilisateur ne rate pas d'info à cause d'un effet",
        testMethod: "Vérification visuelle",
      },
    ],
  },
];

const SearchbarAccessibilityTable = () => {
  return <AccessibilityTable data={searchbarAccessibilityData} />;
};

export default SearchbarAccessibilityTable;
