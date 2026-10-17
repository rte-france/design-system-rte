## Usage de base

```html
<rte-icon-button
  name="settings"
  appearance="brand"
  hierarchy="primary"
  ariaLabel="Ouvrir les paramètres"
  (clickEvent)="handleClick($event)"
/>
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

## Apparence du shell

### Brand

```html
<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <rte-icon-button name="settings" appearance="brand" hierarchy="primary" ariaLabel="Primary" />
  <rte-icon-button name="settings" appearance="brand" hierarchy="secondary" ariaLabel="Secondary" />
  <rte-icon-button name="settings" appearance="brand" hierarchy="text" ariaLabel="Text" />
  <rte-icon-button name="settings" appearance="brand" hierarchy="transparent" ariaLabel="Transparent" />
</div>
```

### Neutral

Le neutral à bordure (équivalent « outlined » côté Button) utilise `hierarchy="secondary"`.

```html
<div style="display: flex; gap: 8px; flex-wrap: wrap">
  <rte-icon-button name="settings" appearance="neutral" hierarchy="primary" ariaLabel="Neutral primary" />
  <rte-icon-button name="settings" appearance="neutral" hierarchy="secondary" ariaLabel="Neutral secondary" />
  <rte-icon-button name="settings" appearance="neutral" hierarchy="text" ariaLabel="Neutral text" />
  <rte-icon-button name="settings" appearance="neutral" hierarchy="transparent" ariaLabel="Neutral transparent" />
</div>
```

### Critical et reversed

```html
<rte-icon-button
  name="delete"
  appearance="brand"
  hierarchy="primary"
  [isCritical]="true"
  ariaLabel="Supprimer"
/>

<div style="background: var(--background-inverse); display: inline-flex; padding: 8px">
  <rte-icon-button
    name="settings"
    appearance="brand"
    hierarchy="transparent"
    [isReversed]="true"
    ariaLabel="Reversed"
  />
</div>
```

## Variantes dépréciées (`variant`)

Les valeurs `variant` restent supportées pour compatibilité ; migrer vers `appearance`, `hierarchy` et les drapeaux lors des mises à jour.

```html
<rte-icon-button name="settings" variant="danger" ariaLabel="Danger" />
```

## Apparence de l’icône

Préférer `iconAppearance` pour les icônes togglables. `appearance="outlined"` ou `"filled"` reste un alias déprécié.

```html
<rte-icon-button name="settings" iconAppearance="outlined" ariaLabel="Paramètres" />
<rte-icon-button name="settings" iconAppearance="filled" ariaLabel="Paramètres" />
```

## Badge

```html
<rte-icon-button name="settings" ariaLabel="Paramètres" badgeContent="number" [badgeCount]="1" badgeType="brand" />
```
