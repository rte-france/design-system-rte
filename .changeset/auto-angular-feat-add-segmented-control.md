---
  "@design-system-rte/angular": minor
  ---
  
  ## Changes

- (Segmented Control) add validation for options to ensure proper configuration
- (Segmented-control) increase width to display full segment label
- (Segmented Control) set default focus on selected segment
- remove event.stopPropagation calls in key event handlers
- (Segmented Control) force focus on first segment on tab keyboard navigation
- (Segmented Control) automatically toggle icon appearance on segment selection state
- (Segmented Control) correct frozen animation for segment change used to be handled by a timeout
- (Segmented Control) set selected indicator style using signals
- (Segmented Control) export component in angular public api
- (Segmented Control) extract focus handling logic into utils file
- (Segmented Control) use design token for outline width
- (Segmented Control) rename slider to selected indicator and harmonise related logic
- (Segmented Control) harmonise style + keyboard interaction
- (Segmented Control) improve keyboard interaction support
- (Segmented Control) add angular component
