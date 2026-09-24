The Stepper displays a multi-step process and reflects each step's completion state. The consumer owns the step data: update `activeStepId` and each step's `completionState` to drive the UI. Wrap the stepper in a container with explicit width (horizontal) or height (vertical) so separators and labels layout correctly.

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

To react to step clicks, provide `onClick` on each step and optionally listen to `(clickStep)` to update `activeStepId`.

#### Vertical

```html
<div style="height: 300px">
  <rte-stepper
    [steps]="steps.slice(0, 3)"
    orientation="vertical"
    [activeStepId]="activeStepId"
  />
</div>
```

Use `orientation="vertical"` for a stacked layout. Set the container height so separators stretch correctly.

(`"horizontal" | "vertical"`)

#### Sizes

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

The stepper supports 2 to 7 steps. Each row shows a different step count with the container width matched to that layout.

#### Vertical sizes

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

In vertical orientation, set the container height according to the number of steps (144px for 2 steps through 584px for 7 steps).

#### Non linear progression

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

Enable free navigation by setting `onClick` on each step and `clickableCompleteStep: true` on completed steps. Update `activeStepId` in the `clickStep` handler.

#### Linear progression

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

Drive a sequential workflow from external actions. Set the current step's `completionState` to `"complete"` or `"incomplete"` in `validate()` before advancing `activeStepId` to the next step.
