### Exemple principal

```tsx
import Header from "../Header";

const App = () => (
  <Header
    logoSrc="/rte.png"
    applicationName="Nom de l'application"
    actionButton={{ label: "Partager", iconName: "share" }}
    iconButtons={[
      { iconName: "notification", ariaLabel: "Notification", badge: { count: 3 } },
      { iconName: "settings", ariaLabel: "Settings" },
    ]}
    navigationItems={[
      { label: "Accueil", href: "/" },
      { label: "Tableau de bord", href: "/dashboard", active: true },
      { label: "Documentation", href: "/documentation", disabled: true },
    ]}
    avatarProps={{ alt: "Profil", initials: "JD", layout: "initials" }}
    subHeaderConfig={{
      ariaLabel: "Breadcrumbs",
      items: [
        { label: "Accueil", link: "/" },
        { label: "Section", link: "/section" },
        { label: "Page active", link: "/active-page" },
      ],
    }}
  />
);
```

### Apparence et densité

Utiliser `appearance="neutral"` pour une intégration sur une surface neutre. Activer `compactSpacing` lorsqu’un espace vertical limité est disponible ; les espacements sont réduits et `versionNumber` est masqué. `hasDivider` ajoute une séparation sous la zone principale.

### Affichage des sections

`hasLeftSection`, `hasRightSection`, `hasSearchbar` et `hasAvatar` permettent d’adapter le Header au contexte de l’application en masquant les zones inutiles.

### Recherche mobile

Sur mobile, la recherche est initialement repliée. Le callback est appelé à l’ouverture, puis lors de la fermeture par clic extérieur :

```tsx
const [isSearchActive, setIsSearchActive] = useState(false);

<Header hasSearchbar onSearchActiveChange={setIsSearchActive} mobileSearchButtonAriaLabel="Rechercher" />;
```

Lorsque la recherche est ouverte, le nom de l’application est masqué visuellement et pour les lecteurs d’écran pendant la transition, puis le champ reçoit le focus.

### Menu mobile

Pour proposer un accès à un menu mobile, fournir les items dans `mobileMenuItems` et contrôler l’ouverture depuis le parent :

```tsx
const mobileMenuItems = [
  { label: "Profil", link: "/profile" },
  { label: "Paramètres", link: "/settings" },
  { label: "Déconnexion", link: "/logout" },
];

<Header
  mobileMenuItems={mobileMenuItems}
  isMobileMenuOpen={isMobileMenuOpen}
  onMobileMenuClick={() => setIsMobileMenuOpen((open) => !open)}
  onMobileMenuClose={() => setIsMobileMenuOpen(false)}
/>;
```

Pour intercepter une sélection, associer un `onClick` à chaque item ou utiliser `mobileMenuContent` pour fournir un menu entièrement personnalisé.

### Contenu personnalisé

Les props `leftSectionContent`, `rightSectionContent` et `mobileMenuContent` permettent de personnaliser les sections du header.

```tsx
<Header
  leftSectionContent={<div>Contexte de navigation</div>}
  rightSectionContent={<div>Indicateur personnalisé</div>}
  mobileMenuContent={<div>Menu personnalisé</div>}
/>
```

### Navigation et actions

Les liens de navigation utilisent le composant fourni par `NavigationProvider`. `onActionButtonClick` convient à une action principale comme `Partager`, tandis que `onIconButtonClick` reçoit le nom de l’icône activée, par exemple `"notification"`. `avatarProps.onClick` permet d’ouvrir un espace de profil.

```tsx
<NavigationProvider linkComponent={FakeRouterLink}>
  <Header navigationItems={[{ label: "Tableau de bord", href: "/dashboard" }]} />
</NavigationProvider>
```

### Comportement du header

`isSticky` permet de conserver le header à l'écran.

`showAtScrollUp` permet de le faire réapparaître lors du défilement vers le haut.
