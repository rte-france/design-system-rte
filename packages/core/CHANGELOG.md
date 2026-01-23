# @design-system-rte/core

## 1.2.1

### Patch Changes

- 1f8e40c: ## Changes
  - (Core) add valid alias path for badge utils import

## 1.2.0

### Minor Changes

- 8c512ea: ## Changes
  - (Select) add new documentation
  - (Assistive-text) add width props
  - (Select) improve style
  - (Assistive-text) add angular component
  - (Select) harmonise readonly and disable behavior + add stories scenario
  - (Select) Add angular component
  - extract common input props
  - (Dropdown) add selected state to simple dropdown item
  - extract required indicator in a component

- 921ffd7: ## Changes
  - (Design-tokens) update script to generate tokens with the new architecture
  - (Core) extract scripts out of design-tokens folder
  - (Core) change global architecture for design tokens

- f5946ce: ## Changes
  - (Breadcrumbs) Add Badge
  - add angular missing dependencies
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) add Badge

- 0dbb025: ## Changes
  - (Split-button) Add badge
  - (Core) use parameter object for shouldDisplayBadge utils
  - (Segmented Control) add badge
  - (Breadcrumbs) Add Badge
  - add angular missing dependencies
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) add Badge

- c6867f7: ## Changes
  - (Segmented Control) add badge
  - add angular missing dependencies
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) add Badge

- 251ae74: ## Changes
  - (Split-button) Add badge
  - (Badge) add utils function to check if it should display badge
  - (Core) add badge holder interface to use
  - (Dropdown) add Badge

- 38d9ec6: ## Changes
  - (Badge) use IconSize constant and add xs value

- 2cff3de: ## Changes
  - (Searchbar) add new documentation
  - (Searchbar) change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
  - (Text Input) correct placeholder exposition and handling
  - (Searchbar) add searchbar base functionality

- 29e0462: ## Changes
  - (Design Docs) correct sub-storybook context detection
  - (Angular Storybook) correct font resolutions from assets retrieved from core during webpack build
  - (Storybook) add breadcrumbs - overview page

## 1.1.0

### Minor Changes

- aa4024c: ## Changes
  - (Core) add Nunito font to serve to react and angular package

- ddb8b02: ## Changes
  - (Core) add elevation mixins

## 1.0.0

### Major Changes

- adc4eb6: ## Changes
  - (Public Release) Public Release

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
