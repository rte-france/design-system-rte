import type { Step } from "@design-system-rte/core/components/stepper/stepper.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { userEvent, waitFor, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { ButtonComponent } from "../../button/button.component";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { StepperComponent } from "../stepper.component";

const meta: Meta<StepperComponent> = {
  title: "Composants/Stepper/Stepper",
  component: StepperComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, IconButtonComponent],
    }),
  ],
  argTypes: {
    steps: { control: "object" },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    activeStepId: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<StepperComponent>;

const steps: Step[] = [
  { id: "1", name: "Étape 1", completionState: "complete" },
  { id: "2", name: "Étape 2", completionState: "incomplete" },
  { id: "3", name: "Étape 3", completionState: "unvisited", onClick: () => alert("Étape 3 clicked") },
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
    activeStepId: "2",
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="width: 300px">
      <rte-stepper
        [steps]="steps.slice(0, 3)"
        [orientation]="orientation"
        [activeStepId]="activeStepId"
        />
    </div>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="height: 300px">
      <rte-stepper
        [steps]="steps.slice(0, 3)"
        [orientation]="orientation"
        [activeStepId]="activeStepId"
        />
    </div>
    `,
  }),
};

export const Sizes: Story = {
  args: {
    ...Default.args,
    orientation: "horizontal",
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="width: 160px">
        <rte-stepper
          [steps]="steps.slice(0, 2)"
          [orientation]="orientation"
          activeStepId="2"
        />
      </div>
      <div style="width: 274px">
        <rte-stepper
          [steps]="steps.slice(0, 3)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="width: 384px">
        <rte-stepper
          [steps]="steps.slice(0, 4)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="width: 488px">
        <rte-stepper
          [steps]="steps.slice(0, 5)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>

      <div style="width: 592px">
        <rte-stepper
          [steps]="steps.slice(0, 6)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="width: 680px">
        <rte-stepper
          [steps]="steps.slice(0, 7)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
    </div>
    `,
  }),
};

export const VerticalSizes: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="display: flex; flex-direction: row; gap: 8px;">
      <div style="height: 144px">
        <rte-stepper
          [steps]="steps.slice(0, 2)"
          [orientation]="orientation"
          activeStepId="2"
        />
      </div>
      <div style="height: 240px">
        <rte-stepper
          [steps]="steps.slice(0, 3)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="height: 336px">
        <rte-stepper
          [steps]="steps.slice(0, 4)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="height: 424px">
        <rte-stepper
          [steps]="steps.slice(0, 5)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>

      <div style="height: 512px">
        <rte-stepper
          [steps]="steps.slice(0, 6)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
      <div style="height: 584px">
        <rte-stepper
          [steps]="steps.slice(0, 7)"
          [orientation]="orientation"
          activeStepId="3"
        />
      </div>
    </div>
    `,
  }),
};

export const NonLinearProgression: Story = {
  args: {
    steps: allClickableSteps.slice(0, 4),
    orientation: "horizontal",
    activeStepId: "3",
  },

  render: (args) => ({
    props: {
      ...args,
      changeStep(step: Step) {
        console.log("Step changed");
        console.log(step);
        this["activeStepId"] = this["steps"].find((s: Step) => s.id === step.id).id;
      },
      steps: args.steps.map((step: Step) => ({
        ...step,
        clickableCompleteStep: true,
      })),
    },
    template: `
    <div style="width: 100%">
      <div style="width: 400px" padding="16px">
        <rte-stepper
          [steps]="steps"
          [orientation]="orientation"
          [activeStepId]="activeStepId"
          (clickStep)="changeStep($event)"
        />
        <div style="margin-top: 16px; width: 100%">
          <p>Contenu de l'étape {{ activeStepId }}
            {{ activeStepId === '1' ? 'déjà validé' : activeStepId === '2' ? 'à valider' : '' }}
          </p>
        </div>
      </div>
    </div>`,
  }),
};

export const LinearProgression: Story = {
  args: {
    ...Default.args,
    steps: linearProgressionSteps,
    activeStepId: "1",
  },
  render: (args) => ({
    props: {
      ...args,
      validate() {
        const currentIndex = this["steps"].findIndex((step: Step) => step.id === this["activeStepId"]);
        this["steps"][currentIndex].completionState = "complete";
        if (currentIndex < this["steps"].length - 1) {
          this["activeStepId"] = this["steps"][currentIndex + 1].id;
          console.log(`Changing to step ${this["steps"][currentIndex + 1].id}`);
        } else {
          this["activeStepId"] = null;
        }
      },
      validatePartially() {
        const currentIndex = this["steps"].findIndex((step: Step) => step.id === this["activeStepId"]);
        this["steps"][currentIndex].completionState = "incomplete";
        if (currentIndex < this["steps"].length - 1) {
          this["activeStepId"] = this["steps"][currentIndex + 1].id;
        }
      },
      reset() {
        this["steps"] = linearProgressionSteps.map((step) => ({ ...step, completionState: "unvisited" }));
        this["activeStepId"] = "1";
      },
    },
    template: `
    <div style="width: 400px">
      <rte-stepper
        [steps]="steps"
        [orientation]="orientation"
        [activeStepId]="activeStepId"
      />
      </div>
      <div style="margin-top: 16px; width: 100%">
        <ng-container *ngIf="activeStepId === null; else stepContent">
        <p>Processus terminé !</p>
        </ng-container>
        <ng-template #stepContent>
          <p>Contenu de l'étape {{ activeStepId }}</p>
        </ng-template>
      </div>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button rteButton
          [rteButtonVariant]="'primary'"
          (click)="validate()"
          [disabled]="activeStepId === null"
        >
        Valider et passer à l'étape suivante
        </button>
        <button rteButton
          [rteButtonVariant]="'secondary'"
          (click)="validatePartially()"
          [disabled]="activeStepId === null"
        >
        Valider partiellement et passer à l'étape suivante
        </button>
        <rte-icon-button
          name="reload"
          variant="text"
          aria-label="Recommencer"
          (click)="reset()"
        >
        </rte-icon-button>
      </div>
    `,
  }),
};

export const KeyboardNavigation: Story = {
  args: {
    steps: allClickableSteps,
    orientation: "horizontal",
    activeStepId: "3",
  },

  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="width: 700px">
      <rte-stepper
        [steps]="steps"
        [orientation]="orientation"
        [activeStepId]="activeStepId"
      />
    </div>
    `,
  }),

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
