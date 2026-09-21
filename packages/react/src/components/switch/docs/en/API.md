| Nom            | Type                                               | Valeur par défaut | Description                                                                                      |
| -------------- | -------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| appearance     | brand \| neutral                                   | "brand"           | Apparence visuelle du switch.                                                                    |
| checked        | boolean                                            | -                 | État contrôlé du switch. Lorsqu'il est défini, utilisez `onChange` pour mettre à jour la valeur. |
| defaultChecked | boolean                                            | false             | État initial utilisé lorsque `checked` n'est pas défini.                                         |
| disabled       | boolean                                            | false             | Désactive le switch et empêche les interactions.                                                 |
| label          | string                                             | -                 | Libellé utilisé pour le nom accessible et affiché lorsqu'il est fourni.                          |
| onChange       | (e: React.ChangeEvent\<HTMLInputElement\>) => void | -                 | Callback appelé lorsque l'état change.                                                           |
| readOnly       | boolean                                            | false             | Empêche la modification de l'état.                                                               |
| showIcon       | boolean                                            | true              | Affiche l'icône `check` lorsque le switch est activé et `close` lorsqu'il est désactivé.         |
