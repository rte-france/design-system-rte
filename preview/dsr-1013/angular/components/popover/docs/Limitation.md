### Nom accessible obligatoire

Le Popover ne s’ouvre pas si ni `rtePopoverTitle` ni l’attribut `aria-label` de l’élément hôte n’est fourni. L’attribut doit être présent lors de l’initialisation de la directive.

### Contenu textuel uniquement

`rtePopoverContent` est un input de type `string`. La directive ne permet donc pas de fournir directement un template Angular ou un contenu interactif dans cette zone.

### Fermeture après une action

Un clic sur le bouton primaire ou secondaire ferme systématiquement le Popover après l’émission de l’output correspondant. Les outputs ne permettent pas de conserver le Popover ouvert.

### Déclencheur et focus

La directive ajoute un attribut `tabindex="0"` à l’élément hôte et intercepte son clic pour ouvrir le Popover. Elle est donc destinée à un élément hôte compatible avec cette gestion du focus et des interactions clavier.
