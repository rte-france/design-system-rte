## Usage de base

```html
<rte-icon-button name="settings" ariaLabel="Ouvrir les paramètres" (clickEvent)="handleClick($event)" />
```

## Sizing

### Défault

```html
<div style="display: flex; gap: 8px">
  <rte-icon-button name="settings" size="s" ariaLabel="Petit bouton" />
  <rte-icon-button name="settings" size="m" ariaLabel="Bouton moyen" />
  <rte-icon-button name="settings" size="l" ariaLabel="Grand bouton" />
</div>
```

### Compact spacing

```html
<div style="display: flex; gap: 8px">
  <rte-icon-button name="settings" size="s" [compactSpacing]="true" ariaLabel="Petit bouton compact" />
  <rte-icon-button name="settings" size="m" [compactSpacing]="true" ariaLabel="Bouton moyen compact" />
  <rte-icon-button name="settings" size="l" [compactSpacing]="true" ariaLabel="Grand bouton compact" />
</div>
```

## Variantes

Les variantes disponibles sont `primary`, `secondary`, `text`, `transparent`, `danger`, `neutral` et `reverse`.

```html
<div style="display: flex; gap: 8px">
  <rte-icon-button name="settings" variant="primary" ariaLabel="Primary" />
  <rte-icon-button name="settings" variant="secondary" ariaLabel="Secondary" />
  <rte-icon-button name="settings" variant="text" ariaLabel="Text" />
  <rte-icon-button name="settings" variant="transparent" ariaLabel="Transparent" />
  <rte-icon-button name="settings" variant="danger" ariaLabel="Danger" />
  <rte-icon-button name="settings" variant="neutral" ariaLabel="Neutral" />
  <div style="background: var(--background-inverse)">
    <rte-icon-button name="settings" variant="reverse" ariaLabel="Reverse" />
  </div>
</div>
```

## Apparence de l'icône

L'apparence `outlined` ou `filled` s'applique aux icônes togglables.

```html
<rte-icon-button name="settings" appearance="outlined" ariaLabel="Paramètres" />
<rte-icon-button name="settings" appearance="filled" ariaLabel="Paramètres" />
```

## Badge

Avec les propriétés `badgeContent`, `badgeCount`, `badgeIcon`, `badgeSize` et `badgeType`, un badge peut être affiché sur le bouton.

```html
<rte-icon-button name="settings" ariaLabel="Paramètres" badgeContent="number" [badgeCount]="1" badgeType="brand" />
```
