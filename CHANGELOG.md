# Design System RTE - Latest changes

# Angular

## 1.10.0

### Text-input

#### Minor Changes

- add enterKeyDown event

### Toast

#### Minor Changes

- add top-center position

### Tag

#### Minor Changes

- add decorative color + align names with token value

### Chip

#### Minor Changes

- add neutral variant

### Header

#### Minor Changes

- add missing padding on link
- add missing padding on mobile

### Sidenav

#### Minor Changes

- correct new Focus display for Items and Menus in new possible style combinations
- add compact Badges to compact Sidenav
- add Tooltip for Sidenav Header
- correct Header Identifier & Title display
- correct width of component and add ellipsis to its header
- correct import statements of new core imports
- correct active zone for nav items
- add compact mode for standardization with Header
- correct active state handling for sub-items
- add contrast capacities to component
- remove Drawer-Responsive logic from Sidenav & simplify template and rendering

### Date Picker

#### Minor Changes

- create a two-layer system for Menu so range in menu can be displayed properly in any size

### Date Range Picker

#### Minor Changes

- synchronize input highlight
- add Angular component

### Searchbar

#### Minor Changes

- change border radius from 8px to 4px

### Input

#### Patch Changes

- add or configure width props to be used

### Modal

#### Patch Changes

- expose public close method
- angular - remove the display dependance of custom content with description

### Radio-button

#### Patch Changes

- add support for external checked control

### Select

#### Patch Changes

- add missing background color

### Treeview

#### Patch Changes

- set right color for chevron and icon

### Card

#### Patch Changes

- remove shadow from outlined version

### Other

#### Patch Changes

- Updated dependencies [6e839c8]
- Updated dependencies [e4dc52f]
- Updated dependencies [7053ac6]
- Updated dependencies [65af3dd]
- Updated dependencies [e7afe99]
- Updated dependencies [77a7b3f]
- Updated dependencies [39dee3c]
- Updated dependencies [6be38db]
- @design-system-rte/core@1.10.0

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
# React

## 1.11.0

### Text-input

#### Minor Changes

- add enterKeyDown event

### Toast

#### Minor Changes

- add top-center position

### Tag

#### Minor Changes

- add decorative color + align names with token value

### Chip

#### Minor Changes

- add neutral variant

### Header

#### Minor Changes

- react - export component
- add missing padding on link
- add missing padding on mobile
- react - extract interface + fix review comments
- react add interaction stories
- react - add component

### Sidenav

#### Minor Changes

- correct new Focus display for Items and Menus in new possible style combinations
- add compact Badges to compact Sidenav
- add Tooltip for Sidenav Header
- correct Header Identifier & Title display
- correct width of component and add ellipsis to its header
- correct import statements of new core imports
- correct active zone for nav items
- add compact mode for standardization with Header
- correct active state handling for sub-items
- add contrast capacities to component
- remove Drawer-Responsive logic from Sidenav & simplify template and rendering

### Searchbar

#### Minor Changes

- change border radius from 8px to 4px

### Input

#### Patch Changes

- add or configure width props to be used

### Date Picker

#### Patch Changes

- create a two-layer system for Menu so range in menu can be displayed properly in any size

### Modal

#### Patch Changes

- react - add conditional rendering of description html element

### Radio-button

#### Patch Changes

- add support for external checked control

### Select

#### Patch Changes

- add missing background color

### Treeview

#### Patch Changes

- set right color for chevron and icon

### Dropdown

#### Patch Changes

- activate click event with on link

### Base-input-picker

#### Patch Changes

- react - set button type as button to prevent form sending

### Card

#### Patch Changes

- remove shadow from outlined version

### Other

#### Patch Changes

- Updated dependencies [6e839c8]
- Updated dependencies [e4dc52f]
- Updated dependencies [7053ac6]
- Updated dependencies [65af3dd]
- Updated dependencies [e7afe99]
- Updated dependencies [77a7b3f]
- Updated dependencies [39dee3c]
- Updated dependencies [6be38db]
- @design-system-rte/core@1.10.0

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
# Core

## 1.10.0

### Toast

#### Minor Changes

- add top-center position

### Tag

#### Minor Changes

- add decorative color + align names with token value

### Chip

#### Minor Changes

- add neutral variant

### Sidenav

#### Minor Changes

- add compact Badges to compact Sidenav
- add Tooltip for Sidenav Header
- add compact mode for standardization with Header
- add contrast capacities to component
- remove Drawer-Responsive logic from Sidenav & simplify template and rendering

### Searchbar

#### Minor Changes

- change border radius from 8px to 4px

### Input

#### Patch Changes

- add or configure width props to be used

### Date Picker

#### Patch Changes

- create a two-layer system for Menu so range in menu can be displayed properly in any size

### Radio-button

#### Patch Changes

- add support for external checked control

### Other


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

# Design Docs

## 1.3.0

### Tag

#### Minor Changes

- add decorative color + align names with token value

### Modal

#### Patch Changes

- expose public close method

### Other

#### Patch Changes

- Updated dependencies [220fb58]
- Updated dependencies [6e839c8]
- Updated dependencies [e4dc52f]
- Updated dependencies [7053ac6]
- Updated dependencies [65af3dd]
- Updated dependencies [dad03e5]
- Updated dependencies [e7afe99]
- Updated dependencies [77a7b3f]
- Updated dependencies [39dee3c]
- Updated dependencies [00c80a4]
- Updated dependencies [6be38db]
- Updated dependencies [07b55ba]
- Updated dependencies [2598109]
- Updated dependencies [98a5f9b]
- Updated dependencies [0cd5597]
- Updated dependencies [9fce4e2]
- @design-system-rte/react@1.11.0

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
