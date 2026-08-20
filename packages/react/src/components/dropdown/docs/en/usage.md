Import `Dropdown` and `DropdownItem`, manage open state in the parent, and pass a trigger element. The dropdown panel is portaled into the overlay layer.

```tsx
import { useState } from "react";
import { Dropdown, DropdownItem } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      dropdownId="example-dropdown"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <button onClick={() => setIsOpen(true)}>Menu</button>
      }
    >
      <DropdownItem label="Messages" leftIcon="mail" hasSeparator onClick={() => console.log("click")} />
      <DropdownItem label="Actions" leftIcon="settings">
        <DropdownItem label="Edit" leftIcon="edit">
          <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
          <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘C" />
        </DropdownItem>
        <DropdownItem label="Delete" leftIcon="delete" />
      </DropdownItem>
      <DropdownItem label="Help" leftIcon="help" />
      <DropdownItem label="Username" leftIcon="user-circle" disabled />
    </Dropdown>
  );
}
```

Nested submenus are declared by nesting `DropdownItem` children. Leaf items with an `onClick` handler close the root menu when `autoClose` is `true` (default).

### Examples

#### With badge

```tsx
<Dropdown
  dropdownId="dropdown-with-badge"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trigger={<button onClick={() => setIsOpen(true)}>Menu</button>}
>
  <DropdownItem
    label="Messages"
    leftIcon="mail"
    showBadge
    badgeCount={5}
    badgeContent="number"
    badgeType="indicator"
  />
  <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
</Dropdown>
```

Display a badge on a menu item using the badge props (`showBadge`, `badgeCount`, `badgeContent`, `badgeType`, `badgeIcon`, `badgeSize`).

(`"number" | "icon" | "empty"`), (`"brand" | "neutral" | "indicator"`), (`"xs" | "s" | "m" | "l"`)

#### With custom body

```tsx
<Dropdown
  dropdownId="dropdown-custom-body"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  isList={false}
  trigger={<button onClick={() => setIsOpen(true)}>Custom body</button>}
>
  <div style={{ padding: "16px" }}>
    Custom body content — any React node can go here.
  </div>
</Dropdown>
```

Set `isList={false}` to skip the default list wrapper and render arbitrary content in the panel body.
