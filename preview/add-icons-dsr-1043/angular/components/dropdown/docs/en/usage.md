Import `DropdownModule`, compose a host element with `[rteDropdown]`, attach `[rteDropdownTrigger]` to the opener, and pass items to `<rte-dropdown-menu>`. Handle item selection via `(menuEvent)`.

```typescript
import { Component } from "@angular/core";
import { DropdownItemConfig, DropdownModule } from "@design-system-rte/angular";

@Component({
  imports: [DropdownModule],
  template: `
    <div rteDropdown (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu</button>
      <rte-dropdown-menu [items]="items" />
    </div>
  `,
})
export class ExampleComponent {
  items: DropdownItemConfig[] = [
    { label: "Messages", leftIcon: "mail", hasSeparator: true },
    { label: "Actions", leftIcon: "settings" },
    {
      label: "More information",
      leftIcon: "info",
      hasSeparator: true,
      children: [
        { label: "First option" },
        { label: "Second option" },
        { label: "Third option", hasSeparator: true },
      ],
    },
    { label: "Username", leftIcon: "user-circle", disabled: true },
  ];

  onItemClick(event: { event: Event; id: string; item?: DropdownItemConfig }) {
    console.log("Item clicked:", event);
  }
}
```

Do not use `<rte-dropdown-item>` in application templates. Items are rendered from the `items` configuration array.

### Examples

#### With badge

```typescript
items: DropdownItemConfig[] = [
  { label: "Messages", leftIcon: "mail" },
  {
    label: "Notifications",
    leftIcon: "notification",
    showBadge: true,
    badgeCount: 4,
    badgeContent: "number",
    badgeType: "indicator",
    badgeSize: "m",
  },
];
```

```html
<div rteDropdown (menuEvent)="onItemClick($event)">
  <button rteDropdownTrigger>Menu</button>
  <rte-dropdown-menu [items]="items" />
</div>
```

Display a badge on a menu item using the badge properties on `DropdownItemConfig`.

(`"number" | "icon" | "empty"`), (`"brand" | "neutral" | "indicator"`), (`"xs" | "s" | "m" | "l"`)
