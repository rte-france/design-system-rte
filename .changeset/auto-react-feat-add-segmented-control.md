---
  "@design-system-rte/react": minor
  ---
  
  ## Changes

- (Segmented Control) extract updateSlider function
- (Segmented Control) add validation for options to ensure proper configuration
- (Segmented-control) increase width to display full segment label
- (Segmented Control) set default focus on selected segment
- remove event.stopPropagation calls in key event handlers
- (Segmented Control) force focus on first segment on tab keyboard navigation
- (Segmented Control) automatically toggle icon appearance on segment selection state
- (Segmented Control) set selected indicator style using signals
- (Segmented Control) extract focus handling logic into utils file
- (Segmented Control) use design token for outline width
- (Segmented Control) improve focus handling by referencing parent element for segment queries
- (Segmented Control) rename slider to selected indicator and harmonise related logic
- (Segmented Control) harmonise style + keyboard interaction
- (Segmented Control) improve keyboard interaction support
- (Segmented Control) add angular component
- add storybook interactions tests
- (Segmented Control) extract props types and constants to core
- (Segmented Control) add react component
- (Icon) set name props as string type
