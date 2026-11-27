Q: Can I use a custom CSS class on the host element to set the input width? (AIT)

A: See the Limitations / Default width section. Layout width is controlled by the `width` input (default `"300px"`). Applying width via host CSS can conflict with the internal container layout. Use the `width` input instead.

Q: How do I apply inline styles to the native input element?

A: Use the `customStyle` input to pass inline styles to the native `<input>`. This does not affect the outer container (label, counter, assistive text).
