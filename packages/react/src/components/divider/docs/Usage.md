### Orientation

Le Divider est horizontal par défaut. Pour l'afficher verticalement, utilisez `orientation="vertical"` dans un conteneur dont la hauteur est définie.

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", width: "250px" }}>
  <Divider orientation="horizontal" />
  <div style={{ height: "100px" }}>
    <Divider orientation="vertical" />
  </div>
</div>
```

### Épaisseurs

Les trois épaisseurs disponibles sont `light`, `medium` et `bold`.

```tsx
<Divider thickness="light" />
<Divider thickness="medium" />
<Divider thickness="bold" />
```

### Apparences

#### Neutral

```tsx
<Divider appearance="neutral" />
```

#### Brand

```tsx
<Divider appearance="brand" />
```

#### Inverse

```tsx
<Divider appearance="inverse" />
```

### Extrémités

Les extrémités sont arrondies par défaut. Utilisez `endPoint="square"` pour des extrémités droites.

```tsx
<Divider endPoint="square" />
```
