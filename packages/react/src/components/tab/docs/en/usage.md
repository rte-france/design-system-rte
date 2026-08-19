Use `Tab` to render a tab list. You manage the selected tab and the associated panel content in your application.

`TabItem` is an internal component used by `Tab`. Do not render it directly in application code.

Track the selected tab in state and pass it to `selectedTabId`. Render tab panels separately and show the panel whose `id` matches the selected tab's `panelId`.

```tsx
const [selectedTabId, setSelectedTabId] = useState('tab-1');

const tabs = [
  { id: 'tab-1', label: 'First Tab', panelId: 'panel-1' },
  { id: 'tab-2', label: 'Second Tab', panelId: 'panel-2' },
  { id: 'tab-3', label: 'Third Tab', panelId: 'panel-3' },
];

return (
  <>
    <Tab options={tabs} selectedTabId={selectedTabId} onChange={setSelectedTabId} />

    {tabs.map((tab) => (
      <div
        key={tab.id}
        role="tabpanel"
        id={tab.panelId}
        aria-labelledby={tab.id}
        hidden={selectedTabId !== tab.id}
      >
        Content for {tab.label}
      </div>
    ))}
  </>
);
```

### Examples

#### Vertical

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  direction="vertical"
/>
```

Renders a vertical tab list alongside panel content.

(`"horizontal" | "vertical"`)

#### Compact spacing

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  compactSpacing
/>
```

Reduces spacing between tab items.

#### With icons

```tsx
<Tab
  options={[
    { id: 'photos', label: 'Photos', panelId: 'panel-1', icon: 'photo-camera' },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera', disabled: true },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Adds an icon before each tab label.

#### Icons only

```tsx
<Tab
  options={[
    { id: 'home', panelId: 'panel-1', icon: 'home' },
    { id: 'bookmarks', panelId: 'panel-2', icon: 'bookmarks' },
    { id: 'chat', panelId: 'panel-3', icon: 'chat' },
    { id: 'settings', panelId: 'panel-4', icon: 'settings' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Renders icon-only tabs without labels.

#### With badge

```tsx
<Tab
  options={[
    {
      id: 'photos',
      label: 'Photos',
      panelId: 'panel-1',
      icon: 'photo-camera',
      badgeCount: 5,
      badgeContent: 'number',
      badgeType: 'indicator',
      showBadge: true,
    },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Displays a badge on a tab item.

#### Overflow type

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  overflowType="scrollable"
/>

<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  overflowType="dropdown"
/>
```

Controls how tabs behave when they exceed the container width.

(`"scrollable" | "dropdown"`)
