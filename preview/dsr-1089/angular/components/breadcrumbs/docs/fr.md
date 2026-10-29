# Breadcrumbs

## Overview

```typescript
import { Component } from "@angular/core";
import { BreadcrumbsComponent } from "@design-system-rte/angular";

@Component({
  imports: [BreadcrumbsComponent],
  template: `<rte-breadcrumbs [items]="items" />`,
})
export class MyPageComponent {
  items = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Electronics", link: "/products/electronics" },
    { label: "Smartphones", link: "/products/electronics/smartphones" },
  ];
}
```

## API

Le composant `<rte-breadcrumbs>` constitue l'API publique. Passez le fil d'Ariane via `items` et configurez la troncature, les libellés et les badges via les inputs du composant.

### Breadcrumbs

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | `[]` | Liste ordonnée des entrées, de la racine à la page courante. |
| `ariaLabel` | `string` | `"Fil d'Ariane"` | Nom accessible du repère de navigation. |
| `breadcrumbItemMaxWidth` | `number` | `150` | Largeur maximale en pixels de chaque libellé avant application de l'ellipse. |
| `showBadge` | `boolean` | `false` | Affiche un badge sur le bouton de débordement lorsque le fil est replié. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge sur le bouton de débordement. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeIcon` | `string` | — | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge sur le bouton de débordement. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | `"s"` | Taille du badge sur le bouton de débordement. |

### Entrée de fil d'Ariane (élément de `items`)

Chaque entrée de `items` accepte les champs ci-dessous. Les props de badge au niveau de l'entrée s'appliquent au libellé concerné.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `label` | `string` | — (requis) | Texte visible du fil d'Ariane. |
| `link` | `string` | — (requis) | URL ou route de l'entrée du fil d'Ariane. |
| `showBadge` | `boolean` | — | Affiche un badge à côté du libellé. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeIcon` | `string` | — | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Taille du badge. |

## Usage

Importez `BreadcrumbsComponent` et liez un tableau `items` ordonné. Chaque entrée requiert un `label` et un `link`. La dernière entrée représente la page courante et est rendue sans navigation.

```typescript
items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];
```

```html
<rte-breadcrumbs [items]="items" />
```

N'utilisez pas `<rte-breadcrumb-item>` directement dans les templates applicatifs. Ce sélecteur est interne à l'implémentation du fil d'Ariane.

Lorsque le fil dépasse trois entrées, le composant replie les entrées intermédiaires dans un menu de débordement tout en conservant la première entrée et les deux dernières visibles.

#### Max width breadcrumb item

```html
<rte-breadcrumbs
  [items]="items"
  [breadcrumbItemMaxWidth]="50"
/>
```

Définissez `breadcrumbItemMaxWidth` pour limiter la largeur des libellés. Les libellés longs sont tronqués avec une ellipse et le texte complet est accessible via un tooltip au survol ou au focus.

#### Multiple elements

```html
<rte-breadcrumbs [items]="oneItem" />
<rte-breadcrumbs [items]="twoItems" />
<rte-breadcrumbs [items]="threeItems" />
<rte-breadcrumbs [items]="fourItems" />
```

Le composant s'adapte aux fils de une à quatre entrées ou plus. La troncature avec menu de débordement démarre au-delà de trois entrées.

#### With badge

```html
<rte-breadcrumbs
  [items]="itemsWithBadges"
  [showBadge]="true"
  badgeContent="empty"
  [badgeCount]="7"
  badgeType="indicator"
  badgeSize="xs"
/>
```

```typescript
itemsWithBadges = [
  { label: "Home", link: "/" },
  {
    label: "Products",
    link: "/products",
    showBadge: true,
    badgeContent: "number",
    badgeType: "indicator",
    badgeCount: 5,
    badgeSize: "m",
  },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];
```

Ajoutez des props de badge sur des entrées individuelles pour afficher un indicateur à côté d'un libellé. Les props de badge au niveau du conteneur s'appliquent au bouton de débordement lorsque le fil est tronqué.

## Limitations

### Troncature du fil

Lorsque `items` contient plus de trois entrées, le composant conserve la première entrée et les deux dernières visibles. Toutes les entrées intermédiaires sont regroupées dans un menu de débordement ouvert depuis un bouton icône « more-horiz ».

### Page courante non navigable

La dernière entrée du fil est rendue comme page courante (`aria-current="page"`). Elle ne déclenche pas de navigation à l'activation. Assurez-vous que l'entrée finale correspond à la page affichée.

### Ellipse des libellés

L'ellipse et le tooltip qui révèle le libellé complet dépendent de `breadcrumbItemMaxWidth`. La vérification s'exécute une fois après le rendu de l'entrée ; les libellés modifiés dynamiquement après le montage peuvent ne pas mettre à jour l'état de l'ellipse tant que le composant n'est pas recréé.

### Séparateur fixe

Les entrées sont séparées par le caractère `/`. Le séparateur n'est pas configurable via les inputs du composant.
