| Nom         | Type             | Valeur par défaut | Description                                                                                 |
| ----------- | ---------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| ariaLabel   | string           | ""                | Nom accessible transmis à l'attribut `aria-label`.                                          |
| ariaLabelledBy | string         | ""                | Référence de l'élément qui fournit le nom accessible via `aria-labelledby`.                  |
| appearance  | brand \| neutral | "brand"           | Apparence visuelle du switch.                                                               |
| checked     | boolean          | false             | État fourni par le parent.                                                                  |
| disabled    | boolean          | false             | Désactive le switch. L'état désactivé d'un formulaire réactif est également pris en compte. |
| label       | string           | ""                | Libellé utilisé pour le nom accessible et affiché lorsqu'il est fourni.                    |
| readOnly    | boolean          | false             | Empêche la modification de l'état.                                                          |
| showIcon    | boolean          | true              | Affiche l'icône `check` lorsque le switch est activé et `close` lorsqu'il est désactivé.    |
| stateChange | output\<Event\>  | -                 | Événement émis lorsque l'état change.                                                       |

`SwitchComponent` est un composant standalone exporté par `@design-system-rte/angular`. Il implémente `ControlValueAccessor` pour fonctionner avec les formulaires Angular.
