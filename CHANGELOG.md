# Design System RTE - Latest changes

# Angular

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

## 4.3.0

### Textarea

#### Minor Changes

- add support for placeholder

### Pagination

#### Patch Changes

- prevent component rendering when totalPages is equal or less than 1

### Base Input

#### Patch Changes

- increase clickable icon area to 24px

### Segmented Control

#### Patch Changes

- correct ariaLabel generation and provide default values
- add missing ariaLabelledBy input
- add missing prefers-reduced-motion for Selected Indicator animation

### Toast

#### Patch Changes

- add missing aria label for close button

### Select

#### Patch Changes

- repair auto-focus on component opening

### Other

#### Patch Changes

- Updated dependencies [7f092e9]
- Updated dependencies [d5987a1]
- @design-system-rte/core@1.21.1
# React

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

## 2.3.0

### Textarea

#### Minor Changes

- add support for placeholder

### Pagination

#### Patch Changes

- prevent component rendering when totalPages is equal or less than 1
- react - propagate aria-label props to nav element

### Base Input

#### Patch Changes

- increase clickable icon area to 24px

### Segmented Control

#### Patch Changes

- correct ariaLabel generation and provide default values
- add missing prefers-reduced-motion for Selected Indicator animation

### Toast

#### Patch Changes

- add missing aria label for close button

### Other

#### Patch Changes

- Updated dependencies [7f092e9]
- Updated dependencies [d5987a1]
- @design-system-rte/core@1.21.1
# Core

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


## 1.21.1

### Segmented Control

#### Patch Changes

- correct ariaLabel generation and provide default values

### Toast

#### Patch Changes

- add missing aria label for close button

### Other


## 1.21.0

### Radio Button Group

#### Minor Changes

- rename props : - readOnly to isReadOnly - error to isError - errorMessage to errorText - groupTitle to groupTitleText
- remove boolean text display
- add required indication props

### Sidenav

#### Minor Changes

- add props to customize close/open collapsible button label

### Segmented Control

#### Minor Changes

- rename props - compactSpacing > isCompact - label > labelText

### Dropdown

#### Minor Changes

- add critical variant to dropdown item

### Treeview

#### Patch Changes

- correct item layers overlap

### Drawer

#### Patch Changes

- correct validation system
- avoid input validation infinite loop

### Other

