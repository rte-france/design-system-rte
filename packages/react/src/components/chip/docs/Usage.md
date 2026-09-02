### Chip à sélection unique

Utilisez `type="single"` pour permettre la sélection d'une seule option à la fois. Le composant utilise le rôle ARIA `radio`.

```tsx
<>
  <Chip id="all" label="All" type="single" selected={selectedChip === "all"} onClick={handleClick} />
  <Chip
    id="option-1"
    label="Option 1"
    type="single"
    selected={selectedChip === "option-1"}
    onClick={handleClick}
    appearance="brand"
  />
  <Chip
    id="option-2"
    label="Option 2"
    type="single"
    selected={selectedChip === "option-2"}
    onClick={handleClick}
    appearance="brand"
  />
</>
```

### Chip à sélection multiple

Utilisez `type="multi"` pour permettre la sélection indépendante de plusieurs options. Le composant utilise le rôle ARIA `checkbox` et affiche une icône différente selon l'état sélectionné.

```tsx
<Chip id="option-1" label="Option 1" type="multi" selected={selectedChips.includes("option-1")} onClick={handleClick} appearance="brand"/>
<Chip id="option-2" label="Option 2" type="multi" selected={selectedChips.include("option-2")} onClick={handleClick} appearance="brand"/>
<Chip id="option-3" label="Option 3" type="multi" selected={selectedChips.includes("option-3")} onClick={handleClick} appearance="brand"/>
```

### Chip Input

Utilisez `type="input"` pour afficher un bouton de suppression. Le composant utilise le rôle ARIA `option` et appelle `onClose` lors de la suppression.

```tsx
<Chip id="chip-0-New Chip" label="New Chip" type="input" onClose={handleRemoveChip} />
<Chip id="chip-1-Another Chip" label="Another Chip" type="input" appearance="neutral" onClose={handleRemoveChip} />
```

### État désactivé

```tsx
<Chip id="chip-disabled" label="Label" disabled />
```

L'activation par clic et au clavier est ignorée lorsque `disabled` vaut `true`.
