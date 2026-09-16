# Link

## Overview

```html
<rte-link label="Link" href="#" />
```

## API

Le composant `LinkComponent` (`<rte-link>`) constitue l'API publique. Les consommateurs configurent la navigation et l'apparence via les inputs du composant.


| Nom              | Type               | Valeur par défaut | Description                                                                                                                                    |
| ---------------- | ------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| label            | string             | `""`              | Texte visible du lien.                                                                                                                         |
| href             | string             | `"#"`             | URL pour la navigation native du navigateur. Utilisé lorsque `routerLink` n'est pas défini.                                                    |
| routerLink       | `RouterLinkValue`  | —                 | Lien Angular Router pour la navigation SPA in-app. Prend le pas sur `href` lorsqu'il est défini.                                               |
| link             | `RouterLinkValue`  | —                 | Alias déprécié de `routerLink`. Préférez `routerLink`.                                                                                         |
| routerLinkConfig | `RouterLinkConfig` | —                 | Options Angular Router optionnelles (`queryParams`, `fragment`, `queryParamsHandling`, `preserveFragment`, `replaceUrl`, `state`).             |
| subtle           | boolean            | `false`           | Affiche le lien avec un style discret (sans soulignement par défaut).                                                                          |
| externalLink     | boolean            | `false`           | Ouvre le lien dans un nouvel onglet avec `rel="noopener noreferrer"` et affiche l'icône external-link. S'applique uniquement aux liens `href`. |
| reverse          | boolean            | `false`           | Affiche le lien avec des couleurs inversées pour les fonds sombres.                                                                            |
| maxWidth         | number             | —                 | Largeur maximale en pixels. Les libellés longs sont tronqués avec une ellipsis.                                                                |


`RouterLinkValue` : `string | UrlTree | Array<string | number | boolean | null | undefined | Record<string, unknown>>`

## Usage

Utilisez `<rte-link>` dans vos templates pour les liens textuels. Choisissez `routerLink` pour la navigation in-app ou `href` pour la navigation native du navigateur et les URL externes.

```html
<rte-link label="Link" href="#" />
```



#### Navigation

Utilisez `routerLink` pour les routes SPA, `href` pour les ancres ou la navigation native, et `externalLink` pour ouvrir les URL externes dans un nouvel onglet.

```html
<rte-link label="SPA — /products" routerLink="/products" />
<rte-link label="SPA — /about" routerLink="/about" />
<rte-link label="Native — #anchor" href="#anchor" />
<rte-link label="External — angular.dev" href="https://angular.dev" [externalLink]="true" />
```



#### Subtle Link

```html
<rte-link label="Subtle Link" href="#" [subtle]="true" />
```

Affiche le lien avec un style discret (sans soulignement jusqu'au survol).

#### External Link

```html
<rte-link label="External Link" href="https://angular.dev" [externalLink]="true" />
```

Ouvre la destination dans un nouvel onglet et affiche l'icône external-link.

#### Reverse

```html
<div style="background-color: black; padding: 16px; display: flex; gap: 16px;">
  <rte-link label="External Link" href="#" [externalLink]="true" [reverse]="true" />
  <rte-link label="External Link" href="#" [reverse]="true" />
</div>
```

Utilisez `reverse` sur les fonds sombres pour des couleurs de lien inversées.

## Limitations



### Les libellés longs sont tronqués

Les libellés utilisent `text-overflow: ellipsis` et `white-space: nowrap`. Le texte qui dépasse la largeur disponible (ou `maxWidth` lorsqu'il est défini) est tronqué. Fournissez un libellé plus court ou augmentez `maxWidth` lorsque le texte complet doit rester visible.

### Le comportement de lien externe s'applique uniquement aux liens `href`

Lorsque `routerLink` est défini, le composant affiche un lien Angular Router. L'input `externalLink`, l'icône external-link et la cible `_blank` sont ignorés dans ce mode. Utilisez `href` avec `externalLink` pour les destinations externes.

### `routerLink` prend le pas sur `href`

Si `routerLink` (ou l'input déprécié `link`) est fourni, `href` n'est pas utilisé pour la navigation. Ne définissez que l'input correspondant au mode de navigation souhaité.