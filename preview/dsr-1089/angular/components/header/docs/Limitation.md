### Responsive

Le rendu bascule automatiquement entre desktop et mobile selon la largeur de la fenêtre, avec un breakpoint à 1024 px. Les sections de navigation desktop ne sont donc pas affichées en mode mobile. `HeaderMobileComponent` prend leur place.

### Recherche desktop et mobile

La Searchbar desktop et la recherche mobile ne sont pas équivalentes. En mobile, le champ est replié jusqu’à l’activation du bouton de recherche, peut être fermé avec `Escape` ou par clic extérieur, et son état est exposé via `isSearchActive` et `isSearchActiveChange`. `searchbarProps` est utilisé par la Searchbar, mais ne modifie pas le bouton et les transitions propres à la recherche mobile.

### Menu mobile

La gestion du menu mobile dépend du mode utilisé. Avec `mobileMenuItems` ou un contenu `rteHeaderMobileMenu`, le menu est rendu dans un Dropdown. `mobileMenuItemEvent` est émis lors d’une sélection. En l’absence de menu configuré, `mobileMenuClick` est émis directement. Il ne faut donc pas supposer qu’un Dropdown sera toujours rendu.

### Sous-header et breadcrumbs

Le sous-header est rendu uniquement si `hasSubHeader` vaut `true` et si `subHeaderConfig.items` contient au moins un élément. Une configuration vide ne produit pas de breadcrumbs visibles. Le libellé accessible utilise `subHeaderConfig.ariaLabel` ou la valeur par défaut du composant.

### Comportement sticky

`showAtScrollUp` n’a d’effet que lorsque `isSticky` est activé. La visibilité est calculée à partir du défilement de la fenêtre. Un conteneur défilant distinct n’est pas pris en charge par ce comportement.

### Contenu projeté

`rteHeaderLeft`, `rteHeaderRight` et `rteHeaderMobileMenu` permettent de projeter du contenu, mais ce contenu est fourni par l’application et ne reçoit pas automatiquement les comportements ou la structure des éléments internes du Header. Le contenu mobile projeté est utilisé comme alternative aux `mobileMenuItems`.
