| Nom            | Type                     | Valeur par défaut | Description                                                                                                                |
| -------------- | ------------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| appearance     | brand \| neutral         | "brand"           | Définit l'apparence visuelle du Chip.                                                                                      |
| clickChip      | output\<Event\>          | -                 | Événement émis lors d'un clic ou de l'activation avec Entrée ou Espace.                                                    |
| close          | output\<Event\>          | -                 | Événement émis lors de la suppression d'un Chip de type `input`.                                                           |
| compactSpacing | boolean                  | false             | Réduit l'espacement interne du Chip.                                                                                       |
| disabled       | boolean                  | false             | Désactive l'activation du Chip et de son bouton de suppression.                                                            |
| id             | string \| undefined      | -                 | Identifiant du Chip.                                                                                                       |
| label          | string                   | ""                | Libellé affiché dans le Chip.                                                                                              |
| selected       | boolean                  | false             | Indique si le Chip est sélectionné pour les types `single` et `multi`.                                                     |
| type           | single \| multi \| input | "single"          | Définit le comportement et le rôle ARIA du Chip : `radio` pour `single`, `checkbox` pour `multi` et `option` pour `input`. |
