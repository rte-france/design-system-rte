
| Nom                     | Type                                                                                              | Valeur par défaut | Description                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| rteButtonAppearance     | "brand" \| "neutral"                                                                              | "brand"           | Apparence visuelle du bouton.                                                                                                                        |
| rteButtonHierarchy      | "primary" \| "secondary" \| "text" \| "transparent"                                               | "primary"         | Hiérarchie visuelle du bouton.                                                                                                                       |
| rteButtonIsCritical     | boolean                                                                                           | false             | Active le style critique (destructif).                                                                                                               |
| rteButtonIsReversed     | boolean                                                                                           | false             | Bouton sur surface inverse (fond sombre). Incompatible avec `rteButtonIsCritical`.                                                                   |
| rteButtonVariant        | "primary" \| "secondary" \| "text" \| "transparent" \| "danger" \| "neutral" \| "reverse"         | "primary"         | **Déprécié.** Variante visuelle du bouton. Préférer `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical` et `rteButtonIsReversed`.   |
| rteButtonSize           | "s" \| "m" \| "l"                                                                                 | "m"               | Taille du bouton.                                                                                                                                    |
| rteButtonIcon           | string                                                                                            | -                 | Icône du bouton. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey.                                                          |
| rteButtonIconAppearance | "filled" \| "outlined"                                                                            | "filled"          | Apparence de l'icône.                                                                                                                                |
| rteButtonIconPosition   | "left" \| "right"                                                                                 | "left"            | Position de l'icône.                                                                                                                               |
| rteBadgeContent         | "number" \| "icon" \| "empty"                                                                     | -                 | Type de contenu du badge, utilisé avec rteBadge.                                                                                                     |
| rteBadgeCount           | number                                                                                            | -                 | Nombre du badge.                                                                                                                                     |
| rteBadgeIcon            | string                                                                                            | "settings"        | Icône du badge. La valeur doit appartenir aux clés RegularIconIdKey ou TogglableIconIdKey.                                                           |
| rteBadgeSize            | "xs" \| "s" \| "m" \| "l"                                                                         | "m"               | Taille du badge.                                                                                                                                     |
| rteBadgeType            | "brand" \| "neutral" \| "indicator"                                                               | "brand"           | Type visuel du badge.                                                                                                                                |
| rteBadgeWithPlusSign    | boolean                                                                                           | false             | Ajoute un signe plus au contenu du badge.                                                                                                             |


Correspondance indicative `rteButtonVariant` → props de style :


| `rteButtonVariant` | Équivalent                         |
| ------------------ | ---------------------------------- |
| primary            | `rteButtonHierarchy="primary"`     |
| secondary          | `rteButtonHierarchy="secondary"`   |
| text               | `rteButtonHierarchy="text"`        |
| transparent        | `rteButtonHierarchy="transparent"` |
| danger             | `[rteButtonIsCritical]="true"`     |
| reverse            | `[rteButtonIsReversed]="true"`     |
| neutral            | `rteButtonAppearance="neutral"`    |

