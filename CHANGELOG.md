# Design System RTE - Latest changes

# Angular

## 0.11.0

### Segmented Control

#### Minor Changes

- add validation for options to ensure proper configuration
- set default focus on selected segment
- force focus on first segment on tab keyboard navigation
- automatically toggle icon appearance on segment selection state
- correct frozen animation for segment change used to be handled by a timeout
- set selected indicator style using signals
- export component in angular public api
- extract focus handling logic into utils file
- use design token for outline width
- rename slider to selected indicator and harmonise related logic
- harmonise style + keyboard interaction
- improve keyboard interaction support
- add angular component
- increase width to display full segment label

### Switch

#### Minor Changes

- implement switch component with functionality and styling

### Storybook

#### Minor Changes

- add dark theme background for stories

### Divider

#### Minor Changes

- add Divider component with customizable orientation, thickness, appearance, and endPoint

### Storybook-badge

#### Minor Changes

- add Badge component stories and documentation for angular and update styles and structure for consistency

### Grid

#### Minor Changes

- set directive selector to rteCol & rteGrid to respect Angular style guidelines

### Button

#### Minor Changes

- add neutral and reverse variants to button styles

### Other

#### Minor Changes

- remove event.stopPropagation calls in key event handlers

#### Patch Changes

- Updated dependencies [4dead3f]
- Updated dependencies [f2f7349]
- Updated dependencies [7d41c21]
- Updated dependencies [cbd90b0]
- @design-system-rte/core@0.15.0

## 0.10.1

#### Patch Changes

- Updated dependencies [db7edfd]
- @design-system-rte/core@0.14.0

## 0.10.0

### textarea

#### Minor Changes

- update focus, error styles border and cursor on readonly and disabled
- add showCounter variable to display counter
- set correct style for label in side position
- prevent odd displaying on error state and disabled
- improve assistive text handling
- add component to tests apps
- add public api export
- add tests on storybook
- set better props handling + handle resizing logic on angular comp
- add auto scroll to top on blur event

### Link

#### Minor Changes

- add rel noopener noreferrer on external link

### Other

#### Minor Changes

- harmonise border style on focus + remove showAssistiveTextIcon prop + add link component on angular textarea
- add angular textarea component
- add decorative brand example
- set correct success icon
- set correct color token name
- improve formatting and consistency in Tag component and stories
- update Tag component to use computed properties for icon name and validation
- improve formatting and consistency in computedIconName getter
- update computedIconName method to return an empty string instead of default icon
- add Tag component with customizable properties and icon support

#### Patch Changes

- Updated dependencies [89289e7]
- Updated dependencies [f6bb90d]
- @design-system-rte/core@0.13.0

## 0.9.0

#### Minor Changes

- correct Badge display for icon & text
- enhance Badge component with improved class bindings and styling options
- implement Badge component in Angular

#### Patch Changes

- Updated dependencies [b824254]
- @design-system-rte/core@0.12.0
# React

## 0.10.0

### Segmented Control

#### Minor Changes

- extract updateSlider function
- add validation for options to ensure proper configuration
- set default focus on selected segment
- force focus on first segment on tab keyboard navigation
- automatically toggle icon appearance on segment selection state
- set selected indicator style using signals
- extract focus handling logic into utils file
- use design token for outline width
- improve focus handling by referencing parent element for segment queries
- rename slider to selected indicator and harmonise related logic
- harmonise style + keyboard interaction
- improve keyboard interaction support
- add angular component
- extract props types and constants to core
- add react component
- increase width to display full segment label

### Icon

#### Minor Changes

- set name props as string type

### Switch

#### Minor Changes

- added switch component to React with style and functionality

### Storybook

#### Minor Changes

- add dark theme background for stories

### Divider

#### Minor Changes

- implement Divider component with orientation, thickness, appearance, and endPoint

### Storybook-badge

#### Minor Changes

- add Badge component documentation

### Button

#### Minor Changes

- add neutral and reverse variants to button styles

### Other

#### Minor Changes

- remove event.stopPropagation calls in key event handlers
- add storybook interactions tests

#### Patch Changes

- Updated dependencies [4dead3f]
- Updated dependencies [f2f7349]
- Updated dependencies [7d41c21]
- Updated dependencies [cbd90b0]
- @design-system-rte/core@0.15.0

## 0.9.1

#### Patch Changes

- correct TextInput cursor for React
- Updated dependencies [db7edfd]
- @design-system-rte/core@0.14.0

## 0.9.0

### textarea

#### Minor Changes

- update focus, error styles border and cursor on readonly and disabled
- add showCounter variable to display counter
- set correct style for label in side position
- prevent odd displaying on error state and disabled
- simplify required and optional appearence
- improve assistive text handling
- add public api export
- add tests on storybook
- set better props handling + handle resizing logic on angular comp
- add auto scroll to top on blur event

### Link

#### Minor Changes

- add rel noopener noreferrer on external link

### Other

#### Minor Changes

- add type to textarea ref to avoid casting
- naming typo
- harmonise border style on focus + remove showAssistiveTextIcon prop + add link component on angular textarea
- add react textarea stories
- extract constants in core
- add react textarea component
- update changeDetectionStrategy for angular components
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

#### Patch Changes

- Updated dependencies [89289e7]
- Updated dependencies [f6bb90d]
- @design-system-rte/core@0.13.0

## 0.8.0

#### Minor Changes

- correct Badge display for icon & text
- enhance Badge component with improved class bindings and styling options
- add react component
- add Badge interface

#### Patch Changes

- Updated dependencies [b824254]
- @design-system-rte/core@0.12.0
# Core

## 0.15.0

### Segmented Control

#### Minor Changes

- automatically toggle icon appearance on segment selection state
- extract focus handling logic into utils file
- add angular component
- extract props types and constants to core
- add react component

### Switch

#### Minor Changes

- added switch component to Core with types and interface

### Divider

#### Minor Changes

- implement Divider component types with orientation, thickness, appearance, and endPoint

### Storybook-badge

#### Minor Changes

- add Badge component documentation

### Button

#### Minor Changes

- add neutral and reverse variants to button styles

### Other

#### Minor Changes

- add storybook interactions tests

## 0.14.0

#### Minor Changes

- add border-divider token color

## 0.13.0

### textarea

#### Minor Changes

- simplify required and optional appearence
- set better props handling + handle resizing logic on angular comp
- add auto scroll to top on blur event

### Other

#### Minor Changes

- add angular textarea component
- extract constants in core
- add react textarea component
- update Tag component to use computed properties for icon name and validation
- correct casing of compactSpacing property in Tag component and stories
- improve formatting and consistency in Tag component and interface
- add Tag component with status and decorative types, including styles and stories
# Design Docs

## 0.6.0

### Design-docs

#### Minor Changes

- add elevation, grid, spacing and typography documentation to the storybook

### Other


## 0.5.3

#### Patch Changes

- format code for consistency and readability across multiple components
- fixed a lot of storybook structure and cofig problem Addition of the borders page

## 0.5.2

#### Patch Changes

- 8227267: add groupName to radio button stories for better identification

## 0.5.1

#### Patch Changes

- 160dbca: Correct storybook interactions for SplitButtonComponent from angular

## 0.5.0

#### Minor Changes

- 2ab3664: add warning indicators to Work-in-progress components
