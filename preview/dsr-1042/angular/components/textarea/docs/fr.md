# Textarea

## Overview

```html
<rte-textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Assistive text label"
  [rows]="3"
  (change)="onTextareaChange($event)"
/>
```

## API

Le composant `TextareaComponent` (`rte-textarea`) constitue l'API publique. Utilisez-le dans les templates et liez-le aux formulaires réactifs ou template-driven via `formControl`, `formControlName` ou `ngModel`.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — | `id` du textarea natif ; sert à construire l'id du texte d'aide lorsque celui-ci est présent. |
| name | string | — | Attribut `name` du textarea natif. |
| ariaLabelledby | string | — | Alternative à `labelId` pour `aria-labelledby` lorsqu'aucun id de label visible n'est défini. |
| label | string | — | Libellé visible du champ. |
| labelId | string | — | `id` de l'élément label, relié au textarea via `aria-labelledby`. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du label par rapport au textarea. |
| assistiveTextLabel | string | — | Texte affiché sous le champ ou libellé du lien lorsque l'apparence est `link`. |
| assistiveTextAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Style visuel du texte d'aide, ou mode lien combiné à `assistiveTextLink`. |
| assistiveTextLink | string | — | URL du texte d'aide lorsque `assistiveTextAppearance` est `"link"`. |
| required | boolean | `false` | Définit l'attribut natif `required` et alimente l'indicateur de requirement. |
| showLabelRequirement | boolean | `false` | Affiche l'indicateur obligatoire ou facultatif à côté du label. |
| resizeable | boolean \| string | `true` | Active ou désactive le redimensionnement du textarea par l'utilisateur. |
| maxLength | number | — | Nombre maximal de caractères ; appliqué par l'élément natif. |
| disabled | boolean | `false` | Désactive le textarea (respecte aussi l'état disabled du `FormControl`). |
| readOnly | boolean | `false` | Met le textarea en lecture seule. |
| value | string | — | Valeur synchronisée depuis le parent lorsqu'elle est fournie. |
| defaultValue | string | — | Valeur initiale sans liaison de formulaire. |
| rows | number | `3` | Hauteur visible du textarea en lignes. |
| showCounter | boolean | `false` | Affiche un compteur de caractères lorsque `maxLength` est défini. |
| width | string \| number | `"350px"` | Largeur du conteneur externe ; les valeurs numériques sont interprétées en pixels sauf si une unité est incluse. |

| Output | Type | Description |
|--------|------|-------------|
| change | `Event` | Émis sur l'`input` natif après mise à jour de la valeur. |
| blur | `FocusEvent` | Émis lorsque le textarea perd le focus, après propagation du touch aux formulaires. |

## Usage

Importez `TextareaComponent` dans votre module standalone ou votre route et utilisez le sélecteur `rte-textarea`. Le composant implémente `ControlValueAccessor` ; liez-le avec `formControl`, `formControlName` ou `ngModel` pour l'intégration aux formulaires Angular.

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextareaComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-bio-field",
  imports: [ReactiveFormsModule, TextareaComponent],
  template: `
    <rte-textarea
      id="bio"
      label="Bio"
      labelId="bio-label"
      assistiveTextLabel="Brief description, up to 500 characters."
      [rows]="3"
      [formControl]="bioControl"
    />
  `,
})
export class BioFieldComponent {
  bioControl = new FormControl("");
}
```

Utilisez `assistiveTextLabel` et `assistiveTextAppearance` pour l'aide et les messages de validation plutôt qu'un placeholder.

#### Erreur

```html
<rte-textarea
  id="my-textarea"
  label="Label"
  labelId="LabelId"
  assistiveTextLabel="Error message"
  assistiveTextAppearance="error"
  [maxLength]="100"
/>
```

Définissez `assistiveTextAppearance` sur `"error"` et placez le message dans `assistiveTextLabel` pour afficher l'état d'erreur sous le champ.

(`assistiveTextAppearance` : `"description" | "error" | "success" | "link"`)

## Limitations

### Compteur de caractères

Le compteur n'est affiché que si `showCounter` est `true` et que `maxLength` est défini. Il apparaît dans l'en-tête du label en position haute ; il n'est pas affiché lorsque le label utilise `labelPosition="side"`.

### Texte d'aide en lien

Lorsque `assistiveTextAppearance` est `"link"`, le contenu d'aide est rendu comme lien externe et nécessite `assistiveTextLink`. Les autres apparences s'affichent en texte avec icônes optionnelles pour l'erreur et le succès.
