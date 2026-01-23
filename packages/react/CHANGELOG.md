# @design-system-rte/react

## 1.3.0

### Minor Changes

- f542e37: ## Changes
  - (Dropdown) add complex menu to react

- c35f153: ## Changes
  - (Toast) enable autodismiss functionality

- 1f8e40c: ## Changes
  - (Tab) export component to public api

### Patch Changes

- Updated dependencies [1f8e40c]
  - @design-system-rte/core@1.2.1

## 1.2.0

### Minor Changes

- 8c512ea: ## Changes
  - (Select) add new documentation
  - (Text Input) move AssistiveText & RequiredIndicator to base component of Text Input
  - (Assistive-text) add width props
  - (Select) improve style
  - (Assistive-text) add angular component
  - (Link) harmonise appearance
  - (Select) set positionning
  - (Select) harmonise readonly and disable behavior + add stories scenario
  - (Select) fix error variant on react component
  - (Select) Add angular component
  - extract common input props
  - (Select) add react component
  - (Dropdown) add selected state to simple dropdown item
  - extract required indicator in a component
  - (Text Input) extract assistive text in a component

- f5946ce: ## Changes
  - (Breadcrumbs) Add Badge
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) handle icon props in badge
  - (Dropdown) add Badge

- 0dbb025: ## Changes
  - (Split-button) Add badge
  - (Core) use parameter object for shouldDisplayBadge utils
  - (Segmented Control) add badge
  - (Breadcrumbs) Add Badge
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) handle icon props in badge
  - (Dropdown) add Badge

- c6867f7: ## Changes
  - (Segmented Control) add badge
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) handle icon props in badge
  - (Dropdown) add Badge

- 251ae74: ## Changes
  - (Split-button) Add badge
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) handle icon props in badge
  - (Dropdown) add Badge

- 2cff3de: ## Changes
  - (Searchbar) add new documentation
  - (Searchbar) add new placeholder text for disabled input
  - (Text Input) correct disabled display
  - (Searchbar) correct inner input not losing focus when clearing is value
  - (Text Input) hide input value when input is disabled
  - (Searchbar) change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
  - (Text Input) correct placeholder exposition and handling
  - (Searchbar) add searchbar base functionality

- 29e0462: ## Changes
  - (Design Docs) correct sub-storybook context detection
  - (Design Docs) add guideline page
  - (Storybook) add breadcrumbs - overview page
  - (Storybook) add new tab of options, heading, availability and LastUpdate component

### Patch Changes

- 88a14d9: ## Changes
  - (Badge) set valid position value for xs badge

- Updated dependencies [8c512ea]
- Updated dependencies [921ffd7]
- Updated dependencies [f5946ce]
- Updated dependencies [0dbb025]
- Updated dependencies [c6867f7]
- Updated dependencies [251ae74]
- Updated dependencies [38d9ec6]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
  - @design-system-rte/core@1.2.0

## 1.1.0

### Minor Changes

- f39a6fb: ## Changes
  - better export of module to access style and component
  - (Docs) update test to take theme-selector component into account
  - (Docs) harmonise stories layout
  - (Docs) move theme and mode switcher to component page

- aa4024c: ## Changes
  - (Core) add Nunito font to serve to react and angular package

### Patch Changes

- ddb8b02: ## Changes
  - (Popover) update shadows
  - (Modal) update shadows
  - (Dropdown) update shadows
  - (Card) prevent click action on disabled or not clickable state
  - (Card) update shadows
  - (Banner) update shadows
  - upgrade @storybook/addon-essentials and @storybook/addon-interactions packages

- ddd932b: ## Changes
  - (Modal) increase border radius for size L and XL

- 0a36e15: ## Changes
  - (Docs) order toast stories

- Updated dependencies [aa4024c]
- Updated dependencies [ddb8b02]
  - @design-system-rte/core@1.1.0

## 1.0.0

### Major Changes

- adc4eb6: ## Changes
  - (Public Release) Public Release

### Minor Changes

- 90fd2b4: ## Changes
  - (Toast) set correct padding value
  - (Toast) extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
  - (Toast) restrict action button appearance using only label and callback props
  - (Toast) add spacing from viewport + handle warning case in priority + add leftIcon and action button display boolean
  - (Toast) add useCallback to prevent infinite rendering
  - (Toast) add component to react test app
  - (Toast) add priority queue management
  - (Toast) add basic react component

- 1b87a18: ## Changes
  - (Button) set correct position to badge
  - (Button) add badge

- f3d1179: ## Changes
  - (Banner) remove show icon props + remove top and left radius corner
  - (Banner) update design

### Patch Changes

- 3963635: ## Changes
  - (Tag) force icon for status tag type
  - (Tag) set right color for label and icon on success / information / alert variant

- Updated dependencies [90fd2b4]
- Updated dependencies [1b87a18]
- Updated dependencies [f3d1179]
- Updated dependencies [b779f76]
  - @design-system-rte/core@0.22.0

## 0.16.0

### Minor Changes

- 8bca3e1: ## Changes
  - (Card) add keyboard handling
  - (Card) add card to public api of packages and test in apps
  - (Card) mutualize testing common logic
  - (Card) add accesibility options
  - (Card) add active pseudo-state
  - (Card) add focus ring for keyboard selection
  - (Card) add card component

- 4a444d4: ## Changes
  - (Side Navigation): add missing props to useContentHeight detection
  - (Divider) correct horizontal display
  - (Side Navigation) add Divider support for navItems & navMenus
  - (Side Navigation) add Badge support
  - (Side Navigation) add footer items
  - (Tooltip) add customizable gap
  - (Side Navigation) add Tooltip to SideNav
  - (Side Navigation) correct accesibility standards for ul and li items
  - (Side Navigation) add Nested Menus to SideNav
  - (Side Navigation) implement simple side nav from base side nav

### Patch Changes

- 8a4e95e: ## Changes
  - (Tag) update text color + apply new background-color tokens

- 26bb12b: ## Changes
  - remove react and react dom from dependencies

- Updated dependencies [f22d3ee]
- Updated dependencies [8bca3e1]
- Updated dependencies [4a444d4]
  - @design-system-rte/core@0.21.0

## 0.15.0

### Minor Changes

- a7d75ed: ## Changes
  - (Modal) unset scroll behavior on unmount
  - (Modal) add support for filled / outlined appearance for title icon
  - (Modal) enhance general style on react component
  - (Modal) add react modal component
  - (Textarea) ensure full width for container
  - rename useKeydownEscape hook
  - (Overlay) add freezeNavigation prop to control body overflow and overlay styling

- cc64a7f: ## Changes
  - (Icon-button) add badge to component

### Patch Changes

- Updated dependencies [a7d75ed]
- Updated dependencies [cc64a7f]
  - @design-system-rte/core@0.20.0

## 0.14.0

### Minor Changes

- f246255: ## Changes
  - (Breadcrumbs) add tooltip on ellipsed item
  - (Breadcrumbs) enable breadcrumbItem max width with ellipsis

- bb5af23: ## Changes
  - (Divider) add brand appearance

- 196aaab: ## Changes
  - (Split Button) enhance keyboard navigation
  - (Split Button) remove unused selected props + change focus behavior type on focus-visible
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

## 0.13.0

### Minor Changes

- 9e7b2cd: ## Changes
  - (Breadcrumbs) change truncated breadcrumbs icon size from small to medium
  - (Dropdown) correct dropdown keyboard navigation
  - (Breadcrumbs) integrate dropdown with breadcrumbs
  - (Icon-button) set correct focus style
  - (Breadcrumbs) add dropdown to display truncated links

### Patch Changes

- Updated dependencies [9e7b2cd]
  - @design-system-rte/core@0.18.0

## 0.12.0

### Minor Changes

- a901693: ## Changes
  - (Banner) conditionally render message and title in banner component + set correct action button size
  - (Banner) add component to tests apps
  - (Banner) add internal state to handle banner visibility
  - (Banner) add angular component + add keyboard interaction tests
  - (Banner) add react component

- 00ec1aa: ## Changes
  - (Tab) add overflow type stories
  - (Tab) add overflow type and dropdown support for angular tab component
  - (Tab) extract scroll methods in utils
  - (Tab) add inverted case
  - (Tab) handle vertical up and down arrow key navigation
  - (Tab) handle wrapped behavior
  - (Tab) add disabled state for tab items
  - (Tab) add angular component
  - (Tab) extract common props to core
  - (Tab) add react component
  - (Badge) add react simple badge component
  - (Segmented-control) extract selected indicator position logic in common hook + set top position to remove relative position
  - add script to scaffold react component

- 0cb0e68: ## Changes
  - (Popover) add popover

### Patch Changes

- Updated dependencies [a901693]
- Updated dependencies [00ec1aa]
- Updated dependencies [a3838c6]
- Updated dependencies [0cb0e68]
  - @design-system-rte/core@0.17.0

## 0.11.0

### Minor Changes

- 5e685f0: ## Changes
  - (Loader) add Loader component for react

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
  - (Breadcrumbs) correct unadressed accessibility criteria
  - (Breadcrumbs) correct missing nav tag for Breadcrumbs
  - (Breadcrumbs) correct breadcrumbs-head styling
  - (Breadcrumbs) correct test cases
  - (Breadcrumbs) add Breadcrumbs

### Patch Changes

- d282e25: ## Changes
  - add missing default font colors for Checkbox, Icon & Radio Button

- Updated dependencies [5e685f0]
- Updated dependencies [191f1e9]
- Updated dependencies [21cab4b]
  - @design-system-rte/core@0.16.0

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
