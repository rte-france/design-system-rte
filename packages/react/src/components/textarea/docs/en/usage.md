Import `Textarea` and bind it in your form or page. Use `label` and `assistiveTextLabel` for visible guidance instead of a placeholder. Set `aria-invalid` and `errorMessage` (or `assistiveTextLabel` with error content) when validation fails.

```tsx
import { Textarea } from "@design-system-rte/react";

function CommentField() {
  return (
    <Textarea
      id="comment"
      label="Comment"
      labelId="comment-label"
      assistiveTextLabel="Maximum 500 characters."
      rows={3}
      onChange={(event) => console.log(event.target.value)}
    />
  );
}
```

You may pass other native textarea attributes (such as `rows` or `aria-invalid`) as props. Do not rely on `placeholder`; use assistive text for hints and examples.

#### Error

```tsx
<Textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  maxLength={100}
/>
```

Set `assistiveTextAppearance` to `"error"` and provide the message in `assistiveTextLabel` to show the error state below the field.

(`assistiveTextAppearance`: `"description" | "error" | "success" | "link"`)
