Import `ModalModule` and compose a host element with the `[rteModal]` directive. Provide footer actions through `#primaryButton` and `#secondaryButton` templates.

Do not use the internal `rte-modal` selector in application templates. The directive creates and manages the overlay instance.

### Opening from a button

Attach `[rteModalTrigger]` to the element that opens the modal on click. Call `modalHost.close()` from footer action buttons.

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
    >
      <ng-template #primaryButton>
        <button rteButton rteButtonVariant="danger" (click)="onConfirmDelete(); confirmModal.close()">Delete</button>
      </ng-template>
      <ng-template #secondaryButton>
        <button rteButton rteButtonVariant="neutral" (click)="confirmModal.close()">Cancel</button>
      </ng-template>
    </div>
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

Use `@ViewChild` with the same template reference name as `#confirmModal="rteModal"`. Call `close()` from footer buttons and from any other close path in your component.

### Storybook snippets vs. variant differences

Angular Storybook autodocs display template markup. When several stories share the same HTML skeleton, the difference is usually a directive input binding (`[rteModalSize]`, `[rteModalTitle]`, `#customContent`, etc.) or component logic that calls `showModal()`. Those bindings are not always visible in the Storybook docs panel.

This documentation calls out the binding that changes for each example below. Prefer these snippets over the Storybook HTML panel when comparing variants.

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

Only `[rteModalSize]` changes between instances. Other inputs (`[rteModalTitle]`, `[rteModalDescription]`, `[rteModalIcon]`, etc.) stay the same.

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

Compared to the default setup, this example adds a `#customContent` template and sets `[rteModalSize]="'m'"`. Storybook may omit `[rteModalDescription]` in the rendered snippet even when args define it — keep the binding in your template when you need a description paragraph.

Project form fields or other components through `#customContent` when the default description paragraph is not enough.
