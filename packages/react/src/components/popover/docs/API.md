| Nom                    | Type                                             | Valeur par défaut | Description                                             |
| ---------------------- | ------------------------------------------------ | ----------------- | ------------------------------------------------------- |
| alignment              | "start" \| "center" \| "end"                     | -                 | Alignement du Popover par rapport au déclencheur.       |
| arrow                  | boolean                                          | true              | Affiche la flèche du Popover.                           |
| children               | React.ReactNode                                  | -                 | Élément déclencheur du Popover.                         |
| className              | string                                           | ""                | Classe CSS ajoutée au Popover.                          |
| closeOnClickOutside    | boolean                                          | true              | Ferme le Popover lors d’un clic extérieur.              |
| closeOnEscape          | boolean                                          | true              | Ferme le Popover avec la touche Escape.                 |
| content                | string                                           | -                 | Contenu textuel du Popover.                             |
| onClickPrimaryButton   | () => void                                       | -                 | Callback exécuté lors du clic sur le bouton primaire.   |
| onClickSecondaryButton | () => void                                       | -                 | Callback exécuté lors du clic sur le bouton secondaire. |
| position               | "auto" \| "top" \| "bottom" \| "left" \| "right" | "auto"            | Position du Popover par rapport au déclencheur.         |
| primaryButtonLabel     | string                                           | -                 | Libellé requis du bouton primaire.                      |
| secondaryButtonLabel   | string                                           | -                 | Libellé optionnel du bouton secondaire.                 |
| title                  | string                                           | -                 | Titre optionnel du Popover.                             |
| triggerStyles          | React.CSSProperties                              | -                 | Styles inline appliqués à l’élément déclencheur.        |
