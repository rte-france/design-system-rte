# Design System RTE - Latest changes

# Angular

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

## 4.1.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files
- allow screen reader to announce status changes

#### Patch Changes

- handle multiple error message on upload
- allow mutiple files to be added with already existing files

### Switch

#### Patch Changes

- add documentation
- enforce accessibility

### Time Picker

#### Patch Changes

- add documentation
- prevent deleting value from input when digit is readonly

### Overlay

#### Patch Changes

- hide elements behind backdrop from TTS browse mode

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement
- avoid unwanted ellipsis from maxWidth not handled correctly

### Other

#### Patch Changes

- Updated dependencies [bbb07e5]
- Updated dependencies [f77718e]
- Updated dependencies [a17f77a]
- Updated dependencies [441a083]
- Updated dependencies [90a22ed]
- Updated dependencies [cae9b18]
- @design-system-rte/core@1.20.0
# React

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

### Toast

#### Patch Changes

- add missing aria label for close button

### Segmented Control

#### Patch Changes

- add missing prefers-reduced-motion for Selected Indicator animation

### Other

#### Patch Changes

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

## 2.1.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files
- allow screen reader to announce status changes

#### Patch Changes

- handle multiple error message on upload
- allow mutiple files to be added with already existing files

### Switch

#### Patch Changes

- add documentation
- enforce accessibility

### Time Picker

#### Patch Changes

- add documentation
- prevent deleting value from input when digit is readonly

### Overlay

#### Patch Changes

- hide elements behind backdrop from TTS browse mode

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement
- avoid unwanted ellipsis from maxWidth not handled correctly

### Other

#### Patch Changes

- Updated dependencies [bbb07e5]
- Updated dependencies [f77718e]
- Updated dependencies [a17f77a]
- Updated dependencies [441a083]
- Updated dependencies [90a22ed]
- Updated dependencies [cae9b18]
- @design-system-rte/core@1.20.0
# Core

## 1.21.1

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


## 1.19.0

### Loader

#### Minor Changes

- remove showLabel prop

### Drawer

#### Minor Changes

- add accessibility control in case the component can't resolve a valid aria label

### File Upload

#### Patch Changes

- add accessible description and label

### Other

#### Minor Changes

- Enhance assistive text handling across input components
# Design Docs

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

## 1.4.0

### Navigation

#### Minor Changes

- add RouterLink support

### Icon

#### Minor Changes

- create new Icon Registry to avoid Http request for each icon instance

### Other

#### Patch Changes

- Updated dependencies [459a1d3]
- Updated dependencies [d3332d9]
- @design-system-rte/react@1.13.0
