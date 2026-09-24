# Design System RTE - Latest changes

# Angular

## 4.0.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files
- allow screen reader to announce status changes

#### Patch Changes

- handle multiple error message on upload
- allow mutiple files to be added with already existing files

### Switch

#### Patch Changes

- add documentation
- enforce accessibility

### Time Picker

#### Patch Changes

- add documentation
- prevent deleting value from input when digit is readonly

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement
- avoid unwanted ellipsis from maxWidth not handled correctly

### Other

#### Patch Changes

- Updated dependencies [bbb07e5]
- Updated dependencies [a17f77a]
- Updated dependencies [441a083]
- Updated dependencies [90a22ed]
- @design-system-rte/core@1.20.0

## 3.6.0

### Loader

#### Minor Changes

- add documentation
- remove showLabel prop

### Drawer

#### Minor Changes

- add accessibility control in case the component can't resolve a valid aria label

#### Patch Changes

- trigger focus trap only for modal position instead of responsive position
- add prefers-reduced-motion for transitions

### Docs

#### Minor Changes

- update docs

### Header

#### Patch Changes

- add dcumentation
- add default font family

### Popover

#### Patch Changes

- add documentation
- enforce accesible name with title or aria label + use alignment value for angular
- reposition popover on scroll

### Searchbar

#### Patch Changes

- add documentation
- allow assistive text to take space + correct focus appearance on searchbar input

### Select

#### Patch Changes

- add documentation
- harmonise style when labelPosition equals side

### Side Navigation

#### Patch Changes

- add aria attributes for Sidenav's menus
- enhance accessibility of footer's collapse button
- add missing prefers-reduced-motion for component transitions

### Card

#### Patch Changes

- enforce clickable card accessibility feature
- enforce disabled accesibility state

### Icon

#### Patch Changes

- handle aria-hidden and aria-label when the component has a decorative function instead of a semantic one

### File Upload

#### Patch Changes

- add aria label for file item delete button
- add accessible description and label

### File-item

#### Patch Changes

- add descriptive text for status icon

### Button

#### Patch Changes

- add aria-hidden attribute to icons for improved accessibility

### Other

#### Minor Changes

- use computed prefix instead of effective
- add missing aria describedBy
- Enhance assistive text handling across input components

#### Patch Changes

- Updated dependencies [d654a29]
- Updated dependencies [59cd691]
- Updated dependencies [ba96671]
- Updated dependencies [0a94e7c]
- @design-system-rte/core@1.19.0

## 3.5.1

### Tag

#### Patch Changes

- correct import of TAG_ERROR_NO_LABEL constant

### Other


## 3.5.0

### Tag

#### Minor Changes

- allow intended error log on test to validate
- enforce required label prop rule and return error otherwise

#### Patch Changes

- set icon as decorative

### Checkbox

#### Minor Changes

- add fieldset / legend for checkbox group + set vertical as default layout + add missing aria-label

### Segmented Control

#### Patch Changes

- disable initial selection animation

### Banner

#### Patch Changes

- disable transitions for reduced motion preference

### Accordion

#### Patch Changes

- add aria-hidden true to decorative icons
- add prefers-reduced-motion for chevron rotation

### Radio Button

#### Patch Changes

- add semantic html tags and correct screen reader behavior
- add fallback case for missing aria-label and error handler for missing label and aria-label
- add exception for disabled & error state used simultanously

### Chip

#### Patch Changes

- expand close icon clickable zone to 24px

### Sidenav

#### Patch Changes

- add missing aria-label to main nav element

### Divider

#### Patch Changes

- change appearance value to neutral instead of default

### Card

#### Patch Changes

- correct missassigned role attribute
- add prefers-reduced-motion for transitions

### Other

#### Patch Changes

- Updated dependencies [c363231]
- Updated dependencies [3580994]
- Updated dependencies [ac2dcee]
- Updated dependencies [ebf4aa9]
- Updated dependencies [50628e5]
- @design-system-rte/core@1.18.0
# React

## 1.20.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files
- allow screen reader to announce status changes

#### Patch Changes

- handle multiple error message on upload
- allow mutiple files to be added with already existing files

### Switch

#### Patch Changes

- add documentation
- enforce accessibility

### Time Picker

#### Patch Changes

- add documentation
- prevent deleting value from input when digit is readonly

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement
- avoid unwanted ellipsis from maxWidth not handled correctly

### Other

#### Patch Changes

- Updated dependencies [bbb07e5]
- Updated dependencies [a17f77a]
- Updated dependencies [441a083]
- Updated dependencies [90a22ed]
- @design-system-rte/core@1.20.0

## 1.19.0

### Loader

#### Minor Changes

- add documentation
- remove showLabel prop

### Drawer

#### Minor Changes

- add accessibility control in case the component can't resolve a valid aria label

#### Patch Changes

- trigger focus trap only for modal position instead of responsive position
- add prefers-reduced-motion for transitions

### Docs

#### Minor Changes

- update docs

### Header

#### Patch Changes

- add dcumentation
- add default font family

### Popover

#### Patch Changes

- add documentation
- enforce accesible name with title or aria label + use alignment value for angular
- reposition popover on scroll

### Searchbar

#### Patch Changes

- add documentation
- allow assistive text to take space + correct focus appearance on searchbar input

### Select

#### Patch Changes

- add documentation
- harmonise style when labelPosition equals side

### Side Navigation

#### Patch Changes

- add aria attributes for Sidenav's menus
- enhance accessibility of footer's collapse button
- add missing prefers-reduced-motion for component transitions

### Card

#### Patch Changes

- enforce clickable card accessibility feature
- enforce disabled accesibility state

### Icon

#### Patch Changes

- handle aria-hidden and aria-label when the component has a decorative function instead of a semantic one

### File Upload

#### Patch Changes

- add aria label for file item delete button
- add accessible description and label

### File-item

#### Patch Changes

- add descriptive text for status icon

### Button

#### Patch Changes

- add aria-hidden attribute to icons for improved accessibility

### Other

#### Minor Changes

- add focus back initial element after removing focus trap hook
- use computed prefix instead of effective
- add missing aria describedBy
- Enhance assistive text handling across input components

#### Patch Changes

- Updated dependencies [d654a29]
- Updated dependencies [59cd691]
- Updated dependencies [ba96671]
- Updated dependencies [0a94e7c]
- @design-system-rte/core@1.19.0

## 1.18.0

### Tag

#### Minor Changes

- allow intended error log on test to validate
- enforce required label prop rule and return error otherwise

#### Patch Changes

- set icon as decorative

### Checkbox

#### Minor Changes

- add fieldset / legend for checkbox group + set vertical as default layout + add missing aria-label

### Segmented Control

#### Patch Changes

- disable initial selection animation

### Banner

#### Patch Changes

- disable transitions for reduced motion preference

### Accordion

#### Patch Changes

- add aria-hidden true to decorative icons
- preserve accordion content in the DOM even while content is hidden

### Radio Button

#### Patch Changes

- add semantic html tags and correct screen reader behavior
- add fallback case for missing aria-label and error handler for missing label and aria-label

### Chip

#### Patch Changes

- expand close icon clickable zone to 24px

### Sidenav

#### Patch Changes

- add missing aria-label to main nav element

### Divider

#### Patch Changes

- change appearance value to neutral instead of default

### Card

#### Patch Changes

- add prefers-reduced-motion for transitions

### Other

#### Patch Changes

- Updated dependencies [c363231]
- Updated dependencies [3580994]
- Updated dependencies [ac2dcee]
- Updated dependencies [ebf4aa9]
- Updated dependencies [50628e5]
- @design-system-rte/core@1.18.0
# Core

## 1.20.0

### File Upload

#### Minor Changes

- add animation on adding and deleting files

#### Patch Changes

- handle multiple error message on upload

### Switch

#### Patch Changes

- enforce accessibility

### Link

#### Patch Changes

- handle external link aria attributes for screen reader announcement

### Other


## 1.19.0

### Loader

#### Minor Changes

- remove showLabel prop

### Drawer

#### Minor Changes

- add accessibility control in case the component can't resolve a valid aria label

### File Upload

#### Patch Changes

- add accessible description and label

### Other

#### Minor Changes

- Enhance assistive text handling across input components

## 1.18.0

### Tag

#### Minor Changes

- enforce required label prop rule and return error otherwise

### Divider

#### Patch Changes

- remove unused brand-navigation appearance
- change appearance value to neutral instead of default

### Radio Button

#### Patch Changes

- add fallback case for missing aria-label and error handler for missing label and aria-label

### Sidenav

#### Patch Changes

- add missing aria-label to main nav element

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
