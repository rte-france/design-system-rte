Import `CardComponent` and use `<rte-card>` in your template. Project any content inside the host element — the card is a layout container with no built-in header, body, or footer slots.

```typescript
import { Component } from "@angular/core";
import { CardComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [CardComponent],
  template: `
    <rte-card>
      <div style="padding: 16px;">
        <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">Card Title</h2>
        <p style="margin: 0; color: #666; line-height: 1.5;">
          This is a sample card with some content.
        </p>
      </div>
    </rte-card>
  `,
})
export class ExampleComponent {}
```

Set `[clickable]="true"` and listen to `(cardClicked)` when the entire card should act as a single interactive target. Provide `ariaLabel` or `ariaLabelledby` for accessible naming, and set `ariaRole="button"` (or another appropriate role) so screen readers announce the card as an interactive element rather than static content.

#### Widths

```html
<rte-card width="240px">
  <div style="padding: 16px;">Extra Small — 240px</div>
</rte-card>

<rte-card width="360px">
  <div style="padding: 16px;">Small — 360px</div>
</rte-card>

<rte-card width="480px">
  <div style="padding: 16px;">Medium — 480px</div>
</rte-card>

<rte-card width="600px">
  <div style="padding: 16px;">Large — 600px</div>
</rte-card>

<rte-card width="720px">
  <div style="padding: 16px;">Extra Large — 720px</div>
</rte-card>
```

Override the default `480px` width with any CSS length or percentage.

#### Card types

(`"default" | "outlined"`)

```html
<rte-card cardType="default">
  <div style="padding: 16px;">
    <h3>Default Card</h3>
    <p>Uses elevation shadow.</p>
  </div>
</rte-card>

<rte-card cardType="outlined">
  <div style="padding: 16px;">
    <h3>Outlined Card</h3>
    <p>Uses a border instead of shadow.</p>
  </div>
</rte-card>
```

Switch between the two visual variants with `cardType`.

#### With buttons

```html
<rte-card>
  <div style="padding: 16px;">
    <h3>Primary Button</h3>
    <p>Card with primary button variant</p>
    <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onPrimaryClick()">
      Primary Action
    </button>
  </div>
</rte-card>
```

Place buttons or other components inside the card. Add internal padding in your projected content.

#### Clickable with content

```html
<rte-card
  [clickable]="true"
  ariaRole="button"
  ariaLabel="Open card details"
  (cardClicked)="onCardClick()"
>
  <div style="padding: 16px;">
    <h2>Clickable Card with Button</h2>
    <p>Click the card surface to trigger the card action.</p>
    <button rteButton rteButtonVariant="primary" rteButtonSize="m" (click)="onButtonClick($event)">
      Action Button
    </button>
  </div>
</rte-card>
```

```typescript
onButtonClick(event: Event): void {
  event.stopPropagation();
  // handle button action without triggering cardClicked
}
```

When the card is clickable, stop event propagation on nested interactive elements to avoid triggering `cardClicked`.
