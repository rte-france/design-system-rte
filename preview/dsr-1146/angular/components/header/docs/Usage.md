### Exemple principal

```html
<rte-header
  appearance="brand"
  [hasLogo]="true"
  applicationName="Nom de l'application"
  logoSrc="/rte.png"
  [navigationItems]="navigationItems"
  [searchbarProps]="{ id: 'header-search', label: 'Rechercher' }"
  [actionButton]="{ label: 'Partager', iconName: 'share' }"
  [iconButtons]="iconButtons"
  [avatarProps]="{ alt: 'Profil', initials: 'GA', isInteractive: true }"
  [subHeaderConfig]="subHeaderConfig"
/>
```

### Apparence et densité

Utiliser `appearance="neutral"` pour une intégration sur une surface neutre. Activer `isCompact` lorsqu’un espace vertical limité est disponible: les espacements sont réduits et `versionNumber` est masqué. `hasDivider` ajoute une séparation sous la zone principale.

### Affichage des sections

`hasLeftSection`, `hasMidSection`, `hasRightSection`, `hasSubHeader`, `hasSearchbar`, `hasActionButton`, `hasIconButtons` et `hasAvatar` permettent d’adapter le Header au contexte de l’application en masquant les zones inutiles.

### Recherche mobile

Sur mobile, la recherche est initialement repliée. L’état peut être piloté par `isSearchActive` et l’événement `isSearchActiveChange` est émis à l’ouverture, puis lors de la fermeture par clic extérieur ou avec la touche `Escape` :

```html
<rte-header [hasSearchbar]="true" [isSearchActive]="isSearchActive" (isSearchActiveChange)="isSearchActive = $event" />
```

Sur desktop, utiliser `searchEvent` pour lancer une recherche à partir de la valeur saisie. Une valeur initiale peut être fournie avec `value`, par exemple `"rte"` :

```html
<rte-header
  [hasSearchbar]="true"
  [searchbarProps]="{ id: 'header-search', label: 'Rechercher', value: 'rte' }"
  (searchEvent)="search($event)"
/>
```

### Menu mobile

Pour proposer un accès à un menu mobile, fournir les destinations dans `mobileMenuItems`. L’événement fournit l’identifiant sélectionné et ferme le menu :

```html
<rte-header [mobileMenuItems]="mobileMenuItems" (mobileMenuItemEvent)="handleMobileMenuItemEvent($event)" />
```

Pour conserver un identifiant avant de déclencher une navigation personnalisée, lire `$event.id`. Pour proposer un menu entièrement personnalisé, projeter du contenu avec `rteHeaderMobileMenu` :

```html
<rte-header>
  <div rteHeaderMobileMenu>
    <button type="button" role="menuitem" (click)="openAccount()">Compte</button>
    <button type="button" role="menuitem" (click)="openHelp()">Aide</button>
  </div>
</rte-header>
```

### Contenu personnalisé

Pour ajouter un contexte de navigation, un indicateur métier ou un menu mobile spécifique, utiliser les directives de projection suivantes :

```html
<rte-header>
  <div rteHeaderLeft>Contexte de navigation</div>
  <div rteHeaderRight>Indicateur personnalisé</div>
</rte-header>
```

### Navigation et actions

Les outputs permettent de brancher les actions métier : `(actionButtonClick)` convient à une action principale comme `Partager`, `(iconButtonClick)` reçoit le nom de l’icône activée, par exemple `"notification"`, et `(avatarClick)` permet d’ouvrir le profil.

### Comportement du header

`isSticky` permet de conserver le header à l'écran.

`showAtScrollUp` permet de le faire réapparaître lors du défilement vers le haut.
