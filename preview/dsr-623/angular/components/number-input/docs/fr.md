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
  [hasUnit]="true"
  unit="kW"
></rte-number-input>
```

## API

Le composant public est `NumberInputComponent` (`<rte-number-input>`). Importez-le depuis `@design-system-rte/angular` et liez les entrées, sorties ou un `FormControl` réactif pour des valeurs `number | null`.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant stable pour le champ, l’association au libellé et le texte d’aide. |
| label | string | `"Label"` | Texte du libellé visible. À omettre ou laisser vide seulement si `ariaLabel` ou `ariaLabelledby` nomme le champ. |
| ariaLabel | string | `""` | Nom accessible du spinbutton lorsqu’aucun libellé visible n’est affiché. Requis si `label` est vide. |
| ariaLabelledby | string | `""` | Id d’un élément externe qui libelle le champ. Remplace l’association automatique au libellé. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du libellé par rapport au contrôle. |
| required | boolean | `false` | Marque le champ comme requis pour l’indicateur d’obligation. |
| showLabelRequirement | boolean | `false` | Affiche la mention d’obligation à côté du libellé le cas échéant. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Style visuel des steppers d’incrémentation et de décrémentation. |
| incrementPosition | `"right" \| "sides"` | `"right"` | Disposition des steppers : empilés à droite ou de part et d’autre du champ. |
| compactSpacing | boolean | `false` | Taille compacte du champ et des steppers (hauteur 24px). |
| hasUnit | boolean | `false` | Affiche un suffixe d’unité dans le champ (par exemple `kW`). |
| unit | string | `"kW"` | Texte de l’unité lorsque `hasUnit` est `true`. |
| hasAssistiveText | boolean | `false` | Active le texte d’aide sous le champ lorsqu’aucune erreur de plage n’est affichée. |
| assistiveTextLabel | string | `""` | Description d’aide lorsque `hasAssistiveText` est `true`. |
| showAssistiveIcon | boolean | `false` | Affiche une icône à côté du texte d’aide (l’état d’erreur force l’icône d’erreur). |
| error | boolean | `false` | Force le style d’erreur et utilise `errorMessage` si renseigné. |
| errorMessage | string | `""` | Message d’erreur personnalisé lorsque `error` est `true`. |
| disabled | boolean | `false` | Désactive le champ et les steppers ; la valeur affichée est masquée tandis que la valeur du modèle est conservée. |
| readOnly | boolean | `false` | Champ en lecture seule ; la valeur reste visible, les steppers sont inactifs. |
| min | number | `0` | Valeur minimale pour la validation et le pas. |
| max | number | `undefined` | Valeur maximale ; omettre pour aucune borne supérieure. |
| step | number | `1` | Pas d’incrémentation/décrémentation pour les steppers, les flèches clavier et la molette. |
| decimalPrecision | number | `0` | Nombre de décimales (`0` pour entiers uniquement). |
| locale | string | `"fr-FR"` | Locale utilisée pour le séparateur décimal (`,` ou `.`). |
| defaultValue | number | `undefined` | Valeur affichée initiale sans `value` ni formulaire ; aussi utilisée au blur si le champ est vidé. |
| placeholder | string | `""` | Placeholder de l’entrée spinbutton. |
| width | string | `undefined` | Largeur totale de la disposition (champ + steppers). Par défaut `184px` si omis. |
| name | string | `""` | Attribut `name` de l’entrée native. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | Valeurs françaises par défaut (core) | Fonctions pour remplacer les messages automatiques min/max. |
| value | `number \| null \| undefined` | `undefined` | Entrée modèle unidirectionnelle ; met à jour la valeur affichée lorsqu’elle est définie. |
| valueChange | `number \| null` | — | Émet la valeur numérique analysée lors d’une saisie ou d’un pas. |
| inputBlur | `void` | — | Émis lorsque le spinbutton perd le focus. |

## Usage

Importez `NumberInputComponent` depuis `@design-system-rte/angular` et utilisez `<rte-number-input>` dans votre template. Fournissez un `id` unique pour l’association libellé / texte d’aide.

Liez `[value]` et écoutez `(valueChange)` pour un usage contrôlé, définissez `[defaultValue]` pour une valeur initiale sans formulaire, ou connectez le composant avec `formControl` / `formControlName` (`number | null`).

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
      [hasUnit]="true"
      unit="kW"
      (valueChange)="onPowerChange($event)"
    />
  `,
})
export class PowerFieldComponent {
  onPowerChange(value: number | null): void {
    // handle value
  }
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
  [hasUnit]="true"
  unit="kW"
/>
```

Place les steppers de décrémentation et d’incrémentation à gauche et à droite du champ (`"right" | "sides"`).

#### Apparence neutre

```html
<rte-number-input
  id="number-input-neutral"
  label="Puissance"
  appearance="neutral"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Utilise des steppers neutres remplis (neutral-bold) plutôt que remplis brand (`"brand" | "neutral"`).

#### Espacement compact

```html
<rte-number-input
  id="number-input-compact"
  label="Puissance"
  [compactSpacing]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
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
  [hasUnit]="true"
  unit="kW"
/>
```

Définit la largeur totale de la disposition Number Input (champ et steppers).

#### Décimales (fr-FR)

```html
<rte-number-input
  id="number-input-decimals-fr"
  label="Puissance"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  [hasUnit]="true"
  unit="kW"
/>
```

Formate les décimales avec le séparateur de la locale (virgule pour `fr-FR`).

#### Décimales (en-US)

```html
<rte-number-input
  id="number-input-decimals-en"
  label="Puissance"
  locale="en-US"
  [decimalPrecision]="2"
  [defaultValue]="12.34"
  [max]="999"
  [hasUnit]="true"
  unit="kW"
/>
```

Utilise une locale anglaise : le séparateur décimal est un point.

#### Désactivé

```html
<rte-number-input
  id="number-input-disabled"
  label="Puissance"
  [disabled]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Désactive l’interaction ; la valeur numérique n’est pas affichée, l’unité apparaît grisée et les steppers sont inactifs.

#### Lecture seule

```html
<rte-number-input
  id="number-input-readonly"
  label="Puissance"
  [readOnly]="true"
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Affiche la valeur sans permettre la modification ni le pas.

#### Avec texte d’aide

```html
<rte-number-input
  id="number-input-assistive"
  label="Puissance"
  [hasAssistiveText]="true"
  assistiveTextLabel="Entrez une valeur entre 0 et 100, par pas de 1."
  [min]="0"
  [max]="100"
  [defaultValue]="50"
  [hasUnit]="true"
  unit="kW"
/>
```

Affiche un texte d’aide sous le champ lorsqu’aucune erreur de plage automatique n’est active.

## Limitations

### Saisie texte plutôt que type number natif

Le spinbutton utilise `type="text"` avec `inputmode` et `role="spinbutton"`, pas `type="number"`. Les séparateurs décimaux viennent uniquement de `locale` ; la saisie `.` ou `,` est normalisée selon la locale.

### Valeurs hors plage visibles

Les valeurs en dehors de `min` / `max` restent dans le champ et déclenchent des messages de plage automatiques en français (sauf override via `rangeErrorMessages` ou `error` / `errorMessage`). Le composant ne borne pas la saisie à la plage.

### Champ vide au blur

Si l’utilisateur vide le champ puis quitte le focus, l’affichage revient à `defaultValue` lorsqu’il est défini ; sinon la valeur reste vide et le modèle émet `null`.

### Affichage désactivé

Lorsque `disabled` est `true` (y compris via `disable()` sur un FormControl), le spinbutton n’affiche pas de valeur numérique. L’unité reste visible avec le style désactivé. La valeur sous-jacente `number | null` est conservée pour les formulaires et lorsque le contrôle est réactivé.

### Largeur incluant les steppers

`width` s’applique à toute la disposition (champ et steppers), pas au seul champ texte. La largeur totale par défaut est `184px` (des largeurs minimales s’appliquent en CSS).

### Molette de la souris

La molette modifie la valeur uniquement lorsque le spinbutton a le focus ; l’événement est alors empêché de faire défiler la page.

### Nom accessible

Fournissez un `label` non vide, ou laissez `label` vide et renseignez `ariaLabel` (ou `ariaLabelledby` pour un libellé externe). Le composant journalise une erreur console si aucune de ces options n’est fournie.

### Ordre de tabulation des steppers

Les boutons icône d’incrémentation et de décrémentation ont `tabIndex="-1"`. Utilisez le spinbutton et les flèches (↑ / ↓), ou l’interaction pointeur sur les steppers, pour modifier la valeur.

### État désactivé des formulaires réactifs

Avec `formControl` / `formControlName`, l’état désactivé du contrôle de formulaire prime sur l’entrée `disabled`.

## FAQ

Aucune question signalée par les utilisateurs n’est documentée pour ce composant pour le moment.
