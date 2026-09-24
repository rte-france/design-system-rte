```ts
import { DrawerDirective } from "@design-system-rte/angular";
```

```html
<div
  rteDrawer
  #drawerHost="rteDrawer"
  rteDrawerId="example-drawer"
  rteDrawerTitle="Example Drawer"
  rteDrawerIcon="settings"
  rteDrawerIconAppearance="outlined"
  rteDrawerPosition="modal"
  rteDrawerWidth="400px"
  [rteDrawerFixedHeader]="true"
  rteDrawerPrimaryButtonLabel="Confirm"
  rteDrawerSecondaryButtonLabel="Cancel"
  (rteDrawerOnPrimary)="drawerHost.close()"
  (rteDrawerOnSecondary)="drawerHost.close()"
>
  <button type="button" rteButton rteButtonVariant="primary" rteDrawerTrigger>Open</button>
  <ng-template #drawerContent>
    <span style="font-family: arial; font-size: 14px; line-height: 20px"> Body content. </span>
  </ng-template>
</div>
```
