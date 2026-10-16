### Option count

`options` must contain exactly **2 or 3** segments. With any other length, the component logs a console warning and does not render.

### Icon consistency

When one option defines an `icon`, **every** option must define an `icon`. Mixing icon and label-only options is not supported; the component logs a warning and does not render.

### Label truncation

Text labels use `text-overflow: ellipsis` with `white-space: nowrap`. Long labels are clipped inside the segment width rather than wrapping to multiple lines.

### Controlled selection

Selection is controlled through `selectedSegment` and `change`. The component does not manage selection state internally.

### Width constraints

The control has a minimum width of 168px (256px with three segments) and a maximum width of 720px. Compact spacing reduces these minimums to 80px and 128px respectively.

### Keyboard focus with Tab

Pressing Tab moves focus past all segments in the group to the next focusable element outside the control, rather than stopping on each segment individually.
