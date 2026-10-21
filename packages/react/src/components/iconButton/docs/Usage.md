## Usage de base

L’apparence du bouton se configure avec `appearance`, `hierarchy`, `isCritical` et `isReversed`. Le glyphe togglable utilise `iconAppearance`.

```tsx
<IconButton
  name="settings"
  appearance="brand"
  hierarchy="primary"
  iconAppearance="outlined"
  aria-label="Ouvrir les paramètres"
  onClick={handleClick}
/>
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

## Apparence du bouton

### Brand

```tsx
<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
  <IconButton name="settings" appearance="brand" hierarchy="primary" aria-label="Primary" />
  <IconButton name="settings" appearance="brand" hierarchy="secondary" aria-label="Secondary" />
  <IconButton name="settings" appearance="brand" hierarchy="text" aria-label="Text" />
  <IconButton name="settings" appearance="brand" hierarchy="transparent" aria-label="Transparent" />
  <IconButton name="settings" appearance="brand" hierarchy="primary" isCritical aria-label="Critical" />
</div>
```

### Neutral

```tsx
<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
  <IconButton name="settings" appearance="neutral" hierarchy="primary" aria-label="Neutral primary" />
  <IconButton name="settings" appearance="neutral" hierarchy="secondary" aria-label="Neutral secondary" />
  <IconButton name="settings" appearance="neutral" hierarchy="text" aria-label="Neutral text" />
  <IconButton name="settings" appearance="neutral" hierarchy="transparent" aria-label="Neutral transparent" />
</div>
```

### Critical et reversed

```tsx
<IconButton name="delete" appearance="brand" hierarchy="primary" isCritical aria-label="Supprimer" />

<div style={{ backgroundColor: "var(--background-inverse)", display: "inline-flex", padding: 8 }}>
  <IconButton name="settings" appearance="brand" hierarchy="transparent" isReversed aria-label="Reversed" />
</div>
```

## Variantes dépréciées (`variant`)

Les valeurs `variant` restent supportées pour compatibilité. Voir le tableau **Migration depuis `variant`** dans l’API.

```tsx
<IconButton name="settings" variant="danger" aria-label="Danger" />
// Équivalent
<IconButton name="settings" appearance="brand" hierarchy="primary" isCritical aria-label="Danger" />
```

## Apparence de l’icône

Préférer `iconAppearance` pour les icônes togglables.

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <IconButton name="settings" iconAppearance="outlined" aria-label="Paramètres" />
  <IconButton name="settings" iconAppearance="filled" aria-label="Paramètres" />
</div>
```

Alias déprécié sur `appearance` (glyphe uniquement) :

```tsx
// Déprécié
<IconButton name="settings" appearance="filled" aria-label="Paramètres" />
// Équivalent
<IconButton name="settings" iconAppearance="filled" aria-label="Paramètres" />
```

## Badge

```tsx
<IconButton name="settings" aria-label="Paramètres" badgeContent="number" badgeCount={1} badgeType="brand" />
```
