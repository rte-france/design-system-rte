# Design System RTE - Latest changes

# Angular

## 0.13.0

### Banner

#### Minor Changes

- conditionally render message and title in banner component + set correct action button size
- use click output instead of input actionCallback
- add component to tests apps
- add internal state to handle banner visibility
- add angular component + add keyboard interaction tests

### Tab

#### Minor Changes

- add overflow type stories
- add overflow type and dropdown support for angular tab component
- extract scroll methods in utils
- add inverted case
- handle vertical up and down arrow key navigation
- add disabled state for tab items
- add angular component

### Badge

#### Minor Changes

- add simple angular badge type
- add simple badge

### Dropdown

#### Minor Changes

- update trigger reference for position calculation on angular comp
- correct angular integration between tab & dropdown
- correct dropdown positioning
- correct dropdown item selection with enter
- correct trigger holding focus when navigating with tab
- avoid scrollbar navigation while navigating a dropdown-menu using the keyboard
- handle menu key input for navigation and closing
- add dropdown system

### Segmented-control

#### Minor Changes

- extract selected indicator position logic in common hook + set top position to remove relative position

### Popover

#### Minor Changes

- add popover directive

### Other

#### Patch Changes

- Updated dependencies [a901693]
- Updated dependencies [00ec1aa]
- Updated dependencies [a3838c6]
- Updated dependencies [0cb0e68]
- @design-system-rte/core@0.17.0

## 0.12.0

### Loader

#### Minor Changes

- add Loader component for angular
- added Loader documentation for storybook and stories

### Segmented-control

#### Minor Changes

- added Segmented-control documentation for storybook and stories

### Textarea

#### Minor Changes

- added Textarea documentation for storybook and stories

### Switch

#### Minor Changes

- added Switch documentation for storybook and stories

### Divider

#### Minor Changes

- added Divider documentation for storybook and stories

### Chip

#### Minor Changes

- added Chip documentation for storybook and stories

### Icon-title

#### Minor Changes

- refactor IconTitle component to use in stories

### Tag

#### Minor Changes

- added Tag documentation for storybook and stories

### Breacrumbs

#### Minor Changes

- correct unadressed accessibility criteria

### Breadcrumbs

#### Minor Changes

- add missing truncated test
- correct breadcrumbs-head styling
- add breadcrumbs

### Other

#### Patch Changes

- add missing default font colors for Checkbox, Icon & Radio Button
- Updated dependencies [5e685f0]
- Updated dependencies [191f1e9]
- Updated dependencies [21cab4b]
- @design-system-rte/core@0.16.0

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

### Segmented-control

#### Minor Changes

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

### Other

#### Minor Changes

- remove event.stopPropagation calls in key event handlers

#### Patch Changes

- Updated dependencies [4dead3f]
- Updated dependencies [f2f7349]
- Updated dependencies [7d41c21]
- Updated dependencies [cbd90b0]
- @design-system-rte/core@0.15.0
# React

## 0.12.0

### Banner

#### Minor Changes

- conditionally render message and title in banner component + set correct action button size
- add component to tests apps
- add internal state to handle banner visibility
- add angular component + add keyboard interaction tests
- add react component

### Tab

#### Minor Changes

- add overflow type stories
- add overflow type and dropdown support for angular tab component
- extract scroll methods in utils
- add inverted case
- handle vertical up and down arrow key navigation
- handle wrapped behavior
- add disabled state for tab items
- add angular component
- extract common props to core
- add react component

### Badge

#### Minor Changes

- add react simple badge component

### Segmented-control

#### Minor Changes

- extract selected indicator position logic in common hook + set top position to remove relative position

### Popover

#### Minor Changes

- add popover

### Other

#### Minor Changes

- add script to scaffold react component

#### Patch Changes

- Updated dependencies [a901693]
- Updated dependencies [00ec1aa]
- Updated dependencies [a3838c6]
- Updated dependencies [0cb0e68]
- @design-system-rte/core@0.17.0

## 0.11.0

### Loader

#### Minor Changes

- add Loader component for react
- added Loader documentation for storybook and stories

### Segmented-control

#### Minor Changes

- added Segmented-control documentation for storybook and stories

### Textarea

#### Minor Changes

- added Textarea documentation for storybook and stories

### Switch

#### Minor Changes

- added Switch documentation for storybook and stories

### Divider

#### Minor Changes

- added Divider documentation for storybook and stories

### Chip

#### Minor Changes

- added Chip documentation for storybook and stories

### Icon-title

#### Minor Changes

- refactor IconTitle component to use in stories

### Tag

#### Minor Changes

- added Tag documentation for storybook and stories

### Breadcrumbs

#### Minor Changes

- correct unadressed accessibility criteria
- correct missing nav tag for Breadcrumbs
- correct breadcrumbs-head styling
- correct test cases
- add Breadcrumbs

### Other

#### Patch Changes

- add missing default font colors for Checkbox, Icon & Radio Button
- Updated dependencies [5e685f0]
- Updated dependencies [191f1e9]
- Updated dependencies [21cab4b]
- @design-system-rte/core@0.16.0

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

### Segmented-control

#### Minor Changes

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
# Core

## 0.17.0

### Banner

#### Minor Changes

- use click output instead of input actionCallback

### Tokens

#### Minor Changes

- add zIndex tokens

### Tab

#### Minor Changes

- extract scroll methods in utils
- add inverted case
- handle wrapped behavior
- add disabled state for tab items
- add angular component
- extract common props to core

### Popover

#### Minor Changes

- add popover

### Dropdown

#### Patch Changes

- correct angular integration between tab & dropdown

### Other


## 0.16.0

### Loader

#### Minor Changes

- add loader component for react and angular
- add Loader component stories and documentation

### Segmented-control

#### Minor Changes

- added documentation for storybook

### Textarea

#### Minor Changes

- add Storybook documentation and examples for Textarea component

### Switch

#### Minor Changes

- add Switch component stories and documentation

### Divider

#### Minor Changes

- add Divider component stories and documentation

### Chip

#### Minor Changes

- update story titles and add Chip documentation with images

### Tag

#### Minor Changes

- add Tag documentation and stories

### Breadcrumbs

#### Minor Changes

- add Breadcrumbs
- set initial breacrumbs structure for React and Core

### Other

#### Minor Changes

- add TextInput component documentation and stories with accessibility guidelines and various interaction states

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

### Other

#### Minor Changes

- add storybook interactions tests
# Design Docs

## 0.7.0

#### Minor Changes

- replace png images without emojis for svg files for storybook

## 0.6.1

### Badge

#### Patch Changes

- add controls for empty appearance

### Other


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
