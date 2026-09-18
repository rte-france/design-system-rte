The Stepper displays a multi-step process and reflects each step's completion state. The consumer owns the step data: update `activeStepId` and each step's `completionState` to drive the UI. Wrap the stepper in a container with explicit width (horizontal) or height (vertical) so separators and labels layout correctly.

Do not use `StepperItem` or `StepperSeparator` directly — they are internal building blocks rendered by `Stepper`.

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

To react to step clicks, provide `onClick` on each step and update `activeStepId` inside the handler.

#### Vertical

```tsx
<div style={{ height: "300px" }}>
  <Stepper steps={steps.slice(0, 3)} activeStepId={activeStepId} orientation="vertical" />
</div>
```

Use `orientation="vertical"` for a stacked layout. Set the container height so separators stretch correctly.

(`"horizontal" | "vertical"`)

#### Sizes

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

The stepper supports 2 to 7 steps. Each row shows a different step count with the container width matched to that layout.

#### Vertical sizes

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

In vertical orientation, set the container height according to the number of steps (144px for 2 steps through 584px for 7 steps).

#### Non linear progression

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

Enable free navigation by setting `onClick` on each step and `clickableCompleteStep: true` on completed steps.

#### Linear progression

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

Drive a sequential workflow from external actions. Set the current step's `completionState` to `"complete"` or `"incomplete"` in the button handler before advancing `activeStepId` to the next step.
