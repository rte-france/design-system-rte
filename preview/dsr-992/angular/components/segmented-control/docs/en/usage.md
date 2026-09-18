Use `<rte-segmented-control>` to let users pick one option from a small set of mutually exclusive choices. Manage the selected value in your component state and update `selectedSegment` when `change` fires.

```typescript
options = [
  { label: "Option 1", id: "option1" },
  { label: "Option 2", id: "option2" },
  { label: "Option 3", id: "option3" },
];
selectedSegment = "option1";
```

```html
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  [appearance]="appearance"
  [compactSpacing]="compactSpacing"
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
  [compactSpacing]="true"
  (change)="selectedSegment = $event"
/>
<rte-segmented-control
  [options]="options"
  [selectedSegment]="selectedSegment"
  appearance="neutral"
  [compactSpacing]="true"
  (change)="selectedSegment = $event"
/>
```

Use `compactSpacing` for a denser layout in toolbars or tight containers.

#### Two Options

```html
<rte-segmented-control
  [options]="[
    { label: 'Option 1', id: 'option1' },
    { label: 'Option 2', id: 'option2' }
  ]"
  [selectedSegment]="selectedSegment"
  (change)="selectedSegment = $event"
/>
```

The control supports exactly two or three segments.

#### Icons

```html
<rte-segmented-control
  [options]="[
    { id: 'agenda', icon: 'view-agenda', label: 'Vue agenda' },
    { id: 'column', icon: 'view-column', label: 'Vue colonne' },
    { id: 'grid', icon: 'view-grid', label: 'Vue grille' }
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
    { label: 'Option 1', id: 'option1' },
    {
      label: 'Option 2',
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
