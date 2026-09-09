| Nom         | Type                                | Valeur par défaut | Description                                                                                                  |
| ----------- | ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| actionLabel | string                              | -                 | Libellé du bouton d’action.                                                                                  |
| click       | void                                | -                 | Événement émis au clic sur le bouton d’action.                                                               |
| closable    | boolean                             | false             | Affiche le bouton de fermeture.                                                                              |
| close       | void                                | -                 | Événement émis après la fermeture et son animation de 200 ms.                                                |
| isCompact   | boolean                             | false             | Applique la mise en page compacte.                                                                           |
| isOpen      | boolean                             | true              | Contrôle l’affichage de la bannière.                                                                         |
| message     | string                              | -                 | Message obligatoire affiché.                                                                                 |
| position    | overlay \| push                     | "push"            | Position de la bannière.                                                                                     |
| title       | string                              | -                 | Titre affiché.                                                                                               |
| type        | info \| error \| success \| warning | "info"            | Type sémantique de la bannière. Le type `error` utilise le rôle aria `alert`, les autres utilisent `status`. |
