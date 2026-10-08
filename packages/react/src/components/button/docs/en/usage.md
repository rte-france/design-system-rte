Import `Button` and set `appearance` and `hierarchy` for the desired visual style. Use the native `disabled` prop for inactive buttons.

```tsx
<Button appearance="brand" hierarchy="primary" label="Submit" onClick={onSubmit} />
```

#### Sizing

```tsx
<div style={{ display: "flex", gap: 8 }}>
  <Button appearance="brand" hierarchy="primary" size="s" label="Small" />
  <Button appearance="brand" hierarchy="primary" size="m" label="Medium" />
  <Button appearance="brand" hierarchy="primary" size="l" label="Large" />
</div>
```

Shows the three supported heights (`s`, `m`, `l`).

#### With icon

```tsx
<Button
  appearance="brand"
  hierarchy="primary"
  label="Button with Icon"
  icon="add-circle"
  iconPosition="left"
  iconAppearance="outlined"
/>
```

One icon per button; position with `iconPosition`.

#### Brand hierarchies

```tsx
<Button appearance="brand" hierarchy="primary" label="Primary" />
<Button appearance="brand" hierarchy="secondary" label="Secondary" />
<Button appearance="brand" hierarchy="text" label="Text" />
<Button appearance="brand" hierarchy="transparent" label="Transparent" />
```

Brand appearance with each hierarchy.

#### Neutral hierarchies

```tsx
<Button appearance="neutral" hierarchy="primary" label="Neutral primary" />
<Button appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
<Button appearance="neutral" hierarchy="outlined" label="Neutral outlined" />
<Button appearance="neutral" hierarchy="text" label="Neutral text" />
```

Neutral appearance including the new `outlined` hierarchy.

#### Critical and reversed

```tsx
<Button appearance="brand" hierarchy="primary" isCritical label="Critical" />
```

Use `isReversed` on dark backgrounds for inverse text colors.

#### Legacy variants

```tsx
<Button variant="danger" label="Danger" />
```

Deprecated `variant` values still resolve to the same visuals; migrate to appearance, hierarchy, and flags when updating code.

#### With badge

```tsx
<Button
  appearance="brand"
  hierarchy="primary"
  label="Button with Badge"
  badgeContent="number"
  badgeCount={5}
  badgeType="indicator"
/>
```

Wraps the button in `Badge` when badge props are set.
