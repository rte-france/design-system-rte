# Tooltip

## Overview

```tsx
import Tooltip from "@design-system-rte/react/components/tooltip/Tooltip";

<Tooltip label="Tooltip" position="top">
  <span>Hover Me!</span>
</Tooltip>
```

## API

Le composant `<Tooltip>` constitue l'API publique. Ses props configurent l'overlay du tooltip projeté autour du contenu `children` qui sert de déclencheur.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — (requis) | Contenu du déclencheur enveloppé par le tooltip. |
| `label` | `string` | — | Texte affiché dans le tooltip. |
| `position` | `"auto"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"top"` | Placement par rapport au déclencheur. `"auto"` choisit le meilleur côté selon l'espace disponible. |
| `alignment` | `"start"` \| `"center"` \| `"end"` | `"center"` | Alignement du tooltip le long de l'axe de position choisi. |
| `arrow` | `boolean` | `true` | Affiche ou masque la flèche du tooltip. |
| `shouldFocusTrigger` | `boolean` | `true` | Si `true`, le conteneur du déclencheur reçoit `tabIndex={0}` pour pouvoir recevoir le focus. Si `false`, le focus est capturé depuis un enfant focalisable. |
| `gap` | `number` | `4` | Espacement en pixels entre le déclencheur et le tooltip (ajusté lorsqu'une flèche est affichée). |
| `triggerStyles` | `React.CSSProperties` | — | Styles inline optionnels appliqués au conteneur du déclencheur. |
| `className` | `string` | `""` | Classe(s) CSS supplémentaire(s) appliquée(s) à l'élément overlay du tooltip. |

## Usage

Le Tooltip est utilisé comme **composant wrapper**. Enveloppez l'élément déclencheur (ou le contenu) en tant que `children` de `<Tooltip>`. Le composant rend un conteneur de déclencheur focalisable, applique la configuration du tooltip via ses props, et affiche l'overlay lorsque le déclencheur est survolé ou reçoit le focus.

```tsx
import Tooltip from "@design-system-rte/react/components/tooltip/Tooltip";

<Tooltip label="Save changes" position="top">
  <button>Save</button>
</Tooltip>
```

Le déclencheur est le contenu enfant enveloppé ; les props du tooltip (`label`, `position`, `alignment`, etc.) configurent l'overlay projeté, pas l'enfant lui-même.

### Examples

#### Position

```tsx
<Tooltip label="Tooltip" position={tooltipPosition}>
  <span>Hover Me!</span>
</Tooltip>
```

Placez le tooltip de chaque côté du déclencheur avec `position`.

(`"auto" | "top" | "bottom" | "left" | "right"`)

#### Alignment

```tsx
<Tooltip label="Tooltip" alignment={tooltipAlignment}>
  <span>Hover Me!</span>
</Tooltip>
```

Alignez le tooltip le long de l'axe de position avec `alignment`.

(`"start" | "center" | "end"`)

#### Arrow

```tsx
<Tooltip label="Tooltip" arrow={tooltipArrow}>
  <span>Hover Me!</span>
</Tooltip>
```

Affichez ou masquez la flèche avec `arrow`.

#### Auto placement

```tsx
<Tooltip label="Tooltip" position="auto">
  <span>Hover Me!</span>
</Tooltip>
```

Utilisez `position="auto"` pour que le tooltip choisisse le meilleur côté selon l'espace disponible (utile près des bords du viewport ou du conteneur).

## Limitations

### Text length

Le libellé du tooltip est limité à **deux lignes de texte**.

Le contenu qui dépasse cette hauteur est tronqué (`overflow: hidden` avec une hauteur maximale fixe). Préférez des libellés courts et concis. Les explications plus longues appartiennent à un autre pattern d'UI (par exemple un popover ou une modale).

## FAQ

Q : Mon texte a disparu après deux lignes

R : Consultez la section Limitations / Text length. Un tooltip n'affiche que les deux premières lignes de texte.
