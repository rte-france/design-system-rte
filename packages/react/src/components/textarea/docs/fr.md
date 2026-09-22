# Textarea

## Overview

```tsx
<Textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Assistive text for the textarea"
  rows={3}
  onChange={(event) => console.log(event.target.value)}
/>
```

## API

Le composant `Textarea` constitue l'API publique. Il affiche un champ multiligne avec label, texte d'aide optionnel et compteur de caractères.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| label | string | — | Libellé visible du champ. |
| labelId | string | — | `id` de l'élément label, relié au textarea via `aria-labelledby`. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du label par rapport au textarea. |
| required | boolean | `false` | Indique que le champ est obligatoire pour l'indicateur de requirement. |
| showLabelRequirement | boolean | `false` | Affiche l'indicateur obligatoire ou facultatif à côté du label. |
| width | string \| number | `"350px"` | Largeur du conteneur externe. |
| resizeable | boolean | `true` | Active ou désactive le redimensionnement du textarea par l'utilisateur. |
| showCounter | boolean | `false` | Affiche un compteur de caractères lorsque `maxLength` est défini. |
| value | string | — | Valeur contrôlée du textarea. |
| defaultValue | string | — | Valeur initiale pour un textarea non contrôlé. |
| assistiveTextLabel | string | — | Texte de description, de succès ou de lien affiché sous le champ. |
| errorMessage | string | — | Message affiché sous le champ lorsque `aria-invalid` est true (sinon repli sur `assistiveTextLabel`). |
| assistiveTextAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Style visuel du texte d'aide lorsque le champ n'est pas en état invalide. |
| assistiveTextLink | string | — | URL utilisée lorsque le texte d'aide est affiché comme lien. |
| id | string | — | `id` du textarea natif ; sert aussi à construire l'id du texte d'aide. |
| name | string | — | Attribut `name` du textarea natif. |
| className | string | `""` | Classe CSS additionnelle sur le textarea natif. |
| maxLength | number | — | Nombre maximal de caractères ; appliqué par l'élément natif. |
| disabled | boolean | `false` | Désactive le textarea. |
| readOnly | boolean | `false` | Met le textarea en lecture seule. |
| onChange | `(event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Appelé lorsque la valeur change. |
| onBlur | `(event: FocusEvent<HTMLTextAreaElement>) => void` | — | Appelé lorsque le textarea perd le focus. |

Les attributs textarea standards (par exemple `rows`, `aria-invalid` ou `aria-label`) peuvent être passés à l'élément natif, sauf `placeholder`, qui n'est pas pris en charge.

## Usage

Importez `Textarea` et intégrez-le dans votre formulaire ou votre page. Utilisez `label` et `assistiveTextLabel` pour guider l'utilisateur plutôt qu'un placeholder. En cas d'échec de validation, définissez `aria-invalid` et `errorMessage` (ou le contenu d'erreur dans `assistiveTextLabel`).

```tsx
import { Textarea } from "@design-system-rte/react";

function CommentField() {
  return (
    <Textarea
      id="comment"
      label="Comment"
      labelId="comment-label"
      assistiveTextLabel="Maximum 500 characters."
      rows={3}
      onChange={(event) => console.log(event.target.value)}
    />
  );
}
```

Vous pouvez passer d'autres attributs natifs du textarea (comme `rows` ou `aria-invalid`) en props. N'utilisez pas `placeholder` ; privilégiez le texte d'aide pour les consignes et exemples.

#### Erreur

```tsx
<Textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  maxLength={100}
/>
```

Définissez `assistiveTextAppearance` sur `"error"` et placez le message dans `assistiveTextLabel` pour afficher l'état d'erreur sous le champ.

(`assistiveTextAppearance` : `"description" | "error" | "success" | "link"`)

## Limitations

### Compteur de caractères

Le compteur n'est affiché que si `showCounter` est `true` et que `maxLength` est défini. Avec `labelPosition="side"`, le compteur apparaît dans l'en-tête du label en position haute et n'est pas affiché à côté d'un label latéral.

### Texte d'aide et erreurs

Lorsque `aria-invalid` est true, la zone d'aide affiche `errorMessage` si elle est fournie, sinon `assistiveTextLabel`, avec le style d'erreur. Lorsque `aria-invalid` est false, le texte d'aide suit `assistiveTextAppearance`.
