# Design System RTE - Latest changes

# Angular

## 3.4.0

### Drawer

#### Minor Changes

- add showFooter to opt out the default or provided footer

### Sidenav

#### Minor Changes

- add content projection for custom content in Sidenav header and footer

### Tab

#### Patch Changes

- add missing aria-label input/props and docs
- attach scroll & selectTab calculation to a single resize event listener to avoid logic leaks & enhance performance

### Icon

#### Patch Changes

- handle wrong icon names gracefully to let the render of others icons work when a wrong name is provided

### Select

#### Patch Changes

- synchronize options state for rendered dropdown via computed instead of signal manipulation

### Checkbox

#### Patch Changes

- add missing halo when interacting with component

### Radio-button

#### Patch Changes

- set correct position for focus indicator

### Banner

#### Patch Changes

- translate close button aria label value

### Other

#### Patch Changes

- Updated dependencies [fde18a4]
- Updated dependencies [975ea4d]
- Updated dependencies [15bf517]
- Updated dependencies [7628a6d]
- Updated dependencies [a7cdb36]
- @design-system-rte/core@1.17.0

## 3.3.1

### Sidenav

#### Patch Changes

- truncate nav-items text

### Uuid

#### Patch Changes

- replace uuid undeclared dependency for native crypto.randomUUID for random id generation

### Other

#### Patch Changes

- Updated dependencies [e14dbf6]
- @design-system-rte/core@1.16.1

## 3.3.0

### Styles

#### Minor Changes

- add fallback support for missing or default Mode for Design Tokens. Theme still requires explicit definition

### Tooltip

#### Patch Changes

- correct auto placement algorithm

### Other

#### Patch Changes

- Updated dependencies [9c2be7c]
- Updated dependencies [9e3af77]
- @design-system-rte/core@1.16.0

## 3.2.0

### Banner

#### Minor Changes

- correct close button size
- add compact version & correct inner elements position

### Dynamic-tab

#### Minor Changes

- correct component selected behavior & forms integration
- uplift common logic to core
- correct Angular Drag-n-drop keyboard behavior
- add Angular component

### Github

#### Minor Changes

- add github releases notes in CI flow

### Tab

#### Patch Changes

- avoid forms unwanted submitting while interacting with component inner button elements

### Tag

#### Patch Changes

- improve icon displaying mechanisme with iconName props

### Other

#### Patch Changes

- Updated dependencies [37ad849]
- Updated dependencies [9e88591]
- Updated dependencies [610e235]
- @design-system-rte/core@1.15.0
# React

## 1.17.0

### Treeview

#### Minor Changes

- add documentation
- react - deprecate onChange and add OnSelectionChange event handler prop

### Drawer

#### Minor Changes

- add showFooter to opt out the default or provided footer

### Sidenav

#### Minor Changes

- add content projection for custom content in Sidenav header and footer

### Tab

#### Patch Changes

- add missing aria-label input/props and docs

### Checkbox

#### Patch Changes

- add missing halo when interacting with component

### Radio-button

#### Patch Changes

- set correct position for focus indicator

### Dropdown

#### Patch Changes

- show nested menus that were not showing

### Banner

#### Patch Changes

- translate close button aria label value

### Other

#### Patch Changes

- Updated dependencies [fde18a4]
- Updated dependencies [975ea4d]
- Updated dependencies [15bf517]
- Updated dependencies [7628a6d]
- Updated dependencies [a7cdb36]
- @design-system-rte/core@1.17.0

## 1.16.1

### Sidenav

#### Patch Changes

- truncate nav-items text

### Uuid

#### Patch Changes

- replace uuid undeclared dependency for native crypto.randomUUID for random id generation

### Other

#### Patch Changes

- Updated dependencies [e14dbf6]
- @design-system-rte/core@1.16.1

## 1.16.0

### Styles

#### Minor Changes

- add fallback support for missing or default Mode for Design Tokens. Theme still requires explicit definition

### Tooltip

#### Patch Changes

- correct auto placement algorithm

### Other

#### Patch Changes

- Updated dependencies [9c2be7c]
- Updated dependencies [9e3af77]
- @design-system-rte/core@1.16.0

## 1.15.0

### Dropdown

#### Minor Changes

- allow custom fully custom children on component

### Pagination

#### Minor Changes

- react - add component

### Banner

#### Minor Changes

- correct close button size
- add compact version & correct inner elements position

### Dynamic-tab

#### Minor Changes

- correct component selected behavior & forms integration
- uplift common logic to core

### Github

#### Minor Changes

- add github releases notes in CI flow

### Tab

#### Patch Changes

- avoid forms unwanted submitting while interacting with component inner button elements

### Tag

#### Patch Changes

- improve icon displaying mechanisme with iconName props
- add default success value for status props

### Other

#### Patch Changes

- Updated dependencies [37ad849]
- Updated dependencies [9e88591]
- Updated dependencies [610e235]
- @design-system-rte/core@1.15.0
# Core

## 1.17.0

### Treeview

#### Minor Changes

- react - deprecate onChange and add OnSelectionChange event handler prop

### Drawer

#### Minor Changes

- add showFooter to opt out the default or provided footer

### Sidenav

#### Minor Changes

- add content projection for custom content in Sidenav header and footer

### Dropdown

#### Patch Changes

- show nested menus that were not showing

### Banner

#### Patch Changes

- translate close button aria label value

### Other


## 1.16.1

### Uuid

#### Patch Changes

- replace uuid undeclared dependency for native crypto.randomUUID for random id generation

### Other


## 1.16.0

### Styles

#### Minor Changes

- add fallback support for missing or default Mode for Design Tokens. Theme still requires explicit definition

### Tooltip

#### Patch Changes

- correct auto placement algorithm

### Other


## 1.15.0

### Banner

#### Minor Changes

- add compact version & correct inner elements position

### Dynamic-tab

#### Minor Changes

- uplift common logic to core
- add Angular component

### Tag

#### Patch Changes

- improve icon displaying mechanisme with iconName props

### Other

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
