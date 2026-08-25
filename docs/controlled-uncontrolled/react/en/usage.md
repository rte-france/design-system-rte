In React, a component is **controlled** when its displayed state comes from props owned by the parent. The parent passes a `value` (or equivalent prop) and updates it in an `onChange` callback. It is **uncontrolled** when the component keeps its own internal state; the parent may set an initial value with `defaultValue` (or `defaultCollapsed`, etc.) and listen to changes without owning the current value.

## How the design system decides the mode

Most form-like components detect the mode from the presence of a `value` prop:

- **`value` is provided** → controlled. The parent must update `value` when `onChange` fires, or the UI will not reflect user input.
- **`value` is omitted** → uncontrolled. The component manages its own state. Use `defaultValue` to set the initial selection.

`Select` implements this explicitly:

```tsx
const isControlled = value !== undefined;
```

The same rule applies to `DatePicker`, `TimePicker`, and similar inputs.

Other components use named props instead of `value`:

| Component | Controlled prop | Uncontrolled prop | Change callback |
|-----------|-----------------|-------------------|-----------------|
| `Select` | `value` | `defaultValue` | `onChange` |
| `SideNav` | `isCollapsed` | `defaultCollapsed` | `onCollapsedChange` |
| `Tab` | `selectedTabId` | — | `onChange` (required) |
| `Toast` | `isOpen` | — | `onClose` |

`Tab` and `Toast` are always controlled: they require the parent to own visibility or selection state.

## Controlled usage

Store the value in React state (or another source of truth) and pass it back on every render:

```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function ControlledSelect() {
  const [value, setValue] = useState("option-1");

  return (
    <Select
      id="controlled-select"
      label="Country"
      options={[
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
```

Use controlled mode when you need to:

- Reset or pre-fill the field from application state
- Validate or transform input before it is displayed again
- Synchronize several UI elements from the same state

## Uncontrolled usage

Omit `value` and optionally pass `defaultValue`. The component updates itself; use `onChange` only if you need to react to changes:

```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function UncontrolledSelect() {
  const [lastValue, setLastValue] = useState<string | null>(null);

  return (
    <>
      <Select
        id="uncontrolled-select"
        label="Country"
        defaultValue="option-3"
        options={[
          { value: "option-1", label: "Option 1" },
          { value: "option-2", label: "Option 2" },
          { value: "option-3", label: "Option 3" },
        ]}
        onChange={setLastValue}
      />
      <span>Last emitted value: {lastValue ?? "None yet"}</span>
    </>
  );
}
```

## SideNav collapse state

`SideNav` supports both modes for the collapsed state:

```tsx
// Controlled — parent owns isCollapsed
const [collapsed, setCollapsed] = useState(false);

<SideNav
  collapsible
  isCollapsed={collapsed}
  onCollapsedChange={setCollapsed}
  items={items}
/>;

// Uncontrolled — SideNav manages collapse internally
<SideNav
  collapsible
  defaultCollapsed={false}
  onCollapsedChange={(next) => console.log("collapsed:", next)}
  items={items}
/>;
```

When `isCollapsed` is passed, the parent must update it in `onCollapsedChange` for the toggle to take effect. When it is omitted, `SideNav` updates its internal state and still notifies the parent via `onCollapsedChange`.

## Native input passthrough

`TextInput` forwards standard HTML input props. React's native rules apply:

- Controlled: pass `value` + `onChange`
- Uncontrolled: pass `defaultValue` and omit `value`

Do not pass both `value` and `defaultValue` on the same input.
