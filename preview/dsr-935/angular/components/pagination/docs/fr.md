# Pagination

## Overview

```typescript
import { Component } from "@angular/core";
import { PaginationComponent } from "@design-system-rte/angular";

@Component({
  imports: [PaginationComponent],
  template: `
    <rte-pagination
      [activePage]="activePage"
      [totalPages]="10"
      (pageChange)="onPageChange($event)"
    />
  `,
})
export class MyPageComponent {
  activePage = 1;

  onPageChange(page: number): void {
    this.activePage = page;
  }
}
```

## API

Le composant `<rte-pagination>` constitue l'API publique. Importez `PaginationComponent` dans le tableau `imports` du composant consommateur et liez les inputs sur l'élément.


| Nom          | Type                  | Valeur par défaut | Description                                                                                                       |
| ------------ | --------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| activePage   | number                | `1`               | Page active courante (base 1). Mettez à jour cet input lors du traitement de `pageChange` pour un usage contrôlé. |
| totalPages   | number                | — (requis)        | Nombre total de pages disponibles.                                                                                |
| appearance   | `"brand" | "neutral"` | `"neutral"`       | Variante visuelle appliquée aux numéros de page et aux contrôles de navigation.                                   |
| hasGoToFirst | boolean               | `true`            | Affiche ou masque le contrôle « première page ».                                                                  |
| hasGoToPrev  | boolean               | `true`            | Affiche ou masque le contrôle « page précédente ».                                                                |
| hasGoToNext  | boolean               | `true`            | Affiche ou masque le contrôle « page suivante ».                                                                  |
| hasGoToLast  | boolean               | `true`            | Affiche ou masque le contrôle « dernière page ».                                                                  |
| ariaLabel    | string                | `"Pagination"`    | Nom accessible du repère de navigation.                                                                           |



| Output     | Type   | Description                                                                                     |
| ---------- | ------ | ----------------------------------------------------------------------------------------------- |
| pageChange | number | Émis lorsque l'utilisateur sélectionne une page différente ou active un contrôle de navigation. |




## Usage

Importez `PaginationComponent` et liez `activePage`, `totalPages` et `(pageChange)`. Le composant ne met pas à jour `activePage` de lui-même — mettez à jour la valeur liée dans votre gestionnaire lorsque l'utilisateur navigue.

```typescript
activePage = 1;
totalPages = 10;

onPageChange(page: number): void {
  this.activePage = page;
}
```

```html
<rte-pagination
  [activePage]="activePage"
  [totalPages]="totalPages"
  (pageChange)="onPageChange($event)"
/>
```



#### Brand

```html
<rte-pagination
  [activePage]="activePage"
  [totalPages]="totalPages"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

Utilisez `appearance="brand"` pour des numéros de page et des contrôles de navigation aux couleurs de la marque.

(`"brand" | "neutral"`)

#### Mid Position

```html
<rte-pagination
  [activePage]="5"
  [totalPages]="10"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

Lorsque la page active est au milieu, la liste affiche la première page, une ellipse, une fenêtre autour de la page active, une autre ellipse et la dernière page.

#### Without Ellipsis

```html
<rte-pagination
  [activePage]="4"
  [totalPages]="7"
  appearance="brand"
  (pageChange)="onPageChange($event)"
/>
```

Lorsque `totalPages` est inférieur ou égal à sept, tous les numéros de page sont affichés sans ellipse.

#### Hidden End Controls

```html
<rte-pagination
  [activePage]="3"
  [totalPages]="10"
  [hasGoToFirst]="false"
  [hasGoToPrev]="false"
  [hasGoToNext]="false"
  [hasGoToLast]="false"
  (pageChange)="onPageChange($event)"
/>
```

Masquez les contrôles première, précédente, suivante et dernière page lorsque seule la sélection directe de page est nécessaire.

## Limitations



### Page active contrôlée

Le composant ne gère pas `activePage` en interne. Lorsque `pageChange` est émis, mettez à jour l'input `activePage` lié dans le composant parent ; sinon, la page affichée ne change pas.

### Zéro page au total

Lorsque `totalPages` vaut `0`, aucun bouton de page n'est rendu. Assurez-vous que `totalPages` reflète le nombre réel de pages avant d'afficher le composant.