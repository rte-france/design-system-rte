import Table from "../../../../.storybook/template/Table/Table";

const AccessibilityTable = () => {
  const accessibilityOptions = {
    headers: ["Catégorie", "Critère d'accessibilité", "Résultat attendu", "Méthode de test"],
    lines: [
      [
        "Navigation clavier 🖥️",
        "Seuls les liens (composants Link) sont atteignables via TAB",
        'Les séparateurs, la troncature ("...") et l\'élément courant ne sont pas focusables',
        "Test clavier (TAB / SHIFT+TAB)",
      ],
      [
        "",
        "L'ordre logique suit le DOM et la hiérarchie",
        "Navigation séquentielle de gauche à droite",
        "Test clavier",
      ],
      [
        "Focus visible 👀",
        "Le focus est visible uniquement sur les liens",
        "Focus conforme au focus du Link",
        "Test visuel",
      ],
      [
        "Lecture par un lecteur d'écran 🔊",
        'Le rôle global est reconnu comme "navigation"',
        'Conteneur avec role="navigation" et aria-label="Fil d\'Ariane"',
        "VoiceOver, NVDA",
      ],
      [
        "",
        "Chaque lien est lu avec son nom et son rôle",
        '"Accueil, lien", "Offres, lien", "Page actuelle"',
        "Test lecteur d'écran",
      ],
      [
        "",
        "L'élément courant est annoncé comme tel",
        'aria-current="page" présent sur le dernier élément',
        "Inspecteur / Lecteur",
      ],
      ["", "Les séparateurs sont ignorés", 'Attribut aria-hidden="true" sur les éléments de séparation', "Inspecteur"],
      ["", "La troncature est ignorée", 'Attribut aria-hidden="true" sur la troncature', "Inspecteur"],
      [
        "Contraste des couleurs 🎨",
        "Texte et séparateurs conformes WCAG AA",
        "Ratio ≥ 4.5:1 pour les liens, séparateurs et état actif",
        "Outils axe, Stark",
      ],
      [
        "Taille et espace tactile 📱",
        "Zone de clic sur les liens suffisamment large",
        "Min. 24px de hauteur, min. 8px entre chaque item",
        "DevTools / Mobile",
      ],
      [
        "État et feedback visuel 🔄",
        "L'état actif est perceptible visuellement et à l'audio",
        "Lien actif mis en forme distincte (gras, couleur…)",
        "Test visuel + lecteur d'écran",
      ],
    ],
  };

  return <Table options={accessibilityOptions} />;
};

export default AccessibilityTable;
