# Checkbox

## Overview

```html
<rte-checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
/>
```

## API

Le composant `rte-checkbox` constitue l'API publique. Importez `CheckboxComponent` dans le tableau `imports` du composant consommateur et liez les inputs sur l'élément.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant unique lié au libellé et à l'input natif. |
| label | string | — (requis) | Texte du libellé visible affiché à côté de la checkbox. |
| value | string | `""` | Valeur soumise avec l'input checkbox natif. |
| indeterminate | boolean | `false` | Applique l'état visuel indéterminé sur l'input natif. |
| description | string | `""` | Texte secondaire affiché sous le libellé. |
| showLabel | boolean | `true` | Affiche ou masque le libellé visible. Fournissez `ariaLabel` lorsque la valeur est `false`. |
| disabled | boolean | `false` | Désactive les interactions et applique le style disabled. |
| error | boolean | `false` | Applique le style d'erreur à la checkbox et au libellé. |
| errorMessage | string | `""` | Texte d'erreur affiché sous la description lorsque `error` est `true`. |
| readOnly | boolean | `false` | Affiche l'état courant sans permettre de modification. |
| checked | boolean | `false` | État coché de la checkbox. À utiliser avec `(checkedChange)` en mode contrôlé. |
| tabindex | string \| number | `undefined` | Surcharge de l'ordre de tabulation passée à l'input natif. |
| ariaLabel | string | `undefined` | Nom accessible appliqué en `aria-label` lorsque le libellé visible est masqué. |

| Output | Type | Description |
|--------|------|-------------|
| checkedChange | boolean | Émis lorsque l'utilisateur bascule l'état coché. |

## Usage

Importez `CheckboxComponent` depuis la librairie du design system et ajoutez-le au tableau `imports` du composant standalone consommateur. Utilisez `<rte-checkbox>` dans le template avec un `id` unique et un `label`.

```typescript
import { Component } from "@angular/core";
import { CheckboxComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-preferences",
  imports: [CheckboxComponent],
  template: `
    <rte-checkbox
      id="my-checkbox"
      label="Label"
      description="Description"
      [checked]="isChecked"
      (checkedChange)="isChecked = $event"
    />
  `,
})
export class PreferencesComponent {
  isChecked = false;
}
```

Pour plusieurs options liées, préférez `rte-checkbox-group` plutôt que de composer manuellement plusieurs checkboxes autonomes.

#### Indeterminate

```html
<rte-checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  [indeterminate]="true"
/>
```

Utilisez `indeterminate` pour refléter un groupe ou un nœud d'arborescence partiellement sélectionné.

#### Error

```html
<rte-checkbox
  id="my-checkbox"
  label="Label"
  description="Description"
  [error]="true"
  errorMessage="Error message"
/>
```

Définissez `error` et `errorMessage` pour afficher un retour de validation.

## Limitations

### État indéterminé

L'état indéterminé est contrôlé programmatiquement via l'input `indeterminate`. Il ne représente pas une troisième valeur soumise — l'input natif se résout toujours en coché ou non coché après une interaction utilisateur.

### Mode lecture seule

En mode lecture seule, les interactions clic et touche Espace ne modifient pas l'état coché. L'input natif reçoit également `pointer-events: none`, seule la case reçoit le focus — pas le libellé, la description ni le message d'erreur.

### État contrôlé

Liez `checked` et écoutez `(checkedChange)` pour synchroniser l'état parent. Le composant reflète l'input `checked` via un signal interne ; mettez à jour la propriété liée dans le parent lors du traitement de `checkedChange`.
