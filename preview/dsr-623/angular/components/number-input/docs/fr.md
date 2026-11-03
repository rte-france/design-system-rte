# Number Input

## Overview

```html
<rte-number-input
  id="number-input-default"
  label="Puissance"
  [min]="0"
  [max]="100"
  [step]="1"
  [defaultValue]="50"
  unit="kW"
></rte-number-input>
```

## API

Le composant public est `NumberInputComponent` (`<rte-number-input>`). Importez-le depuis `@design-system-rte/angular` et liez ses entrées et sorties, ou connectez un `FormControl` / `formControlName` réactif de type `number | null`.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant stable pour le champ, l’association au libellé et le texte d’aide. |
| label | string | `"Label"` | Texte du libellé visible. À omettre ou laisser vide seulement si `ariaLabel` ou `ariaLabelledby` nomme le champ. |
| ariaLabel | string | `""` | Nom accessible du champ de saisie lorsqu’aucun libellé visible n’est affiché. Requis si `label` est vide. |
| ariaLabelledby | string | `""` | Id d’un élément externe qui libelle le champ. Remplace l’association automatique au libellé. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du libellé par rapport au contrôle. |
| required | boolean | `false` | Marque le champ comme requis pour l’indicateur d’obligation. |
| showLabelRequirement | boolean | `false` | Affiche la mention d’obligation à côté du libellé le cas échéant. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Style visuel des steppers d’incrémentation et de décrémentation. |
| incrementPosition | `"right" \| "sides"` | `"right"` | Disposition des steppers : empilés à droite ou de part et d’autre du champ. |
| compactSpacing | boolean | `false` | Taille compacte du champ et des steppers (hauteur 24px). |
| unit | string | `""` | Suffixe d’unité affiché dans le champ lorsqu’il est non vide (par exemple `kW`). |
| assistiveText | string | `""` | Texte d’aide sous le champ lorsqu’il est non vide et qu’aucun message d’erreur de plage ou personnalisé n’est affiché. |
| error | boolean | `false` | Force le style d’erreur et utilise `errorMessage` si renseigné. La validation de plage déclenche aussi l’état d’erreur. |
| errorMessage | string | `""` | Message d’erreur personnalisé lorsque `error` est `true`. |
| disabled | boolean | `false` | Désactive le champ et les steppers ; la valeur affichée est masquée tandis que la valeur du modèle est conservée. |
| readOnly | boolean | `false` | Champ en lecture seule ; la valeur reste visible, les steppers sont inactifs. |
| min | number | `0` | Valeur minimale pour la validation et le pas. |
| max | number | `undefined` | Valeur maximale ; omettre pour aucune borne supérieure. |
| step | number | `1` | Pas d’incrémentation/décrémentation pour les steppers, les flèches clavier et la molette. Les valeurs non finies ou non positives reviennent à `1`. |
| decimalPrecision | number | `0` | Nombre de décimales (`0` pour entiers uniquement). Borné entre `0` et `100`. |
| locale | string | `"fr-FR"` | Locale utilisée pour le séparateur décimal (`,` ou `.`). |
| defaultValue | number | `undefined` | Valeur affichée initiale lorsque `value` est vide et sans formulaire ; aussi utilisée au blur si le champ est vidé. |
| placeholder | string | `""` | Placeholder du champ de saisie. |
| width | string | `"184px"` | Largeur totale de la disposition (champ + steppers). Les valeurs numériques sont traitées en pixels. |
| name | string | `""` | Attribut `name` de l’entrée native. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | Voir le tableau ci-dessous | Remplace les messages automatiques min/max de plage. Si omis, les valeurs par défaut françaises du core s’appliquent. |
| value | string | `""` | Liaison unidirectionnelle en texte numérique ; met à jour l’affichage lorsque la valeur est non vide et finie. Préférez `defaultValue` ou les formulaires réactifs pour un usage courant. |
| valueChange | `number \| null` | — | Émet la valeur numérique analysée lors d’une saisie ou d’un pas. Émet `null` si le champ est vide ou non analysable (comme le modèle de formulaire réactif). |
| inputBlur | `void` | — | Émis lorsque le champ de saisie perd le focus. |

Les erreurs de plage et de validation affichent automatiquement une icône d’erreur à côté du texte d’aide ; il n’existe pas d’entrée dédiée pour activer cette icône.

### `NumberInputRangeErrorMessages`

| Nom | Type | Valeur par défaut |
|-----|------|-------------------|
| between | `(min: number, max: number) => string` | `(min, max) => \`La valeur doit être comprise entre ${min} et ${max}.\`` |
| greaterThan | `(min: number) => string` | `(min) => \`La valeur doit être supérieure ou égale à ${min}.\`` |
| lessThan | `(max: number) => string` | `(max) => \`La valeur doit être inférieure ou égale à ${max}.\`` |

## Usage

Importez `NumberInputComponent` depuis `@design-system-rte/angular` et utilisez `<rte-number-input>` dans votre template. Fournissez un `id` unique pour l’association libellé / texte d’aide.

Définissez `[defaultValue]` pour une valeur initiale sans formulaire, liez `[value]` en texte numérique pour des mises à jour unidirectionnelles, écoutez `(valueChange)` pour les nombres analysés, ou connectez le composant avec `formControl` / `formControlName` (`number | null`).

```typescript
import { Component } from "@angular/core";
import { NumberInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-power-field",
  imports: [NumberInputComponent],
  template: `
    <rte-number-input
      id="number-input-default"
      label="Puissance"
      [min]="0"
      [max]="100"
      [step]="1"
      [defaultValue]="50"
      unit="kW"
      (valueChange)="onPowerChange($event)"
    />
  `,
})
export class PowerFieldComponent {
  onPowerChange(value: number): void {
    // traiter la valeur (0 lorsque le champ est vide)
  }
}
```

Avec les formulaires réactifs, liez un `FormControl<number | null>` ; la valeur et l’état désactivé du contrôle restent synchronisés avec le champ de saisie.

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { NumberInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-quantity-field",
  imports: [ReactiveFormsModule, NumberInputComponent],
  template: `
    <rte-number-input
      id="number-input-reactive"
      label="Quantité"
      [min]="0"
      [max]="10"
      [formControl]="quantity"
    />
  `,
})
export class QuantityFieldComponent {
  readonly quantity = new FormControl<number | null>(3);
}
```

N’utilisez pas dans les applications les briques internes telles que `<rte-base-input>` avec contrôle projeté, sauf extension du design system.

#### Steppers latéraux

```html
<rte-number-input
  id="number-input-sides"
  label="Puissance"
  incrementPosition="sides"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Place les steppers de décrémentation et d’incrémentation à gauche et à droite du champ (`"right" | "sides"`).

#### Espacement compact

```html
<rte-number-input
  id="number-input-compact"
  label="Puissance"
  [compactSpacing]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Réduit la hauteur du champ et des steppers pour les mises en page denses.

#### Largeur personnalisée

```html
<rte-number-input
  id="number-input-custom-width"
  label="Puissance"
  width="320px"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Définit la largeur totale de la disposition Number Input (champ et steppers).

#### Décimales

Définissez `[decimalPrecision]` pour autoriser des fractions. Le séparateur affiché dépend de `locale` (virgule avec `fr-FR` par défaut ; passez `locale="en-US"` pour un point).

```html
<rte-number-input
  id="number-input-decimals"
  label="Puissance"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  unit="kW"
/>
```

#### Avec texte d’aide

```html
<rte-number-input
  id="number-input-assistive"
  label="Puissance"
  assistiveText="Entrez une valeur entre 0 et 100, par pas de 1."
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  unit="kW"
/>
```

Affiche un texte d’aide sous le champ lorsqu’aucune erreur de plage automatique n’est active.

## Limitations

### Affichage désactivé

Lorsque `disabled` est `true` (y compris via `disable()` sur un FormControl), le champ de saisie n’affiche pas de valeur numérique. L’unité reste visible avec le style désactivé. La valeur sous-jacente `number | null` est conservée pour les formulaires et lorsque le contrôle est réactivé.

### Largeur incluant les steppers

`width` s’applique à toute la disposition (champ et steppers), pas au seul champ texte. La largeur totale par défaut est `184px` (des largeurs minimales s’appliquent en CSS).

### Molette de la souris

La molette modifie la valeur uniquement lorsque le champ de saisie a le focus ; l’événement est alors empêché de faire défiler la page.

### Nom accessible

Fournissez un `label` non vide, ou laissez `label` vide et renseignez `ariaLabel` (ou `ariaLabelledby` pour un libellé externe). Si aucune de ces options n’est fournie, le composant affiche une erreur dans la console.

### Ordre de tabulation des steppers

Les boutons icône d’incrémentation et de décrémentation ont `tabIndex="-1"`. Utilisez le champ de saisie et les flèches (↑ / ↓), ou l’interaction pointeur sur les steppers, pour modifier la valeur.

### État désactivé des formulaires réactifs

Avec `formControl` / `formControlName`, l’état désactivé du contrôle de formulaire prime sur l’entrée `disabled`.
