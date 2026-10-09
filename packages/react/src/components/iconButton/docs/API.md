| Nom            | Type                                                                                      | Valeur par défaut | Déprécié | Description                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | "brand" \| "neutral" \| "outlined" \| "filled"                                            | -                 | Partiel  | Shell : `brand` ou `neutral`. `outlined` / `filled` : alias déprécié du glyphe — préférer `iconAppearance`. Si omis, dérivé de `variant`.   |
| hierarchy      | "primary" \| "secondary" \| "text" \| "transparent"                                       | -                 | —        | Hiérarchie du shell. Si omise, dérivée de `variant` (défaut `primary`).                                                                   |
| isCritical     | boolean                                                                                   | -                 | —        | Style critique/destructeur (`brand` + `primary`). Si omis, dérivé de `variant`.                                                             |
| isReversed     | boolean                                                                                   | -                 | —        | Couleurs inversées (`brand` + `transparent`). Si omis, dérivé de `variant`.                                                                 |
| iconAppearance | "filled" \| "outlined"                                                                    | -                 | —        | Style du glyphe (Figma `iconAppearance`). Défaut effectif : `outlined`.                                                                     |
| name           | RegularIconIdKey \| TogglableIconIdKey                                                    | —                 | —        | Nom de l’icône à afficher.                                                                                                                  |
| size           | "s" \| "m" \| "l"                                                                         | "m"               | —        | Taille du bouton.                                                                                                                           |
| compactSpacing | boolean                                                                                   | false             | —        | Espacement compact (Figma `isCompact`).                                                                                                     |
| disabled       | boolean                                                                                   | false             | —        | Désactive le bouton.                                                                                                                        |
| type           | "button" \| "submit" \| "reset"                                                           | "button"          | —        | Type natif du bouton HTML.                                                                                                                  |
| badgeContent   | "number" \| "icon" \| "empty"                                                             | -                 | —        | Type de contenu du badge.                                                                                                                   |
| badgeCount     | number                                                                                    | -                 | —        | Nombre affiché dans le badge lorsque `badgeContent` vaut `"number"` et que le nombre est positif.                                           |
| badgeIcon      | string                                                                                    | -                 | —        | Icône du badge.                                                                                                                             |
| badgeType      | "brand" \| "neutral" \| "indicator"                                                       | -                 | —        | Type visuel du badge.                                                                                                                       |
| onClick        | (e: React.MouseEvent\<HTMLButtonElement\>) => void                                        | -                 | —        | Callback au clic.                                                                                                                           |
| variant        | "primary" \| "secondary" \| "text" \| "transparent" \| "danger" \| "neutral" \| "reverse" | "primary"         | Oui      | Alias visuel plat déprécié. Préférer `appearance`, `hierarchy`, `isCritical` et `isReversed`.                                               |

Le composant hérite des propriétés HTML standard pour les boutons.

Sans props de style explicites, le rendu par défaut correspond à `variant="primary"` : shell `brand` + `primary`, glyphe `outlined`.

L’Icon Button n’expose pas `hierarchy="outlined"`. Le neutral à bordure correspond à `appearance="neutral"` + `hierarchy="secondary"`. `appearance="outlined"` ne désigne pas ce shell : alias déprécié du glyphe.

### Migration depuis `variant`

| `variant` déprécié | Utiliser à la place |
| ------------------ | ------------------- |
| `primary` | `appearance="brand"` + `hierarchy="primary"` |
| `secondary` | `appearance="brand"` + `hierarchy="secondary"` |
| `text` | `appearance="brand"` + `hierarchy="text"` |
| `transparent` | `appearance="brand"` + `hierarchy="transparent"` |
| `danger` | `appearance="brand"` + `hierarchy="primary"` + `isCritical` |
| `reverse` | `appearance="brand"` + `hierarchy="transparent"` + `isReversed` |
| `neutral` | `appearance="neutral"` + `hierarchy="transparent"` |

Si `variant` et les nouvelles propriétés sont définis en même temps, les nouvelles propriétés explicites priment axe par axe.

### Migration depuis `appearance` (alias icône)

| `appearance` déprécié | Utiliser à la place |
| --------------------- | ------------------- |
| `"outlined"` | `iconAppearance="outlined"` |
| `"filled"` | `iconAppearance="filled"` |

Ces valeurs n’affectent que le glyphe, pas le shell.
