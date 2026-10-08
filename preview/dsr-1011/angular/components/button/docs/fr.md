# Button

## Overview

```html
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary">Button</button>
```

## API

Le composant `ButtonComponent` s’applique à un élément HTML `<button>` via l’attribut `rteButton`. Le style visuel est contrôlé par les inputs ci-dessous ; le libellé visible est projeté entre les balises ouvrante et fermante. Les attributs natifs de l’hôte (`disabled`, `(click)`, etc.) restent disponibles.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| rteButtonAppearance | `"brand"` \| `"neutral"` | — | Famille de couleurs brand ou neutral. |
| rteButtonHierarchy | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"outlined"` | — | Hiérarchie visuelle dans l’appearance. |
| rteButtonIsCritical | boolean | — | Style critique (action destructive). |
| rteButtonIsReversed | boolean | — | Couleurs inversées pour fonds sombres ou brandés. |
| rteButtonVariant | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"danger"` \| `"neutral"` \| `"reverse"` | — | Alias visuel plat déprécié. Préférez `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical` et `rteButtonIsReversed`. |
| rteButtonSize | `"s"` \| `"m"` \| `"l"` | `"m"` | Taille du bouton. |
| rteButtonIcon | string | — | Nom d’icône (`RegularIconIdKey` ou `TogglableIconIdKey`). |
| rteButtonIconPosition | `"left"` \| `"right"` | `"left"` | Position de l’icône par rapport au contenu projeté. |
| rteButtonIconAppearance | `"filled"` \| `"outlined"` | `"filled"` | Apparence de l’icône. |

### Migration depuis `rteButtonVariant`

| `rteButtonVariant` déprécié | Remplacer par |
|-----------------------------|---------------|
| `primary` | `rteButtonAppearance="brand"` + `rteButtonHierarchy="primary"` |
| `secondary` | `brand` + `secondary` |
| `text` | `brand` + `text` |
| `transparent` | `brand` + `transparent` |
| `danger` | `brand` + `primary` + `[rteButtonIsCritical]="true"` |
| `reverse` | `brand` + `primary` + `[rteButtonIsReversed]="true"` |
| `neutral` | `neutral` + `text` (neutral historique) ; les nouveaux styles neutral utilisent `primary`, `secondary` ou `outlined` |

Lorsque `rteButtonVariant` et les nouveaux inputs coexistent, les nouveaux inputs explicites priment par axe.

### Composition Badge (`BadgeDirective`)

Ajoutez `rteBadge` sur le même hôte pour afficher un badge. Les inputs du badge appartiennent à `BadgeDirective`, pas à `ButtonComponent`.

## Usage

Appliquez `rteButton` sur un `<button>` natif et projetez le libellé en contenu enfant. Définissez le style avec `rteButtonAppearance` et `rteButtonHierarchy`. Utilisez l’attribut hôte `disabled` pour désactiver le bouton.

```html
<button
  rteButton
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  rteButtonSize="m"
  (click)="onSubmit()"
>
  Submit
</button>
```

N’utilisez pas le sélecteur interne du composant dans les templates applicatifs ; utilisez uniquement `button[rteButton]`.

#### Tailles

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonSize="s" rteButtonAppearance="brand" rteButtonHierarchy="primary">Small</button>
  <button rteButton rteButtonSize="m" rteButtonAppearance="brand" rteButtonHierarchy="primary">Medium</button>
  <button rteButton rteButtonSize="l" rteButtonAppearance="brand" rteButtonHierarchy="primary">Large</button>
</div>
```

Les trois hauteurs supportées (`s`, `m`, `l`).

#### Avec badge

```html
<button
  rteButton
  rteBadge
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  [rteBadgeContent]="'number'"
  [rteBadgeCount]="5"
  rteBadgeType="indicator"
>
  Button with Badge
</button>
```

Composition avec `BadgeDirective` sur l’hôte du bouton.

#### Avec icône

```html
<button
  rteButton
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  rteButtonIcon="add-circle"
  rteButtonIconPosition="left"
  rteButtonIconAppearance="outlined"
>
  Button with Icon
</button>
```

Une seule icône ; position via `rteButtonIconPosition`.

#### Hiérarchies brand

```html
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary">Primary</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="secondary">Secondary</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="text">Text</button>
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="transparent">Transparent</button>
```

Appearance brand pour chaque hiérarchie.

#### Hiérarchies neutral

```html
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="primary">Neutral primary</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="secondary">Neutral secondary</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="outlined">Neutral outlined</button>
<button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="text">Neutral text</button>
```

Appearance neutral, y compris la hiérarchie `outlined`.

#### Critique et inversé

```html
<button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary" [rteButtonIsCritical]="true">
  Critical
</button>
```

Utilisez `rteButtonIsReversed` sur fond sombre pour des couleurs inversées.

#### Variantes legacy

```html
<button rteButton rteButtonVariant="danger">Danger</button>
```

Les valeurs dépréciées de `rteButtonVariant` restent supportées ; migrez vers appearance, hierarchy et flags lors des refactors.

## Limitations

### Contenu projeté

Le libellé est du contenu projeté (`ng-content`), pas un input. Le texte enrichi suit le HTML/CSS projeté.

### États d’interaction natifs

Survol, pression, focus et désactivation sont gérés par le `<button>` natif et les styles du composant. Ce ne sont pas des inputs (l’`interactionState` Figma sert uniquement aux maquettes).

### Icône unique

Une seule icône (`rteButtonIcon`) ; position gauche ou droite via `rteButtonIconPosition`.

### Badge

Le badge est fourni par `BadgeDirective` avec `rteBadge`, pas par l’API de style du bouton.

## FAQ

Q : Faut-il utiliser `rteButtonVariant` ou les nouveaux inputs ?

R : Préférez `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical` et `rteButtonIsReversed`. `rteButtonVariant` reste un alias déprécié. Voir le tableau de migration dans l’API.

Q : Comment désactiver un bouton ?

R : Attribut natif `disabled` sur `<button rteButton disabled>`. Pas d’input `isDisabled`.
