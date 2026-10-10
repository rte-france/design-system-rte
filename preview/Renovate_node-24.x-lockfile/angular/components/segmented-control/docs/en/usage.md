Use `<rte-segmented-control>` to let users pick one option from a small set of mutually exclusive choices. Manage the selected value in your component state and update `selectedSegment` when `change` fires.

```typescript
options = [
  { labelText: "Option 1", id: "option1" },
  { labelText: "Option 2", id: "option2" },
  { labelText: "Option 3", id: "option3" },
];
selectedSegment = "option1";
```

```html
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  [appearance]="appearance"
  [isCompact]="isCompact"
  (change)="selectedSegment = $event"
/>
```

Provide `ariaLabel` when the control has no visible label in the surrounding layout.

#### Appearance

```html
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  [appearance]="appearance"
  (change)="selectedSegment = $event"
/>
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  appearance="neutral"
  (change)="selectedSegment = $event"
/>
```

Switch between brand and neutral styling with `appearance`.

(`"brand" | "neutral"`)

#### Compact Spacing

```html
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  [isCompact]="true"
  (change)="selectedSegment = $event"
/>
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  appearance="neutral"
  [isCompact]="true"
  (change)="selectedSegment = $event"
/>
```

Use `isCompact` for a denser layout in toolbars or tight containers.

#### Two Options

```html
<rte-segmented-control
  [options]="[
    { labelText: 'Option 1', id: 'option1' },
    { labelText: 'Option 2', id: 'option2' }
  ]"
  [selectedSegment]="selectedSegment"
  (change)="selectedSegment = $event"
/>
```

The control supports exactly two or three segments.

#### Different Label Text Lengths

```html
<rte-segmented-control
  [options]="[
    { labelText: 'Jour', id: 'day' },
    { labelText: 'Semaine en cours', id: 'current-week' },
    { labelText: 'Historique des consommations', id: 'consumption-history' }
  ]"
  [selectedSegment]="selectedSegment"
  (change)="selectedSegment = $event"
/>
```

Segments adapt their width to the labels when the control has enough space. Labels that are too long are truncated.

#### Icons

```html
<rte-segmented-control
  [options]="[
    { id: 'agenda', icon: 'view-agenda', labelText: 'Vue agenda' },
    { id: 'column', icon: 'view-column', labelText: 'Vue colonne' },
    { id: 'grid', icon: 'view-grid', labelText: 'Vue grille' }
  ]"
  [selectedSegment]="selectedSegment"
  (change)="selectedSegment = $event"
/>
```

When every option defines an `icon`, the control renders icons instead of text labels. Labels remain available to screen readers through `aria-label`.

#### With Badge

```html
<rte-segmented-control
  [options]="[
    { labelText: 'Option 1', id: 'option1' },
    {
      labelText: 'Option 2',
      id: 'option2',
      showBadge: true,
      badgeContent: 'number',
      badgeCount: 5,
      badgeType: 'indicator',
      badgeSize: 'm'
    }
  ]"
  [selectedSegment]="selectedSegment"
  (change)="selectedSegment = $event"
/>
```

Attach a badge to individual segments through the badge fields on each option.
