# Accordion

## Overview

```tsx
<Accordion title="Accordion title" icon="power-wind">
  <p>Panel content</p>
</Accordion>
```

## API

Le composant `Accordion` constitue l'API publique. Passez la configuration via les props et placez le contenu du panneau dans `children`.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| title | string | — (requis) | Texte affiché dans la ligne de résumé. |
| children | `React.ReactNode` | — | Contenu révélé lorsque l'accordéon est ouvert. |
| id | string | auto-généré | Id de base utilisé pour le câblage `aria-controls` et `aria-labelledby`. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Variante visuelle de la ligne de résumé. |
| alignement | `"left" \| "right"` | `"right"` | Côté sur lequel l'icône chevron est affichée. |
| size | `"small" \| "large"` | `"small"` | Typographie du titre et hauteur de la ligne de résumé. |
| icon | string | — | Nom d'icône optionnel affiché avant le titre. |
| compactSpacing | boolean | `false` | Réduit le padding et la hauteur de la ligne de résumé. |
| disabled | boolean | `false` | Empêche le basculement et applique le style désactivé. |
| isOpen | boolean | — | Contrôle l'état ouvert. Lorsqu'il est omis, l'accordéon gère son propre état. |
| onClick | `(event: React.MouseEvent<HTMLButtonElement>) => void` | — | Appelé lorsque le bouton de résumé est cliqué (après le basculement interne). |
| className | string | — | Classe CSS additionnelle sur le bouton de résumé. |

Le résumé est un élément `<button>`. Les attributs HTML standard du bouton (sauf `title`) peuvent être passés et sont appliqués sur le bouton de résumé.

## Usage

Importez `Accordion` et placez le contenu du panneau en tant qu'enfants. Chaque instance gère sa propre interaction d'expansion/réduction. Empilez plusieurs accordéons pour constituer une liste de sections.

```tsx
import { Accordion } from "@design-system-rte/react";

function Example() {
  return (
    <>
      <Accordion title="Accordion title" icon="power-wind">
        <p>First panel content</p>
      </Accordion>
      <Accordion title="Accordion title" icon="power-wind">
        <p>Second panel content</p>
      </Accordion>
    </>
  );
}
```

Passez `isOpen` et gérez `onClick` dans le composant parent lorsque vous devez contrôler quelle section est ouverte (par exemple un groupe d'accordéons exclusif).

#### Compact

```tsx
<Accordion title="Accordion title" icon="power-wind" compactSpacing>
  <p>Content</p>
</Accordion>
```

Réduisez le padding et la hauteur de la ligne de résumé avec `compactSpacing`.

#### Disabled

```tsx
<Accordion title="Accordion title" icon="power-wind" disabled>
  <p>Content</p>
</Accordion>
```

Empêchez le basculement et appliquez le style désactivé avec `disabled`.

#### Exclusive

```tsx
import { useState } from "react";
import { Accordion } from "@design-system-rte/react";

function ExclusiveAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Accordion
        title="Accordion title"
        icon="power-wind"
        isOpen={openIndex === 0}
        onClick={() => setOpenIndex((prev) => (prev === 0 ? null : 0))}
      >
        <p>First panel</p>
      </Accordion>
      <Accordion
        title="Accordion title"
        icon="power-wind"
        isOpen={openIndex === 1}
        onClick={() => setOpenIndex((prev) => (prev === 1 ? null : 1))}
      >
        <p>Second panel</p>
      </Accordion>
    </>
  );
}
```

Coordonnez l'état ouvert dans le composant parent pour qu'une seule section soit ouverte à la fois.
