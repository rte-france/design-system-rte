### Menu item selection events

`(clickRightButton)` fires when the menu trigger is activated, not when an individual option is chosen. React to menu item activation with `(clickOption)`, which emits the option `id`. Navigation-only actions can still use `link`, `routerLink`, or `href` on option entries without handling `(clickOption)`.
