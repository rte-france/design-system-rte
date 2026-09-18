# Split Button

## Overview

```tsx
<SplitButton
  label="Button Label"
  ariaLabelRight="Open menu"
  onClick={() => console.log("Primary action")}
  options={[
    { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1") },
    { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2") },
    { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3") },
  ]}
/>
```

## API

Le composant `SplitButton` constitue l'API publique. Liez `onClick` au bouton principal (gauche) et passez les entrées de menu via le tableau `options`.


| Nom              | Type                                                            | Valeur par défaut | Description                                                                                             |
| ---------------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `label`          | `string`                                                        | — (requis)        | Texte affiché sur le bouton principal (gauche).                                                         |
| `options`        | `SplitButtonOption[]`                                           | — (requis)        | Entrées de menu rendues dans le panneau déroulant.                                                      |
| `appearance`     | `"primary"` | `"secondary"`                                     | `"primary"`       | Variante visuelle appliquée aux deux segments du bouton.                                                |
| `size`           | `"s"` | `"m"` | `"l"`                                           | `"m"`             | Échelle de hauteur et de padding du contrôle.                                                           |
| `compactSpacing` | `boolean`                                                       | `false`           | Réduit la hauteur verticale pour chaque taille.                                                         |
| `position`       | `"bottom-start"` | `"bottom-end"` | `"top-start"` | `"top-end"` | `"bottom-start"`  | Placement du menu déroulant par rapport au déclencheur.                                                 |
| `icon`           | `keyof typeof RegularIcons` | `keyof typeof TogglableIcons`     | —                 | Nom d'icône optionnel affiché avant le libellé sur le bouton gauche.                                    |
| `disabled`       | `boolean`                                                       | —                 | Désactive le bouton principal et le déclencheur de menu.                                                |
| `ariaLabelRight` | `string`                                                        | —                 | Libellé accessible du déclencheur de menu. Fournissez une valeur explicite (par exemple `"Open menu"`). |
| `onClick`        | `(event: React.MouseEvent<HTMLButtonElement>) => void`          | —                 | Gestionnaire du bouton principal (gauche).                                                              |
| `className`      | `string`                                                        | —                 | Classe CSS additionnelle sur le conteneur racine.                                                       |
| `showBadge`      | `boolean`                                                       | —                 | Affiche un badge sur le déclencheur lorsqu'il est combiné aux props de badge.                           |
| `badgeContent`   | `"number"` | `"icon"` | `"empty"`                               | —                 | Type de contenu du badge sur le déclencheur.                                                            |
| `badgeType`      | `"brand"` | `"neutral"` | `"indicator"`                         | —                 | Variante visuelle du badge sur le déclencheur.                                                          |
| `badgeIcon`      | `string`                                                        | —                 | Nom de l'icône lorsque `badgeContent` vaut `"icon"`.                                                    |
| `badgeCount`     | `number`                                                        | —                 | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`.                                       |
| `badgeSize`      | `"xs"` | `"s"` | `"m"` | `"l"`                                  | —                 | Taille du badge sur le déclencheur.                                                                     |




### Item de menu (`SplitButtonOption`)

Chaque entrée du tableau `options` accepte les champs suivants :


| Nom              | Type                                                                                | Valeur par défaut | Description                                                           |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------- |
| `id`             | `string`                                                                            | — (requis)        | Identifiant unique de l'item de menu.                                 |
| `label`          | `string`                                                                            | — (requis)        | Texte visible de l'item de menu.                                      |
| `onClick`        | `(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void` | —                 | Gestionnaire d'activation de l'item (clic, Espace ou Entrée).         |
| `icon`           | `string`                                                                            | —                 | Nom de l'icône transmis à l'item de dropdown en tant que `leftIcon`.  |
| `disabled`       | `boolean`                                                                           | `false`           | Désactive l'item de menu.                                             |
| `compactSpacing` | `boolean`                                                                           | —                 | Réservé à l'espacement au niveau de l'item.                           |
| `direction`      | `Direction`                                                                         | —                 | Direction du texte pour le libellé de l'item.                         |
| `inverted`       | `boolean`                                                                           | —                 | Applique un style inversé à l'item.                                   |
| `showBadge`      | `boolean`                                                                           | —                 | Affiche un badge sur l'item lorsqu'il est combiné aux props de badge. |
| `badgeCount`     | `number`                                                                            | —                 | Valeur numérique du badge lorsque `badgeContent` vaut `"number"`.     |
| `badgeContent`   | `"number"` | `"icon"` | `"empty"`                                                   | —                 | Type de contenu du badge sur l'item.                                  |
| `badgeIcon`      | `string`                                                                            | —                 | Nom de l'icône lorsque `badgeContent` vaut `"icon"`.                  |
| `badgeType`      | `"brand"` | `"neutral"` | `"indicator"`                                             | —                 | Variante visuelle du badge sur l'item.                                |
| `badgeSize`      | `"xs"` | `"s"` | `"m"` | `"l"`                                                      | —                 | Taille du badge sur l'item.                                           |


Le composant accepte également les attributs natifs standard d'un bouton issus de `ButtonHTMLAttributes<HTMLButtonElement>` (sauf `onClick`), transmis aux deux segments du bouton.

## Usage

Importez `SplitButton` depuis `@design-system-rte/react`. Gérez l'action principale avec `onClick` et reliez chaque entrée de menu via `options` avec son propre gestionnaire `onClick`.

```tsx
import { SplitButton } from "@design-system-rte/react";

const options = [
  { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1") },
  { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2") },
  { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3") },
];

<SplitButton
  label="Button Label"
  ariaLabelRight="Open menu"
  onClick={() => console.log("Primary action")}
  options={options}
/>
```

Fournissez `ariaLabelRight` pour que le déclencheur de menu dispose d'un nom accessible. Les attributs natifs de bouton (par exemple `type` ou des attributs `data-*`) peuvent être passés en props et sont appliqués aux deux segments.

#### Apparence

```tsx
<SplitButton {...sharedProps} appearance="primary" />
<SplitButton {...sharedProps} appearance="secondary" />
```

Basculez entre les styles primary et secondary avec `appearance`.

(`"primary" | "secondary"`)

#### Taille

```tsx
<SplitButton {...sharedProps} size="s" />
<SplitButton {...sharedProps} size="m" />
<SplitButton {...sharedProps} size="l" />
```

Ajustez l'échelle du contrôle avec `size`.

(`"s" | "m" | "l"`)

#### Espacement compact

```tsx
<SplitButton {...sharedProps} size="s" compactSpacing />
<SplitButton {...sharedProps} size="m" compactSpacing />
<SplitButton {...sharedProps} size="l" compactSpacing />
```

Réduisez la hauteur verticale à chaque taille avec `compactSpacing`.

#### Position

```tsx
<SplitButton {...sharedProps} position="top-end" />
<SplitButton {...sharedProps} position="top-start" />
<SplitButton {...sharedProps} position="bottom-end" />
<SplitButton {...sharedProps} position="bottom-start" />
```

Contrôlez l'ouverture du panneau de menu par rapport au déclencheur avec `position`.

(`"bottom-start" | "bottom-end" | "top-start" | "top-end"`)

## Limitations



### Identifiant de dropdown partagé

Le menu déroulant intégré utilise un `dropdownId` fixe (`"tab-dropdown"`). Évitez de placer plusieurs split buttons qui dépendent d'identifiants de dropdown distincts sur la même page, ou utilisez le Dropdown autonome lorsque des identifiants par instance sont requis.

### Attributs de bouton partagés

Les attributs natifs de bouton transmis via `...props` sont appliqués au bouton principal et au déclencheur de menu. Évitez les props qui ne doivent s'appliquer qu'à un seul segment (par exemple un `id` unique).

