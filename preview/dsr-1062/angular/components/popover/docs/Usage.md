### Position et alignement

`rtePopoverPosition` accepte `auto`, `top`, `bottom`, `left` ou `right`. Avec `auto`, la directive choisit le côté disponible. `rtePopoverAlignment` accepte `start`, `center` ou `end`.

Plusieurs positions peuvent être utilisées selon le contexte :

```html
<button
  type="button"
  rtePopover
  rtePopoverPosition="top"
  rtePopoverAlignment="center"
  rtePopoverContent="This popover demonstrates a position."
  rtePopoverTitle="Popover position"
  rtePopoverPrimaryButtonLabel="Close"
>
  Top
</button>
<button
  type="button"
  rtePopover
  rtePopoverPosition="bottom"
  rtePopoverAlignment="center"
  rtePopoverContent="This popover demonstrates a position."
  rtePopoverTitle="Popover position"
  rtePopoverPrimaryButtonLabel="Close"
>
  Bottom
</button>
<button
  type="button"
  rtePopover
  rtePopoverPosition="right"
  rtePopoverAlignment="center"
  rtePopoverContent="This popover demonstrates a position."
  rtePopoverTitle="Popover position"
  rtePopoverPrimaryButtonLabel="Close"
>
  Right
</button>
<button
  type="button"
  rtePopover
  rtePopoverPosition="left"
  rtePopoverAlignment="center"
  rtePopoverContent="This popover demonstrates a position."
  rtePopoverTitle="Popover position"
  rtePopoverPrimaryButtonLabel="Close"
>
  Left
</button>
```

Pour comparer les alignements, conserver une position fixe et faire varier `rtePopoverAlignment` :

```html
<button
  type="button"
  rtePopover
  rtePopoverPosition="bottom"
  rtePopoverAlignment="start"
  rtePopoverContent="This popover demonstrates an alignment."
  rtePopoverTitle="Popover alignment"
  rtePopoverPrimaryButtonLabel="Close"
>
  Start
</button>
<button
  type="button"
  rtePopover
  rtePopoverPosition="bottom"
  rtePopoverAlignment="center"
  rtePopoverContent="This popover demonstrates an alignment."
  rtePopoverTitle="Popover alignment"
  rtePopoverPrimaryButtonLabel="Close"
>
  Center
</button>
<button
  type="button"
  rtePopover
  rtePopoverPosition="bottom"
  rtePopoverAlignment="end"
  rtePopoverContent="This popover demonstrates an alignment."
  rtePopoverTitle="Popover alignment"
  rtePopoverPrimaryButtonLabel="Close"
>
  End
</button>
```

### Sans titre

Omettre `rtePopoverTitle` pour afficher uniquement le contenu et l’action primaire. Un attribut `aria-label` est alors obligatoire sur l’élément hôte pour fournir un nom accessible au popover.

```html
<button
  type="button"
  rtePopover
  aria-label="Informations complémentaires"
  rtePopoverContent="This popover has no title, just content and a close button."
  rtePopoverPrimaryButtonLabel="Got it"
>
  Click me!
</button>
```

### Sans flèche

Définir `[rtePopoverArrow]="false"` pour ne pas afficher la flèche.

```html
<button
  type="button"
  rtePopover
  rtePopoverContent="This popover is displayed without an arrow pointer."
  [rtePopoverArrow]="false"
  rtePopoverTitle="No Arrow"
  rtePopoverPrimaryButtonLabel="Close"
>
  Click me!
</button>
```

### Fermeture et actions

La directive ouvre le Popover au clic sur l’élément hôte. `rtePopoverCloseOnClickOutside` et `rtePopoverCloseOnEscape` contrôlent respectivement la fermeture lors d’un clic extérieur et avec Escape.
Les outputs `clickPrimaryButton` et `clickSecondaryButton` sont émis avant la fermeture déclenchée par le bouton correspondant.

Dans le composant Angular, initialiser `actionMessage` avec `"Aucune action sélectionnée."`. Les événements peuvent ensuite mettre à jour le texte affiché selon l’action choisie :

```html
<button
  type="button"
  rtePopover
  rtePopoverContent="Are you sure you want to proceed with this action? This cannot be undone."
  rtePopoverTitle="Confirm Action"
  rtePopoverPrimaryButtonLabel="Confirm"
  rtePopoverSecondaryButtonLabel="Cancel"
  [rtePopoverCloseOnClickOutside]="true"
  [rtePopoverCloseOnEscape]="true"
  (clickPrimaryButton)="actionMessage = 'Action confirmée.'"
  (clickSecondaryButton)="actionMessage = 'Action annulée.'"
>
  Open Confirmation
</button>
<p>{{ actionMessage }}</p>
```
