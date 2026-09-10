## Défault

```html
<button rteButton (click)="handleClick()">Button</button>
```

## Tailles

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonSize="s">Small</button>
  <button rteButton rteButtonSize="m">Medium</button>
  <button rteButton rteButtonSize="l">Large</button>
</div>
```

Les hauteurs vérifiées sont de `24 px`, `32 px` et `40 px` pour les tailles `s`, `m` et `l`.

## Variantes

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonVariant="primary">Primary</button>
  <button rteButton rteButtonVariant="secondary">Secondary</button>
  <button rteButton rteButtonVariant="text">Text</button>
  <button rteButton rteButtonVariant="transparent">Transparent</button>
  <button rteButton rteButtonVariant="danger">Danger</button>
  <button rteButton rteButtonVariant="neutral">Neutral</button>
  <button rteButton rteButtonVariant="reverse">Reverse</button>
</div>
```

## Icône

Une icone peut être ajoutée à gauche ou à droite du label du bouton et son apparence peut être définie sur `filled` ou `outlined`.

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonIcon="add-circle" rteButtonIconPosition="left" rteButtonIconAppearance="filled">
    Button with Icon
  </button>
  <button rteButton rteButtonIcon="add-circle" rteButtonIconPosition="right" rteButtonIconAppearance="outlined">
    Button with Icon
  </button>
</div>
```

## Badge

Le badge s'ajoute avec `BadgeDirective`, exportée par le package Angular.

```html
<button
  rteButton
  rteBadge
  rteButtonVariant="primary"
  rteButtonSize="m"
  rteBadgeContent="number"
  [rteBadgeCount]="5"
  rteBadgeType="brand"
  rteBadgeIcon="notification"
  rteBadgeSize="m"
>
  Button with Badge
</button>
```

Pour la story observée, `rteBadgeContent` vaut `"number"`, `rteBadgeCount` vaut `5`, `rteBadgeType` vaut `"brand"`, `rteBadgeIcon` vaut `"notification"` et `rteBadgeSize` vaut `"m"`.
