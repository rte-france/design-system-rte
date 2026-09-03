# Card

## Overview

```html
<rte-card>
  <div style="padding: 16px;">
    <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Card Title</h2>
    <p style="margin: 0; color: #666; line-height: 1.5;">
      This is a sample card with some content.
    </p>
  </div>
</rte-card>
```

## API

Le composant `CardComponent` (`<rte-card>`) constitue l'API publique. Les consommateurs définissent les inputs sur l'élément hôte et projettent le contenu via `ng-content`.

| Nom | Type | Valeur par défaut | Description |
| --- | --- | --- | --- |
| `width` | `string` | `480px` | Largeur de la card (toute valeur CSS valide, par exemple `480px` ou `50%`). |
| `height` | `string` | `auto` | Hauteur de la card (toute valeur CSS valide). |
| `cardType` | `"default" \| "outlined"` | `"default"` | Variante visuelle. `default` utilise une ombre d'élévation ; `outlined` utilise une bordure sans ombre. |
| `clickable` | `boolean` | `false` | Rend la card interactive, focusable et activable au clavier. |
| `disabled` | `boolean` | `false` | Désactive l'interaction et applique le style désactivé. |
| `ariaLabel` | `string` | — | Libellé accessible lorsqu'aucun libellé visible n'est présent. |
| `ariaLabelledby` | `string` | — | Identifiant de l'élément qui libelle la card. |
| `ariaRole` | `string` | — | Définit l'attribut HTML `role` sur le conteneur de la card (par exemple `button`). Les lecteurs d'écran annoncent ce rôle lorsque la card est focusable. |

### Outputs

| Output | Type | Description |
| --- | --- | --- |
| `cardClicked` | `void` | Émis lorsque la card est cliquée ou activée via Entrée ou Espace, lorsque `clickable` vaut `true` et `disabled` vaut `false`. |

## Usage

Importez `CardComponent` et utilisez `<rte-card>` dans votre template. Projetez n'importe quel contenu à l'intérieur de l'élément hôte — la card est un conteneur de mise en page sans emplacements header, body ou footer intégrés.

```typescript
import { Component } from "@angular/core";
import { CardComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [CardComponent],
  template: `
    <rte-card>
      <div style="padding: 16px;">
        <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Card Title</h2>
        <p style="margin: 0; color: #666; line-height: 1.5;">
          This is a sample card with some content.
        </p>
      </div>
    </rte-card>
  `,
})
export class ExampleComponent {}
```

Définissez `[clickable]="true"` et écoutez `(cardClicked)` lorsque l'ensemble de la card doit agir comme une cible interactive unique. Fournissez `ariaLabel` ou `ariaLabelledby` pour le nom accessible, et définissez `ariaRole="button"` (ou un autre rôle adapté) afin que les lecteurs d'écran annoncent la card comme un élément interactif plutôt qu'un contenu statique.

#### Widths

```html
<rte-card width="240px">
  <div style="padding: 16px;">Extra Small — 240px</div>
</rte-card>

<rte-card width="360px">
  <div style="padding: 16px;">Small — 360px</div>
</rte-card>

<rte-card width="480px">
  <div style="padding: 16px;">Medium — 480px</div>
</rte-card>

<rte-card width="600px">
  <div style="padding: 16px;">Large — 600px</div>
</rte-card>

<rte-card width="720px">
  <div style="padding: 16px;">Extra Large — 720px</div>
</rte-card>
```

Remplacez la largeur par défaut de `480px` par toute longueur ou pourcentage CSS.

#### Card types

(`"default" | "outlined"`)

```html
<rte-card cardType="default">
  <div style="padding: 16px;">
    <h3>Default Card</h3>
    <p>Uses elevation shadow.</p>
  </div>
</rte-card>

<rte-card cardType="outlined">
  <div style="padding: 16px;">
    <h3>Outlined Card</h3>
    <p>Uses a border instead of shadow.</p>
  </div>
</rte-card>
```

Basculez entre les deux variantes visuelles avec `cardType`.

#### With buttons

```html
<rte-card>
  <div style="padding: 16px;">
    <h3>Primary Button</h3>
    <p>Card with primary button variant</p>
    <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onPrimaryClick()">
      Primary Action
    </button>
  </div>
</rte-card>
```

Placez des boutons ou d'autres composants à l'intérieur de la card. Ajoutez le padding interne dans votre contenu projeté.

#### Clickable with content

```html
<rte-card
  [clickable]="true"
  ariaRole="button"
  ariaLabel="Open card details"
  (cardClicked)="onCardClick()"
>
  <div style="padding: 16px;">
    <h2>Clickable Card with Button</h2>
    <p>Click the card surface to trigger the card action.</p>
    <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onButtonClick($event)">
      Action Button
    </button>
  </div>
</rte-card>
```

```typescript
onButtonClick(event: Event): void {
  event.stopPropagation();
  // handle button action without triggering cardClicked
}
```

Lorsque la card est cliquable, arrêtez la propagation de l'événement sur les éléments interactifs imbriqués pour éviter de déclencher `cardClicked`.

## Limitations

### L'état désactivé bloque tous les événements pointeur

Lorsque `disabled` vaut `true`, la card applique `pointer-events: none`. Les éléments interactifs imbriqués tels que les boutons ou les liens ne peuvent pas recevoir de clics tant que la card est désactivée.

### Cards cliquables et éléments interactifs imbriqués

Lorsque `clickable` vaut `true`, les clics sur les éléments interactifs imbriqués remontent à la card et déclenchent `cardClicked`. Appelez `stopPropagation()` sur les gestionnaires imbriqués lorsque le contrôle interne ne doit pas activer la card.
