Le fonctionnement du composant repose sur la composition et les valeurs de son champ `items`.

## Arborescence simple

```tsx
const App = () => {
  const items = [
    { id: "home", labelText: "Accueil", icon: "home", hasIcon: true },
    { id: "settings", labelText: "Paramètres", icon: "settings", hasIcon: true },
  ];

  return <Treeview items={items} />;
};
```

## Éléments imbriqués

Utiliser `items` récursivement pour représenter les enfants. `isOpen` définit l'état ouvert initial d'un élément qui possède des enfants.

```tsx
const App = () => {
  const items = [
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

  return <Treeview items={items} />;
};
```

## Variante compacte

Définir `isCompact` sur Treeview pour appliquer la densité compacte à tous les éléments.

```tsx
const App = () => <Treeview items={items} isCompact />;
```

## Sélection initiale

Utiliser `selectedId` pour sélectionner un élément par identifiant, ou `selectedPath` pour le sélectionner par chemin d'index, par exemple `0-1-0`.

```tsx
const App = () => {
  const [selectedId, setSelectedId] = useState("documents");

  return <Treeview items={items} selectedId={selectedId} onChange={setSelectedId} />;
};
```

## Cases à cocher

`hasCheckbox` active les cases pour l'arborescence. Une case peut aussi être activée au niveau d'un élément avec `item.hasCheckbox`. La coche d'un parent se propage à ses descendants et l'état indéterminé est calculé pour les parents partiellement cochés.

```tsx
const App = () => {
  const [checkedIds, setCheckedIds] = useState([]);
  const items = [
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

  return <Treeview items={items} hasCheckbox checkedIds={checkedIds} onCheckedIdsChange={setCheckedIds} />;
};
```

## Badge et actions menu

```tsx
const App = () => {
  const items = [
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

  return <Treeview items={items} />;
};
```

## Éléments désactivés

Définir `disabled` sur un élément pour empêcher sa sélection, son ouverture, sa coche et ses actions.

```tsx
const App = () => {
  const items = {
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
  };

  return (
    <Treeview
      items={items}
      hasCheckbox
      onCheckedIdsChange={(checkedIds) => setCheckedIds(checkedIds)}
      selectedId="phase2-inuit-1-indice-1-active"
    />
  );
};
```
