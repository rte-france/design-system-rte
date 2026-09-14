# SideNav

## Overview

```typescript
headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
};

items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
>
  <div content>Page content</div>
</rte-side-nav>
```

## API

Le composant `rte-side-nav` constitue l'API publique. Les consommateurs configurent la navigation via les inputs du composant et projettent le contenu de page avec l'attribut `[content]`.


| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| size         | `"s" | "m" | "l"`     | `"m"`     | Largeur du panneau en mode déplié.                                           |
| appearance   | `"neutral" | "brand"` | `"brand"` | Thème visuel du panneau de navigation.                                       |
| contrast     | `"low" | "high"`      | `"high"`  | Niveau de contraste associé à `appearance`.                                  |
| collapsible  | boolean               | `false`   | Affiche un contrôle dans le pied de page pour replier et déplier le panneau. |
| isCollapsed  | boolean               | `false`   | État replié initial ou contrôlé.                                             |
| headerConfig | `SideNavHeaderConfig` | —         | Configuration de la zone d'en-tête (titre, identifiant, version, lien).      |
| items        | `NavItem[]`           | `[]`      | Entrées de navigation principales.                                           |
| footerItems  | `NavItem[]`           | —         | Entrées de navigation optionnelles dans le pied de page.                     |



| Sortie | Type | Description |
|--------|------|-------------|
| itemClicked | `string` | Émet l'`id` (ou le `label` en repli) de l'entrée cliquée. Utilisez-le pour piloter l'état actif côté parent. |




### SideNavHeaderConfig


| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| title      | string          | — (requis) | Titre de l'application affiché dans l'en-tête.                                  |
| identifier | string          | —          | Identifiant court affiché au-dessus du titre (par exemple des initiales).       |
| version    | string          | —          | Chaîne de version affichée sous le titre lorsque le mode compact est désactivé. |
| icon       | string          | —          | Nom de l'icône d'en-tête (réservé pour un usage futur).                         |
| link       | `string | null` | —          | Lorsqu'il est défini, le titre de l'en-tête est rendu comme un `routerLink`.    |
| onClick    | `() => void`    | —          | Lorsqu'il est défini (sans `link`), le titre devient un bouton cliquable.       |
| ariaLabel  | string          | —          | Libellé accessible pour le contrôle de titre de l'en-tête.                      |
| isCompact  | boolean         | `false`    | Masque la ligne de version et utilise une mise en page d'en-tête compacte.      |
| tooltip    | string          | —          | Libellé de tooltip personnalisé en mode replié. Retombe sur `title`.            |




### NavItem (items et footerItems)

Chaque entrée est soit un élément feuille, soit un menu imbriqué lorsque `items` est fourni.


| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id               | string             | —          | Identifiant unique. Émis par `itemClicked` et utilisé pour le suivi de l'état actif. |
| label            | string             | — (requis) | Libellé visible.                                                                     |
| icon             | string             | —          | Nom de l'icône principale.                                                           |
| hasLeadingIcon   | boolean            | `true`     | Affiche ou masque l'emplacement de l'icône principale.                               |
| routerLink       | `RouterLinkValue`  | —          | Route interne pour Angular Router.                                                   |
| href             | string             | —          | URL externe. Prend le pas sur `routerLink` lorsqu'il est défini.                     |
| externalLink     | boolean            | —          | Avec `href`, ouvre le lien dans un nouvel onglet.                                    |
| routerLinkConfig | `RouterLinkConfig` | —          | Options Angular Router (`queryParams`, `fragment`, etc.).                            |
| link             | `RouterLinkValue`  | —          | Déprécié. Utilisez `routerLink` à la place.                                          |
| onClick          | `() => void`       | —          | Gestionnaire de clic pour les entrées non navigables.                                |
| active           | boolean            | `false`    | Marque l'entrée comme active. Géré par le consommateur.                              |
| open             | boolean            | —          | État ouvert initial pour les menus imbriqués.                                        |
| items            | `NavItem[]`        | —          | Enfants imbriqués. Lorsqu'ils sont présents, l'entrée est rendue comme un menu.      |
| badge            | `BadgeProps`       | —          | Badge affiché sur l'entrée.                                                          |
| hasDivider       | boolean            | —          | Affiche un séparateur après l'entrée.                                                |




## Usage

Placez `rte-side-nav` dans votre mise en page et passez `headerConfig` et `items`. Projetez la zone de page principale avec un élément portant l'attribut `content`.

Lorsque vous utilisez `routerLink` sur les entrées ou l'en-tête, assurez-vous que `RouterModule` (ou `RouterLink` standalone) est disponible dans l'application.

L'état actif n'est pas déduit automatiquement du routeur. Écoutez `(itemClicked)` et mettez à jour le drapeau `active` sur les entrées de votre modèle de données.

```typescript
headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
};

items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", hasLeadingIcon: true },
  { id: "analytics", label: "Analytics", icon: "analytics", hasLeadingIcon: true },
  { id: "settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "profile", label: "Profile", icon: "user", hasLeadingIcon: true, link: "/profile" },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
>
  <div content>
    <router-outlet />
  </div>
</rte-side-nav>
```

N'utilisez pas `<rte-nav-item>`, `<rte-nav-menu>` ou `<rte-base-side-nav>` directement dans les templates applicatifs. Ce sont des briques internes rendues par `rte-side-nav`.

### Examples



#### Collapsible

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Activez le contrôle de repli dans le pied de page avec `collapsible`.

#### With router navigation

```typescript
items = [
  { id: "home", label: "Home", icon: "home", routerLink: "/home" },
  { id: "dashboard", label: "Dashboard", icon: "dashboard", routerLink: "/dashboard" },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    items: [
      { id: "general", label: "General", routerLink: "/settings/general" },
      { id: "privacy", label: "Privacy", routerLink: "/settings/privacy" },
    ],
  },
  { id: "docs", label: "Angular docs", icon: "link", href: "https://angular.dev", externalLink: true },
];
```

Utilisez `routerLink` pour la navigation interne et `href` avec `externalLink` pour les liens externes.

#### With nested menus

```typescript
items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    hasLeadingIcon: true,
    items: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "analytics-nested", label: "Analytics", icon: "analytics" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    hasLeadingIcon: true,
    items: [
      { id: "general", label: "General" },
      { id: "privacy", label: "Privacy" },
      {
        id: "advanced",
        label: "Advanced",
        icon: "settings",
        items: [
          { id: "security", label: "Security" },
          { id: "api-keys", label: "API Keys" },
        ],
      },
    ],
  },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Fournissez `items` sur une entrée de navigation pour afficher un menu imbriqué repliable.

#### With footer items

```typescript
footerItems = [
  { id: "footer-settings", label: "Settings", icon: "settings", hasLeadingIcon: true },
  { id: "footer-help", label: "Help & Support", icon: "help", hasLeadingIcon: true, link: "/help" },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
  [footerItems]="footerItems"
  [collapsible]="true"
>
  <div content>Page content</div>
</rte-side-nav>
```

Ajoutez des actions secondaires dans le pied de page avec `footerItems`.

## Limitations



### Largeurs de panneau fixes

Le panneau de navigation utilise des largeurs fixes en pixels selon la taille. Les largeurs dépliées sont 224px (`s`), 320px (`m`) et 504px (`l`). La largeur repliée est toujours 64px. Le panneau ne s'agrandit pas pour accueillir des titres ou libellés longs.

### Troncature du titre d'en-tête

Les titres d'application longs sont tronqués avec une ellipsis dans la zone d'en-tête. La largeur du panneau reste fixe. Préférez un `title` court ou un `identifier` concis pour le branding.

### État actif géré par le consommateur

Le composant ne déduit pas les entrées actives du routeur Angular. Définissez `active` sur les entrées de votre modèle de données et mettez-le à jour lorsque `(itemClicked)` se déclenche ou lorsque la route change.

### État replié partiellement interne

Lorsque l'utilisateur clique sur le contrôle de repli, le panneau bascule son état replié en interne. Il n'existe pas de sortie `(collapsedChange)`. Pour contrôler le repli depuis le parent, liez `[isCollapsed]` et mettez à jour votre état.

### Affichage des badges en mode replié

En mode replié, les badges numériques s'affichent comme un point indicateur sur l'icône. Le texte du compteur et les badges de la colonne droite sont masqués.

### Sous-menus en mode replié

Lorsque le panneau est replié, les sous-menus imbriqués ne peuvent pas être ouverts ni accessibles. Seules les entrées de premier niveau sont affichées sous forme d'icônes ; les tooltips affichent le libellé parent au focus ou au survol. Ce comportement est intentionnel — le mode replié conserve une navigation minimale pour préserver l'espace à l'écran. Si l'accès aux sous-menus est fréquent, gardez le panneau déplié ou utilisez le mode déplié par défaut.

### Menus imbriqués fermés et navigation clavier

Les entrées imbriquées d'un menu fermé sont retirées de l'ordre de tabulation (`tabindex="-1"`). L'utilisateur doit ouvrir le menu parent avant que les entrées imbriquées reçoivent le focus.

### Libellés du contrôle de repli

Les libellés du bouton de repli sont fixes en français (`Ouvrir le menu` / `Réduire le menu`).

### Sélecteurs internes

N'utilisez pas `<rte-nav-item>`, `<rte-nav-menu>` ou `<rte-base-side-nav>` dans les templates applicatifs. Configurez la navigation uniquement via les inputs de `rte-side-nav`.

## FAQ

Q : Pourquoi ne puis-je pas accéder aux sous-menus lorsque la side nav est repliée ?

R : Le mode replié réduit la navigation aux icônes de premier niveau uniquement. Les sous-menus imbriqués sont masqués et ne peuvent pas être ouverts dans cet état — un tooltip affiche le libellé de l'entrée parente, mais ses enfants ne sont pas accessibles. Il s'agit d'une décision de conception intentionnelle. Si les utilisateurs naviguent fréquemment vers des destinations de sous-menu, gardez le panneau déplié ou utilisez le mode déplié par défaut (`isCollapsed: false`). Consultez la section Limitations / Sous-menus en mode replié.

Q : Une variante permettant d'exposer les sous-menus en mode replié sera-t-elle ajoutée ?

R : Une demande d'évolution pour accéder aux sous-menus en mode replié a été examinée et refusée. Le mode replié est conçu pour rester minimal et limiter la complexité. Déplier le panneau avant de naviguer vers des entrées imbriquées reste le contournement supporté. Si la navigation profonde est courante dans votre application, privilégiez le mode déplié par défaut plutôt que le mode replié.

Q : Les utilisateurs doivent déplier la side nav à chaque accès à un sous-menu. Existe-t-il une alternative ?

R : Oui. Gardez le panneau déplié pendant les sessions où la navigation imbriquée est fréquente, ou configurez l'application pour démarrer en mode déplié. Restructurer la navigation — par exemple promouvoir les sous-menus les plus utilisés au premier niveau — peut aussi réduire la dépendance aux menus imbriqués en mode replié.