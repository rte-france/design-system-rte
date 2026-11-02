# Number Input

## Overview

```tsx
import { NumberInput } from "@design-system-rte/react";

<NumberInput
  id="number-input-default"
  label="Puissance"
  min={0}
  max={100}
  step={1}
  defaultValue={50}
  unit="kW"
/>;
```

## API

Le composant public est `NumberInput`. Importez-le depuis `@design-system-rte/react`, passez les props et écoutez `onChange` pour la valeur numérique analysée (`number \| null`).

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant stable pour le champ, l’association au libellé et le texte d’aide. |
| label | string | — (requis) | Texte du libellé visible. Laissez `""` seulement si `aria-label` ou `aria-labelledby` nomme le champ. |
| aria-label | string | `""` | Nom accessible du champ de saisie lorsqu’aucun libellé visible n’est affiché. Requis si `label` est vide. |
| aria-labelledby | string | `""` | Id d’un élément externe qui libelle le champ. Remplace l’association automatique au libellé. |
| labelPosition | `"top" \| "side"` | `"top"` | Position du libellé par rapport au contrôle. |
| required | boolean | `false` | Marque le champ comme requis pour l’indicateur d’obligation. |
| showLabelRequirement | boolean | `false` | Affiche la mention d’obligation à côté du libellé le cas échéant. |
| appearance | `"brand" \| "neutral"` | `"brand"` | Style visuel des steppers d’incrémentation et de décrémentation. |
| incrementPosition | `"right" \| "sides"` | `"right"` | Disposition des steppers : empilés à droite ou de part et d’autre du champ. |
| compactSpacing | boolean | `false` | Taille compacte du champ et des steppers (hauteur 24px). |
| unit | string | `""` | Suffixe d’unité affiché dans le champ lorsqu’il est non vide (par exemple `kW`). |
| assistiveTextLabel | string | `""` | Texte d’aide sous le champ lorsqu’il est non vide et qu’aucun message d’erreur de plage ou personnalisé n’est affiché. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Style du texte d’aide lorsqu’aucun état d’erreur n’est actif. Passe en apparence erreur en cas d’échec de validation. |
| showAssistiveIcon | boolean | `false` | Affiche une icône à côté du texte d’aide ; affichée aussi automatiquement en état d’erreur. |
| isError | boolean | `false` | Force le style d’erreur et utilise `errorMessage` si renseigné. La validation de plage déclenche aussi l’état d’erreur. |
| errorMessage | string | `""` | Message d’erreur personnalisé lorsque `isError` est `true`. |
| disabled | boolean | `false` | Désactive le champ et les steppers ; la valeur affichée est masquée tandis que la valeur du modèle est conservée. |
| readOnly | boolean | `false` | Champ en lecture seule ; la valeur reste visible, les steppers sont inactifs. |
| min | number | `0` | Valeur minimale pour la validation et le pas. |
| max | number | `undefined` | Valeur maximale ; omettre pour aucune borne supérieure. |
| step | number | `1` | Pas d’incrémentation/décrémentation pour les steppers, les flèches clavier et la molette. Les valeurs non finies ou non positives reviennent à `1`. |
| decimalPrecision | number | `0` | Nombre de décimales (`0` pour entiers uniquement). Borné entre `0` et `100`. |
| locale | string | `"fr-FR"` | Locale utilisée pour le séparateur décimal (`,` ou `.`). |
| defaultValue | `number \| null` | `undefined` | Valeur initiale en mode non contrôlé ; aussi restaurée au blur si le champ est vidé. |
| value | `number \| null` | `undefined` | Valeur analysée en mode contrôlé. Le parent doit mettre à jour `value` dans `onChange`. |
| onChange | `(value: number \| null) => void` | `undefined` | Appelé lorsque la valeur analysée change (saisie, pas ou blur). |
| onBlur | `() => void` | `undefined` | Appelé lorsque le champ de saisie perd le focus. |
| placeholder | string | `""` | Placeholder du champ de saisie. |
| width | string | `"184px"` | Largeur totale de la disposition (champ + steppers). Les valeurs numériques sont traitées en pixels. |
| name | string | `""` | Attribut `name` de l’entrée native. |
| rangeErrorMessages | `NumberInputRangeErrorMessages` | Voir le tableau ci-dessous | Remplace les messages automatiques min/max de plage. Si omis, les valeurs par défaut françaises du core s’appliquent. |

Les erreurs de plage et de validation affichent automatiquement une icône d’erreur à côté du texte d’aide ; il n’existe pas d’entrée dédiée pour activer cette icône.

### `NumberInputRangeErrorMessages`

| Nom | Type | Message par défaut |
|-----|------|--------------------|
| between | `(min: number, max: number) => string` | La valeur doit être comprise entre ${min} et ${max}. |
| greaterThan | `(min: number) => string` | La valeur doit être supérieure ou égale à ${min}. |
| lessThan | `(max: number) => string` | La valeur doit être inférieure ou égale à ${max}. |

Les attributs natifs `<input>` supplémentaires (hors ceux réservés par le composant) peuvent être transmis au champ de saisie.

## Usage

Importez `NumberInput` depuis `@design-system-rte/react`. Fournissez un `id` unique pour l’association libellé / texte d’aide.

Utilisez `defaultValue` pour une valeur initiale non contrôlée, ou liez `value` et `onChange` pour un champ contrôlé (`number | null`). Le composant transmet une ref vers le champ de saisie natif.

```tsx
import { NumberInput } from "@design-system-rte/react";

export function PowerField() {
  return (
    <NumberInput
      id="number-input-default"
      label="Puissance"
      min={0}
      max={100}
      step={1}
      defaultValue={50}
      unit="kW"
      onChange={(value) => {
        // traiter la valeur (null si le champ est vide ou non analysable)
      }}
    />
  );
}
```

En mode contrôlé, l’état React reste synchronisé avec la valeur analysée :

```tsx
import { useState } from "react";
import { NumberInput } from "@design-system-rte/react";

export function QuantityField() {
  const [value, setValue] = useState<number | null>(3);

  return (
    <NumberInput
      id="number-input-controlled"
      label="Quantité"
      min={0}
      max={10}
      value={value}
      onChange={setValue}
    />
  );
}
```

Renseignez `assistiveTextLabel` pour un texte d’aide sous le champ, ou `isError` avec `errorMessage` pour une erreur personnalisée. Lorsqu’une erreur de plage ou personnalisée s’affiche, le texte d’aide est remplacé par le message d’erreur dans la zone d’assistance.

#### Steppers latéraux

```tsx
<NumberInput
  id="number-input-sides"
  label="Puissance"
  incrementPosition="sides"
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Place les steppers de décrémentation et d’incrémentation à gauche et à droite du champ (`"right" | "sides"`).

#### Espacement compact

```tsx
<NumberInput
  id="number-input-compact"
  label="Puissance"
  compactSpacing
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Réduit la hauteur du champ et des steppers pour les mises en page denses.

#### Largeur personnalisée

```tsx
<NumberInput
  id="number-input-custom-width"
  label="Puissance"
  width="320px"
  min={0}
  max={100}
  defaultValue={50}
  unit="kW"
/>
```

Définit la largeur totale de la disposition Number Input (champ et steppers).

#### Décimales

Définissez `decimalPrecision` pour autoriser des fractions. Le séparateur affiché dépend de `locale` (virgule avec `fr-FR` par défaut ; passez `locale="en-US"` pour un point).

```tsx
<NumberInput
  id="number-input-decimals"
  label="Puissance"
  decimalPrecision={2}
  defaultValue={12.34}
  max={999}
  unit="kW"
/>
```

## Limitations



### Largeur incluant les steppers

`width` s’applique à toute la disposition (champ et steppers), pas au seul champ texte. La largeur totale par défaut est `184px` (des largeurs minimales s’appliquent en CSS).

### Nom accessible

Fournissez un `label` non vide, ou laissez `label` vide et renseignez `aria-label` (ou `aria-labelledby` pour un libellé externe). Si aucune de ces options n’est fournie, le composant affiche une erreur dans la console.

### Ordre de tabulation des steppers

Les boutons icône d’incrémentation et de décrémentation ont `tabIndex="-1"`. Utilisez le champ de saisie et les flèches (↑ / ↓) sur les steppers, pour modifier la valeur.