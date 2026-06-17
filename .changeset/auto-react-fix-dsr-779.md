---
  "@design-system-rte/react": patch
  ---
  
  ## Changes

- (Toast) add pointer event auto
- prevent scrolling on focus
- (Drawer) simplify closing behavior on clicking on the backdrop
- (Overlay) remove z-index
- (Segmented-control) react - add relative position to prevent misplacement of selected indicator on resize or dom changes
- update z-index values across components and introduce get overlay layer utils for overlay management
- (Overlay) re add absolute and full width style + fix position for popover and drawer
- (Overlay) reintroduce fixed position for overlay
