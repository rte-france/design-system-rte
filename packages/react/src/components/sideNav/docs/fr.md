# SideNav

## Overview

```tsx
<SideNav
  headerConfig={{
    title: "My Header",
    icon: "home",
    identifier: "MA",
    link: "/my-application",
  }}
  items={[
    { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  ]}
>
  Page content
</SideNav>
```

## API

Le composant `SideNav` constitue l'API publique. Les consommateurs configurent la navigation via les props du composant et passent le contenu de page en `children`.


| Property           | Type                               | Default    | Description                                                                      |
| ------------------ | ---------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| size               | `"s" | "m" | "l"`                  | `"m"`      | Largeur du panneau en mode déplié.                                               |
| appearance         | `"neutral" | "brand"`              | `"brand"`  | Thème visuel du panneau de navigation.                                           |
| contrast           | `"low" | "high"`                   | `"high"`   | Niveau de contraste associé à `appearance`.                                      |
| collapsible        | boolean                            | —          | Affiche un contrôle dans le pied de page pour replier et déplier le panneau.     |
| isCollapsed        | boolean                            | —          | État replié contrôlé. Lorsqu'il est omis, le composant gère le repli en interne. |
| defaultCollapsed   | boolean                            | `false`    | État replié initial lorsque `isCollapsed` n'est pas fourni.                      |
| headerConfig       | `SideNavHeaderConfig`              | —          | Configuration de la zone d'en-tête (titre, identifiant, version, lien).          |
| items              | `NavItemProps[]`                   | — (requis) | Entrées de navigation principales.                                               |
| footerItems        | `NavItemProps[]`                   | —          | Entrées de navigation optionnelles dans le pied de page.                         |
| activeItem         | string                             | —          | Id de l'entrée actuellement active.                                              |
| onActiveItemChange | `(id: string | undefined) => void` | —          | Appelé lorsque l'entrée active change via une interaction utilisateur.           |
| onCollapsedChange  | `(collapsed: boolean) => void`     | —          | Appelé lorsque l'utilisateur bascule le contrôle de repli.                       |
| children           | `ReactNode`                        | —          | Contenu principal de page rendu à côté du panneau de navigation.                 |




### SideNavHeaderConfig


| Property   | Type            | Default    | Description                                                                     |
| ---------- | --------------- | ---------- | ------------------------------------------------------------------------------- |
| title      | string          | — (requis) | Titre de l'application affiché dans l'en-tête.                                  |
| identifier | string          | —          | Identifiant court affiché au-dessus du titre (par exemple des initiales).       |
| version    | string          | —          | Chaîne de version affichée sous le titre lorsque le mode compact est désactivé. |
| icon       | string          | —          | Nom de l'icône d'en-tête (réservé pour un usage futur).                         |
| link       | `string | null` | —          | Lorsqu'il est défini, le titre de l'en-tête est rendu comme un lien.            |
| onClick    | `() => void`    | —          | Lorsqu'il est défini (sans `link`), le titre devient un bouton cliquable.       |
| ariaLabel  | string          | —          | Libellé accessible pour le contrôle de titre de l'en-tête.                      |
| isCompact  | boolean         | `false`    | Masque la ligne de version et utilise une mise en page d'en-tête compacte.      |
| tooltip    | string          | —          | Libellé de tooltip personnalisé en mode replié. Retombe sur `title`.            |




### NavItemProps (items et footerItems)

Chaque entrée est soit un élément feuille, soit un menu imbriqué lorsque `items` est fourni.


| Property       | Type             | Default    | Description                                                                     |
| -------------- | ---------------- | ---------- | ------------------------------------------------------------------------------- |
| id             | string           | —          | Identifiant unique. Utilisé pour le suivi de l'état actif et les clés React.    |
| label          | string           | — (requis) | Libellé visible.                                                                |
| icon           | string           | —          | Nom de l'icône principale.                                                      |
| hasLeadingIcon | boolean          | `true`     | Affiche ou masque l'emplacement de l'icône principale.                          |
| href           | string           | —          | URL de navigation passée au composant de lien.                                  |
| link           | string           | —          | Déprécié. Utilisez `href` à la place.                                           |
| onClick        | `() => void`     | —          | Gestionnaire de clic pour les entrées non navigables.                           |
| active         | boolean          | `false`    | Marque l'entrée comme active. Géré par le consommateur.                         |
| open           | boolean          | —          | État ouvert initial pour les menus imbriqués.                                   |
| items          | `NavItemProps[]` | —          | Enfants imbriqués. Lorsqu'ils sont présents, l'entrée est rendue comme un menu. |
| badge          | `BadgeProps`     | —          | Badge affiché sur l'entrée.                                                     |
| hasDivider     | boolean          | —          | Affiche un séparateur après l'entrée.                                           |




## Usage

Placez `SideNav` dans votre mise en page et passez `headerConfig` et `items`. Rendez la zone de page principale en `children`.

Lors de l'intégration avec un routeur côté client, enveloppez l'application (ou la mise en page) dans `NavigationProvider` et passez votre composant de lien de routeur (par exemple React Router `NavLink`).

L'état actif n'est pas déduit automatiquement du routeur. Pilotez-le avec `activeItem` et `onActiveItemChange`, ou définissez `active` sur les entrées individuelles.

```tsx
const headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
  link: "/my-application",
};

const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, href: "/profile" },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items}>
  <main>Page content</main>
</SideNav>
```

N'utilisez pas `NavItem`, `NavMenu` ou `BaseSideNav` directement dans le code applicatif. Ce sont des briques internes rendues par `SideNav`.

Avec React Router, enveloppez avec `NavigationProvider` :

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={NavLink}>
    <SideNav headerConfig={headerConfig} items={items}>
      <Routes>{/* routes */}</Routes>
    </SideNav>
  </NavigationProvider>
</BrowserRouter>
```



### Examples



#### Collapsible

```tsx
<SideNav headerConfig={headerConfig} items={items} collapsible>
  Page content
</SideNav>
```

Activez le contrôle de repli dans le pied de page avec `collapsible`.

#### With custom router

```tsx
const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true, href: "/" },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true, href: "/dashboard" },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true, href: "/analytics" },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true, href: "/settings" },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, href: "/profile" },
];
```

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={NavLink}>
    <SideNav
      headerConfig={headerConfig}
      items={items}
      activeItem="home"
      onActiveItemChange={(id) => console.log("Active item changed to:", id)}
    >
      <Routes>{/* route elements */}</Routes>
    </SideNav>
  </NavigationProvider>
</BrowserRouter>
```

Définissez `href` sur les entrées et utilisez `NavigationProvider` pour rendre des liens compatibles routeur. Suivez l'entrée active avec `activeItem` et `onActiveItemChange`.

#### With nested menus

```tsx
const items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [{ label: "Overview" }, { label: "Reports" }, { label: "Analytics", icon: "analytics" }],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { label: "General" },
      { label: "Privacy" },
      {
        label: "Advanced",
        icon: "settings",
        items: [{ label: "Security" }, { label: "API Keys" }],
      },
    ],
  },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items} collapsible>
  Page content
</SideNav>
```

Fournissez `items` sur une entrée de navigation pour afficher un menu imbriqué repliable.

#### With footer items

```tsx
const footerItems = [
  { id: "footer-settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "footer-help", label: "Help & Support", icon: "help", hasLeadingIcon: true, href: "/help" },
];
```

```tsx
<SideNav headerConfig={headerConfig} items={items} footerItems={footerItems} collapsible>
  Page content
</SideNav>
```

Ajoutez des actions secondaires dans le pied de page avec `footerItems`.

## Limitations



### Largeurs de panneau fixes

Le panneau de navigation utilise des largeurs fixes en pixels selon la taille. Les largeurs dépliées sont 224px (`s`), 320px (`m`) et 504px (`l`). La largeur repliée est toujours 64px. Le panneau ne s'agrandit pas pour accueillir des titres ou libellés longs.

### Troncature du titre d'en-tête

Les titres d'application longs sont tronqués avec une ellipsis dans la zone d'en-tête. La largeur du panneau reste fixe. Préférez un `title` court ou un `identifier` concis pour le branding.

### État actif géré par le consommateur

Le composant ne déduit pas les entrées actives du routeur. Définissez `activeItem` et gérez `onActiveItemChange`, ou définissez `active` sur les entrées individuelles de votre modèle de données.

### Réinitialisation de l'état ouvert des menus

Lorsque la référence de la prop `items` change, les surcharges internes d'état ouvert des menus sont effacées. Conservez l'état ouvert dans vos données d'entrée avec `open` si nécessaire.

### Affichage des badges en mode replié

En mode replié, les badges numériques s'affichent comme un point indicateur sur l'icône. Le texte du compteur et les badges de la colonne droite sont masqués.

### Sous-menus en mode replié

Lorsque le panneau est replié, les sous-menus imbriqués ne peuvent pas être ouverts ni accessibles. Seules les entrées de premier niveau sont affichées sous forme d'icônes ; les tooltips affichent le libellé parent au focus ou au survol. Ce comportement est intentionnel — le mode replié conserve une navigation minimale pour préserver l'espace à l'écran. Si l'accès aux sous-menus est fréquent, gardez le panneau déplié ou utilisez le mode déplié par défaut.

### Menus imbriqués fermés et navigation clavier

Les entrées imbriquées d'un menu fermé sont retirées de l'ordre de tabulation. L'utilisateur doit ouvrir le menu parent avant que les entrées imbriquées reçoivent le focus.

### Libellés du contrôle de repli

Les libellés du bouton de repli sont fixes en français (`Ouvrir le menu` / `Réduire le menu`).

### Composants internes

N'utilisez pas `NavItem`, `NavMenu` ou `BaseSideNav` directement dans le code applicatif. Configurez la navigation uniquement via les props de `SideNav`.

### Composant de lien routeur

Par défaut, les liens de navigation sont rendus comme des éléments `<a>`. Enveloppez l'arborescence dans `NavigationProvider` avec votre composant de lien de routeur lors de l'utilisation d'un routage côté client.

## FAQ

Q : Pourquoi ne puis-je pas accéder aux sous-menus lorsque la side nav est repliée ?

R : Le mode replié réduit la navigation aux icônes de premier niveau uniquement. Les sous-menus imbriqués sont masqués et ne peuvent pas être ouverts dans cet état — un tooltip affiche le libellé de l'entrée parente, mais ses enfants ne sont pas accessibles. Il s'agit d'une décision de conception intentionnelle. Si les utilisateurs naviguent fréquemment vers des destinations de sous-menu, gardez le panneau déplié ou utilisez le mode déplié par défaut (`defaultCollapsed: false`). Consultez la section Limitations / Sous-menus en mode replié.

Q : Une variante permettant d'exposer les sous-menus en mode replié sera-t-elle ajoutée ?

R : Une demande d'évolution pour accéder aux sous-menus en mode replié a été examinée et refusée. Le mode replié est conçu pour rester minimal et limiter la complexité. Déplier le panneau avant de naviguer vers des entrées imbriquées reste le contournement supporté. Si la navigation profonde est courante dans votre application, privilégiez le mode déplié par défaut plutôt que le mode replié.

Q : Les utilisateurs doivent déplier la side nav à chaque accès à un sous-menu. Existe-t-il une alternative ?

R : Oui. Gardez le panneau déplié pendant les sessions où la navigation imbriquée est fréquente, ou configurez l'application pour démarrer en mode déplié. Restructurer la navigation — par exemple promouvoir les sous-menus les plus utilisés au premier niveau — peut aussi réduire la dépendance aux menus imbriqués en mode replié.