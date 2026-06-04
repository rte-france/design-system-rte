# Design System RTE - Latest changes

# Angular

## 1.9.0

### Datepicker

#### Minor Changes

- angular - remove mutted color on placeholder
- add segmented-date-field inner component
- add base Datepicker structure

### Date Range Picker

#### Minor Changes

- extract common method and hooks into pickers folder

### Searchbar

#### Minor Changes

- allow customized width

### Grid

#### Minor Changes

- add rte-\* prefix to css class

### Header

#### Minor Changes

- correct nav items layering when items contains a badge
- add Dropdown menu capacities to mobile menu
- add header-mobile to support UI for small devices
- correct subheader rendering & display
- add Header component

### Dropdown

#### Minor Changes

- correct dropdown-item display when handling link elements

### Overlay

#### Patch Changes

- add navigation freezing only on modal and prevent auto scroll

### Drawer

#### Patch Changes

- add output events for primary & secondary buttons in footer

### Other

#### Patch Changes

- Updated dependencies [b4e910a]
- Updated dependencies [0687530]
- Updated dependencies [1964611]
- Updated dependencies [319a507]
- Updated dependencies [b7d1755]
- @design-system-rte/core@1.9.0

## 1.8.0

### Input

#### Minor Changes

- correct focus ring display of right-icon & input selection via label
- correct display & colors in dark mode

### Datepicker

#### Minor Changes

- angular - remove mutted color on placeholder

### Timepicker

#### Minor Changes

- remove up/down keyboard controls from main input segments
- remove focus on readonly digit
- set base Angular implementation

### Dropdown

#### Minor Changes

- correct menu elevation in Angular implementation

### Checkbox

#### Patch Changes

- add missing output signal for change

### Other

#### Patch Changes

- Updated dependencies [ad4c602]
- Updated dependencies [5cb6e5d]
- @design-system-rte/core@1.8.0

## 1.7.0

### File-upload

#### Minor Changes

- add angular component

### Tooltip

#### Minor Changes

- remove max width + fix positionning on angular component

### Datepicker

#### Minor Changes

- set segmented-field placeholder values to jj/mm/aaaa
- add a11y support for segmented field and datepicker-menu
- add keyboard page switch navigation for month and year calendar views
- introduce hasAction boolean option to control calendar behavior
- add min, max and disable dates features
- add keyboard navigation and controls for segmented-date-field
- add segmented-date-field inner component
- handle different views  navigations
- add base Datepicker structure

### Input

#### Minor Changes

- correct rightIcon not showing in disabled and readonly inputs
- correct display for projected inputs

### Dropdown

#### Minor Changes

- add custom body capacities for Datepicker implementation and Searchbar requirements

### Accordion

#### Patch Changes

- add missing title input signal

### Other

#### Patch Changes

- Updated dependencies [6469a9e]
- Updated dependencies [a6d573a]
- Updated dependencies [3b5b20a]
- @design-system-rte/core@1.7.0
# React

## 1.10.0

### Datepicker

#### Minor Changes

- react - move component to picker folder
- react - add calendar picker
- react - add basic date input picker

### Date Range Picker

#### Minor Changes

- react - handle ending date selection
- react - better handle acessibility label feature + improve code syntax
- react - handle all behavior
- extract common method and hooks into pickers folder
- add react component

### Searchbar

#### Minor Changes

- allow customized width

### Grid

#### Minor Changes

- add rte-\* prefix to css class

### Overlay

#### Patch Changes

- add navigation freezing only on modal and prevent auto scroll

### Drawer

#### Patch Changes

- add output events for primary & secondary buttons in footer

### Dropdown

#### Patch Changes

- add missing export statements in index file

### Other

#### Minor Changes

- improve story file generation with autodocs tag

#### Patch Changes

- Updated dependencies [b4e910a]
- Updated dependencies [0687530]
- Updated dependencies [1964611]
- Updated dependencies [319a507]
- Updated dependencies [b7d1755]
- @design-system-rte/core@1.9.0

## 1.9.0

### Datepicker

#### Minor Changes

- react - move component to picker folder
- react - add calendar picker
- react - add basic date input picker

### Input

#### Minor Changes

- correct display & colors in dark mode

### Timepicker

#### Minor Changes

- react - remove focus on readonly digit
- react - add missing space between time segment value
- improve general logic and fix typos
- add react component

### Dropdown

#### Minor Changes

- extract baseDropdown component to add flexibility

### Other

#### Minor Changes

- improve story file generation with autodocs tag

#### Patch Changes

- Updated dependencies [ad4c602]
- Updated dependencies [5cb6e5d]
- @design-system-rte/core@1.8.0

## 1.8.0

### File-upload

#### Minor Changes

- allow hiding assistive text
- add missing autodocs tag to story
- add react component
- allow hiding assistive text
- add missing autodocs tag to story
- add react component

### Loader

#### Minor Changes

- remove gap when there is no label
- remove gap when there is no label

### Tooltip

#### Minor Changes

- react - remove max width
- react - remove max width

### Other

#### Minor Changes

- add id generation function
- add id generation function

#### Patch Changes

- Updated dependencies [6469a9e]
- Updated dependencies [a6d573a]
- Updated dependencies [3b5b20a]
- @design-system-rte/core@1.7.0
# Core

## 1.9.0

### Date Range Picker

#### Minor Changes

- react - better handle acessibility label feature + improve code syntax
- react - handle all behavior
- extract common method and hooks into pickers folder

### Grid

#### Minor Changes

- add rte-\* prefix to css class

### Core

#### Minor Changes

- add new color tokens

### Header

#### Minor Changes

- correct nav items layering when items contains a badge
- add header-mobile to support UI for small devices
- correct subheader rendering & display
- add Header component

### Dropdown

#### Minor Changes

- correct dropdown-item display when handling link elements

### Drawer

#### Patch Changes

- add output events for primary & secondary buttons in footer

### Other


## 1.8.0

### Datepicker

#### Minor Changes

- react - move component to picker folder
- react - add calendar picker
- react - add basic date input picker

### Dropdown

#### Minor Changes

- correct menu elevation in Angular implementation

### Timepicker

#### Minor Changes

- set base Angular implementation
- react - remove focus on readonly digit
- react - add missing space between time segment value
- improve general logic and fix typos
- add react component

### Other


## 1.7.0

### File-upload

#### Minor Changes

- allow hiding assistive text
- add react component

### Datepicker

#### Minor Changes

- add a11y support for segmented field and datepicker-menu
- add keyboard page switch navigation for month and year calendar views
- add min, max and disable dates features
- add keyboard navigation and controls for segmented-date-field
- add segmented-date-field inner component
- handle different views  navigations

### Dropdown

#### Minor Changes

- correct autofocus behavior

### Other

# Design Docs

## 1.2.1

#### Patch Changes

- add Template D → Évolution Dev to Jira templates section
- update intro text to reflect 4 contribution types including Évolution Dev
- Updated dependencies [d7726a1]
- Updated dependencies [ea178db]
- Updated dependencies [4fbabfe]
- Updated dependencies [c855acb]
- Updated dependencies [16fed7b]
- Updated dependencies [94b9002]
- Updated dependencies [b6fdcfd]
- @design-system-rte/react@1.7.0

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

