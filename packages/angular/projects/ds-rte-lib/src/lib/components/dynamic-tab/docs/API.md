| Nom             | Type                              | Valeur par défaut | Description                                                                                                    |
| --------------- | --------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| appearance      | neutral \| brand                  | "neutral"         | Apparence des onglets                                                                                          |
| changeActiveTab | output<string>                    | -                 | Événement émis lorsque l’onglet actif change                                                                   |
| compactSpacing  | boolean                           | false             | Active l’espacement compact                                                                                    |
| hiddenTabsLabel | string \| undefined               | -                 | Libellé personnalisé du menu contenant les onglets masqués                                                     |
| iconName        | string \| undefined               | -                 | Icône affichée avec le titre. La valeur doit correspondre à une clé `RegularIconIdKey` ou `TogglableIconIdKey` |
| id              | string                            | "dynamic-tab"     | Identifiant du composant et de la liste d’onglets                                                              |
| isClosable      | boolean                           | true              | Autorise la fermeture des onglets                                                                              |
| isEditable      | boolean                           | true              | Autorise la modification des titres                                                                            |
| newTabConfig    | DynamicTabItemOption \| undefined | -                 | Configuration du nouvel onglet. Le bouton d’ajout est affiché lorsque cette valeur est fournie                 |
| options         | DynamicTabItemOption[]            | []                | Liste des onglets                                                                                              |
| selectedTabId   | string \| undefined               | -                 | Identifiant de l’onglet sélectionné                                                                            |
| updateTabs      | output<DynamicTabItemOption[]>    | -                 | Événement émis lorsque la liste des onglets est modifiée                                                       |

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
