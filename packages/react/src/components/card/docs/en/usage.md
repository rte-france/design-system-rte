Import `Card` and render it with children. The card is a layout container with no built-in header, body, or footer slots.

```tsx
import Card from "@design-system-rte/react/components/card/Card";

function Example() {
  return (
    <Card>
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Card Title</h2>
        <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
          This is a sample card with some content.
        </p>
      </div>
    </Card>
  );
}
```

Set `clickable={true}` and pass `onClick` when the entire card should act as a single interactive target. Provide `aria-label` or `aria-labelledby` for accessible naming.

#### Widths

```tsx
<Card width="240px">
  <div style={{ padding: "16px" }}>Extra Small — 240px</div>
</Card>

<Card width="360px">
  <div style={{ padding: "16px" }}>Small — 360px</div>
</Card>

<Card width="480px">
  <div style={{ padding: "16px" }}>Medium — 480px</div>
</Card>

<Card width="600px">
  <div style={{ padding: "16px" }}>Large — 600px</div>
</Card>

<Card width="720px">
  <div style={{ padding: "16px" }}>Extra Large — 720px</div>
</Card>
```

Override the default `480px` width with any CSS length or percentage.

#### Card types

(`"default" | "outlined"`)

```tsx
<Card cardType="default">
  <div style={{ padding: "16px" }}>
    <h3>Default Card</h3>
    <p>Uses elevation shadow.</p>
  </div>
</Card>

<Card cardType="outlined">
  <div style={{ padding: "16px" }}>
    <h3>Outlined Card</h3>
    <p>Uses a border instead of shadow.</p>
  </div>
</Card>
```

Switch between the two visual variants with `cardType`.

#### With buttons

```tsx
import Button from "@design-system-rte/react/components/button/Button";

<Card>
  <div style={{ padding: "16px" }}>
    <h3>Primary Button</h3>
    <p>Card with primary button variant</p>
    <Button variant="primary" label="Primary Action" onClick={() => console.log("Primary clicked")} />
  </div>
</Card>
```

Place buttons or other components inside the card. Add internal padding in your children.

#### Clickable with content

```tsx
<Card clickable onClick={() => console.log("Card clicked")}>
  <div style={{ padding: "16px" }}>
    <h2>Clickable Card with Button</h2>
    <p>Click the card surface to trigger the card action.</p>
    <Button
      variant="primary"
      label="Action Button"
      onClick={(event) => {
        event.stopPropagation();
        console.log("Button clicked inside card");
      }}
    />
  </div>
</Card>
```

When the card is clickable, stop event propagation on nested interactive elements to avoid triggering `onClick`.
