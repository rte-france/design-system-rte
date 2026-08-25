# Text Input

## Overview

```html
<rte-text-input
  id="text-input-default"
  label="Label"
  labelPosition="top"
  [maxLength]="150"
  width="300px"
></rte-text-input>
```

## API

Le composant `TextInputComponent` (`<rte-text-input>`) constitue l'API publique. Liez ses inputs et outputs dans les templates, ou connectez-le aux formulaires réactifs via `formControl` / `formControlName`.


| Nom                  | Type                                           | Valeur par défaut | Description                                                                                                                   |
| -------------------- | ---------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| id                   | string                                         | —                 | Associe le libellé au champ de saisie. Requis pour une association accessible label/champ.                                    |
| label                | string                                         | `""`              | Texte du libellé visible.                                                                                                     |
| labelPosition        | `"top" | "side"`                               | `"top"`           | Position du libellé par rapport au champ.                                                                                     |
| required             | boolean                                        | `false`           | Marque le champ comme obligatoire pour l'indicateur du libellé.                                                               |
| showCounter          | boolean                                        | `false`           | Affiche un compteur de caractères lorsque `maxLength` est défini.                                                             |
| value                | string                                         | `""`              | Valeur courante du champ (liaison unidirectionnelle).                                                                         |
| maxLength            | number                                         | `150`             | Nombre maximal de caractères autorisés.                                                                                       |
| leftIcon             | string | null                                  | `null`            | Nom de l'icône à gauche. Remplacée par l'icône d'erreur lorsque `error` est `true`.                                           |
| showRightIcon        | boolean                                        | `true`            | Active l'emplacement de l'icône à droite.                                                                                     |
| rightIconAction      | `"clean" | "visibilityOn" | "visibilityOff"`   | `"clean"`         | Comportement de l'icône droite : effacer la valeur ou basculer la visibilité du mot de passe.                                 |
| rightIconSize        | `"s" | "m"`                                    | `"s"`             | Taille du bouton icône à droite.                                                                                              |
| showLabelRequirement | boolean                                        | `false`           | Affiche le texte facultatif/obligatoire à côté du libellé.                                                                    |
| assistiveAppearance  | `"description" | "error" | "success" | "link"` | `"description"`   | Style visuel du texte d'aide.                                                                                                 |
| showAssistiveIcon    | boolean                                        | `false`           | Affiche une icône à côté du texte d'aide (erreur et succès uniquement).                                                       |
| assistiveTextLabel   | string                                         | `""`              | Texte d'aide affiché sous le champ.                                                                                           |
| error                | boolean                                        | `false`           | Applique le style d'erreur au champ.                                                                                          |
| disabled             | boolean                                        | `false`           | Désactive le champ. Également activé automatiquement lorsque le `FormControl` lié est disabled.                               |
| readOnly             | boolean                                        | `false`           | Rend le champ en lecture seule.                                                                                               |
| width                | string                                         | `"300px"`         | Largeur du conteneur (px, %, em ou rem). Les valeurs numériques sont traitées en pixels.                                      |
| ariaLabel            | string                                         | `""`              | Nom accessible lorsqu'aucun libellé visible n'est fourni.                                                                     |
| ariaRequired         | boolean                                        | `false`           | Expose l'état obligatoire aux technologies d'assistance.                                                                      |
| ariaLabelledby       | string                                         | `""`              | ID d'un élément externe qui libelle le champ. Remplace l'association automatique générée par le libellé.                      |
| autocomplete         | string                                         | `""`              | Valeur de l'attribut natif `autocomplete`.                                                                                    |
| customStyle          | `Record<string, string>`                       | —                 | Styles inline appliqués à l'élément natif `<input>`.                                                                          |
| valueChange          | `Output<string>`                               | —                 | Émet la valeur mise à jour à chaque événement input.                                                                          |
| enterKeyDown         | `Output<string>`                               | —                 | Émet la valeur courante lorsque Entrée est pressée.                                                                           |
| inputBlur            | `Output<void>`                                 | —                 | Émet lorsque le champ perd le focus.                                                                                          |
| rightIconClick       | `Output<MouseEvent | KeyboardEvent>`           | —                 | Émet lorsque l'icône droite est activée. L'action intégrée (effacer ou basculer la visibilité) s'exécute après cet événement. |




## Usage

Importez `TextInputComponent` et utilisez `<rte-text-input>` dans votre template. Fournissez un `id` unique lorsqu'un libellé est présent pour associer correctement le libellé au champ.

Liez `value` et écoutez `valueChange` pour un usage contrôlé, ou connectez le composant à un formulaire réactif avec `formControl` / `formControlName`.

```typescript
import { Component } from "@angular/core";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [TextInputComponent],
  template: `
    <rte-text-input
      id="text-input-default"
      label="Label"
      labelPosition="top"
      [maxLength]="150"
      width="300px"
      [value]="value"
      (valueChange)="value = $event"
    ></rte-text-input>
  `,
})
export class ExampleComponent {
  value = "";
}
```

N'utilisez pas `<rte-base-text-input>` dans les templates applicatifs — ce sélecteur est interne à la librairie.

### Examples



#### Error

```html
<rte-text-input
  id="text-input-error"
  label="Label"
  [error]="true"
  assistiveAppearance="error"
  [showAssistiveIcon]="true"
  assistiveTextLabel="Error message"
  width="300px"
></rte-text-input>
```

Applique le style d'erreur avec un message d'aide et une icône.

#### Sizes

```html
<rte-text-input id="text-input-default-width" label="Default" width="300px"></rte-text-input>
<rte-text-input id="text-input-narrow" label="20px" width="20px"></rte-text-input>
<rte-text-input id="text-input-full" label="100%" width="100%"></rte-text-input>
```

Définit la largeur du conteneur. Les valeurs inférieures à la largeur minimale du champ (`48px`) sont limitées.

#### Label position

```html
<rte-text-input id="text-input-top" label="Top" labelPosition="top"></rte-text-input>
<rte-text-input id="text-input-side" label="Side" labelPosition="side"></rte-text-input>
```

Place le libellé au-dessus (`"top"`) ou à côté (`"side"`) du champ.

#### Required indicator

```html
<!-- Obligatoire avec texte de requirement visible -->
<rte-text-input
  id="text-input-required-visible"
  label="Label"
  width="400px"
  [required]="true"
  [showLabelRequirement]="true"
></rte-text-input>

<!-- Obligatoire avec astérisque uniquement -->
<rte-text-input
  id="text-input-required-asterisk"
  label="Label"
  width="400px"
  [required]="true"
  assistiveAppearance="error"
></rte-text-input>

<!-- Facultatif avec texte de requirement -->
<rte-text-input
  id="text-input-optional-visible"
  label="Label"
  width="400px"
  [showLabelRequirement]="true"
></rte-text-input>
```

Contrôle la façon dont les champs obligatoires et facultatifs sont indiqués à côté du libellé.

#### Assistive text

```html
<rte-text-input
  id="text-input-description"
  label="Description"
  assistiveAppearance="description"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-error-assistive"
  label="Error"
  assistiveAppearance="error"
  [error]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-success"
  label="Success"
  assistiveAppearance="success"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-link"
  label="Link"
  assistiveAppearance="link"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-error-icon"
  label="Error + icon"
  assistiveAppearance="error"
  [showAssistiveIcon]="true"
  [error]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>

<rte-text-input
  id="text-input-success-icon"
  label="Success + icon"
  assistiveAppearance="success"
  [showAssistiveIcon]="true"
  assistiveTextLabel="Assistive text"
  width="300px"
></rte-text-input>
```

Affiche le texte d'aide sous le champ dans différentes apparences (`"description"`, `"error"`, `"success"`, `"link"`).

## Limitations



### Largeur minimale du champ

Le champ de saisie a une largeur minimale de `48px`. Les largeurs de conteneur inférieures (par exemple `width="20px"`) sont visuellement limitées au minimum.

### Largeur par défaut

La largeur par défaut du conteneur est `300px`. Passez `width` pour la modifier ; les valeurs numériques sans unité sont traitées en pixels.

### Compteur de caractères

Le compteur s'affiche uniquement lorsque `showCounter` est `true` et `maxLength` est un nombre. Son placement dépend de `labelPosition` : au-dessus de la barre de saisie pour `"top"`, à côté du conteneur pour `"side"`.

### Visibilité de l'icône droite

L'icône droite est masquée lorsque le champ est `disabled` ou `readOnly`. Avec `rightIconAction="clean"`, l'icône n'apparaît que lorsque le champ contient du texte. Avec les actions de visibilité (`"visibilityOn"` / `"visibilityOff"`), l'icône est toujours affichée lorsque `showRightIcon` est activé.

### L'icône d'erreur remplace l'icône gauche

Lorsque `error` est `true`, l'icône gauche est remplacée par l'icône d'erreur, quelle que soit la valeur de `leftIcon`.

### Placeholder non supporté

Utilisez `assistiveTextLabel` pour les indications et instructions. Le contenu placeholder n'est pas accessible, disparaît dès que l'utilisateur saisit du texte, et entre en conflit avec le texte d'aide lorsqu'ils véhiculent la même information.

### État disabled des formulaires réactifs

Lorsque le composant est lié via `formControl` / `formControlName`, l'état disabled du FormControl prend le pas sur l'input `disabled`.

## FAQ

Q : Lorsque `disabled` est `true`, pourquoi le TextInput n'affiche-t-il pas sa valeur ?

R : Par conception, `disabled` représente un champ auquel l'utilisateur n'a pas accès et qui n'affiche pas de valeur. Pour afficher une valeur pré-remplie, par défaut ou bloquée sans permettre la modification, utilisez `readOnly` à la place. 

Q : Puis-je utiliser une classe CSS personnalisée sur l'élément hôte pour définir la largeur du champ ? (AIT)

R : Consultez la section Limitations / Largeur par défaut. La largeur est contrôlée par l'input `width` (par défaut `"300px"`). Appliquer la largeur via du CSS sur l'hôte peut entrer en conflit avec la mise en page interne du conteneur. Utilisez l'input `width` à la place.

Q : Comment appliquer des styles inline à l'élément natif `<input>` ?

R : Utilisez l'input `customStyle` pour passer des styles inline à l'élément natif `<input>`. Cela n'affecte pas le conteneur externe (libellé, compteur, texte d'aide).