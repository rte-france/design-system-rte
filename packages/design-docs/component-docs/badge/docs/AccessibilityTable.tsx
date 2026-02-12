import AccessibilityTable from "../../../src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const badgeAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Focus sur le parent uniquement",
        expectedResult: "Le Badge n'est pas focusable ; seul l'élément parent (ex. bouton, icône) reçoit le focus.",
        testMethod: "Test clavier",
      },
      {
        criterion: "Aucun comportement clavier spécifique",
        expectedResult: "Le badge ne modifie pas la navigation au clavier ni l'ordre de tabulation.",
        testMethod: "Test clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Absence d'état de focus",
        expectedResult: "Le badge ne présente pas d'état de focus propre, même lorsque son parent est focusé.",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Stabilité visuelle",
        expectedResult: "Le badge reste stable lors du focus ou du hover du parent (pas de changement de style).",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d'écran 🔊",
    criteria: [
      {
        criterion: "Association au parent",
        expectedResult:
          'Si le badge contient une valeur utile (ex. nombre), celle-ci est annoncée avec le libellé du parent. Ex: "Bouton Messagerie, 4 notifications"',
        testMethod: "NVDA / VoiceOver",
      },
      {
        criterion: "Ignoré si décoratif",
        expectedResult: 'Si le badge est purement indicatif (ex. point visuel), il est ignoré via aria-hidden="true".',
        testMethod: "NVDA / VoiceOver",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Lisibilité du contenu",
        expectedResult: "Le texte, chiffre ou symbole du badge respecte un ratio de contraste ≥ 4.5:1 avec le fond.",
        testMethod: "Outils (axe, Stark)",
      },
      {
        criterion: "Cohérence thème clair/sombre",
        expectedResult: "Le badge reste lisible dans les modes light/dark et sur différents fonds.",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Non obstruction",
        expectedResult: "Le badge n'interfère pas avec la zone tactile de l'élément parent.",
        testMethod: "Test tactile",
      },
    ],
  },
  {
    category: "Alternatives textuelles 📝",
    criteria: [
      {
        criterion: "Transmission de l'information utile",
        expectedResult:
          'Si le badge porte une donnée utile, celle-ci est restituée via le libellé parent (ex. aria-label="Messagerie, 4 messages non lus").',
        testMethod: "Inspecteur a11y",
      },
      {
        criterion: "Pas de rôle ARIA superflu",
        expectedResult: "Le badge ne possède pas de rôle propre sauf si son contenu est essentiel au sens.",
        testMethod: "Inspecteur a11y",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "Apparition / disparition perceptible",
        expectedResult: "Une animation douce (fade-in/out, scale) est autorisée pour l'apparition ou la mise à jour",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Animation discrète",
        expectedResult: "Une animation douce (fade-in/out, scale) est autorisée pour l'apparition ou la mise à jour",
        testMethod: "Test fonctionnel",
      },
    ],
  },
];

const BadgeAccessibilityTable = () => {
  return <AccessibilityTable data={badgeAccessibilityData} />;
};

export default BadgeAccessibilityTable;
