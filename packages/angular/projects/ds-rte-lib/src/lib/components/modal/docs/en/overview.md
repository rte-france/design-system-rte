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
  [rteModalPrimaryActionLabel]="'Continue'"
  [rteModalSecondaryActionLabel]="'Cancel'"
  (rteModalPrimaryActionClick)="modalHost.close()"
  (rteModalSecondaryActionClick)="modalHost.close()"
>
  <button rteButton rteButtonVariant="primary" rteModalTrigger>Open Modal</button>
</div>
```
