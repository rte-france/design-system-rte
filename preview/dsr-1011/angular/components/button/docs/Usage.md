## Défault

```html
<button rteButton (click)="handleClick()">Button</button>
```

## Tailles

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonSize="s">Small</button>
  <button rteButton rteButtonSize="m">Medium</button>
  <button rteButton rteButtonSize="l">Large</button>
</div>
```

Les hauteurs vérifiées sont de `24 px`, `32 px` et `40 px` pour les tailles `s`, `m` et `l`.

## Apparence et hiérarchie

Le style du bouton se définit avec `rteButtonAppearance`, `rteButtonHierarchy`, et le cas échéant `[rteButtonIsCritical]="true"`. Sans prop de style, le rendu correspond à `brand` / `primary`.

```html
<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary">Primary</button>
  <button rteButton rteButtonAppearance="brand" rteButtonHierarchy="secondary">Secondary</button>
  <button rteButton rteButtonAppearance="brand" rteButtonHierarchy="text">Text</button>
  <button rteButton rteButtonAppearance="brand" rteButtonHierarchy="transparent">Transparent</button>
  <button rteButton rteButtonAppearance="brand" rteButtonHierarchy="primary" [rteButtonIsCritical]="true">Danger</button>
  <button rteButton rteButtonAppearance="neutral" rteButtonHierarchy="text">Neutral</button>
</div>
```

La hiérarchie `outlined` est disponible via `rteButtonHierarchy="outlined"` (non couverte par l’ancien alias de variante).

## Reverse (`rteButtonIsReversed`)

Dans Figma, **Reverse** correspond aux boutons **brand** posés sur une **surface inverse** (fond sombre), avec le booléen `isReversed` et une hiérarchie — la spec documente notamment **transparent** pour les tailles S, M et L.

`rteButtonIsReversed` n’est pas un substitut à une hiérarchie `primary` sur fond clair : le conteneur doit fournir le fond inverse, et le bouton utilise les tokens inverse.

```html
<div style="background: var(--background-inverse, #201f1f); padding: 16px; border-radius: 8px;">
  <button
    rteButton
    rteButtonAppearance="brand"
    rteButtonHierarchy="transparent"
    [rteButtonIsReversed]="true"
  >
    Reverse
  </button>
</div>
```

## Variante `rteButtonVariant` (déprécié)

`rteButtonVariant` est un alias plat **déprécié** qui regroupe l’apparence, la hiérarchie et les flags en une seule valeur : `primary`, `secondary`, `text`, `transparent`, `danger`, `neutral`, `reverse`. Il reste pris en charge pour la migration, mais les inputs `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical` et `rteButtonIsReversed` doivent être utilisés pour les nouveaux développements. Lorsqu’ils sont renseignés, ils **priment** sur `rteButtonVariant`.

```html
<!-- Déprécié — équivalent : appearance brand, hierarchy primary -->
<button rteButton rteButtonVariant="primary">Primary</button>
```

## Icône

Une icone peut être ajoutée à gauche ou à droite du label du bouton et son apparence peut être définie sur `filled` ou `outlined`.

```html
<div style="display: flex; gap: 8px;">
  <button rteButton rteButtonIcon="add-circle" rteButtonIconPosition="left" rteButtonIconAppearance="filled">
    Button with Icon
  </button>
  <button rteButton rteButtonIcon="add-circle" rteButtonIconPosition="right" rteButtonIconAppearance="outlined">
    Button with Icon
  </button>
</div>
```

## Badge

Le badge s'ajoute avec `BadgeDirective`, exportée par le package Angular.

```html
<button
  rteButton
  rteBadge
  rteButtonAppearance="brand"
  rteButtonHierarchy="primary"
  rteButtonSize="m"
  rteBadgeContent="number"
  [rteBadgeCount]="5"
  rteBadgeType="brand"
  rteBadgeIcon="notification"
  rteBadgeSize="m"
>
  Button with Badge
</button>
```

Pour la story observée, `rteBadgeContent` vaut `"number"`, `rteBadgeCount` vaut `5`, `rteBadgeType` vaut `"brand"`, `rteBadgeIcon` vaut `"notification"` et `rteBadgeSize` vaut `"m"`.
