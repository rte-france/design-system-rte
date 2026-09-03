Le Drawer propose deux modes de positionnement. Le contenu du Drawer se fournit avec `content`; `children` est réservé au contenu principal du mode `responsive`.

## Mode modal

Le mode `modal` affiche le Drawer dans un dialogue avec un overlay. Il utilise `content` pour le contenu du Drawer.

```tsx
<Drawer
  id="example-drawer"
  title="Example Drawer"
  icon="settings"
  iconAppearance="outlined"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onClickToggle={() => setIsOpen((open) => !open)}
  position="modal"
  width="400px"
  fixedHeader
  primaryButtonLabel="Confirm"
  secondaryButtonLabel="Cancel"
  content={<p>Panel body.</p>}
/>
```

## Mode responsive

Le mode `responsive` affiche le Drawer à côté de `children`. Le conteneur parent doit disposer d’une hauteur exploitable et `width` contrôle sa largeur.

```tsx
<div style={{ width: "600px", height: "500px" }}>
  <Drawer
    id="responsive-drawer"
    title="Responsive Drawer"
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    onClickToggle={() => setIsOpen((open) => !open)}
    position="responsive"
    width="400px"
    primaryButtonLabel="Confirm"
    secondaryButtonLabel="Cancel"
    content={<p>Drawer panel.</p>}
  >
    <div>Main area next to the panel.</div>
  </Drawer>
</div>
```

## Fermetures conditionnelles

`closeOnEscape` ferme le Drawer avec la touche Escape lorsqu’il est ouvert. `closeOnOverlayClick` ferme le Drawer modal lors d’un clic sur l’overlay.

```tsx
<Drawer {...props} closeOnEscape closeOnOverlayClick />
```

## Sans header ou footer

Définir `showHeader={false}` pour supprimer le header, ou `showFooter={false}` pour supprimer le footer et ses actions.

```tsx
<Drawer {...props} showHeader={false} showFooter={false} />
```

## Header et footer personnalisés

`header` et `footer` remplacent leurs versions par défaut. Un header personnalisé doit contenir son propre contrôle de fermeture.

```tsx
<Drawer {...props} header={<div>Custom Header</div>} footer={<Button label="Custom Action" variant="primary" />} />
```
