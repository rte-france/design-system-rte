# Design System RTE - Latest changes

# Angular

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

## 0.8.0

#### Minor Changes

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

#### Patch Changes

- Updated dependencies [ae703ee]
- @design-system-rte/core@0.11.0
# React

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

## 0.7.0

#### Minor Changes

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

#### Patch Changes

- Updated dependencies [ae703ee]
- @design-system-rte/core@0.11.0
# Core

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

## 0.12.0

#### Minor Changes

- enhance Badge component with improved class bindings and styling options
- implement Badge component in Angular
- add Badge interface
# Design Docs

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
