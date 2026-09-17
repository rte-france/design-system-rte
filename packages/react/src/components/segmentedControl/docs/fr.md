# Segmented Control

## Overview

```tsx
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

## API

Le composant `SegmentedControl` constitue l'API publique. Passez les définitions de segments via `options`, contrôlez le segment actif avec `selectedSegment` et gérez les changements de sélection avec `onChange`.

| Nom | Type | Valeur par défaut | Description |
|----------|------|-------------------|-------------|
| `options` | `SegmentOptions[]` | — (requis) | Définitions des segments affichés dans le contrôle. Doit contenir 2 ou 3 éléments. |
| `onChange` | `(id: string) => void` | — (requis) | Appelé avec l'`id` du segment sélectionné par l'utilisateur. |
| `selectedSegment` | `string` | — | Id du segment actuellement sélectionné. Doit correspondre à un `id` dans `options`. |
| `appearance` | `"brand"` \| `"neutral"` | `"brand"` | Variante visuelle de l'arrière-plan et des bordures du contrôle. |
| `compactSpacing` | `boolean` | `false` | Réduit la hauteur des segments et le padding horizontal. |

Chaque entrée de `options` accepte les champs suivants :

| Nom | Type | Valeur par défaut | Description |
|----------|------|-------------------|-------------|
| `id` | `string` | — (requis) | Identifiant unique du segment. Passé à `onChange`. |
| `label` | `string` | — (requis) | Libellé visible du segment. Utilisé également comme `aria-label` du segment. |
| `icon` | `string` | — | Nom de l'icône. Lorsqu'il est défini sur une option, toutes les options doivent en définir une ; les libellés sont masqués et seules les icônes sont affichées. |
| `showBadge` | `boolean` | — | Affiche le badge lorsque les critères de contenu du badge sont remplis. |
| `badgeCount` | `number` | — | Valeur numérique affichée lorsque `badgeContent` vaut `"number"`. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | `"number"` affiche un compteur ; `"icon"` affiche `badgeIcon` ; `"empty"` affiche un point indicateur. |
| `badgeIcon` | `string` | — | Nom de l'icône affichée lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Variante visuelle du badge. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Taille du badge. |

## Usage

Utilisez `SegmentedControl` pour permettre aux utilisateurs de choisir une option parmi un petit ensemble de choix mutuellement exclusifs. Gérez la valeur sélectionnée dans l'état du composant et repassez-la via `selectedSegment` lorsque `onChange` est appelé.

```tsx
import SegmentedControl from "@design-system-rte/react/components/segmentedControl/SegmentedControl";
import { useState } from "react";

const options = [
  { label: "Option 1", id: "option1" },
  { label: "Option 2", id: "option2" },
  { label: "Option 3", id: "option3" },
];

const [selectedSegment, setSelectedSegment] = useState("option1");

<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="brand"
  compactSpacing={false}
/>
```

Vous pouvez passer des attributs HTML natifs (par exemple `aria-label`) à l'élément racine du groupe radio via les props DOM standard.

#### Apparence

```tsx
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="neutral"
/>
```

Basculez entre les styles brand et neutral avec `appearance`.

(`"brand" | "neutral"`)

#### Espacement compact

```tsx
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  compactSpacing
/>
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="neutral"
  compactSpacing
/>
```

Utilisez `compactSpacing` pour une mise en page plus dense dans les barres d'outils ou les conteneurs restreints.

#### Deux options

```tsx
<SegmentedControl
  options={[
    { label: "Option 1", id: "option1" },
    { label: "Option 2", id: "option2" },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

Le contrôle accepte exactement deux ou trois segments.

#### Icônes

```tsx
<SegmentedControl
  options={[
    { id: "agenda", icon: "view-agenda", label: "Vue agenda" },
    { id: "column", icon: "view-column", label: "Vue colonne" },
    { id: "grid", icon: "view-grid", label: "Vue grille" },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

Lorsque chaque option définit une `icon`, le contrôle affiche des icônes au lieu de libellés texte. Les libellés restent disponibles pour les lecteurs d'écran via `aria-label`.

#### Avec badge

```tsx
<SegmentedControl
  options={[
    { label: "Option 1", id: "option1" },
    {
      label: "Option 2",
      id: "option2",
      showBadge: true,
      badgeContent: "number",
      badgeCount: 5,
      badgeType: "indicator",
    },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

Attachez un badge à des segments individuels via les champs badge de chaque option.

## Limitations

### Nombre d'options

`options` doit contenir exactement **2 ou 3** segments. Avec toute autre longueur, le composant enregistre un avertissement dans la console et retourne `null`.

### Cohérence des icônes

Lorsqu'une option définit une `icon`, **chaque** option doit en définir une. Le mélange d'options avec icône et sans icône n'est pas pris en charge ; le composant enregistre un avertissement et retourne `null`.

### Troncature des libellés

Les libellés texte utilisent `text-overflow: ellipsis` avec `white-space: nowrap`. Les libellés longs sont tronqués dans la largeure du segment plutôt que de passer sur plusieurs lignes.

### Sélection contrôlée

La sélection est contrôlée via `selectedSegment` et `onChange`. Le composant ne gère pas l'état de sélection en interne.

### Contraintes de largeur

Le contrôle a une largeur minimale de 168px (256px avec trois segments) et une largeur maximale de 720px. L'espacement compact réduit ces minimums à 80px et 128px respectivement.

### Focus clavier avec Tab

Appuyer sur Tab déplace le focus au-delà de tous les segments du groupe vers l'élément focalisable suivant en dehors du contrôle, plutôt que de s'arrêter sur chaque segment individuellement.
