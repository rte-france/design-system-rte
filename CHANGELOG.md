# Design System RTE - Latest changes

# Angular

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

## 1.2.0

### Dropdown

#### Minor Changes

- correct input synchronization from template component to directive
- add complex menu to angular

### Toast

#### Minor Changes

- enable autodismiss functionality

### Tab

#### Minor Changes

- export component to public api

### Other

#### Patch Changes

- Updated dependencies [1f8e40c]
- @design-system-rte/core@1.2.1

## 1.1.0

### Select

#### Minor Changes

- add new documentation
- improve style
- set positionning
- harmonise readonly and disable behavior + add stories scenario
- label style
- Add angular component

### Text Input

#### Minor Changes

- move AssistiveText & RequiredIndicator to base component of Text Input
- correct disabled display
- correct placeholder exposition and handling
- add missing output signals after base-text-input refactor

### Assistive-text

#### Minor Changes

- add width props
- add angular component

### Dropdown

#### Minor Changes

- allow correct escape dismissing
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge

### Breadcrumbs

#### Minor Changes

- Add Badge
- Add Badge

### Badge

#### Minor Changes

- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge

#### Patch Changes

- set valid position value for xs badge

### Split-button

#### Minor Changes

- Add badge
- Add badge

### Core

#### Minor Changes

- use parameter object for shouldDisplayBadge utils

### Segmented Control

#### Minor Changes

- add badge
- add badge

### Searchbar

#### Minor Changes

- add new documentation
- add new placeholder text for disabled input
- change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
- add searchbar base functionality

### Icon Button

#### Minor Changes

- show icon in disabled state button

### Design Docs

#### Minor Changes

- correct sub-storybook context detection
- add guideline page

### Other

#### Minor Changes

- extract required indicator in a component

#### Patch Changes

- Updated dependencies [8c512ea]
- Updated dependencies [921ffd7]
- Updated dependencies [f5946ce]
- Updated dependencies [0dbb025]
- Updated dependencies [c6867f7]
- Updated dependencies [251ae74]
- Updated dependencies [38d9ec6]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
- @design-system-rte/core@1.2.0
# React

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

## 1.3.0

### Dropdown

#### Minor Changes

- add complex menu to react

### Toast

#### Minor Changes

- enable autodismiss functionality

### Tab

#### Minor Changes

- export component to public api

### Other

#### Patch Changes

- Updated dependencies [1f8e40c]
- @design-system-rte/core@1.2.1

## 1.2.0

### Select

#### Minor Changes

- add new documentation
- improve style
- set positionning
- harmonise readonly and disable behavior + add stories scenario
- fix error variant on react component
- Add angular component
- add react component

### Text Input

#### Minor Changes

- move AssistiveText & RequiredIndicator to base component of Text Input
- extract assistive text in a component
- correct disabled display
- hide input value when input is disabled
- correct placeholder exposition and handling

### Assistive-text

#### Minor Changes

- add width props
- add angular component

### Link

#### Minor Changes

- harmonise appearance

### Dropdown

#### Minor Changes

- add selected state to simple dropdown item
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge
- handle icon props in badge
- add Badge

### Breadcrumbs

#### Minor Changes

- Add Badge
- Add Badge

### Badge

#### Minor Changes

- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge

#### Patch Changes

- set valid position value for xs badge

### Core

#### Minor Changes

- add badge holder interface to use
- use parameter object for shouldDisplayBadge utils
- add badge holder interface to use
- add badge holder interface to use
- add badge holder interface to use

### Split-button

#### Minor Changes

- Add badge
- Add badge

### Segmented Control

#### Minor Changes

- add badge
- add badge

### Searchbar

#### Minor Changes

- add new documentation
- add new placeholder text for disabled input
- correct inner input not losing focus when clearing is value
- change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
- add searchbar base functionality

### Design Docs

#### Minor Changes

- correct sub-storybook context detection
- add guideline page

### Storybook

#### Minor Changes

- add breadcrumbs - overview page
- add new tab of options, heading, availability and LastUpdate component

### Other

#### Minor Changes

- extract common input props
- extract required indicator in a component

#### Patch Changes

- Updated dependencies [8c512ea]
- Updated dependencies [921ffd7]
- Updated dependencies [f5946ce]
- Updated dependencies [0dbb025]
- Updated dependencies [c6867f7]
- Updated dependencies [251ae74]
- Updated dependencies [38d9ec6]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
- @design-system-rte/core@1.2.0
# Core

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


## 1.2.1

### Core

#### Patch Changes

- add valid alias path for badge utils import

### Other


## 1.2.0

### Select

#### Minor Changes

- add new documentation
- improve style
- harmonise readonly and disable behavior + add stories scenario
- Add angular component

### Assistive-text

#### Minor Changes

- add width props
- add angular component

### Dropdown

#### Minor Changes

- add selected state to simple dropdown item
- add Badge
- add Badge
- add Badge
- add Badge

### Design-tokens

#### Minor Changes

- update script to generate tokens with the new architecture

### Core

#### Minor Changes

- extract scripts out of design-tokens folder
- change global architecture for design tokens
- add badge holder interface to use
- use parameter object for shouldDisplayBadge utils
- add badge holder interface to use
- add badge holder interface to use
- add badge holder interface to use

### Breadcrumbs

#### Minor Changes

- Add Badge
- Add Badge

### Badge

#### Minor Changes

- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge
- add utils function to check if it should display badge
- use IconSize constant and add xs value

### Split-button

#### Minor Changes

- Add badge
- Add badge

### Segmented Control

#### Minor Changes

- add badge
- add badge

### Searchbar

#### Minor Changes

- add new documentation
- change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
- add searchbar base functionality

### Text Input

#### Minor Changes

- correct placeholder exposition and handling

### Design Docs

#### Minor Changes

- correct sub-storybook context detection

### Angular Storybook

#### Minor Changes

- correct font resolutions from assets retrieved from core during webpack build

### Storybook

#### Minor Changes

- add breadcrumbs - overview page

### Other

#### Minor Changes

- extract common input props
- extract required indicator in a component
- add angular missing dependencies
- add angular missing dependencies
- add angular missing dependencies

## 1.1.0

### Core

#### Minor Changes

- add Nunito font to serve to react and angular package
- add elevation mixins

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

