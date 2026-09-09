### Nom accessible obligatoire

Le Popover ne se rend pas si ni `title` ni `aria-label` n’est fourni. Il faut prévoir l’un des deux, même lorsque le contenu du Popover est uniquement informatif.

### Contenu textuel uniquement

La prop `content` est typée `string`. Le composant ne permet donc pas d’insérer directement un contenu React structuré ou interactif dans cette zone.

### Fermeture après une action

Un clic sur le bouton primaire ou secondaire ferme systématiquement le Popover après l’exécution du callback correspondant. Les callbacks ne permettent pas de conserver le Popover ouvert.

### Déclencheur et clavier

Le composant ajoute la gestion du clic et de la touche Enter au conteneur du déclencheur. Le contenu fourni dans `children` doit donc rester compatible avec ce conteneur et assurer lui-même un nom accessible pour l’élément déclencheur.

### Focus

Le focus est géré par le mécanisme de focus trap pendant l’affichage du Popover. Un usage avec plusieurs zones de focus personnalisées dans le contenu n’est pas prévu par l’API actuelle.
