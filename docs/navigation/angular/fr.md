# Navigation Angular (liens et routage)

## Overview

```html
<rte-link label="Dashboard" routerLink="/dashboard" />
```

| Intention | Entrée |
|-----------|--------|
| Naviguer dans la SPA (sans rechargement) | `routerLink` |
| Ouvrir une URL externe dans un nouvel onglet | `href` + `externalLink` |
| Aller à une ancre dans la page | `href="#section-id"` |
| Forcer une navigation navigateur complète | `href="/path"` (sans `routerLink`) |

**Règle générale :** utilisez `routerLink` pour les routes gérées par Angular Router. Utilisez `href` pour tout ce que le navigateur doit gérer nativement — URLs externes, ancres, liens mailto, ou rechargements complets intentionnels.

Les composants navigables partagent ce contrat : `Link`, `SideNav` / `NavItem` / `NavMenu`, `Header` et `Breadcrumbs`.

## Usage

Les composants navigables Angular partagent les mêmes entrées de navigation : `routerLink`, `href`, `externalLink` et, optionnellement, `routerLinkConfig`.

### Navigation SPA

Utilisez `routerLink` pour les routes gérées par Angular Router. L'URL est mise à jour sans rechargement complet de la page.

```html
<rte-link label="Products" routerLink="/products" />
<rte-link label="Product detail" routerLink="/products/42" />
```

Les paramètres de requête, fragments et autres options de ruting se placent dans `routerLinkConfig` :

```html
<rte-link
  label="Settings"
  routerLink="/settings"
  [routerLinkConfig]="{ queryParams: { tab: 'general' }, fragment: 'privacy' }"
/>
```

L'application doit fournir Angular Router (`provideRouter` ou `RouterModule`) et déclarer `@angular/router` comme dépendance.

### Liens externes

Utilisez `href` avec `externalLink` pour les URLs hors de votre application. Le lien s'ouvre dans un nouvel onglet et affiche l'icône de lien externe.

```html
<rte-link label="Angular documentation" href="https://angular.dev" [externalLink]="true" />
```

### Ancres dans la page

Utilisez `href` sans `routerLink` :

```html
<rte-link label="Skip to content" href="#main-content" />
```

### Données de navigation (SideNav, Header, Breadcrumbs)

Les items et objets de configuration suivent le même contrat :

```typescript
{ id: "home", label: "Home", icon: "home", routerLink: "/home" }
{ id: "docs", label: "Docs", href: "https://example.com", externalLink: true }
```

L'entrée dépréciée `link` est un alias de `routerLink`. Privilégiez `routerLink` dans le nouveau code.

## Limitations

### href et routerLink sont mutuellement exclusifs

Lorsque `href` est défini, `routerLink` est ignoré. Ne définissez pas les deux en espérant une navigation SPA — choisissez l'un ou l'autre.

```html
<!-- Incorrect -->
<rte-link routerLink="/dashboard" href="/dashboard" label="Dashboard" />

<!-- Correct -->
<rte-link routerLink="/dashboard" label="Dashboard" />
```

Cette règle s'applique à tous les composants navigables utilisant le résolveur de navigation partagé (`SideNav`, `Header`, `Breadcrumbs`, etc.).

### externalLink ne s'applique qu'aux liens href

L'icône externe, `target="_blank"` et `rel="noopener noreferrer"` sont rendus sur la branche d'ancre native. Les liens SPA via `routerLink` n'utilisent pas `externalLink`.

Pour les sites externes, utilisez toujours `href` avec `externalLink` — jamais `routerLink`.

### Angular Router est requis pour la navigation SPA

Les composants utilisent la directive `RouterLink` en interne. Sans Angular Router configuré, les bindings `routerLink` ne fonctionneront pas.

### Entrée link dépréciée

L'entrée `link` reste supportée comme alias de `routerLink`. Le nouveau code doit utiliser `routerLink`.

## FAQ

Q : Quand utiliser `routerLink` plutôt que `href` ?

R : Utilisez `routerLink` pour les routes SPA internes. Utilisez `href` pour les URLs externes, les ancres dans la page, ou lorsque vous souhaitez une navigation navigateur complète. Voir la section Limitations ci-dessus.

Q : Puis-je utiliser `externalLink` avec `routerLink` ?

R : Non. `externalLink` est réservé aux liens basés sur `href` qui quittent votre application. Pour les sites externes, utilisez `href="https://…"` avec `externalLink`.

Q : SideNav, Header et Breadcrumbs suivent-ils les mêmes règles ?

R : Oui. Les items acceptent `routerLink` / `href` / `externalLink` avec la même priorité. Lorsque `href` est défini, `routerLink` est ignoré.

Q : Comment gérer les paramètres de requête ou un fragment d'URL ?

R : Utilisez `routerLink` avec `routerLinkConfig` — passez `queryParams`, `fragment`, `queryParamsHandling`, `preserveFragment`, `replaceUrl` ou `state` selon vos besoins.

Q : Puis-je mélanger liens SPA et liens externes dans un même menu ?

R : Oui. Définissez `routerLink` sur les items internes et `href` + `externalLink` sur ceux qui quittent l'application. Ne définissez pas `routerLink` et `href` sur le même item.

Q : Dois-je utiliser `link` ou `routerLink` ?

R : Utilisez `routerLink`. L'entrée `link` est dépréciée et conservée uniquement pour la rétrocompatibilité.
