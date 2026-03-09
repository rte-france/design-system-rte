# Design System RTE - Latest changes

# Angular

## 2.0.0

### Select

#### Minor Changes

- add valid label for Select all + allow selection on clicking on the checkbox for select item
- rewrite conditions + extract in sub function
- add support for header and footer on angular
- add support for multiple selection

### Chip

#### Minor Changes

- remove focus for type input

### Other

#### Patch Changes

- Updated dependencies [39623c1]
- @design-system-rte/core@1.5.0

## 1.4.0

### Segmented-control

#### Minor Changes

- add compact spacing variant
- add neutral appearance + modify height

### Dropdown

#### Minor Changes

- add missing aria attributes for dropdown item
- resolve circular dependency between menu & item when handling nested menus
- correct keyboard back navigation
- add nesting to Angular dropdown component

#### Patch Changes

- standardize mouseLeave dropdown submenu behavior in Angular to imatch React's one
- add angular dropdown to public api

### Drodpown

#### Minor Changes

- correct hovering of nested items closing ancestors in angular implementation

### Tab

#### Patch Changes

- replace bold style on hovering and selected tab with different shade of color

### Stepper

#### Patch Changes

- add missing step name color on hover

### Tag

#### Patch Changes

- use span to display label and allow aria-label attribute

### Sidenav

#### Patch Changes

- add base-side-nav to Angular's public API

### Other

#### Patch Changes

- Updated dependencies [c477d66]
- Updated dependencies [0d80052]
- @design-system-rte/core@1.4.0

## 1.3.0

### Stepper

#### Minor Changes

- make steps clickable inkeyboard interaction stories
- set active step label with primary color on angular
- use keydown event only
- use utils function to determine clickable state of a step
- remove log
- export component to public api
- add Angular component

### Dropdown

#### Minor Changes

- focus back trigger on closing it with escape input

### Radio-button

#### Patch Changes

- remove unnecessary cursor style
- rewrite radio button structure to prevent visual deformation on checked state

### Modal

#### Patch Changes

- set explicit margin auto to prevent overriding and keep it centered

### Angular

#### Patch Changes

- correct dependency nesting between angular and core from @design-system-rte

### Sidenav

#### Patch Changes

- allow all clicking area for nav item

### Core

#### Patch Changes

- expose a public API for component interfaces and utils

### Loader

#### Patch Changes

- export loader component

### Other

#### Patch Changes

- Updated dependencies [c58b706]
- Updated dependencies [d01f3a4]
- Updated dependencies [40b7bf8]
- Updated dependencies [a77bb52]
- @design-system-rte/core@1.3.0
# React

## 1.6.0

### Select

#### Minor Changes

- rewrite conditions + extract in sub function
- add support for multiple selection

### Chip

#### Minor Changes

- remove focus for type input

### Other

#### Patch Changes

- Updated dependencies [39623c1]
- @design-system-rte/core@1.5.0

## 1.5.0

### Segmented-control

#### Minor Changes

- add compact spacing variant
- add neutral appearance + modify height

### Tab

#### Patch Changes

- replace bold style on hovering and selected tab with different shade of color

### Stepper

#### Patch Changes

- add missing step name color on hover

### Dropdown

#### Patch Changes

- add missing aria attributes for dropdown item

### Tag

#### Patch Changes

- use span to display label and allow aria-label attribute

### Other

#### Patch Changes

- Updated dependencies [c477d66]
- Updated dependencies [0d80052]
- @design-system-rte/core@1.4.0

## 1.4.0

### Stepper

#### Minor Changes

- make steps clickable inkeyboard interaction stories
- use keydown event only
- use utils function to determine clickable state of a step
- export component to public api
- Add React component

### Dropdown

#### Minor Changes

- focus back trigger on closing it with escape input

### Radio-button

#### Patch Changes

- remove unnecessary cursor style
- rewrite radio button structure to prevent visual deformation on checked state

### Modal

#### Patch Changes

- set explicit margin auto to prevent overriding and keep it centered

### Sidenav

#### Patch Changes

- allow all clicking area for nav item

### Core

#### Patch Changes

- expose a public API for component interfaces and utils

### Loader

#### Patch Changes

- export loader component

### Other

#### Patch Changes

- Updated dependencies [c58b706]
- Updated dependencies [d01f3a4]
- Updated dependencies [40b7bf8]
- Updated dependencies [a77bb52]
- @design-system-rte/core@1.3.0
# Core

## 1.5.0

### Select

#### Minor Changes

- add support for multiple selection

### Other


## 1.4.0

### Segmented-control

#### Minor Changes

- add compact spacing variant
- add neutral appearance + modify height

### Dropdown

#### Patch Changes

- correct keyboard back navigation

### Drodpown

#### Patch Changes

- correct hovering of nested items closing ancestors in angular implementation

### Other


## 1.3.1

### Stepper

#### Patch Changes

- add component to public api of Core

### Other


## 1.3.0

### Stepper

#### Minor Changes

- use utils function to determine clickable state of a step
- remove log
- export component to public api
- add Angular component
- Add React component

### Core

#### Patch Changes

- set valid path for icon constants import
- expose a public API for component interfaces and utils
- repair missing and duplicated interfaces and constants

### Loader

#### Patch Changes

- export loader component

### Other

# Design Docs

## 1.2.0

### Design Docs

#### Minor Changes

- correct sub-storybook context detection
- add guideline page

### Angular Storybook

#### Minor Changes

- correct font resolutions from assets retrieved from core during webpack build

### Badge

#### Minor Changes

- add new Badge docs

### Breadcrumbs

#### Minor Changes

- add new Breadcrumbs docs

### Doc

#### Patch Changes

- update stylesheet path to use to access global style and font

### Other

#### Patch Changes

- Updated dependencies [8c512ea]
- Updated dependencies [f5946ce]
- Updated dependencies [0dbb025]
- Updated dependencies [c6867f7]
- Updated dependencies [251ae74]
- Updated dependencies [88a14d9]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
- @design-system-rte/react@1.2.0

## 1.1.0

### Docs

#### Minor Changes

- add presentation video to home page
- move theme and mode switcher to component page

#### Patch Changes

- correct general migration kit points table

### Design-docs

#### Minor Changes

- add react package as dependencies

### Core

#### Minor Changes

- add Nunito font to serve to react and angular package

### Other

#### Minor Changes

- better export of module to access style and component

#### Patch Changes

- Updated dependencies [f39a6fb]
- Updated dependencies [aa4024c]
- Updated dependencies [ddb8b02]
- Updated dependencies [ddd932b]
- Updated dependencies [0a36e15]
- @design-system-rte/react@1.1.0

## 1.0.0

### Public Release

#### Major Changes

- Public Release

### Docs

#### Minor Changes

- add correct component link
- extract introduction in general bloc
- add new templating to get started docs for devs
- add missing link to Icons docs page
- add new Home page for docs
- update Governance scheme in docs
- add missing libraries image for Design startup docs
- add design startup docs
- Add page valeurs
- add Kit de migration - general page
- add corrected Governance Scheme to docs
- add missing links to Contribution docs
- add missing Figma link to Icons page
- add contribution/icons docs
- add bugs docs
- add evolutions docs
- add governance docs
- rearange component navigation structure
- update accessibility page to match global layout
- change title from Typographie to Typography
- add icons docs
- add navigation for GetStarted sections
- rearange navigation sections for common part
- Add Elevation page
- add grids docs
- add border docs
- correct typography content padding
- correct typography redaction
- remove scaffolding files from typography implementation
- prune typography doc files
- add typography docs
- add heading level 4 style
- Add Colors page
- Add design tokens page

### Other

