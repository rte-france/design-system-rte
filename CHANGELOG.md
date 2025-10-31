# Design System RTE - Latest changes

# Angular

## 0.15.0

### Button

#### Minor Changes

- Change button selector to button[rteButton] & change implementation to native button without wrapper

### Breadcrumbs

#### Minor Changes

- add tooltip on ellipsed item
- enable breadcrumbItem max width with ellipsis

### Divider

#### Minor Changes

- add brand appearance

### Dropdown

#### Minor Changes

- add trigger props to allow arrow down key to open the dropdown

### Split Button

#### Minor Changes

- enhance keyboard navigation
- add dropdown to right button

### Link

#### Minor Changes

- add reverse variant

### Tag

#### Patch Changes

- remove vertical padding and change label font size for compact spacing variant

### Other

#### Minor Changes

- generate changesets automatically

#### Patch Changes

- Updated dependencies [f246255]
- Updated dependencies [bb5af23]
- Updated dependencies [196aaab]
- Updated dependencies [97d3bea]
- @design-system-rte/core@0.19.0

## 0.14.0

### Angular 18

#### Minor Changes

- Update Angular package to Angular@18 from @17

### Breadcrumbs

#### Minor Changes

- change truncated breadcrumbs icon size from small to medium
- integrate dropdown with breadcrumbs
- add dropdown to display truncated links

### Dropdown

#### Minor Changes

- correct dropdown keyboard navigation

### Icon-button

#### Minor Changes

- set correct focus style

### Tab

#### Patch Changes

- correct angular's tab navigation that was broken after incorporating dropdown behavior

### Other

#### Patch Changes

- Updated dependencies [9e7b2cd]
- @design-system-rte/core@0.18.0

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
# React

## 0.14.0

### Breadcrumbs

#### Minor Changes

- add tooltip on ellipsed item
- enable breadcrumbItem max width with ellipsis

### Divider

#### Minor Changes

- add brand appearance

### Split Button

#### Minor Changes

- enhance keyboard navigation
- remove unused selected props + change focus behavior type on focus-visible
- add dropdown to right button

### Link

#### Minor Changes

- add reverse variant

### Tag

#### Patch Changes

- remove vertical padding and change label font size for compact spacing variant

### Other

#### Patch Changes

- Updated dependencies [f246255]
- Updated dependencies [bb5af23]
- Updated dependencies [196aaab]
- Updated dependencies [97d3bea]
- @design-system-rte/core@0.19.0

## 0.13.0

### Breadcrumbs

#### Minor Changes

- change truncated breadcrumbs icon size from small to medium
- integrate dropdown with breadcrumbs
- add dropdown to display truncated links

### Dropdown

#### Minor Changes

- correct dropdown keyboard navigation

### Icon-button

#### Minor Changes

- set correct focus style

### Other

#### Patch Changes

- Updated dependencies [9e7b2cd]
- @design-system-rte/core@0.18.0

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
# Core

## 0.19.0

### Breadcrumbs

#### Minor Changes

- enable breadcrumbItem max width with ellipsis

### Divider

#### Minor Changes

- add brand appearance

### Split Button

#### Minor Changes

- enhance keyboard navigation
- add dropdown to right button

### Link

#### Minor Changes

- add reverse variant

### Other


## 0.18.0

### Dropdown

#### Minor Changes

- correct dropdown keyboard navigation

### Breadcrumbs

#### Minor Changes

- integrate dropdown with breadcrumbs

### Other


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
