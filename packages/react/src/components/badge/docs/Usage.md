### Badge indépendant

Lorsqu'aucun `children` n'est fourni, le Badge est rendu comme un composant indépendant. Il peut afficher un nombre, une icône ou un état vide.

```tsx
<Badge badgeType="brand" size="m" content="number" count={1} />
```

### Badge en superposition

Pour afficher le Badge en superposition d'un élément, transmettez cet élément via `children`. Le Badge et son enfant sont alors rendus dans un même conteneur.

```tsx
<Badge badgeType="brand" size="m" content="number" count={1}>
  <span>Élément avec Badge</span>
</Badge>
```

### Tailles

```tsx
<>
  <Badge badgeType="brand" content="empty" size="xs">
    {/*children content*/}
  </Badge>
  <Badge badgeType="brand" content="empty" size="s">
    {/*children content*/}
  </Badge>
  <Badge badgeType="brand" content="empty" size="m">
    {/*children content*/}
  </Badge>
  <Badge badgeType="brand" content="empty" size="l">
    {/*children content*/}
  </Badge>
</>
```

### Variantes de type

```tsx
<>
  <Badge badgeType="brand" content="number" count={1} size="m">
    {/*children content*/}
  </Badge>
  <Badge badgeType="neutral" content="number" count={1} size="m">
    {/*children content*/}
  </Badge>
  <Badge badgeType="indicator" content="number" count={1} size="m">
    {/*children content*/}
  </Badge>
</>
```

### Variantes de contenu

```tsx
<>
  <>
    <Badge badgeType="brand" content="number" count={1} size="xs">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="number" count={1} size="s">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="number" count={1} size="m">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="number" count={1} size="l">
      {/*children content*/}
    </Badge>
  </>
  <>
    <Badge badgeType="brand" content="icon" icon="notification" size="xs">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="icon" icon="notification" size="s">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="icon" icon="notification" size="m">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="icon" icon="notification" size="l">
      {/*children content*/}
    </Badge>
  </>
  <>
    <Badge badgeType="brand" content="empty" size="xs">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="empty" size="s">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="empty" size="m">
      {/*children content*/}
    </Badge>
    <Badge badgeType="brand" content="empty" size="l">
      {/*children content*/}
    </Badge>
  </>
</>
```

### Signe plus

Le signe `+` peut être affiché avant le nombre avec `withPlusSign`.

```tsx
<Badge content="number" count={5} withPlusSign />
```
