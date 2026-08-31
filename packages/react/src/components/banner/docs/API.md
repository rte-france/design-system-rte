| Nom            | Type                                | Valeur par défaut | Description                                                                                                  |
| -------------- | ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| actionCallback | () => void                          | -                 | Callback exécuté au clic sur l’action, si `actionLabel` est défini.                                          |
| actionLabel    | string                              | -                 | Libellé du bouton d’action.                                                                                  |
| className      | string                              | ""                | Classe CSS ajoutée à la bannière.                                                                            |
| closable       | boolean                             | false             | Affiche le bouton de fermeture.                                                                              |
| isCompact      | boolean                             | false             | Applique la mise en page compacte.                                                                           |
| isOpen         | boolean                             | true              | Contrôle l’affichage de la bannière.                                                                         |
| message        | string                              | -                 | Message affiché.                                                                                             |
| onClose        | () => void                          | -                 | Callback exécuté lors de la fermeture.                                                                       |
| position       | overlay \| push                     | "push"            | Position de la bannière.                                                                                     |
| title          | string                              | -                 | Titre affiché.                                                                                               |
| type           | info \| error \| success \| warning | "info"            | Type sémantique de la bannière. Le type `error` utilise le rôle aria `alert`, les autres utilisent `status`. |
