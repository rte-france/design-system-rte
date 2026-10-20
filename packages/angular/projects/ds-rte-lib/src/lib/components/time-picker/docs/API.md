| Nom                  | Type                                             | Valeur par défaut | Description                                                                       |
| -------------------- | ------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------- |
| assistiveAppearance  | "description" \| "error" \| "success" \| "link"  | "description"     | Apparence du texte d'aide.                                                        |
| assistiveTextLabel   | string                                           | -                 | Texte d'aide affiché lorsque le menu est fermé.                                   |
| assistiveTextLink    | string                                           | -                 | URL associée au texte d'aide.                                                     |
| disabled             | boolean                                          | false             | Désactive le champ et empêche l'ouverture du menu.                                |
| displaySeconds       | boolean                                          | true              | Gère l'affichage des secondes.                                                    |
| errorMessage         | string                                           | -                 | Message affiché à la place de `assistiveTextLabel` lorsque `isError` vaut `true`. |
| hourIncrement        | number                                           | 1                 | Pas utilisé par les boutons et les touches d'incrémentation des heures.           |
| id                   | string                                           | -                 | Identifiant requis de l'input.                                                    |
| isCompact            | boolean                                          | false             | Réduit l'espacement du champ.                                                     |
| isError              | boolean                                          | false             | Active l'état visuel d'erreur.                                                    |
| isHourReadOnly       | boolean                                          | false             | Empêche la modification du segment des heures.                                    |
| isMinuteReadOnly     | boolean                                          | false             | Empêche la modification du segment des minutes.                                   |
| isSecondReadOnly     | boolean                                          | false             | Empêche la modification du segment des secondes.                                  |
| label                | string                                           | -                 | Libellé requis du champ.                                                          |
| labelId              | string                                           | -                 | Identifiant appliqué au libellé et référencé par `aria-labelledby`.               |
| minuteIncrement      | number                                           | 1                 | Pas utilisé par les boutons et les touches d'incrémentation des minutes.          |
| placeholder          | string                                           | -                 | Texte affiché lorsque le champ est vide et interactif.                            |
| readOnly             | boolean                                          | false             | Rend les segments non modifiables et empêche l'ouverture du menu.                 |
| required             | boolean                                          | false             | Indique que le champ est requis dans le libellé.                                  |
| secondIncrement      | number                                           | 1                 | Pas utilisé par les boutons et les touches d'incrémentation des secondes.         |
| showAssistiveIcon    | boolean                                          | false             | Affiche l'icône du texte d'aide.                                                  |
| showLabel            | boolean                                          | true              | Affiche le libellé.                                                               |
| showLabelRequirement | boolean                                          | false             | Affiche l'indication de champ requis dans le libellé.                             |
| showResetIcon        | boolean                                          | false             | Affiche l'icône permettant de réinitialiser la valeur.                            |
| value                | { hh: string; mm: string; ss: string }           | -                 | Valeur fournie en entrée.                                                         |
| valueChange          | output\<{ hh: string; mm: string; ss: string }\> | -                 | Événement émis lorsque la valeur interne change.                                  |

Le composant implémente également `ControlValueAccessor` et peut être utilisé avec les formulaires Angular.
