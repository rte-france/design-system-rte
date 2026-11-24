# Design System RTE - Latest changes

# Angular

## 4.7.0

### Number Input

#### Minor Changes

- uplift common component logic to core
- add Angular component

### Tab

#### Minor Changes

- implement automatic first-tab selection and update documentation

#### Patch Changes

- compute accessible aria-label when using badge
- fix tab accesibility structure in dropdown mode

### Stepper

#### Patch Changes

- explicit step information for accessibilty
- add disabled state detection for keyboard navigation
- remove unused lifecycle hooks and clean up imports

### Modal

#### Patch Changes

- add valid close button aria label + set icon title color
- harmonise header title and close button style

### Dropdown-menu

#### Patch Changes

- align max-width

### Breadcrumbs

#### Patch Changes

- add aria label for more items button

### Toast

#### Patch Changes

- update padding with valid value

### Other

#### Patch Changes

- Updated dependencies [c7b5c64]
- Updated dependencies [b36dac9]
- Updated dependencies [61b37c2]
- Updated dependencies [15e21d0]
- Updated dependencies [347484f]
- Updated dependencies [9f53034]
- @design-system-rte/core@1.25.0

## 4.6.0

### Base Input

#### Minor Changes

- angular - remove value when in disabled state
- set valid text content color + use right border color token for readonly state

### Text Input

#### Minor Changes

- add support for placeholder + add compact spacing

### Timepicker

#### Minor Changes

- remove value for disabled + fix various style and appearance
- add support for placeholder + add compactSpacing + allow hiding seconds

### Toast

#### Patch Changes

- add live announcements for toast messages with correct status
- replace deprecated variant props with appropriate props
- prevent event propagation when closing toast with Escape key
- implement keyboard interaction for closing toasts with Escape key
- restore focus on previous element when the toast is closed
- force closing button with action button
- update toast priority calculation to consider action button label
- hide accessibility live annoucement zone
- update ToastConfig properties and default values for better consistency

### Card

#### Patch Changes

- remove box-shadow on active state for clickable cards

### Other

#### Patch Changes

- Updated dependencies [ea1d4c0]
- Updated dependencies [4f74bda]
- Updated dependencies [c2ffdc1]
- @design-system-rte/core@1.24.0

## 4.5.0

### Base Input

#### Minor Changes

- add right icon logic to input bar to add space with the text
- Remove showRightIcon property and update right icon logic

### Datepicker

#### Patch Changes

- improve accessibility structure with row and accessible column header
- add full date accessible value for day cells

### Segmented Control

#### Patch Changes

- correct component roving system to comply with accessibility specifications

### Switch

#### Patch Changes

- add unique id support
- improve readOnly handling and add missing aria-readonly attribute

### Tab

#### Patch Changes

- add aria-label to tab items for improved accessibility
- add aria-disabled attribute for better accessibility
- hide navigation arrown in overflow mode from keyboard navigation + translate buttons label
- update badge visibility logic + align default badge type value with react

### Other

#### Patch Changes

- Updated dependencies [e87911b]
- Updated dependencies [a1fa820]
- Updated dependencies [4a53d30]
- Updated dependencies [79fca5b]
- @design-system-rte/core@1.23.0

# React

## 2.7.0

### Icon Button Group Item

#### Minor Changes

- add filled appearance to active icon button

### Icon Button Group

#### Minor Changes

- allow disabling individual icon button
- react - add component

#### Patch Changes

- replace fragment with keyed Fragment for improved rendering

### Number Input

#### Minor Changes

- uplift common component logic to core
- add React component

### Tab

#### Minor Changes

- implement automatic first-tab selection and update documentation

#### Patch Changes

- compute accessible aria-label when using badge
- fix tab accesibility structure in dropdown mode

### Stepper

#### Patch Changes

- explicit step information for accessibilty
- add disabled state detection for keyboard navigation

### Modal

#### Patch Changes

- add valid close button aria label + set icon title color
- harmonise header title and close button style

### Breadcrumbs

#### Patch Changes

- update dropdown offset
- add aria label for more items button
- add missing use of aria-label prop

### Toast

#### Patch Changes

- update padding with valid value

### Other

#### Minor Changes

- use types from core package

#### Patch Changes

- Updated dependencies [c7b5c64]
- Updated dependencies [b36dac9]
- Updated dependencies [61b37c2]
- Updated dependencies [15e21d0]
- Updated dependencies [347484f]
- Updated dependencies [9f53034]
- @design-system-rte/core@1.25.0

## 2.6.0

### Base Input

#### Minor Changes

- set valid text content color + use right border color token for readonly state

### Text Input

#### Minor Changes

- add support for placeholder + add compact spacing

### Timepicker

#### Minor Changes

- remove value for disabled + fix various style and appearance
- add support for placeholder + add compactSpacing + allow hiding seconds

### Toast

#### Patch Changes

- add live announcements for toast messages with correct status
- replace deprecated variant props with appropriate props
- prevent event propagation when closing toast with Escape key
- implement keyboard interaction for closing toasts with Escape key
- restore focus on previous element when the toast is closed
- force closing button with action button
- update ToastConfig properties and default values for better consistency

### Card

#### Patch Changes

- remove box-shadow on active state for clickable cards

### Other

#### Patch Changes

- Updated dependencies [ea1d4c0]
- Updated dependencies [4f74bda]
- Updated dependencies [c2ffdc1]
- @design-system-rte/core@1.24.0

## 2.5.0

### Base Input

#### Minor Changes

- Remove showRightIcon property and update right icon logic

### Datepicker

#### Patch Changes

- improve accessibility structure with row and accessible column header
- add full date accessible value for day cells
- remove unused labelId prop and add correct accesibility link with the label using htmlFor

### Segmented Control

#### Patch Changes

- correct component roving system to comply with accessibility specifications

### Switch

#### Patch Changes

- add unique id support
- improve readOnly handling and add missing aria-readonly attribute

### Tab

#### Patch Changes

- add aria-label to tab items for improved accessibility
- hide navigation arrown in overflow mode from keyboard navigation + translate buttons label
- update badge visibility logic + align default badge type value with react
- prevent click event when the tab is selected

### Other

#### Patch Changes

- Updated dependencies [e87911b]
- Updated dependencies [a1fa820]
- Updated dependencies [4a53d30]
- Updated dependencies [79fca5b]
- @design-system-rte/core@1.23.0

# Core

## 1.25.0

### Icon Button Group

#### Minor Changes

- allow disabling individual icon button
- react - add component

### Number Input

#### Minor Changes

- uplift common component logic to core

### Tab

#### Patch Changes

- compute accessible aria-label when using badge

### Stepper

#### Patch Changes

- explicit step information for accessibilty
- add disabled state detection for keyboard navigation

### Breadcrumbs

#### Patch Changes

- add aria label for more items button

### Other

#### Minor Changes

- use types from core package

## 1.24.0

### Text Input

#### Minor Changes

- add support for placeholder + add compact spacing

### Timepicker

#### Minor Changes

- remove value for disabled + fix various style and appearance
- add support for placeholder + add compactSpacing + allow hiding seconds

### Toast

#### Patch Changes

- add live announcements for toast messages with correct status

### Other

## 1.23.0

### Base Input

#### Minor Changes

- Remove showRightIcon property and update right icon logic

### Datepicker

#### Patch Changes

- improve accessibility structure with row and accessible column header
- add full date accessible value for day cells

### Segmented Control

#### Patch Changes

- correct component roving system to comply with accessibility specifications

### Tab

#### Patch Changes

- add aria-label to tab items for improved accessibility

### Other
