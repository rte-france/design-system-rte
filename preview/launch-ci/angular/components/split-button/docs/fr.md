# Split Button

## Overview

```html
<rte-split-button
  label="Button Label"
  ariaLabelRight="Open menu"
  [options]="options"
  (clickLeftButton)="onPrimaryAction()"
  (clickRightButton)="onMenuToggle()"
/>
```

## API

Le composant `SplitButtonComponent` (`<rte-split-button>`) constitue l'API publique. Les consommateurs lient les inputs pour l'apparence et la configuration du menu, et écoutent les outputs pour les actions du bouton principal (gauche) et du déclencheur de menu (droite).

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| `label` | `string` | — (requis) | Texte affiché sur le bouton principal (gauche). |
| `appearance` | `"primary"` \| `"secondary"` | `"primary"` | Variante visuelle appliquée aux deux segments du bouton. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Échelle de hauteur et de padding du contrôle. |
| `compactSpacing` | `boolean` | `false` | Réduit la hauteur verticale pour chaque taille. |
| `position` | `"bottom-start"` \| `"bottom-end"` \| `"top-start"` \| `"top-end"` | `"bottom-start"` | Placement du menu déroulant par rapport au déclencheur. |
| `icon` | `RegularIconIdKey` \| `TogglableIconIdKey` \| `null` | `null` | Nom d'icône optionnel affiché avant le libellé sur le bouton gauche. |
| `disabled` | `boolean` | `false` | Désactive le bouton principal et le déclencheur de menu. |
| `ariaLabelRight` | `string` | — | Libellé accessible du déclencheur de menu. Fournissez une valeur explicite (par exemple `"Open menu"`). |
| `options` | `SplitButtonItemProps[]` | `[]` | Entrées de menu rendues dans le panneau déroulant. |
| `showBadge` | `boolean` | `false` | Affiche un badge sur le déclencheur de menu lorsqu'il est combiné aux props de badge. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Type de contenu du badge sur le déclencheur. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Variante visuelle du badge sur le déclencheur. |
| `badgeIcon` | `RegularIconIdKey` \| `TogglableIconIdKey` | `"notification"` | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | `"m"` | Taille du badge sur le déclencheur. |

| Output | Type | Description |
|--------|------|-------------|
| `clickLeftButton` | `void` | Émis lorsque le bouton principal (gauche) est activé. |
| `clickRightButton` | `void` | Émis lorsque le déclencheur de menu (droite) est activé. L'état d'ouverture du menu bascule à chaque activation. |

### Item de menu (`SplitButtonItemProps`)

Chaque entrée du tableau `options` accepte les champs suivants :

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| `id` | `string` | — (requis) | Identifiant unique de l'item de menu. |
| `label` | `string` | — (requis) | Texte visible de l'item de menu. |
| `icon` | `string` | — | Nom de l'icône affichée avant le libellé. |
| `disabled` | `boolean` | `false` | Désactive l'item de menu. |
| `compactSpacing` | `boolean` | — | Réservé à l'espacement au niveau de l'item (hérite du contrôle parent par défaut). |
| `direction` | `Direction` | — | Direction du texte pour le libellé de l'item. |
| `inverted` | `boolean` | — | Applique un style inversé à l'item. |
| `showBadge` | `boolean` | — | Affiche un badge sur l'item lorsqu'il est combiné aux props de badge. |
| `badgeCount` | `number` | — | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`. |
| `badgeContent` | `"number"` \| `"icon"` \| `"empty"` | — | Type de contenu du badge sur l'item. |
| `badgeIcon` | `string` | — | Nom de l'icône lorsque `badgeContent` vaut `"icon"`. |
| `badgeType` | `"brand"` \| `"neutral"` \| `"indicator"` | — | Variante visuelle du badge sur l'item. |
| `badgeSize` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | — | Taille du badge sur l'item. |

## Usage

Importez `SplitButtonComponent` et liez l'action principale à `(clickLeftButton)`. Passez les entrées de menu via l'input `options` et fournissez `ariaLabelRight` pour le déclencheur de menu.

```typescript
import { Component } from "@angular/core";
import { SplitButtonComponent } from "@design-system-rte/angular";
import { SplitButtonItemProps } from "@design-system-rte/core";

@Component({
  imports: [SplitButtonComponent],
  template: `
    <rte-split-button
      label="Button Label"
      ariaLabelRight="Open menu"
      [options]="options"
      (clickLeftButton)="onPrimaryAction()"
      (clickRightButton)="onMenuToggle()"
    />
  `,
})
export class ExampleComponent {
  options: SplitButtonItemProps[] = [
    { id: "option-1", label: "Option 1" },
    { id: "option-2", label: "Option 2" },
    { id: "option-3", label: "Option 3" },
  ];

  onPrimaryAction(): void {
    console.log("Primary action");
  }

  onMenuToggle(): void {
    console.log("Menu trigger clicked");
  }
}
```

Le menu déroulant est géré en interne. Les événements de sélection d'item ne sont pas exposés sur le composant — voir la section Limitations.

#### Apparence

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" appearance="primary" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" appearance="secondary" [options]="options" />
```

Basculez entre les styles primary et secondary avec `appearance`.

(`"primary" | "secondary"`)

#### Taille

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="s" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="m" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="l" [options]="options" />
```

Ajustez l'échelle du contrôle avec `size`.

(`"s" | "m" | "l"`)

#### Espacement compact

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="s" [compactSpacing]="true" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="m" [compactSpacing]="true" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" size="l" [compactSpacing]="true" [options]="options" />
```

Réduisez la hauteur verticale à chaque taille avec `compactSpacing`.

#### Position

```html
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="top-end" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="top-start" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="bottom-end" [options]="options" />
<rte-split-button label="Button Label" ariaLabelRight="Open menu" position="bottom-start" [options]="options" />
```

Contrôlez l'ouverture du panneau de menu par rapport au déclencheur avec `position`.

(`"bottom-start" | "bottom-end" | "top-start" | "top-end"`)

## Limitations

### Événements de sélection d'item de menu

Le composant n'expose pas d'output de sélection d'item. `(clickRightButton)` est émis lorsque le déclencheur de menu est activé, et non lorsqu'une option est choisie. Pour réagir à l'activation d'un item, utilisez les champs de navigation pris en charge par le menu déroulant intégré (`link`, `routerLink` ou `href`) sur les entrées d'options, ou routez l'action via le bouton principal.
