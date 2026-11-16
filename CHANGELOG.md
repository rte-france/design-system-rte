# Design System RTE - Latest changes

# Angular

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

## 4.4.1

### Datepicker

#### Patch Changes

- add aria-invalid attribute and update required prop handling
- aria-current attribute for day cells

### Switch

#### Patch Changes

- add support for prefers-reduced-motion
- remove redondant aria-checked and aria-disabled + add name props for the native input + hide empty aria-label and aria-labelledBy

### Tab

#### Patch Changes

- add aria-orientation attribute based on tab direction
- add support for prefers-reduced-motion in scrolling behavior

### Toast

#### Patch Changes

- add prefers-reduced-motion config for position transition
- handle autodismiss timer correctly with keyboard focus

### Stepper

#### Patch Changes

- move aria-current from li to the button that holds the focus
- move separators inside list items and hide them from screen readers
- add missing ariaLabel default and input

### Loader

#### Patch Changes

- correct component not rendering correctly in Firefox

### Radio Button

#### Patch Changes

- correct button target size

### Other

#### Patch Changes

- Updated dependencies [96f178e]
- Updated dependencies [97f46b9]
- Updated dependencies [326b97a]
- @design-system-rte/core@1.22.1

## 4.4.0

### Button

#### Minor Changes

- add hierarchy system and integrate variant and appearance systems

### Select

#### Minor Changes

- harmonise placeholder display

### Icon Button

#### Minor Changes

- add hierarchy system in addition to appearance. Deprecate variant

### Datepicker

#### Patch Changes

- harmonize header title button aria label

### Segmented Control

#### Patch Changes

- handle window resize listeners destruction correctly
- prevent selection of segments already selected

### Other

#### Patch Changes

- Updated dependencies [b3eda66]
- Updated dependencies [d262fe6]
- Updated dependencies [13dd6ee]
- Updated dependencies [7855135]
- @design-system-rte/core@1.22.0
# React

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

## 2.4.1

### Datepicker

#### Patch Changes

- react - restore calendar trigger focus after closing
- add aria-invalid attribute and update required prop handling
- aria-current attribute for day cells

### Switch

#### Patch Changes

- add support for prefers-reduced-motion
- remove redondant aria-checked and aria-disabled + add name props for the native input + hide empty aria-label and aria-labelledBy

### Tab

#### Patch Changes

- add aria-orientation attribute based on tab direction
- add support for prefers-reduced-motion in scrolling behavior

### Toast

#### Patch Changes

- add prefers-reduced-motion config for position transition
- handle autodismiss timer correctly with keyboard focus

### Stepper

#### Patch Changes

- move aria-current from li to the button that holds the focus
- move separators inside list items and hide them from screen readers
- add missing ariaLabel default and input

### Radio Button

#### Patch Changes

- correct button target size

### Other

#### Patch Changes

- Updated dependencies [96f178e]
- Updated dependencies [97f46b9]
- Updated dependencies [326b97a]
- @design-system-rte/core@1.22.1

## 2.4.0

### Button

#### Minor Changes

- add hierarchy system and integrate variant and appearance systems

### Select

#### Minor Changes

- harmonise placeholder display

### Icon Button

#### Minor Changes

- add hierarchy system in addition to appearance. Deprecate variant

### Datepicker

#### Patch Changes

- harmonize header title button aria label
- react - fix props name hasActions and set default value as true

### Segmented Control

#### Patch Changes

- prevent selection of segments already selected

### Other

#### Patch Changes

- Updated dependencies [b3eda66]
- Updated dependencies [d262fe6]
- Updated dependencies [13dd6ee]
- Updated dependencies [7855135]
- @design-system-rte/core@1.22.0
# Core

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


## 1.22.1

### Datepicker

#### Patch Changes

- aria-current attribute for day cells

### Tab

#### Patch Changes

- add support for prefers-reduced-motion in scrolling behavior

### Stepper

#### Patch Changes

- add missing ariaLabel default and input

### Other


## 1.22.0

### Button

#### Minor Changes

- add hierarchy system and integrate variant and appearance systems

### Icon Button

#### Minor Changes

- add hierarchy system in addition to appearance. Deprecate variant

### Datepicker

#### Patch Changes

- harmonize header title button aria label
- react - fix props name hasActions and set default value as true

### Other

