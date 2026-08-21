Import `ModalModule` and compose a host element with the `[rteModal]` directive. Attach `[rteModalTrigger]` to the element that opens the modal, and provide footer actions through `#primaryButton` and `#secondaryButton` templates.

Do not use the internal `rte-modal` selector in application templates. The directive creates and manages the overlay instance.

Call `modalHost.close()` from action buttons or use `modalHost.showModal()` to open the modal programmatically.

```typescript
import { ModalModule } from "@design-system-rte/angular";
```

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-1'"
  [rteModalTitle]="'Connect to Wi-Fi'"
  [rteModalDescription]="'Please connect to wifi to synchronise your projects or go to Settings to change your preferences.'"
  [rteModalSize]="'xs'"
  [rteModalIcon]="'wifi'"
  [rteModalIconAppearance]="'filled'"
  [rteModalCloseOnClickOutside]="true"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="onContinue(); modalHost.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHost.close()">Cancel</button>
  </ng-template>
</div>
```

### Examples

#### Sizes

```html
<div rteModal #modalHostXs="rteModal" [rteModalId]="'modal-xs'" [rteModalTitle]="title" [rteModalDescription]="description" [rteModalSize]="'xs'" [rteModalIcon]="'settings'">
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal xs</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHostXs.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHostXs.close()">Cancel</button>
  </ng-template>
</div>

<div rteModal #modalHostS="rteModal" [rteModalId]="'modal-s'" [rteModalTitle]="title" [rteModalDescription]="description" [rteModalSize]="'s'" [rteModalIcon]="'settings'">
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal s</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHostS.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHostS.close()">Cancel</button>
  </ng-template>
</div>

<!-- Repeat for sizes 'm', 'l', and 'xl' -->
```

Use `[rteModalSize]` to pick a width preset: `xs` (496px), `s` (656px), `m` (936px), `l` (1168px), `xl` (1328px).

(`"xs" | "s" | "m" | "l" | "xl"`)

#### With custom content

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-2'"
  [rteModalTitle]="'Préciser le motif du refus'"
  [rteModalDescription]="'En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.'"
  [rteModalSize]="'m'"
  [rteModalIcon]="'wifi'"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #primaryButton>
    <button rteButton rteButtonVariant="primary" (click)="modalHost.close()">Continue</button>
  </ng-template>
  <ng-template #secondaryButton>
    <button rteButton rteButtonVariant="neutral" (click)="modalHost.close()">Cancel</button>
  </ng-template>
  <ng-template #customContent>
    <rte-textarea resizeable="true" />
    <rte-select [options]="selectOptions" />
  </ng-template>
</div>
```

Project form fields or other components through `#customContent` when the default description paragraph is not enough.
