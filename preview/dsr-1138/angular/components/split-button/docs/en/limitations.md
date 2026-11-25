### Menu item selection events

The component does not expose a menu item selection output. `(clickRightButton)` fires when the menu trigger is activated, not when an individual option is chosen. To react to menu item activation, use navigation fields supported by the embedded dropdown (`link`, `routerLink`, or `href`) on option entries, or route the action through the primary button.
