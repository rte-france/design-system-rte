Le fonctionnement du composant repose sur la composition et les valeurs de son champ `items`.

## Arborescence simple

```ts
items = [
  { id: "home", labelText: "Accueil", icon: "home", hasIcon: true },
  { id: "settings", labelText: "Paramètres", icon: "settings", hasIcon: true },
];
```

```html
<rte-treeview [items]="items" />
```

## Éléments imbriqués

Utiliser `items` récursivement pour représenter les enfants. `isOpen` définit l'état ouvert initial d'un élément qui possède des enfants.

```ts
items = [
  {
    id: "root",
    labelText: "Root",
    hasIcon: true,
    icon: "folder",
    isOpen: true,
    items: [
      {
        id: "first",
        labelText: "First (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [
          { id: "first-1", labelText: "First-1 (branch)", hasIcon: true, icon: "folder", isOpen: true },
          {
            id: "first-2",
            labelText: "First-2 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
            isOpen: true,
            items: [{ id: "first-2-a", labelText: "First-2-a (level 4)", hasIcon: true, icon: "folder" }],
          },
        ],
      },
      {
        id: "middle",
        labelText: "Middle (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [{ id: "middle-1", labelText: "Middle-1 (corner/L-shape)", hasIcon: true, icon: "folder" }],
      },
      { id: "last", labelText: "Last (corner/L-shape)", hasIcon: true, icon: "folder" },
    ],
  },
];
```

```html
<rte-treeview [items]="items" />
```

## Variante compacte

Définir `isCompact` sur Treeview pour appliquer la densité compacte à tous les éléments.

```ts
items = [
  { id: "home", labelText: "Home", icon: "home", hasIcon: true },
  {
    id: "documents",
    labelText: "Documents",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      {
        id: "work",
        labelText: "Work",
        icon: "folder",
        hasIcon: true,
        items: [
          { id: "project-a", labelText: "Project A" },
          { id: "project-b", labelText: "Project B" },
        ],
      },
      { id: "personal", labelText: "Personal", icon: "folder", hasIcon: true },
    ],
  },
];
```

```html
<rte-treeview [items]="items" [hasCheckbox]="true" [isCompact]="true" />
```

## Sélection initiale

Utiliser `selectedId` pour sélectionner un élément par identifiant, ou `selectedPath` pour le sélectionner par chemin d'index, par exemple `0-1-0`.

```ts
items = [
  {
    id: "root",
    labelText: "Root",
    hasIcon: true,
    icon: "folder",
    isOpen: true,
    items: [
      {
        id: "first",
        labelText: "First (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [
          { id: "first-1", labelText: "First-1 (branch)", hasIcon: true, icon: "folder", isOpen: true },
          {
            id: "first-2",
            labelText: "First-2 (corner/L-shape)",
            hasIcon: true,
            icon: "folder",
            isOpen: true,
            items: [{ id: "first-2-a", labelText: "First-2-a (level 4)", hasIcon: true, icon: "folder" }],
          },
        ],
      },
      {
        id: "middle",
        labelText: "Middle (branch/T-shape)",
        hasIcon: true,
        icon: "folder",
        isOpen: true,
        items: [{ id: "middle-1", labelText: "Middle-1 (corner/L-shape)", hasIcon: true, icon: "folder" }],
      },
      { id: "last", labelText: "Last (corner/L-shape)", hasIcon: true, icon: "folder" },
    ],
  },
];
selectedId = "documents";
```

```html
<rte-treeview
  [items]="items"
  [selectedId]="selectedId"
  (itemClick)="onItemClick($event)"
  (selectionChange)="onSelectionChange($event)"
/>
```

## Cases à cocher

`hasCheckbox` active les cases pour l'arborescence. Une case peut aussi être activée au niveau d'un élément avec `item.hasCheckbox`. La coche d'un parent se propage à ses descendants et l'état indéterminé est calculé pour les parents partiellement cochés.

```ts
items = [
  {
    id: "nesting-1",
    labelText: "Nesting 1 (check toggles all descendants)",
    isOpen: true,
    items: [
      {
        id: "nesting-2a",
        labelText: "Nesting 2a",
        isOpen: true,
        items: [
          { id: "nesting-3a", labelText: "Nesting 3a" },
          { id: "nesting-3b", labelText: "Nesting 3b" },
        ],
      },
      {
        id: "nesting-2b",
        labelText: "Nesting 2b",
        isOpen: true,
        items: [{ id: "nesting-3c", labelText: "Nesting 3c" }],
      },
    ],
  },
];
```

```html
<rte-treeview [items]="items" [hasCheckbox]="true" (checkedIdsChange)="onCheckedIdsChange($event)" />
```

## Icônes, badge et actions

`hasIcon` doit être associé à `icon`. `hasBadge` affiche l'indicateur visuel intégré. Pour une action directe, fournir `actionIcon`. Pour un menu, fournir également `actionMenuItems`.

```ts
items = [
  {
    id: "settings",
    labelText: "Label",
    icon: "settings",
    hasIcon: true,
    hasBadge: true,
    actionIcon: "more-horiz",
    actionMenuItems: [
      { label: "Edit", leftIcon: "edit", hasSeparator: true },
      { label: "Duplicate", leftIcon: "copy" },
      { label: "Delete", leftIcon: "delete", hasSeparator: true },
      { label: "Rename", leftIcon: "edit" },
    ],
  },
];
```

```html
<rte-treeview
  [items]="items"
  (actionIconClick)="onActionIconClick($event)"
  (actionMenuClick)="onActionMenuClick($event)"
/>
```

## Éléments désactivés

Définir `disabled` sur un élément pour empêcher sa sélection, son ouverture, sa coche et ses actions.

```ts
items = [
  {
    id: "dem0265433-reflecto",
    labelText: "DEM0265433-Reflecto_P.ORG-RC",
    icon: "folder",
    hasIcon: true,
    isOpen: true,
    items: [
      {
        id: "phase0-so-sur-t",
        labelText: "Phase0-SO-SUR-T",
        disabled: true,
        isOpen: false,
        items: [{ id: "phase0-indice-1", labelText: "Indice 1", disabled: true }],
      },
      {
        id: "phase1-so-sur-t",
        labelText: "Phase1-SO-SUR-T",
        disabled: true,
        isOpen: true,
        items: [
          {
            id: "phase1-indice-1",
            labelText: "Indice 1",
            disabled: true,
            isOpen: true,
            items: [{ id: "phase1-indice-1-child", labelText: "Indice 1", disabled: true }],
          },
        ],
      },
      {
        id: "phase2-inuit-1",
        labelText: "Phase2-SO-INUIT",
        isOpen: true,
        items: [
          { id: "phase2-inuit-1-indice-1-disabled", labelText: "Indice 1", disabled: true },
          { id: "phase2-inuit-1-indice-2-disabled", labelText: "Indice 2", disabled: true },
          {
            id: "phase2-inuit-1-indice-1-active",
            labelText: "Indice 1",
            isOpen: true,
            items: [{ id: "phase2-inuit-1-rejouer-nested", labelText: "Rejouer", icon: "play-circle", hasIcon: true }],
          },
          { id: "phase2-inuit-1-indice-3", labelText: "Indice 3" },
          { id: "phase2-inuit-1-rejouer", labelText: "Rejouer", icon: "play-circle", hasIcon: true },
        ],
      },
      {
        id: "phase2-inuit-2",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-2-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "phase2-inuit-3",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-3-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "phase2-inuit-4",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-4-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "nouvelle-ait",
        labelText: "Nouvelle AIT",
        icon: "add-circle",
        hasIcon: true,
        actionIcon: "add-circle",
      },
    ],
  },
];
selectedId = "phase2-inuit-1-indice-1-active";
```

```html
<rte-treeview [items]="items" [selectedId]="selectedId" [hasCheckbox]="true" />
```
