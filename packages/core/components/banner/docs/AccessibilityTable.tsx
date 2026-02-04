import React from "react";

import AccessibilityTable from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";
import type { AccessibilityCategory } from "../../../../design-docs/src/components/ComponentDocs/Overview/AccessibilityTable/AccessibilityTable";

const bannerAccessibilityData: AccessibilityCategory[] = [
  {
    category: "Navigation clavier 🖥️",
    criteria: [
      {
        criterion: "L’utilisateur peut accéder à la bannière si elle contient un lien ou un bouton",
        expectedResult: "Le focus se positionne uniquement sur les éléments interactifs (CTA, bouton de fermeture)",
        testMethod: "Test manuel clavier",
      },
      {
        criterion: "La bannière sans interaction n’est pas atteignable au clavier",
        expectedResult: "Le contenu pur texte est ignoré lors du tabbing",
        testMethod: "Test manuel clavier",
      },
    ],
  },
  {
    category: "Focus visible 👀",
    criteria: [
      {
        criterion: "Les éléments interactifs ont un focus visible",
        expectedResult: "Anneau ou contour visible sur bouton/CTA",
        testMethod: "Focus clavier + inspecteur a11y",
      },
    ],
  },
  {
    category: "Lecture par un lecteur d’écran 🔊",
    criteria: [
      {
        criterion: "Le contenu de la bannière est annoncé",
        expectedResult: "Texte annoncé comme bloc d’information (ARIA role alert ou status selon l’urgence)",
        testMethod: "NVDA, VoiceOver",
      },
      {
        criterion: "Les CTA ou boutons sont correctement labellisés",
        expectedResult: "`aria-label`, `aria-describedby` pour les actions",
        testMethod: "NVDA, VoiceOver",
      },
      {
        criterion: "Fermeture de la banner annoncée (si confirmée par interaction)",
        expectedResult: 'Le bouton actif est lu comme "sélectionné"',
        testMethod: "NVDA, VoiceOver",
      },
    ],
  },
  {
    category: "Contraste des couleurs 🎨",
    criteria: [
      {
        criterion: "Le fond et le texte respectent un ratio minimum",
        expectedResult: "Ratio de contraste ≥ 4.5:1",
        testMethod: "Outils comme Axe, Stark",
      },
    ],
  },
  {
    category: "Taille et espace tactile 📱",
    criteria: [
      {
        criterion: "Les boutons (fermeture, CTA) ont une taille minimale",
        expectedResult: "Zone tactile ≥ 24×24px",
        testMethod: "Test tactile sur mobile",
      },
    ],
  },
  {
    category: "Alternatives textuelles 📝",
    criteria: [
      {
        criterion: "Icônes décoratives masquées au lecteur d’écran",
        expectedResult: 'Attribut ariahidden="true"',
        testMethod: "Inspecteur a11y",
      },
      {
        criterion: "Si bouton d’action : nom explicite via aria-label ou texte visible",
        expectedResult: 'Ex : "Annuler", "Fermer"',
        testMethod: "Inspecteur + test manuel",
      },
    ],
  },
  {
    category: "État et feedback visuel 🔁",
    criteria: [
      {
        criterion: "États visuellement distincts selon la nature du message (info, succès, erreur, etc.)",
        expectedResult: "Les couleurs et icônes varient en fonction du type",
        testMethod: "Test visuel + audit d’interface",
      },
    ],
  },
];

const BannerAccessibilityTable = () => {
  return <AccessibilityTable data={bannerAccessibilityData} />;
};

export default BannerAccessibilityTable;
