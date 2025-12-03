# @design-system-rte/core

## 0.22.0

### Minor Changes

- 90fd2b4: ## Changes
  - (Toast) extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
  - (Toast) add angular component
  - (Toast) add spacing from viewport + handle warning case in priority + add leftIcon and action button display boolean
  - (Toast) add priority queue management
  - (Toast) add basic react component

- 1b87a18: ## Changes
  - (Button) set correct position to badge
  - (Button) add badge

- f3d1179: ## Changes
  - (Banner) remove show icon props + remove top and left radius corner
  - (Banner) update design

- b779f76: ## Changes
  - (Docs) add new Home page for docs

## 0.21.0

### Minor Changes

- f22d3ee: ## Changes
  - (Docs) create subcomponent for pages

- 8bca3e1: ## Changes
  - (Card) mutualize testing common logic
  - (Card) add card component

- 4a444d4: ## Changes
  - (Side Navigation) add Divider support for navItems & navMenus
  - (Side Navigation) add Badge support
  - (Side Navigation) add footer items
  - (Side Navigation) add NavItem selection for SideNav
  - (Tooltip) add customizable gap
  - (Side Navigation) correct accesibility standards for ul and li items
  - (Side Navigation) add Nested Menus to SideNav
  - (Side Navigation) implement simple side nav from base side nav

## 0.20.0

### Minor Changes

- a7d75ed: ## Changes
  - (Modal) add support for filled / outlined appearance for title icon
  - (Modal) add react modal component
  - (Icon) add icon sizes constants

- cc64a7f: ## Changes
  - (Icon-button) add badge to component

## 0.19.0

### Minor Changes

- f246255: ## Changes
  - (Breadcrumbs) enable breadcrumbItem max width with ellipsis

- bb5af23: ## Changes
  - (Divider) add brand appearance

- 196aaab: ## Changes
  - (Split Button) enhance keyboard navigation
  - (Split Button) add dropdown to right button

- 97d3bea: ## Changes
  - (Link) add reverse variant

## 0.18.0

### Minor Changes

- 9e7b2cd: ## Changes
  - (Dropdown) correct dropdown keyboard navigation
  - (Breadcrumbs) integrate dropdown with breadcrumbs

## 0.17.0

### Minor Changes

- a901693: ## Changes
  - (Banner) use click output instead of input actionCallback
  - (Tokens) add zIndex tokens

- 00ec1aa: ## Changes
  - (Tab) extract scroll methods in utils
  - (Tab) add inverted case
  - (Tab) handle wrapped behavior
  - (Tab) add disabled state for tab items
  - (Tab) add angular component
  - (Tab) extract common props to core

- 0cb0e68: ## Changes
  - (Popover) add popover

### Patch Changes

- a3838c6: ## Changes
  - (Dropdown) correct angular integration between tab & dropdown

## 0.16.0

### Minor Changes

- 5e685f0: ## Changes
  - (Loader) add loader component for react and angular

- 191f1e9: ## Changes
  - (Segmented-control) added documentation for storybook
  - (Loader) add Loader component stories and documentation
  - (Textarea) add Storybook documentation and examples for Textarea component
  - add TextInput component documentation and stories with accessibility guidelines and various interaction states
  - (Switch) add Switch component stories and documentation
  - (Divider) add Divider component stories and documentation
  - (Chip) update story titles and add Chip documentation with images
  - (Tag) add Tag documentation and stories

- 21cab4b: ## Changes
  - (Breadcrumbs) add Breadcrumbs
  - (Breadcrumbs) set initial breacrumbs structure for React and Core

## 0.15.0

### Minor Changes

- 4dead3f: ## Changes
  - (Segmented Control) automatically toggle icon appearance on segment selection state
  - (Segmented Control) extract focus handling logic into utils file
  - (Segmented Control) add angular component
  - add storybook interactions tests
  - (Segmented Control) extract props types and constants to core
  - (Segmented Control) add react component

- f2f7349: ## Changes
  - (Switch) added switch component to Core with types and interface

- 7d41c21: ## Changes
  - (Divider) implement Divider component types with orientation, thickness, appearance, and endPoint

- cbd90b0: ## Changes
  - (Storybook-badge) add Badge component documentation

## 0.14.0

### Minor Changes

- db7edfd: ## Changes
  - add border-divider token color

## 0.13.0

### Minor Changes

- 89289e7: ## Changes
  - (textarea) simplify required and optional appearence
  - (textarea) set better props handling + handle resizing logic on angular comp
  - (textarea) add auto scroll to top on blur event
  - add angular textarea component
  - extract constants in core
  - add react textarea component

- f6bb90d: ## Changes
  - update Tag component to use computed properties for icon name and validation
  - correct casing of compactSpacing property in Tag component and stories
  - improve formatting and consistency in Tag component and interface
  - add Tag component with status and decorative types, including styles and stories

## 0.12.0

### Minor Changes

- b824254: ## Changes
  - enhance Badge component with improved class bindings and styling options
  - implement Badge component in Angular
  - add Badge interface

## 0.11.0

### Minor Changes

- ae703ee: ## Changes
  - add keyboard test constants file
  - add type to aria role mapping constant
  - add keyboard event handling for backspace and delete keys
  - add id property to text input component to get better accessibility
  - update keyboard event handling in stories to use correct syntax
  - extract chip props in interface

## 0.10.1

### Patch Changes

- 9fcc804: ## Changes
  - add correct behaviour on click

## 0.10.0

### Minor Changes

- 0c0177e: ## Changes
  - simplify aria attributes handling for TextInput
  - correct right-icon default behavior & positioning in InputText
  - correct content-success color
  - correct display & behavior of rightIcon & assistiveText for TextInput
  - add stories cases for TextInput
  - add textInput behavior for left & right Icons and error handling
  - add error and disabled props to TextInput component and update stories
  - enhance TextInput component with new props and styles for better usability
  - format TextInputProps for improved readability
  - add TextInput types and prepared file for component

## 0.9.0

### Minor Changes

- f51dfca: ## Changes
  - add cancel icon

## 0.8.0

### Minor Changes

- 7d6d633: ## Changes
  - add gradient mixins
  - add global themes variable to themes file

## 0.7.0

### Minor Changes

- 60c9c03: Update dependency from @design-system-rte/core
