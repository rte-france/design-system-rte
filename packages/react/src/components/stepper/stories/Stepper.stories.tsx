import type { Step } from "@design-system-rte/core/components/stepper/stepper.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, waitFor } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Button from "../../button/Button";
import IconButton from "../../iconButton/IconButton";
import Stepper from "../Stepper";

const meta = {
  title: "Composants/Stepper/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    steps: { control: "object" },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    activeStepId: { control: "text" },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps: Step[] = [
  { id: "1", name: "Étape 1", completionState: "complete" },
  { id: "2", name: "Étape 2", completionState: "incomplete" },
  { id: "3", name: "Étape 3", completionState: "unvisited" },
  { id: "4", name: "Étape 4", completionState: "unvisited" },
  { id: "5", name: "Étape 5", completionState: "unvisited" },
  { id: "6", name: "Étape 6", completionState: "unvisited" },
  { id: "7", name: "Étape 7", completionState: "unvisited" },
];

const allClickableSteps: Step[] = [
  {
    id: "1",
    name: "Étape 1",
    completionState: "complete",
    onClick: () => console.log("Étape 1 clicked"),
    clickableCompleteStep: true,
  },
  { id: "2", name: "Étape 2", completionState: "incomplete", onClick: () => console.log("Étape 2 clicked") },
  { id: "3", name: "Étape 3", completionState: "unvisited", onClick: () => console.log("Étape 3 clicked") },
  { id: "4", name: "Étape 4", completionState: "unvisited", onClick: () => console.log("Étape 4 clicked") },
  { id: "5", name: "Étape 5", completionState: "unvisited", onClick: () => console.log("Étape 5 clicked") },
  { id: "6", name: "Étape 6", completionState: "unvisited", onClick: () => console.log("Étape 6 clicked") },
  { id: "7", name: "Étape 7", completionState: "unvisited", onClick: () => console.log("Étape 7 clicked") },
];

const linearProgressionSteps: Step[] = [
  { id: "1", name: "Étape 1", completionState: "unvisited" },
  { id: "2", name: "Étape 2", completionState: "unvisited" },
  { id: "3", name: "Étape 3", completionState: "unvisited" },
  { id: "4", name: "Étape 4", completionState: "unvisited" },
];

export const Default: Story = {
  args: {
    steps: steps,
    orientation: "horizontal",
    activeStepId: "3",
  },

  render: (args) => (
    <div style={{ width: "300px" }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },

  render: (args) => (
    <div style={{ height: "300px" }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    ...Default.args,
    orientation: "horizontal",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ width: "160px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 2)} activeStepId={args.steps[1].id} />
      </div>
      <div style={{ width: "274px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 3)} />
      </div>
      <div style={{ width: "384px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 4)} />
      </div>
      <div style={{ width: "488px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 5)} />
      </div>

      <div style={{ width: "592px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 6)} />
      </div>
      <div style={{ width: "680px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 7)} />
      </div>
    </div>
  ),
};

export const VerticalSizes: Story = {
  args: {
    steps,
    orientation: "vertical",
    activeStepId: "3",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      <div style={{ height: "144px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 2)} activeStepId={args.steps[1].id} />
      </div>
      <div style={{ height: "240px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 3)} />
      </div>
      <div style={{ height: "336px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 4)} />
      </div>
      <div style={{ height: "424px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 5)} />
      </div>

      <div style={{ height: "512px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 6)} />
      </div>
      <div style={{ height: "584px" }}>
        <Stepper {...args} steps={args.steps.slice(0, 7)} />
      </div>
    </div>
  ),
};

export const NonLinearProgression: Story = {
  args: {
    steps: steps.slice(0, 4),
    orientation: "horizontal",
    activeStepId: "3",
  },

  render: (args) => {
    const [activeStepId, setActiveStepId] = useState<string>(args.activeStepId!);

    const steps = args.steps.map((step) => ({
      ...step,
      onClick: () => setActiveStepId(step.id),
      clickableCompleteStep: true,
    }));

    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "400px", padding: "16px" }}>
          <Stepper steps={steps} activeStepId={activeStepId} />
        </div>
        <div style={{ marginTop: "16px", width: "100%" }}>
          <p>
            Contenu de l'étape {activeStepId}{" "}
            {activeStepId === "1" ? "déjà validé" : activeStepId === "2" ? "à valider" : ""}
          </p>
        </div>
      </div>
    );
  },
};

export const LinearProgression: Story = {
  args: {
    ...Default.args,
    steps: linearProgressionSteps,
    activeStepId: "1",
  },

  render: (args) => {
    const [activeStepId, setActiveStepId] = useState<string | null>(args.activeStepId!);
    const [stepsState, setStepsState] = useState<Step[]>(args.steps);

    const completeStep = (stepId: string) => {
      setStepsState((prevSteps) =>
        prevSteps.map((step) => (step.id === stepId ? { ...step, completionState: "complete" } : step)),
      );
    };

    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "400px", backgroundColor: "var(--background-surface-primary)", padding: "16px" }}>
          <Stepper steps={stepsState} activeStepId={activeStepId} />
        </div>
        <div style={{ marginTop: "16px", width: "100%" }}>
          {activeStepId === null ? <p>Processus terminé !</p> : <p>Contenu de l'étape {activeStepId}</p>}
        </div>
        <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
          <Button
            disabled={activeStepId === null}
            label="Valider et passer à l'étape suivante"
            onClick={() => {
              const currentIndex = stepsState.findIndex((step) => step.id === activeStepId);
              completeStep(activeStepId!);
              if (currentIndex < stepsState.length - 1) {
                setActiveStepId(stepsState[currentIndex + 1].id);
              } else {
                setActiveStepId(null);
              }
            }}
          />
          <Button
            disabled={activeStepId === null}
            label="Valider partiellement et passer à l'étape suivante"
            onClick={() => {
              const currentIndex = stepsState.findIndex((step) => step.id === activeStepId);
              if (currentIndex < stepsState.length - 1) {
                setActiveStepId(stepsState[currentIndex + 1].id);
                setStepsState((prevSteps) => {
                  const newSteps = [...prevSteps];
                  newSteps[currentIndex] = {
                    ...newSteps[currentIndex],
                    completionState: "incomplete",
                  };
                  return newSteps;
                });
              }
            }}
          />
          <IconButton
            variant="text"
            name="reload"
            aria-label="Recommencer"
            onClick={() => {
              setActiveStepId(stepsState[0].id);
              setStepsState(
                stepsState.map((step) => ({
                  ...step,
                  completionState: "unvisited",
                })),
              );
            }}
          />
        </div>
      </div>
    );
  },
};

export const KeyboardNavigation: Story = {
  args: {
    steps: allClickableSteps,
    orientation: "horizontal",
    activeStepId: "3",
  },

  render: (args) => {
    const [activeStepId, setActiveStepId] = useState<string>(args.activeStepId!);

    const steps = args.steps.map((step) => ({
      ...step,
      onClick: () => setActiveStepId(step.id),
      clickableCompleteStep: true,
    }));
    console.log("steps", steps);
    return (
      <div style={{ width: "700px" }}>
        <Stepper {...args} steps={steps} activeStepId={activeStepId} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);
    const stepper = await canvas.getByRole("list");

    const allSteps = stepper.querySelectorAll("button");
    const currentActiveStep = stepper.querySelector("[aria-current='step'] button");

    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();

    await waitFor(() => {
      expect(currentActiveStep).toHaveFocus();
    });

    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[allSteps.length - 1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(allSteps[0]).toHaveFocus();
  },
};
