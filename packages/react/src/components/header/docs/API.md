| Nom                         | Type                                                               | Valeur par défaut       | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| actionButton                | HeaderActionButtonConfig                                           | -                       | Configuration du bouton d’action.                                                                                  |
| appearance                  | brand \| neutral                                                   | "brand"                 | Apparence du Header.                                                                                               |
| applicationName             | string                                                             | -                       | Nom de l’application.                                                                                              |
| avatarProps                 | HeaderAvatarProps                                                  | -                       | Propriétés de l’avatar.                                                                                            |
| compactSpacing              | boolean                                                            | false                   | Réduit les espacements ; masque aussi `versionNumber`.                                                             |
| hasAvatar                   | boolean                                                            | true                    | Affiche l’avatar si `avatarProps` est fourni.                                                                      |
| hasDivider                  | boolean                                                            | false                   | Affiche un séparateur sous la zone principale.                                                                     |
| hasLeftSection              | boolean                                                            | true                    | Affiche la section gauche.                                                                                         |
| hasRightSection             | boolean                                                            | true                    | Affiche la section droite.                                                                                         |
| hasSearchbar                | boolean                                                            | true                    | Affiche la Searchbar.                                                                                              |
| homeLink                    | string                                                             | "/"                     | Lien de retour vers l’accueil.                                                                                     |
| iconButtons                 | HeaderIconButtonConfig\<RegularIconIdKey \| TogglableIconIdKey\>[] | -                       | Boutons d’icônes ; `iconName` doit être une clé `RegularIconIdKey` ou `TogglableIconIdKey`.                        |
| isMobileMenuOpen            | boolean                                                            | false                   | Indique si le menu mobile est ouvert.                                                                              |
| isSticky                    | boolean                                                            | false                   | Active le positionnement sticky.                                                                                   |
| leftSectionContent          | React.ReactNode                                                    | -                       | Contenu personnalisé de la section gauche.                                                                         |
| logoSrc                     | string                                                             | -                       | Source du logo.                                                                                                    |
| mobileMenuContent           | React.ReactNode                                                    | -                       | Contenu personnalisé du menu mobile.                                                                               |
| mobileMenuIconProps         | HeaderIconButtonConfig\<RegularIconIdKey \| TogglableIconIdKey\>   | -                       | Configuration de l’icône du menu mobile ; `iconName` doit être une clé `RegularIconIdKey` ou `TogglableIconIdKey`. |
| mobileMenuItems             | DropdownItemProps[]                                                | -                       | Items du menu mobile.                                                                                              |
| mobileSearchButtonAriaLabel | string                                                             | "Rechercher"            | Libellé accessible du bouton de recherche mobile.                                                                  |
| navigationAriaLabel         | string                                                             | "Navigation principale" | Libellé accessible de la navigation.                                                                               |
| navigationItems             | HeaderNavigationItem[]                                             | []                      | Items de navigation.                                                                                               |
| onActionButtonClick         | () => void                                                         | -                       | Callback du bouton d’action.                                                                                       |
| onIconButtonClick           | (iconName: string) => void                                         | -                       | Callback d’un bouton d’icône.                                                                                      |
| onMobileMenuClick           | () => void                                                         | -                       | Callback d’ouverture du menu mobile.                                                                               |
| onMobileMenuClose           | () => void                                                         | -                       | Callback de fermeture du menu mobile.                                                                              |
| onSearchActiveChange        | (isActive: boolean) => void                                        | -                       | Callback de changement d’état de recherche mobile.                                                                 |
| rightSectionContent         | React.ReactNode                                                    | -                       | Contenu personnalisé de la section droite.                                                                         |
| searchbarProps              | SearchBarProps                                                     | -                       | Propriétés de la Searchbar.                                                                                        |
| showAtScrollUp              | boolean                                                            | false                   | Affiche le Header lors du défilement vers le haut lorsqu’il est sticky.                                            |
| subHeaderConfig             | HeaderSubHeaderConfig                                              | -                       | Configuration des breadcrumbs du sous-header.                                                                      |
| versionNumber               | string                                                             | -                       | Numéro de version, masqué en mode compact.                                                                         |

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

### HeaderIconButtonConfig

| Nom       | Type                                   | Valeur par défaut | Description                                                                                    |
| --------- | -------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| ariaLabel | string                                 | -                 | Libellé accessible du bouton.                                                                  |
| badge     | BadgeProps                             | -                 | Configuration du badge.                                                                        |
| disabled  | boolean                                | -                 | Désactive le bouton.                                                                           |
| iconName  | RegularIconIdKey \| TogglableIconIdKey | -                 | Nom de l’icône. La valeur doit appartenir aux clés `RegularIconIdKey` ou `TogglableIconIdKey`. |
| id        | string                                 | -                 | Identifiant du bouton.                                                                         |

### HeaderAvatarConfig

| Nom             | Type                                            | Valeur par défaut | Description                     |
| --------------- | ----------------------------------------------- | ----------------- | ------------------------------- |
| alt             | string                                          | -                 | Texte alternatif de l’image.    |
| aria-label      | string                                          | -                 | Libellé accessible de l’avatar. |
| colorType       | neutral \| brand \| decorative                  | -                 | Type de couleur de l’avatar.    |
| decorativeColor | DecorativeColor                                 | -                 | Couleur décorative de l’avatar. |
| id              | string                                          | -                 | Identifiant de l’avatar.        |
| imgSrc          | string                                          | -                 | Source de l’image.              |
| initials        | string                                          | -                 | Initiales affichées.            |
| layout          | image \| icon \| initials                       | -                 | Mode de rendu de l’avatar.      |
| onClick         | () => void                                      | -                 | Callback exécuté au clic.       |
| status          | available \| away \| busy \| offline \| unknown | -                 | Statut de l’avatar.             |
| type            | user \| entity                                  | -                 | Type d’avatar.                  |
