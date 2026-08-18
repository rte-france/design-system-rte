## Treeview

| Nom                | Type                           | Valeur par défaut | Description                                                                      |
| ------------------ | ------------------------------ | ----------------- | -------------------------------------------------------------------------------- |
| hasCheckbox        | boolean                        | -                 | Active les cases à cocher par défaut pour tous les éléments.                     |
| id                 | string                         | treeview          | Identifiant de l'arborescence utilisé pour construire les identifiants internes. |
| isCompact          | boolean                        | -                 |                                                                                  |
| items              | TreeviewItemProps[]            | -                 |                                                                                  |
| onChange           | (id: string) => void           | -                 | Appelé quand le contenu d'un élément est sélectionné.                            |
| onClickElement     | (id: string) => void           | -                 | Appelé quand un élément est sélectionné.                                         |
| onCheckedIdsChange | (checkedIds: string[]) => void | -                 | Appelé à chaque selection / désélection de case à cocher                         |
| selectedId         | string                         | -                 | Identifiant de l'élément sélectionné initialement.                               |
| selectedPath       | string                         | -                 | Chemin d'index de l'élément sélectionné initialement.                            |

## TreeviewItemProps

| Nom               | Type                     | Valeur par défaut | Description                                                                                         |
| ----------------- | ------------------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| actionIcon        | string                   | -                 | Nom de l'icône d'action. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey. |
| actionMenuItems   | TreeviewActionMenuItem[] | -                 | Éléments du menu d'action.                                                                          |
| disabled          | boolean                  | -                 | Désactive les interactions de l'élément.                                                            |
| hasBadge          | boolean                  | -                 | Affiche le badge intégré.                                                                           |
| hasCheckbox       | boolean                  | -                 | Active une case à cocher pour l'élément.                                                            |
| id                | string                   | -                 | Identifiant de l'élément. À défaut, labelText est utilisé.                                          |
| isOpen            | boolean                  | -                 | État ouvert initial si l'élément possède des enfants.                                               |
| items             | TreeviewItemProps[]      | -                 | Enfants récursifs de l'élément.                                                                     |
| labelText         | string                   | -                 | Libellé visible de l'élément.                                                                       |
| onActionIconClick | (itemId: string) => void | -                 | Appelé lors du clic sur l'action directe de l'élément.                                              |

## TreeviewActionMenuItem

| Nom          | Type                     | Valeur par défaut | Description                                                                                                  |
| ------------ | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| children     | TreeviewActionMenuItem[] | -                 | Actions enfants récursives.                                                                                  |
| disabled     | boolean                  | -                 | Désactive l'action.                                                                                          |
| hasSeparator | boolean                  | -                 | Affiche un séparateur avant l'action.                                                                        |
| id           | string                   | -                 | Identifiant de l'action.                                                                                     |
| label        | string                   | -                 | Libellé de l'action.                                                                                         |
| leftIcon     | string                   | -                 | Nom de l'icône affichée à gauche. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey. |
| onClick      | () => void               | -                 | Callback appelé pour l'action.                                                                               |
