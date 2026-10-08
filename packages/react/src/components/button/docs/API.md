
| Nom            | Type                                                                                      | Valeur par défaut | Description                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | "brand" \| "neutral"                                                                      | "brand"           | Apparence visuelle du bouton.                                                                                                                  |
| hierarchy      | "primary" \| "secondary" \| "text" \| "transparent"                                   | "primary"         | Hiérarchie visuelle du bouton.                                                                                                                 |
| isCritical     | boolean                                                                                   | false             | Active le style critique (destructif).                                                                                                          |
| isReversed     | boolean                                                                                   | false             | Bouton sur surface inverse (fond sombre). Incompatible avec `isCritical`.                                                                      |
| variant        | "primary" \| "secondary" \| "text" \| "transparent" \| "danger" \| "neutral" \| "reverse" | "primary"         | **Déprécié.** Variante visuelle du bouton. Préférer `appearance`, `hierarchy`, `isCritical` et `isReversed`.                                 |
| label          | string                                                                                    | -                 | Libellé affiché dans le bouton.                                                                                                                |
| size           | "s" \| "m" \| "l"                                                                         | "m"               | Taille du bouton.                                                                                                                              |
| icon           | string                                                                                    | -                 | Icône du bouton. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey.                                                   |
| iconAppearance | "filled" \| "outlined"                                                                    | -                 | Apparence de l'icône du bouton.                                                                                                                |
| iconPosition   | "left" \| "right"                                                                         | "left"            | Position de l'icône.                                                                                                                           |
| badgeContent   | "number" \| "icon" \| "empty"                                                             | -                 | Type de contenu du badge.                                                                                                                      |
| badgeCount     | number                                                                                    | -                 | Nombre affiché lorsque `badgeContent` vaut `"number"` et que le nombre est positif.                                                             |
| badgeIcon      | string                                                                                    | -                 | Icône du badge. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey.                                                    |
| badgeType      | "brand" \| "neutral" \| "indicator"                                                       | -                 | Type visuel du badge.                                                                                                                           |
| disabled       | boolean                                                                                   | false             | Désactive le bouton HTML.                                                                                                                      |
| type           | "button" \| "submit" \| "reset"                                                           | "button"          | Type natif du bouton HTML.                                                                                                                     |
| onClick        | (e: React.MouseEvent\<HTMLButtonElement\>) => void                                        | -                 | Callback exécuté lors du clic.                                                                                                                  |


Correspondance indicative `variant` → props de style :


| `variant`   | Équivalent                |
| ----------- | ------------------------- |
| primary     | `hierarchy="primary"`     |
| secondary   | `hierarchy="secondary"`   |
| text        | `hierarchy="text"`        |
| transparent | `hierarchy="transparent"` |
| danger      | `isCritical`              |
| reverse     | `isReversed`              |
| neutral     | `appearance="neutral"`    |

