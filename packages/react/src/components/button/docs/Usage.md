## Défault

```tsx
<Button label="Button" onClick={() => console.log("Button clicked")} />
```

## Tailles

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <Button label="Small" size="s" />
  <Button label="Medium" size="m" />
  <Button label="Large" size="l" />
</div>
```

Les hauteurs vérifiées sont de `24 px`, `32 px` et `40 px` pour les tailles `s`, `m` et `l`.

## Variants

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <Button label="Primary" variant="primary" />
  <Button label="Secondary" variant="secondary" />
  <Button label="Text" variant="text" />
  <Button label="Transparent" variant="transparent" />
  <Button label="Danger" variant="danger" />
  <Button label="Neutral" variant="neutral" />
  <Button label="Reverse" variant="reverse" />
</div>
```

## Icône

Une icone peut être ajoutée à gauche ou à droite du label du bouton et son apparence peut être définie sur `filled` ou `outlined`.

```tsx
<Button label="Button with Icon" icon="add-circle" iconPosition="left" iconAppearance="filled" />
<Button label="Button with Icon" icon="add-circle" iconPosition="right" iconAppearance="outlined" />
```

`icon` doit correspondre à une clé d'icône valide. `iconAppearance` concerne les icônes togglables.

## Badge

```tsx
<Button label="Button" badgeContent="number" badgeCount={5} badgeType="brand" badgeIcon="notification" />
<Button label="Button" badgeContent="icon" badgeIcon="notification" />
```

Un badge numérique est affiché uniquement avec un nombre positif. Un badge d'icône est affiché lorsque `badgeContent` vaut `"icon"` et qu'une icône est fournie.
