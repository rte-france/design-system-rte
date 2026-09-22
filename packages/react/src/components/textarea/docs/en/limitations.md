### Character counter

The counter is rendered only when both `showCounter` is `true` and `maxLength` is set. With `labelPosition="side"`, the counter appears in the top header row and is not shown beside a side label.

### Assistive text and errors

When `aria-invalid` is true, the assistive area shows `errorMessage` if provided, otherwise `assistiveTextLabel`, with error styling. When `aria-invalid` is false, assistive text follows `assistiveTextAppearance`.
