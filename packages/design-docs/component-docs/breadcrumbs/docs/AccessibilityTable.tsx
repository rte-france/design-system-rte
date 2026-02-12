import AccessibilityTable from "../../../src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const breadcrumbsAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Seuls les liens (composants Link) sont atteignables via TAB",
        expectedResult: 'Les séparateurs, la troncature ("...") et l\'élément courant ne sont pas focusables',
        testMethod: "Test clavier (TAB / SHIFT+TAB)",
      },
      {
        criterion: "L'ordre logique suit le DOM et la hiérarchie",
        expectedResult: "Navigation séquentielle de gauche à droite",
        testMethod: "Test clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Le focus est visible uniquement sur les liens",
        expectedResult: "Focus conforme au focus du Link",
        testMethod: "Test visuel",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d'écran 🔊",
    criteria: [
      {
        criterion: 'Le rôle global est reconnu comme "navigation"',
        expectedResult: 'Conteneur avec role="navigation" et aria-label="Fil d\'Ariane"',
        testMethod: "VoiceOver, NVDA",
      },
      {
        criterion: "Chaque lien est lu avec son nom et son rôle",
        expectedResult: '"Accueil, lien", "Offres, lien", "Page actuelle"',
        testMethod: "Test lecteur d'écran",
      },
      {
        criterion: "L'élément courant est annoncé comme tel",
        expectedResult: 'aria-current="page" présent sur le dernier élément',
        testMethod: "Inspecteur / Lecteur",
      },
      {
        criterion: "Les séparateurs sont ignorés",
        expectedResult: 'Attribut aria-hidden="true" sur les éléments de séparation',
        testMethod: "Inspecteur",
      },
      {
        criterion: "La troncature est ignorée",
        expectedResult: 'Attribut aria-hidden="true" sur la troncature',
        testMethod: "Inspecteur",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Texte et séparateurs conformes WCAG AA",
        expectedResult: "Ratio ≥ 4.5:1 pour les liens, séparateurs et état actif",
        testMethod: "Outils axe, Stark",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Zone de clic sur les liens suffisamment large",
        expectedResult: "Min. 24px de hauteur, min. 8px entre chaque item",
        testMethod: "DevTools / Mobile",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "L'état actif est perceptible visuellement et à l'audio",
        expectedResult: "Lien actif mis en forme distincte (gras, couleur…)",
        testMethod: "Test visuel + lecteur d'écran",
      },
    ],
  },
];

const BreadcrumbsAccessibilityTable = () => {
  return <AccessibilityTable data={breadcrumbsAccessibilityData} />;
};

export default BreadcrumbsAccessibilityTable;
