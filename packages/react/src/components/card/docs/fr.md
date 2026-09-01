# Card

## Overview

```tsx
<Card>
  <div style={{ padding: "16px" }}>
    <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Card Title</h2>
    <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
      This is a sample card with some content.
    </p>
  </div>
</Card>
```

## API

Le composant `Card` constitue l'API publique. Les consommateurs passent des props et rendent des enfants à l'intérieur du conteneur. Les attributs HTML standard de `div` (par exemple `aria-label`, `className`, `id`) sont transmis à l'élément racine.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `width` | `string` | `480px` | Largeur de la card (toute valeur CSS valide, par exemple `480px` ou `50%`). |
| `height` | `string` | `auto` | Hauteur de la card (toute valeur CSS valide). |
| `cardType` | `"default" \| "outlined"` | `"default"` | Variante visuelle. `default` utilise une ombre d'élévation ; `outlined` utilise une bordure sans ombre. |
| `clickable` | `boolean` | `false` | Rend la card interactive, focusable et activable au clavier. |
| `disabled` | `boolean` | `false` | Désactive l'interaction et applique le style désactivé. |
| `onClick` | `() => void` | — | Callback invoqué lorsque la card est cliquée ou activée via Entrée ou Espace, lorsque `clickable` vaut `true` et `disabled` vaut `false`. |
| `children` | `ReactNode` | — | Contenu rendu à l'intérieur de la card. |

Le composant prend en charge le forwarding de `ref` vers l'élément racine `div`.

## Usage

Importez `Card` et rendez-le avec des enfants. La card est un conteneur de mise en page sans emplacements header, body ou footer intégrés.

```tsx
import Card from "@design-system-rte/react/components/card/Card";

function Example() {
  return (
    <Card>
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Card Title</h2>
        <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
          This is a sample card with some content.
        </p>
      </div>
    </Card>
  );
}
```

Définissez `clickable={true}` et passez `onClick` lorsque l'ensemble de la card doit agir comme une cible interactive unique. Fournissez `aria-label` ou `aria-labelledby` pour le nom accessible.

#### Widths

```tsx
<Card width="240px">
  <div style={{ padding: "16px" }}>Extra Small — 240px</div>
</Card>

<Card width="360px">
  <div style={{ padding: "16px" }}>Small — 360px</div>
</Card>

<Card width="480px">
  <div style={{ padding: "16px" }}>Medium — 480px</div>
</Card>

<Card width="600px">
  <div style={{ padding: "16px" }}>Large — 600px</div>
</Card>

<Card width="720px">
  <div style={{ padding: "16px" }}>Extra Large — 720px</div>
</Card>
```

Remplacez la largeur par défaut de `480px` par toute longueur ou pourcentage CSS.

#### Card types

(`"default" | "outlined"`)

```tsx
<Card cardType="default">
  <div style={{ padding: "16px" }}>
    <h3>Default Card</h3>
    <p>Uses elevation shadow.</p>
  </div>
</Card>

<Card cardType="outlined">
  <div style={{ padding: "16px" }}>
    <h3>Outlined Card</h3>
    <p>Uses a border instead of shadow.</p>
  </div>
</Card>
```

Basculez entre les deux variantes visuelles avec `cardType`.

#### With buttons

```tsx
import Button from "@design-system-rte/react/components/button/Button";

<Card>
  <div style={{ padding: "16px" }}>
    <h3>Primary Button</h3>
    <p>Card with primary button variant</p>
    <Button variant="primary" label="Primary Action" onClick={() => console.log("Primary clicked")} />
  </div>
</Card>
```

Placez des boutons ou d'autres composants à l'intérieur de la card. Ajoutez le padding interne dans vos enfants.

#### Clickable with content

```tsx
<Card clickable onClick={() => console.log("Card clicked")}>
  <div style={{ padding: "16px" }}>
    <h2>Clickable Card with Button</h2>
    <p>Click the card surface to trigger the card action.</p>
    <Button
      variant="primary"
      label="Action Button"
      onClick={(event) => {
        event.stopPropagation();
        console.log("Button clicked inside card");
      }}
    />
  </div>
</Card>
```

Lorsque la card est cliquable, arrêtez la propagation de l'événement sur les éléments interactifs imbriqués pour éviter de déclencher `onClick`.

## Limitations

### L'état désactivé bloque tous les événements pointeur

Lorsque `disabled` vaut `true`, la card applique `pointer-events: none`. Les éléments interactifs imbriqués tels que les boutons ou les liens ne peuvent pas recevoir de clics tant que la card est désactivée.

### Cards cliquables et éléments interactifs imbriqués

Lorsque `clickable` vaut `true`, les clics sur les éléments interactifs imbriqués remontent à la card et déclenchent `onClick`. Appelez `stopPropagation()` sur les gestionnaires imbriqués lorsque le contrôle interne ne doit pas activer la card.
