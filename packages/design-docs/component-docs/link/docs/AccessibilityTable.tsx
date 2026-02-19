import React from "react";

import AccessibilityTable from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const linkAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "Accès séquentiel",
        expectedResult: "Le lien est atteignable via TAB dans l'ordre logique du DOM.",
        testMethod: "Test clavier",
      },
      {
        criterion: "Activation",
        expectedResult: "Le lien est activable via ENTRÉE (et non ESPACE).",
        testMethod: "Test clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Indicateur de focus",
        expectedResult: "Un anneau de focus DS clair et contrasté apparaît au focus clavier.",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Stabilité visuelle",
        expectedResult: "Le focus ne décale pas le texte ou le soulignement du lien.",
        testMethod: "Inspection visuelle",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d’écran 🖱️",
    criteria: [
      {
        criterion: "Annonce du rôle et du nom",
        expectedResult: "Le lien est annoncé comme 'lien' avec lecture du texte visible.",
        testMethod: "NVDA / VoiceOver",
      },
      {
        criterion: "Lien externe",
        expectedResult:
          "Si externalLink=true, le lien est annoncé comme 'ouvre une nouvelle fenêtre' ou 'nouvel onglet'.",
        testMethod: "NVDA / VoiceOver",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔄",
    criteria: [
      {
        criterion: "États perceptibles",
        expectedResult: "Les états enabled / hover / active / focus / visited sont visuellement distincts.",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Indication des liens externes",
        expectedResult: "Les liens externes affichent une icône ou un indicateur visuel clair de redirection externe.",
        testMethod: "Inspection visuelle",
      },
      {
        criterion: "Respect des préférences système",
        expectedResult: "Les animations (soulignement, teinte) respectent prefers-reduced-motion.",
        testMethod: "Test accessibilité OS",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Texte / fond",
        expectedResult: "Le texte du lien respecte un ratio de contraste ≥ 4.5:1 avec le fond.",
        testMethod: "Outils (axe, Stark)",
      },
      {
        criterion: "États du lien",
        expectedResult: "Les variations hover / visited conservent un contraste ≥ 3:1.",
        testMethod: "Outils (axe, Stark)",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Surface cliquable",
        expectedResult: "Zone cliquable ≥ 24×24 px (y compris lien isolé).",
        testMethod: "Test tactile + DevTools mobile",
      },
      {
        criterion: "Accessibilité au zoom",
        expectedResult: "Le lien reste visible et utilisable jusqu'à 400 % de zoom.",
        testMethod: "Test navigateur",
      },
    ],
  },
  {
    category: "Alternatives textuelles ✍️",
    criteria: [
      {
        criterion: "Texte explicite",
        expectedResult: "Le texte du lien décrit clairement la destination (éviter 'cliquez ici').",
        testMethod: "Inspection manuelle / NVDA",
      },
    ],
  },
];

const LinkAccessibilityTable = () => {
  return <AccessibilityTable data={linkAccessibilityData} />;
};

export default LinkAccessibilityTable;
