# Tooltip

## Overview

```html
<span
  rteTooltip="Tooltip"
  rteTooltipPosition="top"
>
  Hover Me!
</span>
```

## API

La directive `rteTooltip` constitue l'API publique. Ses inputs sont projetés sur le composant tooltip lorsqu'il est affiché.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `rteTooltip` | `string` | — (requis) | Libellé affiché dans le tooltip. |
| `rteTooltipPosition` | `"auto"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"auto"` | Placement par rapport à l'hôte. `"auto"` choisit le meilleur côté selon l'espace disponible. |
| `rteTooltipAlignment` | `"start"` \| `"center"` \| `"end"` | `"center"` | Alignement du tooltip le long de l'axe de position choisi. |
| `rteTooltipArrow` | `boolean` | `true` | Affiche ou masque la flèche du tooltip. |
| `rteTooltipShouldFocusTrigger` | `boolean` | `true` | Si `true`, l'élément hôte reçoit `tabindex="0"` pour pouvoir recevoir le focus. Si `false`, les écouteurs de focus sont attachés au premier enfant focalisable. |
| `rteTooltipGap` | `number` | `4` | Espacement en pixels entre l'élément hôte et le tooltip (ajusté lorsqu'une flèche est affichée). |

## Usage

Le Tooltip n'est pas utilisé comme composant autonome dans les templates. Les consommateurs n'interagissent qu'avec la directive `rteTooltip`.

Appliquez la directive sur un élément cible (hôte). La directive crée et projette le `TooltipComponent` sous-jacent, transmet sa configuration via les inputs de la directive, et affiche le tooltip lorsque l'hôte est survolé ou reçoit le focus.

```html
<button
  rteButton
  rteTooltip="Save changes"
  rteTooltipPosition="top"
>
  Save
</button>
```

N'utilisez pas `<rte-tooltip>` directement dans les templates applicatifs — ce sélecteur est réservé au composant projeté géré par la directive.

### Examples

#### Position

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipPosition]="tooltipPosition"
>
  Hover Me!
</span>
```

Placez le tooltip de chaque côté du déclencheur avec `rteTooltipPosition`.

(`"auto" | "top" | "bottom" | "left" | "right"`)

#### Alignment

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipAlignment]="tooltipAlignment"
>
  Hover Me!
</span>
```

Alignez le tooltip le long de l'axe de position avec `rteTooltipAlignment`.

(`"start" | "center" | "end"`)

#### Arrow

```html
<span
  rteTooltip="Tooltip"
  [rteTooltipArrow]="tooltipArrow"
>
  Hover Me!
</span>
```

Affichez ou masquez la flèche avec `rteTooltipArrow`.

#### Auto placement

```html
<span
  rteTooltip="Tooltip"
  rteTooltipPosition="auto"
>
  Hover Me!
</span>
```

Utilisez `rteTooltipPosition="auto"` pour que le tooltip choisisse le meilleur côté selon l'espace disponible (utile près des bords du viewport ou du conteneur).

## Limitations

### Text length

Le libellé du tooltip est limité à **deux lignes de texte**.

Le contenu qui dépasse cette hauteur est tronqué (`overflow: hidden` avec une hauteur maximale fixe). Préférez des libellés courts et concis. Les explications plus longues appartiennent à un autre pattern d'UI (par exemple un popover ou une modale).

## FAQ

Q : Mon texte a disparu après deux lignes

R : Consultez la section Limitations / Text length. Un tooltip n'affiche que les deux premières lignes de texte.
