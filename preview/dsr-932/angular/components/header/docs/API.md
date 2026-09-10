| Nom                         | Type                                                                            | Valeur par défaut       | Description                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| actionButton                | HeaderActionButtonConfig \| undefined                                           | -                       | Configuration du bouton d’action.                                                               |
| actionButtonClick           | output\<void\>                                                                  | -                       | Événement émis au clic sur le bouton d’action.                                                  |
| appearance                  | brand \| neutral                                                                | "brand"                 | Apparence du Header.                                                                            |
| applicationName             | string                                                                          | ""                      | Nom de l’application.                                                                           |
| avatarClick                 | output\<void\>                                                                  | -                       | Événement émis au clic sur l’avatar.                                                            |
| avatarProps                 | HeaderAvatarConfig \| undefined                                                 | -                       | Configuration de l’avatar.                                                                      |
| hasActionButton             | boolean                                                                         | true                    | Affiche le bouton d’action.                                                                     |
| hasAvatar                   | boolean                                                                         | true                    | Affiche l’avatar.                                                                               |
| hasDivider                  | boolean                                                                         | false                   | Affiche un séparateur.                                                                          |
| hasIconButtons              | boolean                                                                         | true                    | Affiche les boutons d’icônes.                                                                   |
| hasLeftSection              | boolean                                                                         | true                    | Affiche la section gauche.                                                                      |
| hasLogo                     | boolean                                                                         | true                    | Affiche le logo.                                                                                |
| hasMidSection               | boolean                                                                         | true                    | Affiche la navigation centrale.                                                                 |
| hasRightSection             | boolean                                                                         | true                    | Affiche la section droite.                                                                      |
| hasSearchbar                | boolean                                                                         | true                    | Affiche la Searchbar.                                                                           |
| hasSubHeader                | boolean                                                                         | true                    | Autorise l’affichage du sous-header.                                                            |
| homeAriaLabel               | string \| undefined                                                             | -                       | Libellé accessible du lien d’accueil.                                                           |
| homeExternalLink            | boolean                                                                         | false                   | Traite le lien d’accueil comme un lien externe.                                                 |
| homeHref                    | string \| undefined                                                             | -                       | URL HTML du lien d’accueil.                                                                     |
| homeLink                    | string                                                                          | "/"                     | Lien d’accueil (déprécié, utiliser `homeRouterLink`).                                           |
| homeRouterLink              | RouterLinkValue                                                                 | -                       | Destination RouterLink de l’accueil.                                                            |
| homeRouterLinkConfig        | RouterLinkConfig                                                                | -                       | Configuration RouterLink de l’accueil.                                                          |
| iconButtonClick             | output\<string \| undefined\>                                                   | -                       | Événement émis au clic sur un bouton d’icône.                                                   |
| iconButtons                 | HeaderIconButtonConfig\<RegularIconIdKey \| TogglableIconIdKey\>[] \| undefined | -                       | Boutons d’icônes.`iconName` doit être une clé `RegularIconIdKey` ou `TogglableIconIdKey`.       |
| isCompact                   | boolean                                                                         | false                   | Réduit les espacements et masque `versionNumber`.                                               |
| isSearchActive              | boolean                                                                         | false                   | État externe de la recherche mobile.                                                            |
| isSearchActiveChange        | output\<boolean\>                                                               | -                       | Événement de changement d’état de recherche.                                                    |
| isSticky                    | boolean                                                                         | false                   | Active le positionnement sticky.                                                                |
| logoSrc                     | string \| undefined                                                             | -                       | Source du logo.                                                                                 |
| mobileMenuButton            | HeaderIconButtonConfig\<RegularIconIdKey \| TogglableIconIdKey\> \| undefined   | -                       | Bouton du menu mobile. `iconName` doit être une clé `RegularIconIdKey` ou `TogglableIconIdKey`. |
| mobileMenuClick             | output\<void\>                                                                  | -                       | Événement d’ouverture du menu mobile.                                                           |
| mobileMenuItems             | DropdownItemConfig[]                                                            | []                      | Items du menu mobile.                                                                           |
| mobileMenuItemEvent         | output\<{ event: Event; id: string; item?: DropdownItemConfig }\>               | -                       | Événement d’interaction avec un item mobile.                                                    |
| mobileSearchButtonAriaLabel | string                                                                          | "Rechercher"            | Libellé accessible de la recherche mobile.                                                      |
| navigationAriaLabel         | string                                                                          | "Navigation principale" | Libellé accessible de la navigation.                                                            |
| navigationItemClick         | output\<string \| undefined\>                                                   | -                       | Événement émis lors d’un clic de navigation.                                                    |
| navigationItems             | HeaderNavigationElement[]                                                       | []                      | Items de navigation.                                                                            |
| searchEvent                 | output\<string \| undefined\>                                                   | -                       | Événement émis par la Searchbar.                                                                |
| searchbarProps              | SearchBarProps \| undefined                                                     | -                       | Propriétés de la Searchbar.                                                                     |
| showAtScrollUp              | boolean                                                                         | false                   | Réaffiche le Header au défilement vers le haut.                                                 |
| subHeaderConfig             | HeaderSubHeaderConfig \| undefined                                              | -                       | Configuration du sous-header breadcrumbs.                                                       |
| versionNumber               | string                                                                          | -                       | Numéro de version, masqué en mode compact.                                                      |

### HeaderActionButtonConfig

| Nom      | Type    | Valeur par défaut | Description                   |
| -------- | ------- | ----------------- | ----------------------------- |
| disabled | boolean | -                 | Désactive le bouton d’action. |
| iconName | string  | -                 | Nom de l’icône du bouton.     |
| label    | string  | -                 | Libellé du bouton d’action.   |

### HeaderNavigationItem

| Nom       | Type    | Valeur par défaut | Description                                       |
| --------- | ------- | ----------------- | ------------------------------------------------- |
| active    | boolean | -                 | Indique que l’item correspond à la page courante. |
| ariaLabel | string  | -                 | Libellé accessible de l’item.                     |
| disabled  | boolean | -                 | Désactive l’item de navigation.                   |
| href      | string  | -                 | Destination de l’item.                            |
| id        | string  | -                 | Identifiant de l’item.                            |
| label     | string  | -                 | Libellé affiché.                                  |

### HeaderSubHeaderConfig

| Nom       | Type                  | Valeur par défaut | Description                          |
| --------- | --------------------- | ----------------- | ------------------------------------ |
| ariaLabel | string                | -                 | Libellé accessible des breadcrumbs.  |
| items     | BreadcrumbItemProps[] | -                 | Items affichés dans les breadcrumbs. |
