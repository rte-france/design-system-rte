# @design-system-rte/react

## 0.10.0

### Minor Changes

- 4dead3f: ## Changes

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

- f2f7349: ## Changes

  - (Switch) added switch component to React with style and functionality

- bc8c22e: ## Changes

  - (Storybook) add dark theme background for stories

- 7d41c21: ## Changes

  - (Divider) implement Divider component with orientation, thickness, appearance, and endPoint

- cbd90b0: ## Changes

  - (Storybook-badge) add Badge component documentation

### Patch Changes

- Updated dependencies [4dead3f]
- Updated dependencies [f2f7349]
- Updated dependencies [7d41c21]
- Updated dependencies [cbd90b0]
  - @design-system-rte/core@0.15.0

## 0.9.1

### Patch Changes

- 7156472: ## Changes

  - correct TextInput cursor for React

- Updated dependencies [db7edfd]
  - @design-system-rte/core@0.14.0

## 0.9.0

### Minor Changes

- 89289e7: ## Changes

  - (textarea) update focus, error styles border and cursor on readonly and disabled
  - (textarea) add showCounter variable to display counter
  - (textarea) set correct style for label in side position
  - (textarea) prevent odd displaying on error state and disabled
  - (textarea) simplify required and optional appearence
  - add type to textarea ref to avoid casting
  - (textarea) improve assistive text handling
  - naming typo
  - (textarea) add public api export
  - (textarea) add tests on storybook
  - (textarea) set better props handling + handle resizing logic on angular comp
  - (Link) add rel noopener noreferrer on external link
  - (textarea) add auto scroll to top on blur event
  - harmonise border style on focus + remove showAssistiveTextIcon prop + add link component on angular textarea
  - add react textarea stories
  - extract constants in core
  - add react textarea component
  - update changeDetectionStrategy for angular components

- f6bb90d: ## Changes

  - add decorative brand example
  - set correct success icon
  - set correct color token name
  - improve formatting and consistency in Tag component and stories
  - update Tag component to use computed properties for icon name and validation
  - improve formatting and consistency in Decorative, WithIcon, and Compact story definitions
  - streamline args structure in Tag component stories
  - correct casing of compactSpacing property in Tag component and stories
  - improve formatting and consistency in Tag component and interface
  - add Tag component with status and decorative types, including styles and stories

### Patch Changes

- Updated dependencies [89289e7]
- Updated dependencies [f6bb90d]
  - @design-system-rte/core@0.13.0

## 0.8.0

### Minor Changes

- b824254: ## Changes

  - correct Badge display for icon & text
  - enhance Badge component with improved class bindings and styling options
  - add react component
  - add Badge interface

### Patch Changes

- Updated dependencies [b824254]
  - @design-system-rte/core@0.12.0

## 0.7.0

### Minor Changes

- ae703ee: ## Changes

  - set Arial font to stories
  - add keyboard test constants file
  - enrich useActiveKeyboard handler parameters with more keyboard event case and remove unused isActiveKeyboard state
  - add type to aria role mapping constant
  - simplify chip icon visibility logic and remove unused styles
  - add keyboard event handling for backspace and delete keys
  - add id property to text input component to get better accessibility
  - export chip component
  - add missing semicolon + pass className as plain string
  - update missing correct keyboard event handling syntaxe in stories
  - add angular storybook component
  - update keyboard event handling in stories to use correct syntax
  - add angular chip component
  - extract chip props in interface
  - add react input chip
  - add multi select type + add animation
  - add React single chip component
  - add useActiveKeyboard hook to centralise keyboard interaction

### Patch Changes

- Updated dependencies [ae703ee]
  - @design-system-rte/core@0.11.0

## 0.6.1

### Patch Changes

- 9fcc804: ## Changes

  - remove ongoing development marker
  - add correct behaviour on click

- Updated dependencies [9fcc804]
  - @design-system-rte/core@0.10.1

## 0.6.0

### Minor Changes

- 0c0177e: ## Changes

  - simplify aria attributes handling for TextInput
  - correct right-icon default behavior & positioning in InputText
  - correct leftIcon display for TextInput
  - correct display & behavior of rightIcon & assistiveText for TextInput
  - add stories cases for TextInput
  - add textInput behavior for left & right Icons and error handling
  - update input styles with gradient background and disabled state handling
  - add error and disabled props to TextInput component and update stories
  - enhance TextInput component with new props and styles for better usability
  - add TextInput types and prepared file for component

### Patch Changes

- Updated dependencies [0c0177e]
  - @design-system-rte/core@0.10.0

## 0.5.0

### Minor Changes

- 0684f1c: ## Changes

  - harmonise togglable variable name
  - update generate:icon command to add icon map generation
  - use capitalise variable name for Regular and Togglable icons
  - add script to generate icon maps
  - add cancel icon

### Patch Changes

- Updated dependencies [f51dfca]
  - @design-system-rte/core@0.9.0

## 0.4.3

### Patch Changes

- Updated dependencies [7d6d633]
  - @design-system-rte/core@0.8.0

## 0.4.2

### Patch Changes

- 3ae37a6: ## Changes

  - correct left-button styling for SplitButton
  - correct right-button sizing for SplitButton

## 0.4.1

### Patch Changes

- e07ebe6: ## Changes

  - repair react public API to include SplitButton & Tooltip

## 0.4.0

### Minor Changes

- 60c9c03: Update dependency from @design-system-rte/core

### Patch Changes

- Updated dependencies [60c9c03]
  - @design-system-rte/core@0.7.0
