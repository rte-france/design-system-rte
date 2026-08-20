## Usage de base

```tsx
<IconButton name="settings" aria-label="Ouvrir les paramètres" onClick={handleClick} />
```

## Sizing

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <IconButton name="settings" size="s" aria-label="Petit bouton" />
  <IconButton name="settings" size="m" aria-label="Bouton moyen" />
  <IconButton name="settings" size="l" aria-label="Grand bouton" />
</div>
```

Avec `compactSpacing`, les hauteurs vérifiées sont de `16 px`, `20 px` et `24 px` pour les tailles `s`, `m` et `l`.

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <IconButton name="settings" size="s" compactSpacing aria-label="Petit bouton compact" />
  <IconButton name="settings" size="m" compactSpacing aria-label="Bouton moyen compact" />
  <IconButton name="settings" size="l" compactSpacing aria-label="Grand bouton compact" />
</div>
```

## Variantes

Les variantes disponibles sont `primary`, `secondary`, `text`, `transparent`, `danger`, `neutral` et `reverse`.

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <IconButton name="settings" variant="primary" aria-label="Ouvrir les paramètres" />
  <IconButton name="settings" variant="secondary" aria-label="Ouvrir les paramètres" />
  <IconButton name="settings" variant="text" aria-label="Ouvrir les paramètres" />
  <IconButton name="settings" variant="transparent" aria-label="Ouvrir les paramètres" />
  <IconButton name="settings" variant="danger" aria-label="Ouvrir les paramètres" />
  <IconButton name="settings" variant="neutral" aria-label="Ouvrir les paramètres" />
  <div style={{ backgroundColor: "var(--background-inverse)" }}>
    <IconButton name="settings" variant="reverse" aria-label="Ouvrir les paramètres" />
  </div>
</div>
```

## Apparence de l'icône

L'apparence `outlined` ou `filled` s'applique aux icônes togglables.

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <IconButton name="settings" appearance="outlined" aria-label="Paramètres" />
  <IconButton name="settings" appearance="filled" aria-label="Paramètres" />
</div>
```

## Badge

Avec les propriétés `badgeContent`, `badgeCount`, `badgeIcon`, `badgeSize` et `badgeType`, un badge peut être affiché sur le bouton.

```tsx
<IconButton name="settings" aria-label="Paramètres" badgeContent="number" badgeCount={1} badgeType="brand" />
```
