# Stepper

## Overview

```tsx
<Stepper steps={steps} activeStepId={activeStepId} orientation="horizontal" />
```

## API

Le composant `Stepper` constitue l'API publique. Passez la liste d'étapes et l'identifiant de l'étape active ; gérez la navigation via le callback `onClick` de chaque étape.


| Nom          | Type                        | Valeur par défaut | Description                                                                                                                              |
| ------------ | --------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| steps        | `Step[]`                    | — (requis)        | Liste ordonnée des étapes à afficher. Doit contenir entre 2 et 7 entrées.                                                                |
| activeStepId | `string | null`             | — (requis)        | Identifiant de l'étape active. Définit `aria-current="step"` sur l'étape correspondante. Passez `null` lorsqu'aucune étape n'est active. |
| orientation  | `"horizontal" | "vertical"` | `"horizontal"`    | Direction de disposition du stepper.                                                                                                     |


Chaque entrée de `steps` suit l'interface `Step` :


| Nom                   | Type                                      | Valeur par défaut | Description                                                                                                       |
| --------------------- | ----------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| id                    | `string`                                  | — (requis)        | Identifiant unique de l'étape. Utilisé pour faire correspondre `activeStepId`.                                    |
| name                  | `string`                                  | — (requis)        | Libellé affiché sous l'indicateur d'étape.                                                                        |
| completionState       | `"unvisited" | "incomplete" | "complete"` | — (requis)        | État visuel de l'étape. Les étapes complétées affichent une icône de validation lorsqu'elles ne sont pas actives. |
| clickableCompleteStep | `boolean`                                 | `false`           | Si `true`, les étapes complétées restent cliquables lorsqu'elles définissent `onClick`.                           |
| onClick               | `() => void`                              | —                 | Callback invoqué lors du clic sur l'étape. Requis pour qu'une étape soit cliquable.                               |


Les attributs HTML natifs (`className`, `style`, `aria-*`, et autres) peuvent être transmis à l'élément racine `<nav>`.

## Usage

Le Stepper affiche un processus multi-étapes et reflète l'état de complétion de chaque étape. Le consommateur possède les données : mettez à jour `activeStepId` et le `completionState` de chaque étape pour piloter l'interface. Enveloppez le stepper dans un conteneur avec une largeur explicite (horizontal) ou une hauteur explicite (vertical) pour que les séparateurs et les libellés s'affichent correctement.

N'utilisez pas `StepperItem` ni `StepperSeparator` directement — ce sont des blocs internes rendus par `Stepper`.

```tsx
const steps: Step[] = [
  { id: "1", name: "Step 1", completionState: "complete" },
  { id: "2", name: "Step 2", completionState: "incomplete" },
  { id: "3", name: "Step 3", completionState: "unvisited" },
  { id: "4", name: "Step 4", completionState: "unvisited" },
  { id: "5", name: "Step 5", completionState: "unvisited" },
  { id: "6", name: "Step 6", completionState: "unvisited" },
  { id: "7", name: "Step 7", completionState: "unvisited" },
];
const [activeStepId, setActiveStepId] = useState("2");

<div style={{ width: "300px" }}>
  <Stepper steps={steps.slice(0, 3)} activeStepId={activeStepId} orientation="horizontal" />
</div>
```

Pour réagir aux clics sur les étapes, fournissez `onClick` sur chaque étape et mettez à jour `activeStepId` dans le gestionnaire.

#### Orientation verticale

```tsx
<div style={{ height: "300px" }}>
  <Stepper steps={steps.slice(0, 3)} activeStepId={activeStepId} orientation="vertical" />
</div>
```

Utilisez `orientation="vertical"` pour une disposition empilée. Définissez la hauteur du conteneur pour que les séparateurs s'étirent correctement.

(`"horizontal" | "vertical"`)

#### Tailles

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
  <div style={{ width: "160px" }}>
    <Stepper steps={steps.slice(0, 2)} activeStepId="2" />
  </div>
  <div style={{ width: "274px" }}>
    <Stepper steps={steps.slice(0, 3)} activeStepId="3" />
  </div>
  <div style={{ width: "384px" }}>
    <Stepper steps={steps.slice(0, 4)} activeStepId="3" />
  </div>
  <div style={{ width: "488px" }}>
    <Stepper steps={steps.slice(0, 5)} activeStepId="3" />
  </div>
  <div style={{ width: "592px" }}>
    <Stepper steps={steps.slice(0, 6)} activeStepId="3" />
  </div>
  <div style={{ width: "680px" }}>
    <Stepper steps={steps.slice(0, 7)} activeStepId="3" />
  </div>
</div>
```

Le stepper prend en charge 2 à 7 étapes. Chaque ligne montre un nombre d'étapes différent avec une largeur de conteneur adaptée.

#### Tailles verticales

```tsx
<div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
  <div style={{ height: "144px" }}>
    <Stepper steps={steps.slice(0, 2)} activeStepId="2" orientation="vertical" />
  </div>
  <div style={{ height: "240px" }}>
    <Stepper steps={steps.slice(0, 3)} activeStepId="3" orientation="vertical" />
  </div>
  <div style={{ height: "336px" }}>
    <Stepper steps={steps.slice(0, 4)} activeStepId="3" orientation="vertical" />
  </div>
  <div style={{ height: "424px" }}>
    <Stepper steps={steps.slice(0, 5)} activeStepId="3" orientation="vertical" />
  </div>
  <div style={{ height: "512px" }}>
    <Stepper steps={steps.slice(0, 6)} activeStepId="3" orientation="vertical" />
  </div>
  <div style={{ height: "584px" }}>
    <Stepper steps={steps.slice(0, 7)} activeStepId="3" orientation="vertical" />
  </div>
</div>
```

En orientation verticale, définissez la hauteur du conteneur selon le nombre d'étapes (144px pour 2 étapes à 584px pour 7 étapes).

#### Progression non linéaire

```tsx
const [activeStepId, setActiveStepId] = useState("3");

const clickableSteps = steps.slice(0, 4).map((step) => ({
  ...step,
  onClick: () => setActiveStepId(step.id),
  clickableCompleteStep: true,
}));

<div style={{ width: "400px" }}>
  <Stepper steps={clickableSteps} activeStepId={activeStepId} />
</div>
```

Activez la navigation libre en définissant `onClick` sur chaque étape et `clickableCompleteStep: true` sur les étapes complétées.

#### Progression linéaire

```tsx
const linearSteps: Step[] = [
  { id: "1", name: "Step 1", completionState: "unvisited" },
  { id: "2", name: "Step 2", completionState: "unvisited" },
  { id: "3", name: "Step 3", completionState: "unvisited" },
  { id: "4", name: "Step 4", completionState: "unvisited" },
];
const [activeStepId, setActiveStepId] = useState<string | null>("1");
const [stepsState, setStepsState] = useState(linearSteps);

<div style={{ width: "400px" }}>
  <Stepper steps={stepsState} activeStepId={activeStepId} />
</div>
<Button label="Valider et passer à l'étape suivante" onClick={validate} />
```

Pilotez un parcours séquentiel depuis des actions externes. Définissez le `completionState` de l'étape courante sur `"complete"` ou `"incomplete"` dans le gestionnaire du bouton avant de faire avancer `activeStepId` vers l'étape suivante.

## Limitations



### Nombre d'étapes

Le stepper requiert entre 2 et 7 étapes. Lorsque `steps.length` est en dehors de cette plage, le composant affiche un avertissement dans la console et ne rend rien.

### Longueur du libellé d'étape

Les libellés d'étape s'affichent sur une seule ligne. Les noms longs sont tronqués avec une ellipse (`text-overflow: ellipsis`, `white-space: nowrap`). Privilégiez des noms d'étape courts.

### Étapes cliquables

Une étape est cliquable uniquement lorsqu'elle définit `onClick`. Les étapes complétées ne sont pas cliquables sauf si `clickableCompleteStep` vaut `true`. L'étape active ne peut pas être réactivée par clic.

### Focus et navigation clavier

Seules l'étape active et les étapes cliquables reçoivent le focus. Les touches fléchées déplacent le focus entre les étapes focalisables (gauche/droite en horizontal, haut/bas en vertical). Tab déplace le focus hors du stepper vers l'élément focalisable suivant ou précédent sur la page.