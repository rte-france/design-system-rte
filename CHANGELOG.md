# Design System RTE - Latest changes

# Angular

## 5.0.0

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

## 4.2.1

### Checkbox

#### Patch Changes

- correct check icon color in dark mode

### Other


## 4.2.0

### Radio Button Group

#### Minor Changes

- rename props : - readOnly to isReadOnly - error to isError - errorMessage to errorText - groupTitle to groupTitleText
- remove boolean text display
- add required indication props

### Required Indicator

#### Minor Changes

- set correct icon size and set baseline alignment for requirement text

### Sidenav

#### Minor Changes

- add props to customize close/open collapsible button label

### Segmented Control

#### Minor Changes

- rename props - compactSpacing > isCompact - label > labelText
- modify layout and sizes

### Dropdown

#### Minor Changes

- add critical variant to dropdown item

### File Upload

#### Patch Changes

- correct width and min-width behavior

### Treeview

#### Patch Changes

- correct item layers overlap

### Tab

#### Patch Changes

- prevent tab label to overflow with other tabs

### Drawer

#### Patch Changes

- correct validation system
- avoid input validation infinite loop

### Other

#### Patch Changes

- Updated dependencies [345026e]
- Updated dependencies [6f84e04]
- Updated dependencies [9c03756]
- Updated dependencies [32d9b54]
- Updated dependencies [6ebeba7]
- Updated dependencies [fc945a9]
- @design-system-rte/core@1.21.0
# React

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

## 2.2.1

### Checkbox

#### Patch Changes

- correct check icon color in dark mode

### Other


## 2.2.0

### Radio Button Group

#### Minor Changes

- rename props : - readOnly to isReadOnly - error to isError - errorMessage to errorText - groupTitle to groupTitleText
- remove boolean text display
- add required indication props

### Required Indicator

#### Minor Changes

- set correct icon size and set baseline alignment for requirement text

### Sidenav

#### Minor Changes

- add props to customize close/open collapsible button label

### Segmented Control

#### Minor Changes

- rename props - compactSpacing > isCompact - label > labelText
- modify layout and sizes

### Loader

#### Minor Changes

- remove duplicate labelText

### Dropdown

#### Minor Changes

- add critical variant to dropdown item

### File Upload

#### Patch Changes

- correct width and min-width behavior

### Treeview

#### Patch Changes

- correct item layers overlap

### Tab

#### Patch Changes

- prevent tab label to overflow with other tabs

### Drawer

#### Patch Changes

- correct validation system
- avoid input validation infinite loop

### Other

#### Patch Changes

- Updated dependencies [345026e]
- Updated dependencies [6f84e04]
- Updated dependencies [9c03756]
- Updated dependencies [32d9b54]
- Updated dependencies [6ebeba7]
- Updated dependencies [fc945a9]
- @design-system-rte/core@1.21.0
# Core

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


## 1.20.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files

#### Patch Changes

- handle multiple error message on upload

### Switch

#### Patch Changes

- enforce accessibility

### Overlay

#### Patch Changes

- hide elements behind backdrop from TTS browse mode

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement

### Treeview

#### Patch Changes

- correct import statement

### Other

# Design Docs

## 1.7.0

### Button

#### Minor Changes

- add hierarchy system and integrate variant and appearance systems

### Other

#### Patch Changes

- Updated dependencies [b3eda66]
- Updated dependencies [aa17f48]
- Updated dependencies [d262fe6]
- Updated dependencies [13dd6ee]
- Updated dependencies [7855135]
- Updated dependencies [e2083ab]
- @design-system-rte/react@2.4.0

## 1.6.0

### Styles

#### Minor Changes

- add fallback support for missing or default Mode for Design Tokens. Theme still requires explicit definition

### Other

#### Patch Changes

- Updated dependencies [9c2be7c]
- Updated dependencies [9e3af77]
- @design-system-rte/react@1.16.0

## 1.5.0

### Banner

#### Minor Changes

- add compact version & correct inner elements position

### Other

#### Patch Changes

- Updated dependencies [8c6060f]
- Updated dependencies [a5ecd10]
- Updated dependencies [37ad849]
- Updated dependencies [9e88591]
- Updated dependencies [c5a93e2]
- Updated dependencies [87c57cf]
- Updated dependencies [610e235]
- @design-system-rte/react@1.15.0
