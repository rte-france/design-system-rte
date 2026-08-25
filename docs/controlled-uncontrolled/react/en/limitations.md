### Mixing controlled and uncontrolled props

Passing `value={undefined}` explicitly still counts as controlled in components that use `value !== undefined` (for example `Select`). Prefer omitting `value` entirely for uncontrolled usage. Do not switch between controlled and uncontrolled modes on the same instance during its lifetime.

### Controlled components require parent updates

If you pass `value` but never update it in `onChange`, the UI appears frozen. This is expected React behavior, not a component bug.

### Not every component supports uncontrolled mode

`Tab` always requires `selectedTabId` and `onChange`. `Toast` always requires `isOpen` and `onClose`. There is no `defaultValue` or internal selection for these components.

### SideNav active item tracking

`SideNav` keeps internal state for the active item and exposes `onActiveItemChange`. For full control over which item appears active, set `active` on individual items in the `items` array from your routing or application state.

### TextInput and native React warnings

Switching a `TextInput` from uncontrolled to controlled (or the reverse) triggers the standard React warning about changing input types. Pick one mode when the component mounts.
