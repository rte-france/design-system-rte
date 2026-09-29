# Stepper

## Overview

```html
<rte-stepper
  [steps]="steps"
  [orientation]="orientation"
  [activeStepId]="activeStepId"
/>
```

## API

Le composant `rte-stepper` constitue l'API publique. Liez la liste d'étapes, l'étape active et l'orientation optionnelle ; gérez la navigation via le callback `onClick` de chaque étape et la sortie `clickStep`.


| Nom          | Type                        | Valeur par défaut | Description                                                                              |
| ------------ | --------------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| steps        | `Step[]`                    | `[]`              | Liste ordonnée des étapes à afficher.                                                    |
| activeStepId | `string`                    | —                 | Identifiant de l'étape active. Définit `aria-current="step"` sur l'étape correspondante. |
| orientation  | `"horizontal" | "vertical"` | `"horizontal"`    | Direction de disposition du stepper.                                                     |



| Sortie    | Type   | Description                                                                                                        |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| clickStep | `Step` | Émise lorsqu'une étape cliquable est activée. Se déclenche après l'exécution du gestionnaire `onClick` de l'étape. |


Chaque entrée de `steps` suit l'interface `Step` :


| Nom                   | Type                                      | Valeur par défaut | Description                                                                                                       |
| --------------------- | ----------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| id                    | `string`                                  | — (requis)        | Identifiant unique de l'étape. Utilisé pour faire correspondre `activeStepId`.                                    |
| name                  | `string`                                  | — (requis)        | Libellé affiché sous l'indicateur d'étape.                                                                        |
| completionState       | `"unvisited" | "incomplete" | "complete"` | — (requis)        | État visuel de l'étape. Les étapes complétées affichent une icône de validation lorsqu'elles ne sont pas actives. |
| clickableCompleteStep | `boolean`                                 | `false`           | Si `true`, les étapes complétées restent cliquables lorsqu'elles définissent `onClick`.                           |
| onClick               | `() => void`                              | —                 | Callback invoqué lors du clic sur l'étape. Requis pour qu'une étape soit cliquable.                               |




## Usage

Le Stepper affiche un processus multi-étapes et reflète l'état de complétion de chaque étape. Le consommateur possède les données : mettez à jour `activeStepId` et le `completionState` de chaque étape pour piloter l'interface. Enveloppez le stepper dans un conteneur avec une largeur explicite (horizontal) ou une hauteur explicite (vertical) pour que les séparateurs et les libellés s'affichent correctement.

```typescript
steps: Step[] = [
  { id: "1", name: "Step 1", completionState: "complete" },
  { id: "2", name: "Step 2", completionState: "incomplete" },
  { id: "3", name: "Step 3", completionState: "unvisited" },
  { id: "4", name: "Step 4", completionState: "unvisited" },
  { id: "5", name: "Step 5", completionState: "unvisited" },
  { id: "6", name: "Step 6", completionState: "unvisited" },
  { id: "7", name: "Step 7", completionState: "unvisited" },
];
activeStepId = "2";
orientation: "horizontal" | "vertical" = "horizontal";
```

```html
<div style="width: 300px">
  <rte-stepper
    [steps]="steps.slice(0, 3)"
    [orientation]="orientation"
    [activeStepId]="activeStepId"
  />
</div>
```

Pour réagir aux clics sur les étapes, fournissez `onClick` sur chaque étape et écoutez éventuellement `(clickStep)` pour mettre à jour `activeStepId`.

#### Orientation verticale

```html
<div style="height: 300px">
  <rte-stepper
    [steps]="steps.slice(0, 3)"
    orientation="vertical"
    [activeStepId]="activeStepId"
  />
</div>
```

Utilisez `orientation="vertical"` pour une disposition empilée. Définissez la hauteur du conteneur pour que les séparateurs s'étirent correctement.

(`"horizontal" | "vertical"`)

#### Tailles

```html
<div style="display: flex; flex-direction: column; gap: 24px">
  <div style="width: 160px">
    <rte-stepper [steps]="steps.slice(0, 2)" activeStepId="2" />
  </div>
  <div style="width: 274px">
    <rte-stepper [steps]="steps.slice(0, 3)" activeStepId="3" />
  </div>
  <div style="width: 384px">
    <rte-stepper [steps]="steps.slice(0, 4)" activeStepId="3" />
  </div>
  <div style="width: 488px">
    <rte-stepper [steps]="steps.slice(0, 5)" activeStepId="3" />
  </div>
  <div style="width: 592px">
    <rte-stepper [steps]="steps.slice(0, 6)" activeStepId="3" />
  </div>
  <div style="width: 680px">
    <rte-stepper [steps]="steps.slice(0, 7)" activeStepId="3" />
  </div>
</div>
```

Le stepper prend en charge 2 à 7 étapes. Chaque ligne montre un nombre d'étapes différent avec une largeur de conteneur adaptée.

#### Tailles verticales

```html
<div style="display: flex; flex-direction: row; gap: 8px">
  <div style="height: 144px">
    <rte-stepper [steps]="steps.slice(0, 2)" orientation="vertical" activeStepId="2" />
  </div>
  <div style="height: 240px">
    <rte-stepper [steps]="steps.slice(0, 3)" orientation="vertical" activeStepId="3" />
  </div>
  <div style="height: 336px">
    <rte-stepper [steps]="steps.slice(0, 4)" orientation="vertical" activeStepId="3" />
  </div>
  <div style="height: 424px">
    <rte-stepper [steps]="steps.slice(0, 5)" orientation="vertical" activeStepId="3" />
  </div>
  <div style="height: 512px">
    <rte-stepper [steps]="steps.slice(0, 6)" orientation="vertical" activeStepId="3" />
  </div>
  <div style="height: 584px">
    <rte-stepper [steps]="steps.slice(0, 7)" orientation="vertical" activeStepId="3" />
  </div>
</div>
```

En orientation verticale, définissez la hauteur du conteneur selon le nombre d'étapes (144px pour 2 étapes à 584px pour 7 étapes).

#### Progression non linéaire

```typescript
clickableSteps: Step[] = [
  { id: "1", name: "Step 1", completionState: "complete", onClick: () => {}, clickableCompleteStep: true },
  { id: "2", name: "Step 2", completionState: "incomplete", onClick: () => {} },
  { id: "3", name: "Step 3", completionState: "unvisited", onClick: () => {} },
  { id: "4", name: "Step 4", completionState: "unvisited", onClick: () => {} },
];
activeStepId = "3";
```

```html
<div style="width: 400px">
  <rte-stepper
    [steps]="clickableSteps"
    [activeStepId]="activeStepId"
    (clickStep)="changeStep($event)"
  />
</div>
```

Activez la navigation libre en définissant `onClick` sur chaque étape et `clickableCompleteStep: true` sur les étapes complétées. Mettez à jour `activeStepId` dans le gestionnaire `clickStep`.

#### Progression linéaire

```typescript
linearSteps: Step[] = [
  { id: "1", name: "Step 1", completionState: "unvisited" },
  { id: "2", name: "Step 2", completionState: "unvisited" },
  { id: "3", name: "Step 3", completionState: "unvisited" },
  { id: "4", name: "Step 4", completionState: "unvisited" },
];
activeStepId = "1";
```

```html
<div style="width: 400px">
  <rte-stepper [steps]="linearSteps" [activeStepId]="activeStepId" />
</div>
<button rteButton (click)="validate()">Valider et passer à l'étape suivante</button>
```

Pilotez un parcours séquentiel depuis des actions externes. Définissez le `completionState` de l'étape courante sur `"complete"` ou `"incomplete"` dans `validate()` avant de faire avancer `activeStepId` vers l'étape suivante.

## Limitations



### Nombre d'étapes

Le stepper est conçu pour 2 à 7 étapes. Les stories démontrent la disposition pour chaque nombre ; moins de 2 ou plus de 7 étapes ne sont pas pris en charge par le design.

### Longueur du libellé d'étape

Les libellés d'étape s'affichent sur une seule ligne. Les noms longs sont tronqués avec une ellipse (`text-overflow: ellipsis`, `white-space: nowrap`). Privilégiez des noms d'étape courts.

### Étapes cliquables

Une étape est cliquable uniquement lorsqu'elle définit `onClick`. Les étapes complétées ne sont pas cliquables sauf si `clickableCompleteStep` vaut `true`. L'étape active ne peut pas être réactivée par clic.

### Focus et navigation clavier

Seules l'étape active et les étapes cliquables reçoivent le focus. Les touches fléchées déplacent le focus entre les étapes focalisables (gauche/droite en horizontal, haut/bas en vertical). Tab déplace le focus hors du stepper vers l'élément focalisable suivant ou précédent sur la page.