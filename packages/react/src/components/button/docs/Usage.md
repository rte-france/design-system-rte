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

## Apparence et hiérarchie

Le style du bouton se définit avec `appearance`, `hierarchy`, et le cas échéant `isCritical`. Sans prop de style, le rendu correspond à `brand` / `primary`.

```tsx
<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
  <Button label="Primary" appearance="brand" hierarchy="primary" />
  <Button label="Secondary" appearance="brand" hierarchy="secondary" />
  <Button label="Text" appearance="brand" hierarchy="text" />
  <Button label="Transparent" appearance="brand" hierarchy="transparent" />
  <Button label="Danger" appearance="brand" hierarchy="primary" isCritical />
  <Button label="Neutral" appearance="neutral" hierarchy="text" />
</div>
```

## Reverse (`isReversed`)

Dans Figma, **Reverse** correspond aux boutons **brand** posés sur une **surface inverse** (fond sombre), avec le booléen `isReversed` et une hiérarchie — la spec documente notamment **transparent** pour les tailles S, M et L.

`isReversed` n’est pas un substitut à une hiérarchie `primary` sur fond clair : le conteneur doit fournir le fond inverse, et le bouton utilise les tokens inverse.

```tsx
<div style={{ background: "var(--background-inverse, #201f1f)", padding: 16, borderRadius: 8 }}>
  <Button label="Reverse" appearance="brand" hierarchy="transparent" isReversed />
</div>
```

## Prop `variant` (déprécié)

`variant` est un alias plat **déprécié** qui regroupe l’apparence, la hiérarchie et les flags en une seule valeur : `primary`, `secondary`, `text`, `transparent`, `danger`, `neutral`, `reverse`. Il reste pris en charge pour la migration, mais `appearance`, `hierarchy`, `isCritical` et `isReversed` doivent être utilisés pour les nouveaux développements. Lorsqu’ils sont renseignés, ils **priment** sur `variant`.

```tsx
// Déprécié — équivalent : appearance="brand" hierarchy="primary"
<Button label="Primary" variant="primary" />
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
