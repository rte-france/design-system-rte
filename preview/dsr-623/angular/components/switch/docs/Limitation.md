### Identifiant généré

Lorsque `id` n'est pas fourni, le composant génère un identifiant unique. Fournissez un `id` unique si vous devez maîtriser la valeur de l'identifiant.

### Nom accessible

Le composant retourne une erreur dans la console lorsqu'aucun `label`, `ariaLabel` ou `ariaLabelledBy` n'est fourni. Vérifiez que l'attribut utilisé produit bien le nom accessible attendu.

### Synchronisation de `checked`

La valeur initiale de `checked` n'initialise pas nécessairement l'état interne lorsque le composant est créé avec `checked="true"`. La synchronisation interne est déclenchée lorsque la valeur fournie par le parent change ensuite. Pour les formulaires, préférez `ControlValueAccessor` avec `FormControl`.

### Mode lecture seule

Le mode `[readOnly]="true"` empêche les changements déclenchés par le clic et conserve l'input dans le DOM. Il ne s'agit pas d'un état désactivé de formulaire et il faut vérifier la restitution attendue par les technologies d'assistance.

### Contrôle de formulaire et événement

Avec un `FormControl`, la valeur métier est transmise via `ControlValueAccessor`. `stateChange` émet l'événement DOM de changement, pas directement la valeur booléenne. Utilisez la valeur du contrôle pour synchroniser l'état applicatif.
