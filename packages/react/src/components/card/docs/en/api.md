The `Card` component is the public API. Consumers pass props and render children inside the container. Standard HTML div attributes (for example `aria-label`, `className`, `id`) are forwarded to the root element.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | string | `480px` | Width of the card (any valid CSS value, for example `480px` or `50%`). |
| height | string | `auto` | Height of the card (any valid CSS value). |
| cardType | `"default" \| "outlined"` | `"default"` | Visual variant. `default` uses elevation shadow; `outlined` uses a border without shadow. |
| clickable | boolean | `false` | Makes the card interactive, focusable, and keyboard-activatable. |
| disabled | boolean | `false` | Disables interaction and applies disabled styling. |
| onClick | `() => void` | — | Callback invoked when the card is clicked or activated via Enter or Space, when `clickable` is `true` and `disabled` is `false`. |
| children | `ReactNode` | — | Content rendered inside the card. |

The component supports `ref` forwarding to the root `div` element.
