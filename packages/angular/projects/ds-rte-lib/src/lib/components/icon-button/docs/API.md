| Nom             | Type                                                                                      | Valeur par défaut | Déprécié | Description                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance      | "brand" \| "neutral" \| "outlined" \| "filled"                                            | -                 | Partiel  | Shell : `brand` ou `neutral`. Valeurs `outlined` / `filled` : alias déprécié du glyphe — préférer `iconAppearance`. Si omis, dérivé de `variant`. |
| hierarchy       | "primary" \| "secondary" \| "text" \| "transparent"                                       | -                 | —        | Hiérarchie du shell. Si omise, dérivée de `variant` (défaut `primary`).                                                                   |
| isCritical      | boolean                                                                                   | -                 | —        | Style critique/destructeur (`brand` + `primary`). Si omis, dérivé de `variant`.                                                             |
| isReversed      | boolean                                                                                   | -                 | —        | Couleurs inversées (`brand` + `transparent`). Si omis, dérivé de `variant`.                                                                 |
| iconAppearance  | "filled" \| "outlined"                                                                    | -                 | —        | Style du glyphe (icônes togglables ; Figma `iconAppearance`). Défaut effectif : `outlined`.                                                 |
| name            | RegularIconIdKey \| TogglableIconIdKey                                                    | —                 | —        | Nom de l’icône à afficher.                                                                                                                  |
| size            | "s" \| "m" \| "l"                                                                         | "m"               | —        | Taille du bouton.                                                                                                                           |
| compactSpacing  | boolean                                                                                   | false             | —        | Espacement compact (Figma `isCompact`).                                                                                                     |
| disabled        | boolean                                                                                   | false             | —        | Désactive le bouton.                                                                                                                        |
| type            | "button" \| "submit" \| "reset"                                                           | "button"          | —        | Type natif du bouton HTML.                                                                                                                  |
| badgeContent    | "number" \| "icon" \| "empty"                                                             | -                 | —        | Type de contenu du badge.                                                                                                                   |
| badgeCount      | number                                                                                    | -                 | —        | Nombre affiché dans le badge lorsque `badgeContent` vaut `"number"` et que le nombre est positif.                                           |
| badgeIcon       | RegularIconIdKey \| TogglableIconIdKey                                                    | "settings"        | —        | Icône du badge.                                                                                                                             |
| badgeType       | "brand" \| "neutral" \| "indicator"                                                       | -                 | —        | Type visuel du badge.                                                                                                                       |
| ariaDescribedBy | string \| undefined                                                                       | -                 | —        | Valeur de l’attribut ARIA `aria-describedby`.                                                                                               |
| ariaExpanded    | boolean \| undefined                                                                      | -                 | —        | Valeur de l’attribut ARIA `aria-expanded`.                                                                                                  |
| ariaHaspopup    | string \| undefined                                                                       | -                 | —        | Valeur de l’attribut ARIA `aria-haspopup`.                                                                                                  |
| ariaLabel       | string \| undefined                                                                       | -                 | —        | Libellé accessible du bouton.                                                                                                               |
| ariaLabelledBy  | string \| undefined                                                                       | -                 | —        | Référence vers l’élément fournissant le libellé accessible.                                                                                 |
| tabIndex        | number \| undefined                                                                       | -                 | —        | Valeur de l’attribut `tabindex`.                                                                                                            |
| clickEvent      | output\<MouseEvent \| KeyboardEvent\>                                                     | -                 | —        | Émis au clic ou à l’activation clavier.                                                                                                     |
| variant         | "primary" \| "secondary" \| "text" \| "transparent" \| "danger" \| "neutral" \| "reverse" | "primary"         | Oui      | Alias visuel plat déprécié. Préférer `appearance`, `hierarchy`, `isCritical` et `isReversed`.                                             |

Sans props de style explicites, le rendu par défaut correspond à `variant="primary"` : shell `brand` + `primary`, glyphe `outlined`.

L’Icon Button n’expose pas `hierarchy="outlined"`. Le neutral à bordure correspond à `appearance="neutral"` + `hierarchy="secondary"`. `appearance="outlined"` sur l’Icon Button ne désigne pas ce shell : c’est l’alias déprécié du glyphe (voir ci-dessous).

### Migration depuis `variant`

| `variant` déprécié | Utiliser à la place |
| ------------------ | ------------------- |
| `primary` | `appearance="brand"` + `hierarchy="primary"` |
| `secondary` | `appearance="brand"` + `hierarchy="secondary"` |
| `text` | `appearance="brand"` + `hierarchy="text"` |
| `transparent` | `appearance="brand"` + `hierarchy="transparent"` |
| `danger` | `appearance="brand"` + `hierarchy="primary"` + `[isCritical]="true"` |
| `reverse` | `appearance="brand"` + `hierarchy="transparent"` + `[isReversed]="true"` |
| `neutral` | `appearance="neutral"` + `hierarchy="transparent"` |

Si `variant` et les nouvelles propriétés sont définis en même temps, les nouvelles propriétés explicites priment axe par axe.

### Migration depuis `appearance` (alias icône)

Ces valeurs n’affectent que le **glyphe**, pas le shell.

| `appearance` déprécié | Utiliser à la place |
| --------------------- | ------------------- |
| `"outlined"` | `iconAppearance="outlined"` |
| `"filled"` | `iconAppearance="filled"` |
