Use `rte-tab` to render a tab list. You manage the selected tab and the associated panel content in your application.

Do not use the internal `rte-tab-item` selector in app templates. Tab items are created automatically from the `options` array.

Bind `selectedTabId` to your component state and update it in the `(change)` handler. Render tab panels separately and show the panel whose `id` matches the selected tab's `panelId`.

```typescript
@Component({
  template: `
    <rte-tab
      [options]="tabs"
      [selectedTabId]="selectedTabId"
      (change)="selectedTabId = $event"
    />

    @for (tab of tabs; track tab.id) {
      <div
        [id]="tab.panelId"
        role="tabpanel"
        [attr.aria-labelledby]="tab.id"
        [hidden]="selectedTabId !== tab.id"
      >
        Content for {{ tab.label }}
      </div>
    }
  `,
})
export class MyComponent {
  selectedTabId = 'tab-1';

  tabs = [
    { id: 'tab-1', label: 'First Tab', panelId: 'panel-1' },
    { id: 'tab-2', label: 'Second Tab', panelId: 'panel-2' },
    { id: 'tab-3', label: 'Third Tab', panelId: 'panel-3' },
  ];
}
```

### Examples

#### Vertical

```html
<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  direction="vertical"
/>
```

Renders a vertical tab list alongside panel content.

(`"horizontal" | "vertical"`)

#### With icons

```html
<rte-tab
  [options]="[
    { id: 'photos', label: 'Photos', panelId: 'panel-1', icon: 'photo-camera' },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Adds an icon before each tab label.

#### Icons only

```html
<rte-tab
  [options]="[
    { id: 'home', panelId: 'panel-1', icon: 'home' },
    { id: 'bookmarks', panelId: 'panel-2', icon: 'bookmarks' },
    { id: 'chat', panelId: 'panel-3', icon: 'chat' },
    { id: 'settings', panelId: 'panel-4', icon: 'settings' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Renders icon-only tabs without labels.

#### With badge

```html
<rte-tab
  [options]="[
    {
      id: 'photos',
      label: 'Photos',
      panelId: 'panel-1',
      icon: 'photo-camera',
      badgeCount: 5,
      badgeContent: 'number',
      badgeType: 'indicator',
      showBadge: true
    },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Displays a badge on a tab item.

#### Overflow type

```html
<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  overflowType="scrollable"
/>

<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  overflowType="dropdown"
/>
```

Controls how tabs behave when they exceed the container width.

(`"scrollable" | "dropdown"`)
