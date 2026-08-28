# Breadcrumbs

## Overview

```tsx
import Breadcrumbs from "@design-system-rte/react/components/breadcrumbs/Breadcrumbs";

const items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

export function MyPage() {
  return <Breadcrumbs items={items} />;
}
```

## API

Le composant `Breadcrumbs` constitue l'API publique. Passez le fil d'Ariane via `items` et configurez la troncature, les libellés et les badges via les props du composant. Les attributs HTML standard sont transmis à l'élément racine `<nav>`.

### Breadcrumbs

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItemProps[]` | — (requis) | Liste ordonnée des entrées, de la racine à la page courante. |
| `ariaLabel` | `string` | `"Fil d'Ariane"` | Nom accessible du repère de navigation. |
| `breadcrumbItemMaxWidth` | `number` | — | Largeur maximale en pixels de chaque libellé avant application de l'ellipse. |
| `showBadge` | `boolean` | — | Affiche un badge sur le bouton de débordement lorsque le fil est replié. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge sur le bouton de débordement. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeIcon` | `string` | — | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge sur le bouton de débordement. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Taille du badge sur le bouton de débordement. |

### Entrée de fil d'Ariane (élément de `items`)

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `label` | `string` | — (requis) | Texte visible du fil d'Ariane. |
| `link` | `string` | — (requis) | URL ou route transmise au composant Link sous-jacent. |
| `showBadge` | `boolean` | — | Affiche un badge à côté du libellé. |
| `badgeContent` | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeIcon` | `string` | — | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge. |
| `badgeSize` | `"xs" \| "s" \| "m" \| "l"` | — | Taille du badge. |

## Usage

Importez `Breadcrumbs` et passez un tableau `items` ordonné. Chaque entrée requiert un `label` et un `link`. La dernière entrée représente la page courante et est rendue sans navigation.

```tsx
import Breadcrumbs from "@design-system-rte/react/components/breadcrumbs/Breadcrumbs";

const items = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

<Breadcrumbs items={items} />;
```

Enveloppez le composant dans `NavigationProvider` lorsque les liens doivent utiliser un composant de routage personnalisé plutôt qu'un élément `<a>` natif.

Lorsque le fil dépasse trois entrées, le composant replie les entrées intermédiaires dans un menu de débordement tout en conservant la première entrée et les deux dernières visibles.

#### With custom router

```tsx
import NavigationProvider from "@design-system-rte/react/provider/NavigationProvider";

<NavigationProvider linkComponent={RouterLink}>
  <Breadcrumbs items={items} />
</NavigationProvider>
```

Fournissez un `linkComponent` à `NavigationProvider` pour que les liens intermédiaires du fil d'Ariane s'affichent avec votre routeur plutôt qu'avec des ancres HTML.

#### Max width breadcrumb item

```tsx
<Breadcrumbs items={items} breadcrumbItemMaxWidth={50} />
```

Définissez `breadcrumbItemMaxWidth` pour limiter la largeur des libellés. Les libellés longs sont tronqués avec une ellipse et le texte complet est accessible via un tooltip au survol ou au focus.

#### Multiple elements

```tsx
<Breadcrumbs items={items.slice(0, 1)} />
<Breadcrumbs items={items.slice(0, 2)} />
<Breadcrumbs items={items.slice(0, 3)} />
<Breadcrumbs items={items} />
```

Le composant s'adapte aux fils de une à quatre entrées ou plus. La troncature avec menu de débordement démarre au-delà de trois entrées.

#### With badge

```tsx
<Breadcrumbs
  items={itemsWithBadges}
  showBadge
  badgeContent="empty"
  badgeCount={5}
  badgeType="indicator"
/>
```

```tsx
const itemsWithBadges = [
  { label: "Home", link: "/" },
  {
    label: "Products",
    link: "/products",
    showBadge: true,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator",
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

L'ellipse et le tooltip qui révèle le libellé complet ne s'appliquent que lorsque `breadcrumbItemMaxWidth` est défini. La vérification s'exécute une fois après le montage ; les libellés modifiés dynamiquement par la suite peuvent ne pas mettre à jour l'état de l'ellipse tant que l'entrée n'est pas remontée.

### Séparateur fixe

Les entrées sont séparées par le caractère `/`. Le séparateur n'est pas configurable via les props du composant.
