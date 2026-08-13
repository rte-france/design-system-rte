| Nom          | Type                          | Valeur par défaut | Description                                                                              |
| ------------ | ----------------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| badgeType    | brand \| neutral \| indicator | brand             | Type visuel du badge.                                                                    |
| size         | xs \| s \| m \| l             | m                 | Taille du badge.                                                                         |
| content      | number \| icon \| empty       | number            | Type de contenu affiché.                                                                 |
| count        | number                        | -                 | Nombre affiché lorsque `content` vaut number.                                            |
| icon         | string                        | notification      | Nom de l'icône lorsque `content` vaut icon. Le nom doit correspondre à une icône valide. |
| withPlusSign | boolean                       | -                 | Ajoute le signe + avant le nombre affiché.                                               |
| children     | ReactNode                     | -                 | Élément associé au badge.                                                                |
