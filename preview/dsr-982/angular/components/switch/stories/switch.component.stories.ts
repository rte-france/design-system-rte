import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";
import { expect, within, userEvent, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { SwitchComponent } from "../switch.component";

const switchStateWrapperDecorator = componentWrapperDecorator(
  (story) => `<div style="height: 50px; width: 200px;">
    ${story}
    <div>
      <p>
        Switch State : <span id="switch-state">  </span>
      </p>
    </div>
  </div>`,
);

const meta: Meta<SwitchComponent> = {
  title: "Composants/Switch/Switch",
  component: SwitchComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Switch",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
      defaultValue: "brand",
    },
    showLabel: {
      control: "boolean",
      defaultValue: true,
    },
    showIcon: {
      control: "boolean",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      defaultValue: false,
    },
    stateChange: {
      action: "changed",
      description: "Function called when the switch state changes",
    },
    handleClick: {
      table: { disable: true },
    },
    switchHeight: {
      table: { disable: true },
    },
    switchWidth: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  decorators: [switchStateWrapperDecorator],
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: false,
    readOnly: false,
    checked: false,
    stateChange: (e: Event) => {
      const switchState = (e.target as HTMLInputElement).checked ? "ON" : "OFF";
      const switchStateElement = document.getElementById("switch-state");
      if (switchStateElement) {
        switchStateElement.textContent = switchState;
      }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    focusElementBeforeComponent();

    await userEvent.tab();
    await expect(switchElement).toHaveFocus();

    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).toBeChecked();

    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();

    await userEvent.keyboard(ENTER_KEY);
    await expect(switchElement).not.toBeChecked();
  },
};

export const Disabled: Story = {
  decorators: [switchStateWrapperDecorator],
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: true,
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  decorators: [switchStateWrapperDecorator],
  args: {
    label: "Switch",
    appearance: "brand",
    showLabel: true,
    showIcon: true,
    disabled: false,
    readOnly: true,
  },
};

@Component({
  selector: "switch-reactive-form-host",
  imports: [ReactiveFormsModule, SwitchComponent],
  standalone: true,
  template: `
    <rte-switch label="Switch" id="switch-reactive-form" [formControl]="control" />
    <button type="button" data-testid="set-from-model" (click)="control.setValue(false)">Set from model</button>
    <button type="button" data-testid="reset-from-model" (click)="control.reset(false)">Reset from model</button>
    <button type="button" data-testid="toggle-disabled" (click)="toggleDisabled()">Toggle disabled</button><br />
    <span data-testid="model-value">Value: {{ control.value }}</span
    ><br />
    <span data-testid="model-touched">Touched: {{ control.touched }}</span
    ><br />
    <span data-testid="model-status">Status: {{ control.status }}</span>
  `,
})
class SwitchReactiveFormHostComponent {
  readonly control = new FormControl(false, { nonNullable: true });

  toggleDisabled(): void {
    if (this.control.disabled) {
      this.control.enable();
    } else {
      this.control.disable();
    }
  }
}

export const ReactiveForm: Story = {
  decorators: [],
  render: () => ({
    template: `<switch-reactive-form-host />`,
    moduleMetadata: { imports: [SwitchReactiveFormHostComponent] },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    const modelValue = canvas.getByTestId("model-value");
    const modelTouched = canvas.getByTestId("model-touched");
    const modelStatus = canvas.getByTestId("model-status");

    await userEvent.click(switchElement);
    await waitFor(() => expect(modelValue).toHaveTextContent("true"));
    await expect(switchElement).toBeChecked();
    await waitFor(() => expect(modelTouched).toHaveTextContent("true"));

    await userEvent.click(canvas.getByTestId("set-from-model"));
    await waitFor(() => expect(switchElement).not.toBeChecked());
    await waitFor(() => expect(modelValue).toHaveTextContent("false"));

    await userEvent.click(switchElement);
    await waitFor(() => expect(modelValue).toHaveTextContent("true"));
    await expect(switchElement).toBeChecked();

    await userEvent.click(canvas.getByTestId("reset-from-model"));
    await waitFor(() => expect(switchElement).not.toBeChecked());
    await waitFor(() => expect(modelValue).toHaveTextContent("false"));

    await userEvent.click(canvas.getByTestId("toggle-disabled"));
    await waitFor(() => expect(modelStatus).toHaveTextContent("DISABLED"));
    expect(switchElement).toBeDisabled();
  },
};
