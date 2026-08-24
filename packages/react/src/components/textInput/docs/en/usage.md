Import `TextInput` and render it with a unique `id`. Control the value via the `value` and `onChange` props.

```tsx
import { useState } from "react";
import { TextInput } from "@design-system-rte/react";

function Example() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      id="text-input-default"
      label="Label"
      labelPosition="top"
      maxLength={150}
      value={value}
      onChange={setValue}
      aria-required
      autoComplete="off"
    />
  );
}
```

### Character counter

The counter is displayed only when both `showCounter` is `true` and `maxLength` is a number. Counter placement depends on `labelPosition`: above the input bar when `"top"`, beside the container when `"side"`.

### Examples

#### Error

```tsx
<TextInput
  id="text-input-error"
  label="Label"
  error
  assistiveAppearance="error"
  showAssistiveIcon
  assistiveTextLabel="Error message"
/>
```

Applies error styling with an assistive error message and icon.

#### Sizes

```tsx
<TextInput id="text-input-default-width" label="Default" />
<TextInput id="text-input-narrow" label="20px" width="20px" />
<TextInput id="text-input-full" label="100%" width="100%" />
```

Sets container width. Values below the minimum input width (`48px`) are clamped.

#### Label position

```tsx
<TextInput id="text-input-top" label="Top" labelPosition="top" />
<TextInput id="text-input-side" label="Side" labelPosition="side" />
```

Places the label above (`"top"`) or beside (`"side"`) the input.

#### Required indicator

```tsx
{/* Required with visible requirement text */}
<TextInput id="text-input-required-visible" label="Label" width="400px" required showLabelRequirement />

{/* Required with asterisk only */}
<TextInput id="text-input-required-asterisk" label="Label" width="400px" required assistiveAppearance="error" />

{/* Optional with requirement text */}
<TextInput id="text-input-optional-visible" label="Label" width="400px" showLabelRequirement />

{/* Optional without requirement text */}
<TextInput id="text-input-optional-hidden" label="Label" width="400px" assistiveAppearance="error" />
```

Controls how required and optional fields are indicated next to the label.

#### Assistive text

```tsx
<TextInput id="text-input-description" label="Description" assistiveAppearance="description" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-error-assistive" label="Error" assistiveAppearance="error" error assistiveTextLabel="Assistive text" />
<TextInput id="text-input-success" label="Success" assistiveAppearance="success" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-link" label="Link" assistiveAppearance="link" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-error-icon" label="Error + icon" assistiveAppearance="error" showAssistiveIcon error assistiveTextLabel="Assistive text" />
<TextInput id="text-input-success-icon" label="Success + icon" assistiveAppearance="success" showAssistiveIcon assistiveTextLabel="Assistive text" />
```

Displays assistive text below the input in different appearances (`"description"`, `"error"`, `"success"`, `"link"`).
