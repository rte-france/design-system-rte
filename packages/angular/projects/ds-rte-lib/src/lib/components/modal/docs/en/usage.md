Import `ModalModule` and compose a host element with the `[rteModal]` directive. Provide footer actions through `rteModalPrimaryActionLabel`, optional `rteModalSecondaryActionLabel`, and `(rteModalPrimaryActionClick)` / `(rteModalSecondaryActionClick)`.

Do not use the internal `rte-modal` selector in application templates. The directive creates and manages the overlay instance.

### Opening from a button

Attach `[rteModalTrigger]` to the element that opens the modal on click. Call `modalHost.close()` from the action click outputs when the modal should dismiss.

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
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="onContinue(); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

### Opening programmatically

In most applications, modals open from TypeScript logic (for example after an API response, a validation failure, or a workflow step). Omit `[rteModalTrigger]` and call `showModal()` on the `rteModal` export.

```typescript
import { Component, ViewChild } from "@angular/core";
import { ModalDirective, ModalModule } from "@design-system-rte/angular";

@Component({
  imports: [ModalModule],
  template: `
    <div
      rteModal
      #confirmModal="rteModal"
      [rteModalId]="'delete-confirm'"
      [rteModalTitle]="'Delete 3 documents'"
      [rteModalDescription]="'The selected documents will be deleted.'"
      [rteModalSize]="'xs'"
      [rteModalIcon]="'delete'"
      [rteModalPrimaryActionLabel]="'Delete'"
      [rteModalSecondaryActionLabel]="'Cancel'"
      [rteModalPrimaryActionIsCritical]="true"
      (rteModalPrimaryActionClick)="onConfirmDelete(); confirmModal.close()"
      (rteModalSecondaryActionClick)="confirmModal.close()"
    ></div>
  `,
})
export class DocumentsComponent {
  @ViewChild("confirmModal") confirmModal!: ModalDirective;

  onBulkDeleteRequested(): void {
    this.confirmModal.showModal();
  }

  onConfirmDelete(): void {
    // perform delete
  }
}
```

Use `@ViewChild` with the same template reference name as `#confirmModal="rteModal"`. Call `close()` from action click handlers and from any other close path in your component.

#### Sizes

```html
<div
  rteModal
  #modalHostXs="rteModal"
  [rteModalId]="'modal-xs'"
  [rteModalTitle]="title"
  [rteModalDescription]="description"
  [rteModalSize]="'xs'"
  [rteModalIcon]="'settings'"
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHostXs.close()"
  (rteModalSecondaryActionClick)="modalHostXs.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open modal xs</button>
</div>
```

Use `[rteModalSize]` to pick a width preset: `xs` (496px), `s` (656px), `m` 
(936px), `l` (1168px), `xl` (1328px).

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
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
  <ng-template #customContent>
    <rte-textarea resizeable="true" />
    <rte-select [options]="selectOptions" />
  </ng-template>
</div>
```

This example adds `#customContent` and sets `[rteModalSize]="'m'"`. Project form fields through `#customContent` when the description paragraph is not enough.

#### Primary danger

Use `[rteModalPrimaryActionIsCritical]="true"` for destructive primary actions (do not use the secondary slot for delete).

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-danger'"
  [rteModalTitle]="'Delete 3 documents'"
  [rteModalDescription]="'The selected documents will be deleted.'"
  [rteModalSize]="'s'"
  [rteModalIcon]="'delete'"
  [rteModalPrimaryActionLabel]="'Delete'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  [rteModalPrimaryActionIsCritical]="true"
  (rteModalPrimaryActionClick)="onDelete(); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

#### Primary split button

Set `rteModalPrimaryActionType` to `split-button` and pass menu options plus `rteModalPrimarySplitButtonAriaLabelRight`.

```html
<div
  rteModal
  #modalHost="rteModal"
  [rteModalId]="'modal-split'"
  [rteModalTitle]="'Save document'"
  [rteModalDescription]="'Choose how to save your changes.'"
  [rteModalPrimaryActionLabel]="'Save'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  [rteModalPrimaryActionType]="'split-button'"
  [rteModalPrimarySplitButtonOptions]="splitMenuOptions"
  [rteModalPrimarySplitButtonAriaLabelRight]="'More save options'"
  (rteModalPrimaryActionClick)="onSave(); modalHost.close()"
  (rteModalPrimaryActionOptionClick)="onSaveOption($event); modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```

Handle `(rteModalPrimaryActionOptionClick)` when the user picks an entry from the split-button menu. The emitted value is the matching option `id` from `rteModalPrimarySplitButtonOptions`.

#### Input and legacy footer comparison

Configured inputs (left) and deprecated `#primaryButton` / `#secondaryButton` templates (right) produce the same footer layout when labels match.

```html
<div style="display: flex; gap: 16px;">
  <div
    rteModal
    #inputModalHost="rteModal"
    [rteModalId]="'modal-input-footer'"
    [rteModalTitle]="'Save changes'"
    [rteModalPrimaryActionLabel]="'Save'"
    [rteModalSecondaryActionLabel]="'Cancel'"
    (rteModalPrimaryActionClick)="inputModalHost.close()"
    (rteModalSecondaryActionClick)="inputModalHost.close()"
  >
    <button rteButton rteModalTrigger>Open (input footer)</button>
  </div>
  <div rteModal #legacyModalHost="rteModal" [rteModalId]="'modal-legacy-footer'" [rteModalTitle]="'Save changes'">
    <button rteButton rteModalTrigger>Open (legacy templates)</button>
    <ng-template #primaryButton>
      <button rteButton (click)="legacyModalHost.close()">Save</button>
    </ng-template>
    <ng-template #secondaryButton>
      <button rteButton (click)="legacyModalHost.close()">Cancel</button>
    </ng-template>
  </div>
</div>
```

New integrations should use the input footer. Legacy templates remain for backward compatibility only.
