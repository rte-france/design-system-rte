import React from "react";

import AccessibilityTable from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const buttonAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Navigation au clavier",
        expectedResult: "Le bouton est focusable via la touche TAB.",
        testMethod: "Test clavier",
      },
      {
        criterion: "Activation clavier",
        expectedResult: "Le bouton est activable via Espace ou Entrée.",
        testMethod: "Test clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Indicateur visuel de focus",
        expectedResult: "L’indicateur de focus ne modifie pas le layout ni la position du bouton",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "États cohérents",
        expectedResult: "Focus visible et conforme au DS",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d’écran 🔊",
    criteria: [
      {
        criterion: "Annonce correcte",
        expectedResult: "Le bouton est annoncé comme élément interactif (“bouton”)",
        testMethod: "NVDA / VoiceOver",
      },
      {
        criterion: "Description lisible",
        expectedResult: "Le texte du bouton ou son aria-label est lu par les lecteurs d’écran",
        testMethod: "NVDA / VoiceOver",
      },
    ],
  },
  {
    category: "Alternatives textuelles 📝",
    criteria: [
      {
        criterion: "Icônes décoratives",
        expectedResult: 'Icônes décoratives masquées (aria-hidden="true")',
        testMethod: "Inspecteur a11y",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "États perceptibles",
        expectedResult: "Les états hover, active, focus, disabled sont visuellement distincts",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Retour utilisateur",
        expectedResult:
          "Si une action génère une mise à jour (ex. chargement), le feedback visuel est perçu sans désorientation",
        testMethod: "Test fonctionnel",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Texte/fond",
        expectedResult: "Ratio ≥ 4.5:1 entre le texte et le fond",
        testMethod: "Outils (axe, Stark)",
      },
      {
        criterion: "Bouton/fond d’interface",
        expectedResult: "Ratio ≥ 3:1 entre le fond du bouton et l’arrière-plan",
        testMethod: "Outils (axe, Stark)",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Surface interactive",
        expectedResult: "Zone cliquable ≥ 24×24 px",
        testMethod: "DevTools mobile",
      },
      {
        criterion: "Espacement entre boutons",
        expectedResult: "≥ 8 px entre deux boutons adjacents",
        testMethod: "Test tactile",
      },
    ],
  },
];

const ButtonAccessibilityTable = () => {
  return <AccessibilityTable data={buttonAccessibilityData} />;
};

export default ButtonAccessibilityTable;
