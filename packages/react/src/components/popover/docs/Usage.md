### Position et alignement

`position` accepte `auto`, `top`, `bottom`, `left` ou `right`. Avec `auto`, le composant choisit le côté disponible. `alignment` accepte `start`, `center` ou `end`.

```tsx
<>
  <Popover
    position="top"
    title="Popover position"
    content="This popover demonstrates a position."
    primaryButtonLabel="Close"
  >
    <button type="button">Top</button>
  </Popover>
  <Popover
    position="bottom"
    title="Popover position"
    content="This popover demonstrates a position."
    primaryButtonLabel="Close"
  >
    <button type="button">Bottom</button>
  </Popover>
  <Popover
    position="right"
    title="Popover position"
    content="This popover demonstrates a position."
    primaryButtonLabel="Close"
  >
    <button type="button">Right</button>
  </Popover>
  <Popover
    position="left"
    title="Popover position"
    content="This popover demonstrates a position."
    primaryButtonLabel="Close"
  >
    <button type="button">Left</button>
  </Popover>
</>
```

```tsx
<>
  <Popover
    position="bottom"
    alignment="start"
    title="Popover alignment"
    content="This popover demonstrates an alignment."
    primaryButtonLabel="Close"
  >
    <button type="button">Start</button>
  </Popover>
  <Popover
    position="bottom"
    alignment="center"
    title="Popover alignment"
    content="This popover demonstrates an alignment."
    primaryButtonLabel="Close"
  >
    <button type="button">Center</button>
  </Popover>
  <Popover
    position="bottom"
    alignment="end"
    title="Popover alignment"
    content="This popover demonstrates an alignment."
    primaryButtonLabel="Close"
  >
    <button type="button">End</button>
  </Popover>
</>
```

### Sans titre

Omettre `title` pour ne pas afficher de titre. Un `aria-label` est alors obligatoire pour fournir un nom accessible au popover.

```tsx
<Popover
  position="top"
  alignment="center"
  aria-label="Informations complémentaires"
  content="This popover has no title, just content and a close button."
  primaryButtonLabel="Got it"
>
  <button type="button">Show Info</button>
</Popover>
```

### Sans flèche

Définir `arrow={false}` pour ne pas afficher la flèche.

```tsx
<Popover
  position="right"
  alignment="start"
  arrow={false}
  title="No Arrow"
  content="This popover is displayed without an arrow pointer."
  primaryButtonLabel="Close"
>
  <button type="button">Open Without Arrow</button>
</Popover>
```

### Fermeture et actions

Le Popover s’ouvre au clic sur son contenu déclencheur.
`closeOnClickOutside` et `closeOnEscape` contrôlent respectivement la fermeture lors d’un clic extérieur et avec Escape.
Les callbacks `onClickPrimaryButton` et `onClickSecondaryButton` sont exécutés avant la fermeture déclenchée par le bouton correspondant.

```tsx
const [message, setMessage] = useState("Aucune action sélectionnée.");

return (
  <>
    <Popover
      content="Are you sure you want to proceed with this action? This cannot be undone."
      title="Confirm Action"
      primaryButtonLabel="Confirm"
      secondaryButtonLabel="Cancel"
      onClickPrimaryButton={() => setMessage("Action confirmée.")}
      onClickSecondaryButton={() => setMessage("Action annulée.")}
    >
      <button type="button">Open Confirmation</button>
    </Popover>
    <p>{message}</p>
  </>
);
```
