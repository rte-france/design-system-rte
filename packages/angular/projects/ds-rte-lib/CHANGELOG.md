# @design-system-rte/angular

## 0.15.0

### Minor Changes

- 7e88d16: ## Changes
  - (Button) Change button selector to button[rteButton] & change implementation to native button without wrapper

- f246255: ## Changes
  - (Breadcrumbs) add tooltip on ellipsed item
  - (Breadcrumbs) enable breadcrumbItem max width with ellipsis

- bb5af23: ## Changes
  - (Divider) add brand appearance

- 196aaab: ## Changes
  - (Dropdown) add trigger props to allow arrow down key to open the dropdown
  - generate changesets automatically
  - (Split Button) enhance keyboard navigation
  - (Split Button) add dropdown to right button

- 97d3bea: ## Changes
  - (Link) add reverse variant

### Patch Changes

- daf0f33: ## Changes
  - (Tag) remove vertical padding and change label font size for compact spacing variant

- Updated dependencies [f246255]
- Updated dependencies [bb5af23]
- Updated dependencies [196aaab]
- Updated dependencies [97d3bea]
  - @design-system-rte/core@0.19.0

## 0.14.0

### Minor Changes

- 56fd109: ## Changes
  - (Angular 18) Update Angular package to Angular@18 from @17

- 9e7b2cd: ## Changes
  - (Breadcrumbs) change truncated breadcrumbs icon size from small to medium
  - (Dropdown) correct dropdown keyboard navigation
  - (Breadcrumbs) integrate dropdown with breadcrumbs
  - (Icon-button) set correct focus style
  - (Breadcrumbs) add dropdown to display truncated links

### Patch Changes

- fdc90c7: ## Changes
  - (Tab) correct angular's tab navigation that was broken after incorporating dropdown behavior

- Updated dependencies [9e7b2cd]
  - @design-system-rte/core@0.18.0

## 0.13.0

### Minor Changes

- a901693: ## Changes
  - (Banner) conditionally render message and title in banner component + set correct action button size
  - (Banner) use click output instead of input actionCallback
  - (Banner) add component to tests apps
  - (Banner) add internal state to handle banner visibility
  - (Banner) add angular component + add keyboard interaction tests

- 00ec1aa: ## Changes
  - (Tab) add overflow type stories
  - (Tab) add overflow type and dropdown support for angular tab component
  - (Badge) add simple angular badge type
  - (Dropdown) update trigger reference for position calculation on angular comp
  - (Tab) extract scroll methods in utils
  - (Tab) add inverted case
  - (Tab) handle vertical up and down arrow key navigation
  - (Tab) add disabled state for tab items
  - (Badge) add simple badge
  - (Tab) add angular component
  - (Segmented-control) extract selected indicator position logic in common hook + set top position to remove relative position

- cfaaf46: ## Changes
  - (Dropdown) correct angular integration between tab & dropdown
  - (Dropdown) correct dropdown positioning
  - (Dropdown) correct dropdown item selection with enter
  - (Dropdown) correct trigger holding focus when navigating with tab
  - (Dropdown) avoid scrollbar navigation while navigating a dropdown-menu using the keyboard
  - (Dropdown) handle menu key input for navigation and closing
  - (Dropdown) add dropdown system

- 0cb0e68: ## Changes
  - (Popover) add popover directive

### Patch Changes

- Updated dependencies [a901693]
- Updated dependencies [00ec1aa]
- Updated dependencies [a3838c6]
- Updated dependencies [0cb0e68]
  - @design-system-rte/core@0.17.0

## 0.12.0

### Minor Changes

- 5e685f0: ## Changes
  - (Loader) add Loader component for angular

- 191f1e9: ## Changes
  - (Segmented-control) added Segmented-control documentation for storybook and stories
  - (Loader) added Loader documentation for storybook and stories
  - (Textarea) added Textarea documentation for storybook and stories
  - (Switch) added Switch documentation for storybook and stories
  - (Divider) added Divider documentation for storybook and stories
  - (Chip) added Chip documentation for storybook and stories
  - (Icon-title) refactor IconTitle component to use in stories
  - (Tag) added Tag documentation for storybook and stories

- 21cab4b: ## Changes
  - (Breacrumbs) correct unadressed accessibility criteria
  - (Breadcrumbs) add missing truncated test
  - (Breadcrumbs) correct breadcrumbs-head styling
  - (Breadcrumbs) add breadcrumbs

### Patch Changes

- d282e25: ## Changes
  - add missing default font colors for Checkbox, Icon & Radio Button

- Updated dependencies [5e685f0]
- Updated dependencies [191f1e9]
- Updated dependencies [21cab4b]
  - @design-system-rte/core@0.16.0

## 0.11.0

### Minor Changes

- 4dead3f: ## Changes
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

- f2f7349: ## Changes
  - (Switch) implement switch component with functionality and styling

- e8a673a: ## Changes
  - (Storybook) add dark theme background for stories

- 7d41c21: ## Changes
  - (Divider) add Divider component with customizable orientation, thickness, appearance, and endPoint

- cbd90b0: ## Changes
  - (Storybook-badge) add Badge component stories and documentation for angular and update styles and structure for consistency

- 5c06469: ## Changes
  - (Grid) set directive selector to rteCol & rteGrid to respect Angular style guidelines

### Patch Changes

- Updated dependencies [4dead3f]
- Updated dependencies [f2f7349]
- Updated dependencies [7d41c21]
- Updated dependencies [cbd90b0]
  - @design-system-rte/core@0.15.0

## 0.10.1

### Patch Changes

- Updated dependencies [db7edfd]
  - @design-system-rte/core@0.14.0

## 0.10.0

### Minor Changes

- 89289e7: ## Changes
  - (textarea) update focus, error styles border and cursor on readonly and disabled
  - (textarea) add showCounter variable to display counter
  - (textarea) set correct style for label in side position
  - (textarea) prevent odd displaying on error state and disabled
  - (textarea) improve assistive text handling
  - (textarea) add component to tests apps
  - (textarea) add public api export
  - (textarea) add tests on storybook
  - (textarea) set better props handling + handle resizing logic on angular comp
  - (Link) add rel noopener noreferrer on external link
  - (textarea) add auto scroll to top on blur event
  - harmonise border style on focus + remove showAssistiveTextIcon prop + add link component on angular textarea
  - add angular textarea component

- f6bb90d: ## Changes
  - add decorative brand example
  - set correct success icon
  - set correct color token name
  - improve formatting and consistency in Tag component and stories
  - update Tag component to use computed properties for icon name and validation
  - improve formatting and consistency in computedIconName getter
  - update computedIconName method to return an empty string instead of default icon
  - add Tag component with customizable properties and icon support

### Patch Changes

- Updated dependencies [89289e7]
- Updated dependencies [f6bb90d]
  - @design-system-rte/core@0.13.0

## 0.9.0

### Minor Changes

- b824254: ## Changes
  - correct Badge display for icon & text
  - enhance Badge component with improved class bindings and styling options
  - implement Badge component in Angular

### Patch Changes

- Updated dependencies [b824254]
  - @design-system-rte/core@0.12.0

## 0.8.0

### Minor Changes

- ae703ee: ## Changes
  - set Arial font to stories
  - add keyboard test constants file
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

### Patch Changes

- Updated dependencies [ae703ee]
  - @design-system-rte/core@0.11.0

## 0.7.1

### Patch Changes

- 9fcc804: ## Changes
  - remove ongoing development marker
  - set private visibility to toggleInternalSelectedState method + remove console.log
  - add correct behaviour on click

- Updated dependencies [9fcc804]
  - @design-system-rte/core@0.10.1

## 0.7.0

### Minor Changes

- 2c7a587: ## Changes
  - simplify aria attributes handling for TextInput
  - correct right-icon default behavior & positioning in InputText
  - correct leftIcon display for TextInput
  - correct display & behavior of rightIcon & assistiveText for TextInput
  - correct TextInputComponent's rightIcon display
  - add TextInputComponent for Angular

### Patch Changes

- Updated dependencies [0c0177e]
  - @design-system-rte/core@0.10.0

## 0.6.0

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

## 0.5.4

### Patch Changes

- Updated dependencies [7d6d633]
  - @design-system-rte/core@0.8.0

## 0.5.3

### Patch Changes

- 3ae37a6: ## Changes
  - correct left-button styling for SplitButton
  - correct right-button sizing for SplitButton

## 0.5.2

### Patch Changes

- e07ebe6: ## Changes
  - repair angular public api & angular test app

## 0.5.1

### Patch Changes

- 60c9c03: Update dependency from @design-system-rte/core
- Updated dependencies [60c9c03]
  - @design-system-rte/core@0.7.0

## 0.5.0

### Minor Changes

- 3ad27f0: ## Changes
  - update changeDetectionStrategy for angular components
