### Chip à sélection unique

Utilisez `type="single"` pour permettre la sélection d'une seule option à la fois. Le composant utilise le rôle ARIA `radio`.

```html
<rte-chip
  id="all"
  label="All"
  type="single"
  appearance="brand"
  [selected]="selectedChip === 'all'"
  (clickChip)="onChipClick('all')"
></rte-chip>
<rte-chip
  id="option-1"
  label="Option 1"
  type="single"
  appearance="brand"
  [selected]="selectedChip === 'option-1'"
  (clickChip)="onChipClick('option-1')"
></rte-chip>
<rte-chip
  id="option-2"
  label="Option 2"
  type="single"
  appearance="brand"
  [selected]="selectedChip === 'option-2'"
  (clickChip)="onChipClick('option-2')"
></rte-chip>
```

### Chip à sélection multiple

Utilisez `type="multi"` pour permettre la sélection indépendante de plusieurs options. Le composant utilise le rôle ARIA `checkbox` et affiche une icône différente selon l'état sélectionné.

```html
<rte-chip
  id="option-1"
  label="Option 1"
  type="multi"
  appearance="brand"
  [selected]="selectedChips.has('option-1')"
  (clickChip)="onChipClick('option-1')"
></rte-chip>
<rte-chip
  id="option-2"
  label="Option 2"
  type="multi"
  appearance="brand"
  [selected]="selectedChips.has('option-2')"
  (clickChip)="onChipClick('option-2')"
></rte-chip>
<rte-chip
  id="option-3"
  label="Option 3"
  type="multi"
  appearance="brand"
  [selected]="selectedChips.has('option-3')"
  (clickChip)="onChipClick('option-3')"
></rte-chip>
```

### Chip Input

Utilisez `type="input"` pour afficher un bouton de suppression. Le composant utilise le rôle ARIA `option` et émet `close` lors de la suppression.

```html
<rte-chip id="chip-Chip 1" label="Chip 1" type="input" (close)="onClose($event)"></rte-chip>
<rte-chip id="chip-Chip 2" label="Chip 2" type="input" appearance="neutral" (close)="onClose($event)"></rte-chip>
```

La story affiche initialement `Chip 1` et `Chip 2`. De nouvelles valeurs sont ajoutées avec la touche Entrée depuis un champ de saisie, puis supprimées avec le bouton, la touche Entrée ou la barre d'espace.

### État désactivé

```html
<rte-chip id="chip-disabled" label="Label" [disabled]="true"></rte-chip>
```

L'activation par clic et au clavier est ignorée lorsque `disabled` vaut `true`.
