| Nom            | Type                                                                                      | Valeur par défaut | Déprécié | Description                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance     | "brand" \| "neutral" \| "outlined" \| "filled"                                            | "brand" (shell)   | Partiel  | Shell : `brand` ou `neutral`. `outlined` / `filled` : alias déprécié icône — préférer `iconAppearance`.                                   |
| hierarchy      | "primary" \| "secondary" \| "text" \| "transparent"                                       | "primary"         | —        | Hiérarchie visuelle dans l’apparence du shell.                                                                                              |
| isCritical     | boolean                                                                                   | false             | —        | Style critique/destructeur (Figma : `brand` + `primary` uniquement).                                                                        |
| isReversed     | boolean                                                                                   | false             | —        | Couleurs inversées pour fonds contrastés (Figma : `brand` + `transparent`).                                                                |
| iconAppearance | "filled" \| "outlined"                                                                    | "outlined"        | —        | Style du glyphe d’icône (Figma `iconAppearance`).                                                                                           |
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

L’Icon Button n’expose pas `hierarchy="outlined"` : le neutral à bordure correspond à `appearance="neutral"` + `hierarchy="secondary"`.

### Migration depuis `variant`

| `variant` déprécié | Utiliser à la place |
| ------------------ | ------------------- |
| `primary` | `appearance="brand"` + `hierarchy="primary"` |
| `secondary` / `text` / `transparent` | `appearance="brand"` + `hierarchy` correspondant |
| `danger` | `appearance="brand"` + `hierarchy="primary"` + `isCritical` |
| `reverse` | `appearance="brand"` + `hierarchy="transparent"` + `isReversed` |
| `neutral` | `appearance="neutral"` + `hierarchy="text"` |

Si `variant` et les nouvelles propriétés sont définis en même temps, les nouvelles propriétés explicites priment axe par axe.
