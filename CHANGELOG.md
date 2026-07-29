# Design System RTE - Latest changes

# Angular

## 4.0.0

### Routing

#### Minor Changes

- add provider to support routing library link component

### Pagination

#### Minor Changes

- correct controls' focus behavoir
- add Angular component

### Drawer

#### Minor Changes

- addd an option to hide component's Header

### Header

#### Minor Changes

- add versionNumber property for left section

### Card

#### Minor Changes

- add customizable height property

### Treeview

#### Patch Changes

- correct keyboard navigation & interaction

### Chip

#### Patch Changes

- correct compact height to be 20px instead of 24px

### Select

#### Patch Changes

- correct multiple emits on value change

### Other

#### Patch Changes

- Updated dependencies [c333cc2]
- Updated dependencies [20f45ff]
- Updated dependencies [7eb542d]
- Updated dependencies [da54bc8]
- Updated dependencies [35b5e6b]
- Updated dependencies [e7b53d3]
- @design-system-rte/core@1.14.0

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
# React

## 1.14.0

### Link

#### Minor Changes

- add support for to props

### Sidenav

#### Minor Changes

- add support for router link component and update active item state

### Routing

#### Minor Changes

- add provider to support routing library link component

### Drawer

#### Minor Changes

- addd an option to hide component's Header

### Header

#### Minor Changes

- add versionNumber property for left section

### Card

#### Minor Changes

- add customizable height property

### Treeview

#### Patch Changes

- correct keyboard navigation & interaction

### Chip

#### Patch Changes

- correct compact height to be 20px instead of 24px

### Other

#### Minor Changes

- remove console.log

#### Patch Changes

- Updated dependencies [c333cc2]
- Updated dependencies [20f45ff]
- Updated dependencies [7eb542d]
- Updated dependencies [da54bc8]
- Updated dependencies [35b5e6b]
- Updated dependencies [e7b53d3]
- @design-system-rte/core@1.14.0

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
# Core

## 1.14.0

### Sidenav

#### Minor Changes

- add support for router link component and update active item state

### Pagination

#### Minor Changes

- add Angular component

### Drawer

#### Minor Changes

- addd an option to hide component's Header

### Header

#### Minor Changes

- add versionNumber property for left section

### Card

#### Minor Changes

- add customizable height property

### Treeview

#### Patch Changes

- correct keyboard navigation & interaction

### Other


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
