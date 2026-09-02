# Checkbox

## Overview

```tsx
<Checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
/>
```

## API

Le composant `Checkbox` constitue l'API publique. Il rend un input checkbox natif stylisé avec un libellé associé, une description optionnelle et un message d'erreur optionnel.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant unique lié au libellé et à l'input natif. |
| label | string | — (requis) | Texte du libellé visible affiché à côté de la checkbox. |
| showLabel | boolean | `true` | Affiche ou masque le libellé visible. Fournissez `aria-label` lorsque la valeur est `false`. |
| description | string | `undefined` | Texte secondaire affiché sous le libellé. |
| error | boolean | `undefined` | Applique le style d'erreur à la checkbox et au libellé. |
| errorMessage | string | `undefined` | Texte d'erreur affiché sous la description lorsque `error` est `true`. |
| readOnly | boolean | `undefined` | Affiche l'état courant sans permettre de modification. |
| indeterminate | boolean | `undefined` | Applique l'état visuel indéterminé sur l'input natif. |

Le composant accepte également les attributs natifs standard d'un input checkbox issus de `React.InputHTMLAttributes<HTMLInputElement>` (sauf `id`), transmis à l'élément `<input type="checkbox">` sous-jacent.

## Usage

Importez `Checkbox` depuis la librairie du design system et rendez-le avec un `id` unique et un `label`.

```tsx
import { useState } from "react";
import { Checkbox } from "@design-system-rte/react";

function Preferences() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      id="my-checkbox"
      label="Label"
      description="Description"
      checked={isChecked}
      onChange={(event) => setIsChecked(event.target.checked)}
    />
  );
}
```

Pour plusieurs options liées, préférez `CheckboxGroup` plutôt que de composer manuellement plusieurs checkboxes autonomes.

#### Indeterminate

```tsx
<Checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  indeterminate
/>
```

Utilisez `indeterminate` pour refléter un groupe ou un nœud d'arborescence partiellement sélectionné.

#### Error

```tsx
<Checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  error
  errorMessage="Error message"
/>
```

Définissez `error` et `errorMessage` pour afficher un retour de validation.

## Limitations

### État indéterminé

L'état indéterminé est contrôlé programmatiquement via la prop `indeterminate`, appliquée à l'input natif dans un `useEffect`. Il ne représente pas une troisième valeur soumise — l'input natif se résout toujours en coché ou non coché après une interaction utilisateur.

### Mode lecture seule

En mode lecture seule, les pressions sur la touche Espace sont empêchées de basculer l'état. L'input natif reçoit également `pointer-events: none`, seule la case reçoit le focus — pas le libellé, la description ni le message d'erreur.

### Usage contrôlé et non contrôlé

Utilisez `checked` avec `onChange` en mode contrôlé, ou `defaultChecked` en mode non contrôlé. Ne combinez pas les deux approches sur la même instance.
