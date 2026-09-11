# Pagination

## Overview

```tsx
import { useState } from "react";
import Pagination from "@design-system-rte/react/components/pagination/Pagination";

export function MyPage() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Pagination
      activePage={activePage}
      totalPages={10}
      onPageChange={(page) => setActivePage(page)}
    />
  );
}
```

## API

Le composant `Pagination` constitue l'API publique. Passez la page courante, le nombre total de pages et un gestionnaire de changement optionnel via les props du composant.


| Nom          | Type                     | Valeur par défaut | Description                                                                                         |
| ------------ | ------------------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| activePage   | number                   | — (requis)        | Page active courante (base 1). Le composant synchronise son état interne lorsque cette prop change. |
| totalPages   | number                   | — (requis)        | Nombre total de pages disponibles.                                                                  |
| appearance   | `"brand" | "neutral"`    | `"neutral"`       | Variante visuelle appliquée aux numéros de page et aux contrôles de navigation.                     |
| hasGoToFirst | boolean                  | `true`            | Affiche ou masque le contrôle « première page ».                                                    |
| hasGoToPrev  | boolean                  | `true`            | Affiche ou masque le contrôle « page précédente ».                                                  |
| hasGoToNext  | boolean                  | `true`            | Affiche ou masque le contrôle « page suivante ».                                                    |
| hasGoToLast  | boolean                  | `true`            | Affiche ou masque le contrôle « dernière page ».                                                    |
| onPageChange | `(page: number) => void` | —                 | Appelé lorsque l'utilisateur sélectionne une page différente ou active un contrôle de navigation.   |




## Usage

Importez `Pagination` et passez `activePage`, `totalPages` et `onPageChange`. Conservez `activePage` dans l'état du composant et mettez-le à jour dans le gestionnaire de changement pour que la page affichée reste synchronisée.

```tsx
import { useState } from "react";
import Pagination from "@design-system-rte/react/components/pagination/Pagination";

const [activePage, setActivePage] = useState(1);

<Pagination
  activePage={activePage}
  totalPages={10}
  onPageChange={(page) => setActivePage(page)}
/>;
```



#### Brand

```tsx
<Pagination
  activePage={activePage}
  totalPages={10}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

Utilisez `appearance="brand"` pour des numéros de page et des contrôles de navigation aux couleurs de la marque.

(`"brand" | "neutral"`)

#### Mid Position

```tsx
<Pagination
  activePage={5}
  totalPages={10}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

Lorsque la page active est au milieu, la liste affiche la première page, une ellipse, une fenêtre autour de la page active, une autre ellipse et la dernière page.

#### Without Ellipsis

```tsx
<Pagination
  activePage={4}
  totalPages={7}
  appearance="brand"
  onPageChange={(page) => setActivePage(page)}
/>
```

Lorsque `totalPages` est inférieur ou égal à sept, tous les numéros de page sont affichés sans ellipse.

#### Hidden End Controls

```tsx
<Pagination
  activePage={3}
  totalPages={10}
  hasGoToFirst={false}
  hasGoToPrev={false}
  hasGoToNext={false}
  hasGoToLast={false}
  onPageChange={(page) => setActivePage(page)}
/>
```

Masquez les contrôles première, précédente, suivante et dernière page lorsque seule la sélection directe de page est nécessaire.

## Limitations



### Page active contrôlée

Mettez à jour `activePage` dans votre gestionnaire `onPageChange`. Le composant maintient un état interne pour un retour visuel immédiat, mais la page affichée suit la prop `activePage` lorsqu'elle change.

### Zéro page au total

Lorsque `totalPages` vaut `0`, aucun bouton de page n'est rendu. Assurez-vous que `totalPages` reflète le nombre réel de pages avant d'afficher le composant.