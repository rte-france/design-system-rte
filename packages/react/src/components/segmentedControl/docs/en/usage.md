Use `SegmentedControl` to let users pick one option from a small set of mutually exclusive choices. Manage the selected value in component state and pass it back through `selectedSegment` when `onChange` fires.

```tsx
import SegmentedControl from "@design-system-rte/react/components/segmentedControl/SegmentedControl";
import { useState } from "react";

const options = [
  { label: "Option 1", id: "option1" },
  { label: "Option 2", id: "option2" },
  { label: "Option 3", id: "option3" },
];

const [selectedSegment, setSelectedSegment] = useState("option1");

<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="brand"
  compactSpacing={false}
/>
```

You can pass native HTML attributes (for example `aria-label`) to the root radiogroup element through standard DOM props.

#### Appearance

```tsx
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="neutral"
/>
```

Switch between brand and neutral styling with `appearance`.

(`"brand" | "neutral"`)

#### Compact Spacing

```tsx
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  compactSpacing
/>
<SegmentedControl
  options={options}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
  appearance="neutral"
  compactSpacing
/>
```

Use `compactSpacing` for a denser layout in toolbars or tight containers.

#### Two Options

```tsx
<SegmentedControl
  options={[
    { label: "Option 1", id: "option1" },
    { label: "Option 2", id: "option2" },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

The control supports exactly two or three segments.

#### Icons

```tsx
<SegmentedControl
  options={[
    { id: "agenda", icon: "view-agenda", label: "Vue agenda" },
    { id: "column", icon: "view-column", label: "Vue colonne" },
    { id: "grid", icon: "view-grid", label: "Vue grille" },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

When every option defines an `icon`, the control renders icons instead of text labels. Labels remain available to screen readers through `aria-label`.

#### With Badge

```tsx
<SegmentedControl
  options={[
    { label: "Option 1", id: "option1" },
    {
      label: "Option 2",
      id: "option2",
      showBadge: true,
      badgeContent: "number",
      badgeCount: 5,
      badgeType: "indicator",
    },
  ]}
  selectedSegment={selectedSegment}
  onChange={setSelectedSegment}
/>
```

Attach a badge to individual segments through the badge fields on each option.
