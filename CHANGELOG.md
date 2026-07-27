# Design System RTE - Latest changes

# Angular

## 3.0.0

### Navigation

#### Major Changes

- add RouterLink support

### Icon

#### Minor Changes

- create new Icon Registry to avoid Http request for each icon instance

### Dropdown

#### Patch Changes

- correct overlay position when projected from Datepicker, Daterangepicker or Timepicker

### Other

#### Patch Changes

- Updated dependencies [459a1d3]
- @design-system-rte/core@1.13.0

## 2.1.0

### Select

#### Minor Changes

- correct clear button size. It was medium sized instead of small as Design expected
- correct display and behavior while disabled

#### Patch Changes

- reset button send valid empty string or empty array value
- angular - set initial value from value props
- onChange return the full array empty or filled when clicking on selectAll

### Switch

#### Minor Changes

- add Angular Form integration via Control Value Accessor

### Forms

#### Minor Changes

- add Angular Forms integration via Control Value Accessor to input & input-like components

### Tooltip

#### Patch Changes

- correct unwanted tooltip display blinking while hovering
- correct overflow clipping

### Sidenav

#### Patch Changes

- correct opening & closing behavior and transition

### Tag

#### Patch Changes

- correct height & font-size for standard and compact mode

### Other

#### Patch Changes

- Updated dependencies [3907f5d]
- @design-system-rte/core@1.12.1

## 2.0.0

### Divider

#### Minor Changes

- add Code Connect template files for Figma

### Tooltip

#### Minor Changes

- add Code Connect template files for Figma

### Icon Button

#### Minor Changes

- add Code Connect template files for Figma

### Tag

#### Minor Changes

- add Code Connect template files for Figma

### Card

#### Minor Changes

- add Code Connect template files for Figma

### Avatar

#### Minor Changes

- add Code Connect template files for Figma

### Header

#### Minor Changes

- add Code Connect template files for Figma

### Sidenav

#### Minor Changes

- add Code Connect template files for Figma

### Icon

#### Minor Changes

- map Figma Icon instances to Angular Icon components

### Angular

#### Minor Changes

- create template file for Figma Code Connect

### Select

#### Patch Changes

- add maxheight props to allow scrolling behaviour

### Other

#### Major Changes

- remove standalone explicit declarations. They are implicit now
- update to Angular@19

#### Patch Changes

- harmonise required indicator style
- Updated dependencies [d801d54]
- Updated dependencies [6984541]
- Updated dependencies [83d7ea1]
- Updated dependencies [19d47a0]
- @design-system-rte/core@1.12.0
# React

## 1.13.0

### Dropdown

#### Patch Changes

- correct overlay position when projected from Datepicker, Daterangepicker or Timepicker

### Other

#### Minor Changes

- add Uncontrolled component optional capacities to Select, Switch, Datepicker, Timepicker & DateRangePicker

#### Patch Changes

- Updated dependencies [459a1d3]
- @design-system-rte/core@1.13.0

## 1.12.2

### Select

#### Patch Changes

- correct clear button size. It was medium sized instead of small as Design expected
- reset button send valid empty string or empty array value
- angular - set initial value from value props
- onChange return the full array empty or filled when clicking on selectAll

### Tooltip

#### Patch Changes

- correct overflow clipping

### Datepicker

#### Patch Changes

- prevent blocking loop in value assignation

### Timepicker

#### Patch Changes

- prevent blocking loop in value assignation

### Sidenav

#### Patch Changes

- correct opening & closing behavior and transition

### Tag

#### Patch Changes

- correct height & font-size for standard and compact mode

### Other

#### Patch Changes

- Updated dependencies [3907f5d]
- @design-system-rte/core@1.12.1

## 1.12.1

### Select

#### Patch Changes

- add maxheight props to allow scrolling behaviour

### Textarea

#### Patch Changes

- remove placeholder props insertion

### Other

#### Patch Changes

- harmonise required indicator style
- Updated dependencies [d801d54]
- Updated dependencies [6984541]
- Updated dependencies [83d7ea1]
- Updated dependencies [19d47a0]
- @design-system-rte/core@1.12.0

## 1.12.0

### Icon

#### Minor Changes

- add circuit_amperemetre_filled, circuit_amperemetre_outlined, circuit_bulb_filled, circuit_bulb_outlined, circuit_capacitor, circuit_cell, circuit_ground, circuit_inductor, circuit_motor_filled, circuit_motor_outlined, circuit_voltmetre_filled, circuit_voltmetre_outlined, journal_filled, journal_outlined, pylon, version_filled, version_outlined

### Select

#### Minor Changes

- add variant visibly-selected + add compactSpacing props

### Drawer

#### Patch Changes

- stretch content to component width when fixedHeader is disabled and width takes a no-default value
- simplify closing behavior on clicking on the backdrop

### Radio Button

#### Patch Changes

- prevent radio button marker from shrinking with narrow container and label overflow

### Checkbox

#### Patch Changes

- prevent checkbox case from shrinking with narrow container and label overflow

### Toast

#### Patch Changes

- add pointer event auto

### Overlay

#### Patch Changes

- remove z-index
- re add absolute and full width style + fix position for popover and drawer
- reintroduce fixed position for overlay
- re add absolute and full width style + fix position for popover and drawer
- reintroduce fixed position for overlay

### Segmented-control

#### Patch Changes

- react - add relative position to prevent misplacement of selected indicator on resize or dom changes

### Other

#### Patch Changes

- harmonise disabled state appearance on textinput, textarea and select
- prevent scrolling on focus
- update z-index values across components and introduce get overlay layer utils for overlay management
- Updated dependencies [4854f8d]
- Updated dependencies [b44a590]
- Updated dependencies [b0ed7db]
- @design-system-rte/core@1.11.0

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
# Core

## 1.13.0

#### Minor Changes

- add Uncontrolled component optional capacities to Select, Switch, Datepicker, Timepicker & DateRangePicker

## 1.12.1

### Select

#### Patch Changes

- onChange return the full array empty or filled when clicking on selectAll

### Other


## 1.12.0

### Select

#### Patch Changes

- add maxheight props to allow scrolling behaviour

### Sidenav

#### Patch Changes

- remove legacy hasBadge property unused in SideNavItems

### Other

#### Minor Changes

- update to Angular@19
- add Code Connect template files for Figma

## 1.11.0

### Icon

#### Minor Changes

- add circuit_amperemetre_filled, circuit_amperemetre_outlined, circuit_bulb_filled, circuit_bulb_outlined, circuit_capacitor, circuit_cell, circuit_ground, circuit_inductor, circuit_motor_filled, circuit_motor_outlined, circuit_voltmetre_filled, circuit_voltmetre_outlined, journal_filled, journal_outlined, pylon, version_filled, version_outlined

### Select

#### Minor Changes

- add variant visibly-selected + add compactSpacing props

### Other

#### Patch Changes

- update z-index values across components and introduce get overlay layer utils for overlay management
# Design Docs

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
