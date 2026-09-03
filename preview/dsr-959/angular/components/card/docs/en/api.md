The `CardComponent` (`<rte-card>`) is the public API. Consumers set inputs on the host element and project content via `ng-content`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | string | `480px` | Width of the card (any valid CSS value, for example `480px` or `50%`). |
| height | string | `auto` | Height of the card (any valid CSS value). |
| cardType | `"default" \| "outlined"` | `"default"` | Visual variant. `default` uses elevation shadow; `outlined` uses a border without shadow. |
| clickable | boolean | `false` | Makes the card interactive, focusable, and keyboard-activatable. |
| disabled | boolean | `false` | Disables interaction and applies disabled styling. |
| ariaLabel | string | — | Accessible label when no visible label is present. |
| ariaLabelledby | string | — | ID of the element that labels the card. |
| ariaRole | string | — | Sets the HTML `role` attribute on the card container (for example `button`). Screen readers announce this role when the card is focusable. |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| cardClicked | `void` | Emitted when the card is clicked or activated via Enter or Space, when `clickable` is `true` and `disabled` is `false`. |
