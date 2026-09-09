Le Drawer Angular est utilisé avec la directive `rteDrawer` et ses templates nommés. Le contenu du Drawer se fournit avec `#drawerContent` ; `#drawerContextContent` est réservé au contenu principal du mode `responsive`.

## Mode modal

Le mode `modal` est la valeur par défaut. Le Drawer est affiché dans un dialogue avec overlay ; utiliser uniquement `#drawerContent` pour son contenu.

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

## Mode responsive

Le mode `responsive` affiche le Drawer à côté de `#drawerContextContent`. Le host doit avoir une hauteur exploitable.

```html
<div
  rteDrawer
  #drawerHost="rteDrawer"
  rteDrawerId="responsive-drawer"
  rteDrawerTitle="Responsive Drawer"
  rteDrawerIcon=""
  rteDrawerPosition="responsive"
  rteDrawerWidth="400px"
  rteDrawerPrimaryButtonLabel="Confirm"
  rteDrawerSecondaryButtonLabel="Cancel"
>
  <ng-template #drawerContent>
    <span style="font-family: arial; font-size: 14px; line-height: 20px"> Drawer panel. </span>
  </ng-template>
  <ng-template #drawerContextContent>
    <div>
      <button type="button" rteButton rteButtonVariant="primary" rteDrawerTrigger>Open</button>
      <p>Main area next to the panel.</p>
    </div>
  </ng-template>
</div>
```

## Fermetures conditionnelles

`rteDrawerCloseOnEscape` ferme le Drawer avec la touche Escape lorsqu’il est ouvert. `rteDrawerCloseOnOverlayClick` ferme le Drawer modal lors d’un clic sur l’overlay.

```html
<div
  rteDrawer
  rteDrawerId="drawer-close-on-escape"
  rteDrawerTitle="Close on Escape"
  rteDrawerPrimaryButtonLabel="Confirm"
  rteDrawerCloseOnEscape
  rteDrawerCloseOnOverlayClick
>
  <ng-template #drawerContent><p>Body content.</p></ng-template>
</div>
```

## Sans header ou footer

Définir `rteDrawerShowHeader="false"` pour supprimer le header, ou `rteDrawerShowFooter="false"` pour supprimer le footer et ses actions.

```html
<div
  rteDrawer
  rteDrawerId="drawer-without-header-footer"
  rteDrawerTitle="Example Drawer"
  [rteDrawerShowHeader]="false"
  [rteDrawerShowFooter]="false"
>
  <ng-template #drawerContent><p>Body content.</p></ng-template>
</div>
```

## Header et footer personnalisés

`#drawerHeader` et `#drawerFooter` remplacent les blocs par défaut. Un header personnalisé doit gérer lui-même la fermeture si nécessaire.

```html
<ng-template #drawerHeader><div>Custom Header</div></ng-template>
<ng-template #drawerFooter><button rteButton rteButtonVariant="primary">Custom Action</button></ng-template>
```
