### Orientation

Le Divider est horizontal par défaut. Pour l'afficher verticalement, utilisez `orientation="vertical"` dans un conteneur dont la hauteur est définie.

```html
<div style="display: flex; flex-direction: column; gap: 20px; justify-content: space-between; width: 250px">
  <rte-divider orientation="horizontal"></rte-divider>
  <div style="height: 100px">
    <rte-divider orientation="vertical"></rte-divider>
  </div>
</div>
```

### Épaisseurs

Les trois épaisseurs disponibles sont `light`, `medium` et `bold`.

```html
<rte-divider thickness="light"></rte-divider>
<rte-divider thickness="medium"></rte-divider>
<rte-divider thickness="bold"></rte-divider>
```

### Apparences

#### Neutral

```html
<rte-divider appearance="neutral"></rte-divider>
```

#### Brand

```html
<rte-divider appearance="brand"></rte-divider>
```

#### Inverse

```html
<div style="background-color: var(--background-brand-pressed); padding: 20px">
  <rte-divider appearance="inverse"></rte-divider>
</div>
```

### Extrémités

Les extrémités sont arrondies par défaut. Utilisez `endPoint="square"` pour des extrémités droites.

```html
<rte-divider endPoint="square"></rte-divider>
```
