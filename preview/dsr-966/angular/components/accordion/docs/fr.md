# Accordion

## Overview

```html
<rte-accordion title="Accordion title" icon="power-wind">
  <p>Panel content</p>
</rte-accordion>
```

## API

Le composant `<rte-accordion>` constitue l'API publique. Configurez-le avec les inputs et projetez le contenu du panneau entre les balises ouvrante et fermante.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| title | string | — (requis) | Texte affiché dans la ligne de résumé. |
| id | string | auto-généré | Id de base utilisé pour le câblage `aria-controls`. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Variante visuelle de la ligne de résumé. |
| alignement | `"left" \| "right"` | `"right"` | Côté sur lequel l'icône chevron est affichée. |
| size | `"small" \| "large"` | `"small"` | Typographie du titre et hauteur de la ligne de résumé. |
| icon | string | — | Nom d'icône optionnel affiché avant le titre. |
| compactSpacing | boolean | `false` | Réduit le padding et la hauteur de la ligne de résumé. |
| disabled | boolean | `false` | Empêche le basculement et applique le style désactivé. |
| isOpen | boolean | — | Contrôle l'état ouvert. Lorsqu'il est omis, l'accordéon gère son propre état. |

| Sortie | Charge utile | Description |
|--------|--------------|-------------|
| isOpenChange | boolean | Émis lors du basculement, avec le nouvel état ouvert. |
| clicked | `MouseEvent` | Émis lorsque le bouton de résumé est cliqué. |

Le contenu du panneau est projeté via `<ng-content>`.

## Usage

Importez `AccordionComponent` et placez le contenu du panneau entre les balises. Chaque instance gère sa propre interaction d'expansion/réduction. Empilez plusieurs accordéons pour constituer une liste de sections.

```typescript
import { Component } from "@angular/core";
import { AccordionComponent } from "@design-system-rte/angular";

@Component({
  imports: [AccordionComponent],
  template: `
    <rte-accordion title="Accordion title" icon="power-wind">
      <p>First panel content</p>
    </rte-accordion>
    <rte-accordion title="Accordion title" icon="power-wind">
      <p>Second panel content</p>
    </rte-accordion>
  `,
})
export class ExampleComponent {}
```

Liez `[isOpen]` et gérez `(isOpenChange)` dans le composant parent lorsque vous devez contrôler quelle section est ouverte (par exemple un groupe d'accordéons exclusif).

#### Compact

```html
<rte-accordion title="Accordion title" icon="power-wind" [compactSpacing]="true">
  <p>Content</p>
</rte-accordion>
```

Réduisez le padding et la hauteur de la ligne de résumé avec `compactSpacing`.

#### Disabled

```html
<rte-accordion title="Accordion title" icon="power-wind" [disabled]="true">
  <p>Content</p>
</rte-accordion>
```

Empêchez le basculement et appliquez le style désactivé avec `disabled`.

#### Exclusive

```typescript
import { Component, signal } from "@angular/core";
import { AccordionComponent } from "@design-system-rte/angular";

@Component({
  imports: [AccordionComponent],
  template: `
    <rte-accordion
      title="Accordion title"
      icon="power-wind"
      [isOpen]="openIndex() === 0"
      (isOpenChange)="onFirstOpenChange($event)"
    >
      <p>First panel</p>
    </rte-accordion>
    <rte-accordion
      title="Accordion title"
      icon="power-wind"
      [isOpen]="openIndex() === 1"
      (isOpenChange)="onSecondOpenChange($event)"
    >
      <p>Second panel</p>
    </rte-accordion>
  `,
})
export class ExclusiveAccordionComponent {
  protected readonly openIndex = signal<number | null>(null);

  protected onFirstOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 0 : null);
  }

  protected onSecondOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 1 : null);
  }
}
```

Coordonnez l'état ouvert dans le composant parent pour qu'une seule section soit ouverte à la fois.
