### Responsive

Le rendu bascule automatiquement entre desktop et mobile selon la largeur de la fenêtre, avec un breakpoint à 1024 px. Les sections de navigation desktop ne sont donc pas affichées en mode mobile, le HeaderMobile prend leur place.

### Recherche desktop et mobile

La Searchbar desktop et la recherche mobile ne sont pas équivalentes. En mobile, le champ est replié jusqu’à l’activation du bouton de recherche, puis reçoit le focus. `searchbarProps` est transmis à la Searchbar desktop, mais la Searchbar mobile est rendue par `HeaderMobile` avec son propre comportement.

### Menu mobile

La gestion du menu mobile dépend du mode utilisé. Avec `mobileMenuItems` ou `mobileMenuContent`, le menu est rendu dans un Dropdown ; `isMobileMenuOpen`, `onMobileMenuClick` et `onMobileMenuClose` doivent être coordonnés par le parent. `mobileMenuContent` est prioritaire sur `mobileMenuItems`.

### Sous-header et breadcrumbs

Le sous-header n’est rendu que lorsque `subHeaderConfig` est fourni. Une configuration sans items ne produit pas de breadcrumbs visibles. Le composant Header ne construit pas lui-même les éléments de navigation du fil d’Ariane.

### Comportement sticky

`showAtScrollUp` n’a d’effet que lorsque `isSticky` est activé. La visibilité est calculée à partir du défilement de la fenêtre ; un conteneur défilant distinct n’est pas pris en charge par ce comportement.

### Contenu projeté

`leftSectionContent`, `rightSectionContent` et `mobileMenuContent` remplacent ou complètent le rendu interne selon la section. Le contenu projeté est fourni par l’application et le Header ne lui applique pas automatiquement les comportements ou la structure sémantique des éléments intégrés.
