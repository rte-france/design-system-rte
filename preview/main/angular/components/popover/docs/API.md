## PopoverDirective

`PopoverDirective` est une directive Angular appliquée à l’élément hôte avec l’attribut `rtePopover`.

| Nom                            | Type                                                   | Valeur par défaut | Description                                       |
| ------------------------------ | ------------------------------------------------------ | ----------------- | ------------------------------------------------- |
| clickPrimaryButton             | output `void`                                          | -                 | Émis lors du clic sur le bouton primaire.         |
| clickSecondaryButton           | output `void`                                          | -                 | Émis lors du clic sur le bouton secondaire.       |
| rtePopoverAlignment            | input "start" \| "center" \| "end"                     | -                 | Alignement du Popover par rapport au déclencheur. |
| rtePopoverArrow                | input boolean                                          | true              | Affiche la flèche du Popover.                     |
| rtePopoverCloseOnClickOutside  | input boolean                                          | true              | Ferme le Popover lors d’un clic extérieur.        |
| rtePopoverCloseOnEscape        | input boolean                                          | true              | Ferme le Popover avec la touche Escape.           |
| rtePopoverContent              | input string                                           | -                 | Contenu textuel requis du Popover.                |
| rtePopoverPosition             | input "auto" \| "top" \| "bottom" \| "left" \| "right" | "auto"            | Position du Popover par rapport au déclencheur.   |
| rtePopoverPrimaryButtonLabel   | input string                                           | -                 | Libellé requis du bouton primaire.                |
| rtePopoverSecondaryButtonLabel | input string                                           | -                 | Libellé optionnel du bouton secondaire.           |
| rtePopoverTitle                | input string                                           | -                 | Titre optionnel du Popover.                       |
