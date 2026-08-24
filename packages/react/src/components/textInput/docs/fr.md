# Text Input

## Overview

```tsx
<TextInput
  id="text-input-default"
  label="Label"
  labelPosition="top"
  maxLength={150}
  value=""
  aria-required
  autoComplete="off"
/>
```

## API

Le composant `TextInput` constitue l'API publique. Passez les props pour contrôler l'apparence et le comportement ; utilisez `onChange` pour mettre à jour la valeur de manière contrôlée.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Associe le libellé au champ de saisie. |
| label | string | — | Texte du libellé visible. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du libellé par rapport au champ. |
| value | string | — | Valeur contrôlée du champ. |
| defaultValue | string | — | Valeur initiale en mode non contrôlé. |
| maxLength | number | — | Nombre maximal de caractères autorisés. |
| leftIcon | string | — | Nom de l'icône à gauche. Remplacée par l'icône d'erreur lorsque `error` est `true`. |
| showRightIcon | boolean | `true` | Active l'emplacement de l'icône à droite. |
| rightIconAction | `"clean" \| "visibilityOn" \| "visibilityOff"` | `"clean"` | Comportement de l'icône droite : effacer la valeur ou basculer la visibilité du mot de passe. |
| rightIconSize | `"s" \| "m" \| "l"` | — | Taille du bouton icône à droite. |
| showLabelRequirement | boolean | `false` | Affiche le texte facultatif/obligatoire à côté du libellé. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Style visuel du texte d'aide. |
| showAssistiveIcon | boolean | `false` | Affiche une icône à côté du texte d'aide (erreur et succès uniquement). |
| assistiveTextLabel | string | `""` | Texte d'aide affiché sous le champ. |
| error | boolean | `false` | Applique le style d'erreur au champ. |
| disabled | boolean | `false` | Désactive le champ. |
| readOnly | boolean | `false` | Rend le champ en lecture seule. |
| width | string | `"300px"` | Largeur du conteneur. |
| onChange | `(value: string) => void` | — | Appelé avec la valeur mise à jour à chaque saisie. |
| onEnterKeyDown | `(value: string) => void` | — | Appelé avec la valeur courante lorsque Entrée est pressée. |
| onRightIconClick | `() => void` | — | Appelé lors du clic sur l'icône droite. L'action intégrée (effacer ou basculer la visibilité) s'exécute après ce callback. |

`TextInput` accepte également les attributs natifs standard (`autoComplete`, `aria-*`, `name`, etc.) sauf `id`, `onChange`, `value`, `defaultValue` et `placeholder`.

## Usage

Importez `TextInput` et rendez-le avec un `id` unique. Contrôlez la valeur via les props `value` et `onChange`.

```tsx
import { useState } from "react";
import { TextInput } from "@design-system-rte/react";

function Example() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      id="text-input-default"
      label="Label"
      labelPosition="top"
      maxLength={150}
      value={value}
      onChange={setValue}
      aria-required
      autoComplete="off"
    />
  );
}
```

### Compteur de caractères

Le compteur s'affiche uniquement lorsque `showCounter` est `true` et `maxLength` est un nombre. Son placement dépend de `labelPosition` : au-dessus de la barre de saisie pour `"top"`, à côté du conteneur pour `"side"`.

### Examples

#### Error

```tsx
<TextInput
  id="text-input-error"
  label="Label"
  error
  assistiveAppearance="error"
  showAssistiveIcon
  assistiveTextLabel="Error message"
/>
```

Applique le style d'erreur avec un message d'aide et une icône.

#### Sizes

```tsx
<TextInput id="text-input-default-width" label="Default" />
<TextInput id="text-input-narrow" label="20px" width="20px" />
<TextInput id="text-input-full" label="100%" width="100%" />
```

Définit la largeur du conteneur. Les valeurs inférieures à la largeur minimale du champ (`48px`) sont limitées.

#### Label position

```tsx
<TextInput id="text-input-top" label="Top" labelPosition="top" />
<TextInput id="text-input-side" label="Side" labelPosition="side" />
```

Place le libellé au-dessus (`"top"`) ou à côté (`"side"`) du champ.

#### Required indicator

```tsx
{/* Obligatoire avec texte de requirement visible */}
<TextInput id="text-input-required-visible" label="Label" width="400px" required showLabelRequirement />

{/* Obligatoire avec astérisque uniquement */}
<TextInput id="text-input-required-asterisk" label="Label" width="400px" required assistiveAppearance="error" />

{/* Facultatif avec texte de requirement */}
<TextInput id="text-input-optional-visible" label="Label" width="400px" showLabelRequirement />

{/* Facultatif sans texte de requirement */}
<TextInput id="text-input-optional-hidden" label="Label" width="400px" assistiveAppearance="error" />
```

Contrôle la façon dont les champs obligatoires et facultatifs sont indiqués à côté du libellé.

#### Assistive text

```tsx
<TextInput id="text-input-description" label="Description" assistiveAppearance="description" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-error-assistive" label="Error" assistiveAppearance="error" error assistiveTextLabel="Assistive text" />
<TextInput id="text-input-success" label="Success" assistiveAppearance="success" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-link" label="Link" assistiveAppearance="link" assistiveTextLabel="Assistive text" />
<TextInput id="text-input-error-icon" label="Error + icon" assistiveAppearance="error" showAssistiveIcon error assistiveTextLabel="Assistive text" />
<TextInput id="text-input-success-icon" label="Success + icon" assistiveAppearance="success" showAssistiveIcon assistiveTextLabel="Assistive text" />
```

Affiche le texte d'aide sous le champ dans différentes apparences (`"description"`, `"error"`, `"success"`, `"link"`).

## Limitations

### Largeur minimale du champ

Le champ de saisie a une largeur minimale de `48px`. Les largeurs de conteneur inférieures (par exemple `width="20px"`) sont visuellement limitées au minimum.

### Largeur par défaut

La largeur par défaut du conteneur est `300px`. Passez `width` pour la modifier.

### Visibilité de l'icône droite

L'icône droite est masquée lorsque le champ est `disabled` ou `readOnly`. Avec `rightIconAction="clean"`, l'icône n'apparaît que lorsque le champ contient du texte. Avec les actions de visibilité (`"visibilityOn"` / `"visibilityOff"`), l'icône est toujours affichée lorsque `showRightIcon` est activé.

### L'icône d'erreur remplace l'icône gauche

Lorsque `error` est `true`, l'icône gauche est remplacée par l'icône d'erreur, quelle que soit la valeur de `leftIcon`.

### Placeholder non supporté

`placeholder` ne fait pas partie de l'API publique de `TextInput`. Utilisez `assistiveTextLabel` pour les indications et instructions.

### className personnalisé non supporté pour la mise en page

`className` est transmis à l'élément natif `<input>`, et non au conteneur du composant. Les règles CSS qui définissent des propriétés de mise en page comme `width` sur `className` peuvent casser la barre de saisie. Utilisez la prop `width` pour contrôler la largeur du conteneur.

## FAQ

Q : Lorsque `disabled` est `true`, pourquoi le TextInput apparaît-il vide alors qu'une prop `value` est définie ? (DSR-885)

R : Par conception, `disabled` représente un champ auquel l'utilisateur n'a pas accès et qui n'affiche pas de valeur. Pour afficher une valeur pré-remplie, par défaut ou bloquée sans permettre la modification, utilisez `readOnly` à la place. Consultez la section Limitations / Affichage de la valeur en état disabled.

Q : Puis-je utiliser une classe CSS personnalisée pour styliser le conteneur du TextInput ?

R : La personnalisation visuelle via `className` n'est pas un pattern supporté pour les consommateurs. Les propriétés de mise en page (width, height, padding) doivent passer par les props documentées (`width`, etc.). Cette limitation est liée à DSR-603 (IconButton / React — certaines classes CSS ne s'appliquent pas).
