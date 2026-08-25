Q: My Select (or DatePicker) does not update when I click an option — what am I doing wrong?

A: You are likely in controlled mode (`value` is set) but not updating state in `onChange`. The parent must set `value` to the new selection on every change. See Usage / Controlled usage.

Q: What is the difference between `value` and `defaultValue`?

A: `value` makes the parent the source of truth (controlled). `defaultValue` sets only the initial value; the component then manages updates internally (uncontrolled). Never use both on the same field.

Q: I pass `onChange` but not `value` — is my component controlled?

A: No. `onChange` alone does not make a component controlled. Controlled mode requires passing the current state via `value` (or `isCollapsed`, `selectedTabId`, etc.) and updating it when the callback fires.

Q: Why does my SideNav collapse button not work when I pass `isCollapsed`?

A: In controlled mode, `SideNav` does not update `isCollapsed` internally. Update your state in `onCollapsedChange`. See Usage / SideNav collapse state.

Q: Can I use `Tab` without managing `selectedTabId` in state?

A: No. `Tab` is always controlled. Store `selectedTabId` in state and update it in `onChange`.
