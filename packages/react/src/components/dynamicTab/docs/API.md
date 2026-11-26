| Nom               | Type                                          | Valeur par défaut | Description                                                                                                    |
| ----------------- | --------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| appearance        | neutral \| brand                              | "neutral"         | Apparence des onglets                                                                                          |
| compactSpacing    | boolean                                       | -                 | Active l’espacement compact                                                                                    |
| iconName          | string                                        | -                 | Icône affichée avec le titre. La valeur doit correspondre à une clé `RegularIconIdKey` ou `TogglableIconIdKey` |
| id                | string                                        | "dynamic-tab"     | Identifiant du composant                                                                                       |
| isClosable        | boolean                                       | true              | Autorise la fermeture des onglets                                                                              |
| isEditable        | boolean                                       | true              | Autorise la modification des titres                                                                            |
| newTabConfig      | DynamicTabItemOption                          | -                 | Données utilisées pour créer un onglet                                                                         |
| onChangeActiveTab | (selectedTabId: string) => void               | -                 | Appelé lorsque l’onglet actif change                                                                           |
| onUpdateTabs      | (updatedTabs: DynamicTabItemOption[]) => void | -                 | Appelé lorsque la liste des onglets est modifiée                                                               |
| options           | DynamicTabItemOption[]                        | -                 | Liste initiale des onglets                                                                                     |
| selectedTabId     | string                                        | -                 | Identifiant initial de l’onglet sélectionné                                                                    |

### DynamicTabItemOption

| Nom          | Type                          | Valeur par défaut | Description                                                                                                                         |
| ------------ | ----------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| badgeContent | number \| icon \| empty       | -                 | Type de contenu du badge                                                                                                            |
| badgeCount   | number                        | -                 | Nombre affiché lorsque `badgeContent` vaut `number`                                                                                 |
| badgeIcon    | string                        | -                 | Icône du badge lorsque `badgeContent` vaut `icon`. La valeur doit correspondre à une clé `RegularIconIdKey` ou `TogglableIconIdKey` |
| badgeSize    | xs \| s \| m \| l             | -                 | Taille déclarée par le type partagé                                                                                                 |
| badgeType    | brand \| neutral \| indicator | -                 | Apparence du badge                                                                                                                  |
| id           | string                        | -                 | Identifiant unique de l’onglet                                                                                                      |
| showBadge    | boolean                       | -                 | Indicateur déclaré par le type partagé                                                                                              |
| title        | string                        | -                 | Titre de l’onglet                                                                                                                   |
