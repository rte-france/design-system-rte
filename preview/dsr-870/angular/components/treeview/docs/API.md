## TreeviewComponent

| Nom              | Type                                                                                                             | Valeur par défaut | Description                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------- |
| actionIconClick  | output\<{ itemId: string; event: Event }\>                                                                       | -                 | Émis quand l'icône d'action directe est activée.                                 |
| actionMenuClick  | output\<{ itemId: string; menuItemId: string; menuItemLabel: string; event: Event; item?: DropdownItemConfig }\> | -                 | Émis quand une action de menu est activée.                                       |
| checkedIdsChange | output\<ReadonlySet\<string\>\>                                                                                  | -                 | Émis avec les identifiants actuellement cochés.                                  |
| hasCheckbox      | boolean                                                                                                          | false             | Active les cases à cocher par défaut pour tous les éléments.                     |
| id               | string                                                                                                           | treeview          | Identifiant de l'arborescence utilisé pour construire les identifiants internes. |
| isCompact        | boolean                                                                                                          | false             |                                                                                  |
| itemClick        | output\<string \| undefined\>                                                                                    | -                 | Émis quand le contenu d'un élément est sélectionné.                              |
| items            | TreeviewItemProps[]                                                                                              | []                |                                                                                  |
| openChange       | output\<{ id: string; open: boolean }\>                                                                          | -                 | Émis quand un élément est ouvert ou fermé.                                       |
| selectedId       | string \| undefined                                                                                              | -                 | Identifiant de l'élément sélectionné.                                            |
| selectedPath     | string \| undefined                                                                                              | -                 | Chemin d'index de l'élément sélectionné.                                         |
| selectionChange  | output\<{ id?: string; selected: boolean }\>                                                                     | -                 | Émis lors de l'application de la sélection. L'événement contient id et selected. |

## TreeviewItemProps

| Nom             | Type                     | Valeur par défaut | Description                                                                                         |
| --------------- | ------------------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| actionIcon      | string                   | -                 | Nom de l'icône d'action. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey. |
| actionMenuItems | TreeviewActionMenuItem[] | -                 | Éléments du menu d'action.                                                                          |
| disabled        | boolean                  | -                 | Désactive les interactions de l'élément.                                                            |
| hasBadge        | boolean                  | -                 | Affiche le badge intégré.                                                                           |
| hasCheckbox     | boolean                  | -                 | Active une case à cocher pour l'élément.                                                            |
| hasIcon         | boolean                  | -                 | Affiche icon lorsque cette valeur est vraie.                                                        |
| id              | string                   | -                 | Identifiant de l'élément. À défaut, labelText est utilisé.                                          |
| isOpen          | boolean                  | -                 | État ouvert initial si l'élément possède des enfants.                                               |
| items           | TreeviewItemProps[]      | -                 | Enfants récursifs de l'élément.                                                                     |
| labelText       | string                   | -                 | Libellé visible de l'élément.                                                                       |

## TreeviewActionMenuItem

| Nom          | Type                     | Valeur par défaut | Description                                                                                                  |
| ------------ | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| children     | TreeviewActionMenuItem[] | -                 |                                                                                                              |
| disabled     | boolean                  | -                 | Désactive l'action.                                                                                          |
| hasSeparator | boolean                  | -                 | Affiche un séparateur avant l'action.                                                                        |
| id           | string                   | -                 | Identifiant de l'action.                                                                                     |
| label        | string                   | -                 | Libellé de l'action.                                                                                         |
| leftIcon     | string                   | -                 | Nom de l'icône affichée à gauche. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey. |
| onClick      | () => void               | -                 | Callback défini dans le type partagé ; l'événement Angular du menu est exposé par actionMenuClick.           |
