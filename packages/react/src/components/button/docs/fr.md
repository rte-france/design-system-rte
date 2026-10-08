# Button

## Overview

```tsx
<Button appearance="brand" hierarchy="primary" label="Button" />
```

## API

Le composant `Button` rend un `<button>` natif. Le style visuel est contrôlé par les props ci-dessous. Les attributs HTML standard (dont `disabled`) peuvent être passés.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| appearance | `"brand"` \| `"neutral"` | `"brand"` | Famille de couleurs brand ou neutral. |
| hierarchy | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"outlined"` | `"primary"` | Hiérarchie visuelle dans l’appearance. |
| isCritical | boolean | `false` | Style critique (action destructive). |
| isReversed | boolean | `false` | Couleurs inversées pour fonds sombres ou brandés. |
| variant | `"primary"` \| `"secondary"` \| `"text"` \| `"transparent"` \| `"danger"` \| `"neutral"` \| `"reverse"` | — | Alias visuel plat déprécié. Préférez `appearance`, `hierarchy`, `isCritical` et `isReversed`. |
| label | string | — (requis) | Texte visible du bouton. |
| size | `"s"` \| `"m"` \| `"l"` | `"m"` | Taille du bouton. |
| icon | string | — | Nom d’icône. |
| iconPosition | `"left"` \| `"right"` | `"left"` | Position de l’icône par rapport au label. |
| iconAppearance | `"filled"` \| `"outlined"` | — | Apparence de l’icône. |
| badgeContent | `"number"` \| `"icon"` \| `"empty"` | — | Type de contenu du badge. |
| badgeCount | number | — | Compteur du badge. |
| badgeType | `"brand"` \| `"neutral"` \| `"indicator"` | — | Type visuel du badge. |
| badgeIcon | string | — | Icône du badge. |
| disabled | boolean | `false` | État désactivé natif (HTML `disabled`). |

### Migration depuis `variant`

| `variant` déprécié | Remplacer par |
|--------------------|---------------|
| `primary` | `appearance="brand"` + `hierarchy="primary"` |
| `secondary` | `brand` + `secondary` |
| `text` | `brand` + `text` |
| `transparent` | `brand` + `transparent` |
| `danger` | `brand` + `primary` + `isCritical` |
| `reverse` | `brand` + `primary` + `isReversed` |
| `neutral` | `neutral` + `text` ; nouveaux styles neutral : `primary`, `secondary`, `outlined` |

Les nouvelles props explicites priment par axe si `variant` est encore présent.

## Usage

Importez `Button` et définissez `appearance` et `hierarchy`. Utilisez `disabled` pour désactiver le bouton.

```tsx
<Button appearance="brand" hierarchy="primary" label="Submit" onClick={onSubmit} />
```

#### Tailles

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <Button appearance="brand" hierarchy="primary" size="s" label="Small" />
  <Button appearance="brand" hierarchy="primary" size="m" label="Medium" />
  <Button appearance="brand" hierarchy="primary" size="l" label="Large" />
</div>
```

Trois hauteurs (`s`, `m`, `l`).

#### Avec icône

```tsx
<Button
  appearance="brand"
  hierarchy="primary"
  label="Button with Icon"
  icon="add-circle"
  iconPosition="left"
  iconAppearance="outlined"
/>
```

Une icône ; position via `iconPosition`.

#### Hiérarchies brand

```tsx
<Button appearance="brand" hierarchy="primary" label="Primary" />
<Button appearance="brand" hierarchy="secondary" label="Secondary" />
<Button appearance="brand" hierarchy="text" label="Text" />
<Button appearance="brand" hierarchy="transparent" label="Transparent" />
```

#### Hiérarchies neutral

```tsx
<Button appearance="neutral" hierarchy="primary" label="Neutral primary" />
<Button appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
<Button appearance="neutral" hierarchy="outlined" label="Neutral outlined" />
<Button appearance="neutral" hierarchy="text" label="Neutral text" />
```

#### Critique et inversé

```tsx
<Button appearance="brand" hierarchy="primary" isCritical label="Critical" />
```

`isReversed` sur fond sombre.

#### Variantes legacy

```tsx
<Button variant="danger" label="Danger" />
```

`variant` déprécié mais supporté.

#### Avec badge

```tsx
<Button
  appearance="brand"
  hierarchy="primary"
  label="Button with Badge"
  badgeContent="number"
  badgeCount={5}
  badgeType="indicator"
/>
```

Enveloppe le bouton dans `Badge` lorsque les props badge sont définies.

## Limitations

### Prop `label`

React utilise une prop `label` ; Angular projette le contenu. Alignement futur possible.

### États natifs

Survol, pression, focus et disabled : comportement natif + CSS, pas des props Figma.

### Icône unique

Une seule `icon` ; `iconPosition` gauche ou droite.

### Badge

Composition via le composant `Badge`, pas un booléen de style.

## FAQ

Q : `variant` ou les nouvelles props ?

R : Préférez `appearance`, `hierarchy`, `isCritical`, `isReversed`. Voir la migration dans l’API.

Q : Désactiver un bouton ?

R : Prop native `disabled`. Pas de `isDisabled`.
