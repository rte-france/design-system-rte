# Design System RTE - Latest changes

# Angular

## 1.0.0

### Public Release

#### Major Changes

- Public Release

### Toast

#### Minor Changes

- set correct padding value
- extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
- add to angular test app
- add angular component

### Button

#### Minor Changes

- set correct position to badge
- decouple rteBadge from rteButton component but keep Badge capacities in Button
- add badge

### Banner

#### Minor Changes

- remove show icon props + remove top and left radius corner
- update design

### Tag

#### Patch Changes

- force icon for status tag type
- set right color for label and icon on success / information / alert variant

## 0.17.0

### Card

#### Minor Changes

- add keyboard handling
- mutualize testing common logic
- add accesibility options
- add active pseudo-state
- add focus ring for keyboard selection
- add card component

### Divider

#### Minor Changes

- correct horizontal display

### Side Navigation

#### Minor Changes

- add footer navigation items
- implement simple side nav from base side nav

### Tooltip

#### Minor Changes

- correct label display width to show all its content

### Tag

#### Patch Changes

- update text color + apply new background-color tokens

### Other

#### Patch Changes

- Updated dependencies [f22d3ee]
- Updated dependencies [8bca3e1]
- Updated dependencies [4a444d4]
- @design-system-rte/core@0.21.0

## 0.16.0

### Modal

#### Minor Changes

- unset scroll behavior on unmount
- add support for filled / outlined appearance for title icon
- add angular component

### Angular

#### Minor Changes

- add focus trap service

### Icon-button

#### Minor Changes

- add badge to component

### Other

#### Patch Changes

- Updated dependencies [a7d75ed]
- Updated dependencies [cc64a7f]
- @design-system-rte/core@0.20.0
# React

## 1.0.0

### Public Release

#### Major Changes

- Public Release

#### Minor Changes

- add correct component link
- rearange component navigation structure
- rearange component navigation structure
- add correct component link
- rearange component navigation structure

### Toast

#### Minor Changes

- set correct padding value
- extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
- restrict action button appearance using only label and callback props
- add angular component
- add spacing from viewport + handle warning case in priority + add leftIcon and action button display boolean
- add useCallback to prevent infinite rendering
- add component to react test app
- add priority queue management
- add basic react component

### Button

#### Minor Changes

- set correct position to badge
- add badge

### Banner

#### Minor Changes

- remove show icon props + remove top and left radius corner
- update design

### Tag

#### Patch Changes

- force icon for status tag type
- set right color for label and icon on success / information / alert variant

### Other

#### Patch Changes

- Updated dependencies [90fd2b4]
- Updated dependencies [1b87a18]
- Updated dependencies [f3d1179]
- Updated dependencies [b779f76]
- @design-system-rte/core@0.22.0

## 0.16.0

### Card

#### Minor Changes

- add keyboard handling
- add card to public api of packages and test in apps
- mutualize testing common logic
- add accesibility options
- add active pseudo-state
- add focus ring for keyboard selection
- add card component

### Side Navigation

#### Minor Changes

- : add missing props to useContentHeight detection
- add Divider support for navItems & navMenus
- add Badge support
- add footer items
- add Tooltip to SideNav
- correct accesibility standards for ul and li items
- add Nested Menus to SideNav
- implement simple side nav from base side nav

### Divider

#### Minor Changes

- correct horizontal display

### Tooltip

#### Minor Changes

- add customizable gap

### Tag

#### Patch Changes

- update text color + apply new background-color tokens

### Other

#### Patch Changes

- remove react and react dom from dependencies
- Updated dependencies [f22d3ee]
- Updated dependencies [8bca3e1]
- Updated dependencies [4a444d4]
- @design-system-rte/core@0.21.0

## 0.15.0

### Modal

#### Minor Changes

- unset scroll behavior on unmount
- add support for filled / outlined appearance for title icon
- enhance general style on react component
- add react modal component

### Textarea

#### Minor Changes

- ensure full width for container

### Overlay

#### Minor Changes

- add freezeNavigation prop to control body overflow and overlay styling

### Icon-button

#### Minor Changes

- add badge to component

### Other

#### Minor Changes

- rename useKeydownEscape hook

#### Patch Changes

- Updated dependencies [a7d75ed]
- Updated dependencies [cc64a7f]
- @design-system-rte/core@0.20.0
# Core

## 1.0.0

### Public Release

#### Major Changes

- Public Release

### Toast

#### Minor Changes

- extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
- add angular component
- add spacing from viewport + handle warning case in priority + add leftIcon and action button display boolean
- add priority queue management
- add basic react component

### Button

#### Minor Changes

- set correct position to badge
- add badge

### Banner

#### Minor Changes

- remove show icon props + remove top and left radius corner
- update design

## 0.21.0

### Docs

#### Minor Changes

- create subcomponent for pages

### Card

#### Minor Changes

- mutualize testing common logic
- add card component

### Side Navigation

#### Minor Changes

- add Divider support for navItems & navMenus
- add Badge support
- add footer items
- add NavItem selection for SideNav
- correct accesibility standards for ul and li items
- add Nested Menus to SideNav
- implement simple side nav from base side nav

### Tooltip

#### Minor Changes

- add customizable gap

### Other


## 0.20.0

### Modal

#### Minor Changes

- add support for filled / outlined appearance for title icon
- add react modal component

### Icon

#### Minor Changes

- add icon sizes constants

### Icon-button

#### Minor Changes

- add badge to component

### Other

# Design Docs

## 1.0.0

### Public Release

#### Major Changes

- Public Release

### Docs

#### Minor Changes

- add correct component link
- extract introduction in general bloc
- add new templating to get started docs for devs
- update Governance scheme in docs
- add design startup docs
- Add page valeurs
- add Kit de migration - general page
- add corrected Governance Scheme to docs
- add contribution/icons docs
- add bugs docs
- add evolutions docs
- add governance docs
- rearange component navigation structure
- update accessibility page to match global layout
- add icons docs
- add navigation for GetStarted sections
- rearange navigation sections for common part
- Add Elevation page
- add grids docs
- add border docs
- Add design tokens page
- add missing link to Icons docs page
- add new Home page for docs

#### Patch Changes

- prune typography doc files
- correct typography content padding
- correct typography redaction
- add missing links to Contribution docs
- add missing Figma link to Icons page
- add missing libraries image for Design startup docs

### Typography

#### Minor Changes

- change title from Typographie to Typography

### Design Docs

#### Minor Changes

- add typography docs

#### Patch Changes

- add typography docs

### Doc

#### Minor Changes

- add heading level 4 style
- Add Colors page

## 0.9.0

### Docs

#### Minor Changes

- update last update accordion icon
- add spacing page
- create subcomponent for pages
- refacto architecture for Introduction page

### Other

#### Patch Changes

- correct sidenav display when no stories are provided to a section

## 0.8.0

### Storybook

#### Minor Changes

- add Accessibilité page

### Other

