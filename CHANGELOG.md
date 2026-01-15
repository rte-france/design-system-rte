# Design System RTE - Latest changes

# Angular

## 1.1.0

### Searchbar

#### Minor Changes

- add new documentation
- add new placeholder text for disabled input
- change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
- add searchbar base functionality

### Icon Button

#### Minor Changes

- show icon in disabled state button

### Text Input

#### Minor Changes

- correct disabled display
- correct placeholder exposition and handling
- add missing output signals after base-text-input refactor

### Design Docs

#### Minor Changes

- correct sub-storybook context detection
- add guideline page

### Badge

#### Patch Changes

- set valid position value for xs badge

### Other

#### Patch Changes

- Updated dependencies [921ffd7]
- Updated dependencies [38d9ec6]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
- @design-system-rte/core@1.2.0

## 1.0.1

### Docs

#### Patch Changes

- update test to take theme-selector component into account
- order toast stories

### Popover

#### Patch Changes

- update shadows

### Modal

#### Patch Changes

- update shadows
- increase border radius for size L and XL

### Dropdown

#### Patch Changes

- update shadows

### Card

#### Patch Changes

- update shadows

### Banner

#### Patch Changes

- update shadows

### Other

#### Patch Changes

- better export of module to access style and component
- update precommit hook
- improve prettier integration
- Updated dependencies [aa4024c]
- Updated dependencies [ddb8b02]
- @design-system-rte/core@1.1.0

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

### Other

#### Patch Changes

- Updated dependencies [90fd2b4]
- Updated dependencies [1b87a18]
- Updated dependencies [f3d1179]
- Updated dependencies [b779f76]
- @design-system-rte/core@0.22.0

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
# React

## 1.2.0

### Searchbar

#### Minor Changes

- add new documentation
- add new placeholder text for disabled input
- correct inner input not losing focus when clearing is value
- change component structure so input inner border reacts correctly to focus & assistive text takes all the width of its container
- add searchbar base functionality

### Text Input

#### Minor Changes

- correct disabled display
- hide input value when input is disabled
- correct placeholder exposition and handling

### Design Docs

#### Minor Changes

- correct sub-storybook context detection
- add guideline page

### Storybook

#### Minor Changes

- add breadcrumbs - overview page
- add new tab of options, heading, availability and LastUpdate component

### Badge

#### Patch Changes

- set valid position value for xs badge

### Other

#### Patch Changes

- Updated dependencies [921ffd7]
- Updated dependencies [38d9ec6]
- Updated dependencies [2cff3de]
- Updated dependencies [29e0462]
- @design-system-rte/core@1.2.0

## 1.1.0

### Docs

#### Minor Changes

- update test to take theme-selector component into account
- harmonise stories layout
- move theme and mode switcher to component page

#### Patch Changes

- order toast stories

### Core

#### Minor Changes

- add Nunito font to serve to react and angular package

### Popover

#### Patch Changes

- update shadows

### Modal

#### Patch Changes

- update shadows
- increase border radius for size L and XL

### Dropdown

#### Patch Changes

- update shadows

### Card

#### Patch Changes

- prevent click action on disabled or not clickable state
- update shadows

### Banner

#### Patch Changes

- update shadows

### Other

#### Minor Changes

- better export of module to access style and component

#### Patch Changes

- upgrade @storybook/addon-essentials and @storybook/addon-interactions packages
- Updated dependencies [aa4024c]
- Updated dependencies [ddb8b02]
- @design-system-rte/core@1.1.0

## 1.0.0

### Public Release

#### Major Changes

- Public Release

### Toast

#### Minor Changes

- set correct padding value
- extract getToastPriority logic to core + use computed to display actionButton + add custom icon to input
- restrict action button appearance using only label and callback props
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
# Core

## 1.2.0

### Design-tokens

#### Minor Changes

- update script to generate tokens with the new architecture

### Core

#### Minor Changes

- extract scripts out of design-tokens folder
- change global architecture for design tokens

### Badge

#### Minor Changes

- use IconSize constant and add xs value

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


## 1.1.0

### Core

#### Minor Changes

- add Nunito font to serve to react and angular package
- add elevation mixins

### Other


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

### Other

#### Patch Changes

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

