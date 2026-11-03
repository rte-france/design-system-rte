import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { NumberInputComponent } from "../number-input.component";

const meta: Meta<NumberInputComponent> = {
  title: "Composants/NumberInput/NumberInput",
  component: NumberInputComponent,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Required. Stable id for the field, label association, and assistive text.",
    },
    appearance: { control: { type: "radio" }, options: ["brand", "neutral"] },
    incrementPosition: { control: { type: "radio" }, options: ["right", "sides"] },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    readOnly: { control: "boolean" },
    label: {
      control: "text",
      description: "Visible label. Leave empty only if ariaLabel (or ariaLabelledby) is set.",
    },
    ariaLabel: { control: "text", description: "Accessible name when label is empty." },
    assistiveText: { control: "text", description: "Help text below the field when no error is shown." },
    valueChange: { action: "value changed" },
    width: { control: "text", description: "Total width (field + steppers). Defaults to 184px when omitted." },
    maxLength: { table: { disable: true } },
    showCounter: { table: { disable: true } },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    inputType: { table: { disable: true } },
    showRightIcon: { table: { disable: true } },
    rightIconAriaLabel: { table: { disable: true } },
    rightIconSize: { table: { disable: true } },
    enterKeyDown: { table: { disable: true } },
    rightIconClick: { table: { disable: true } },
    rightIconKeydown: { table: { disable: true } },
    value: { table: { disable: true } },
    autocomplete: { table: { disable: true } },
    customStyle: { table: { disable: true } },
    assistiveTextId: { table: { disable: true } },
    ariaRequired: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<NumberInputComponent>;

const defaultArgs = {
  id: "number-input-default",
  label: "Puissance",
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
  unit: "kW",
  decimalPrecision: 0,
  locale: "fr-FR",
};

export const Default: Story = {
  args: defaultArgs,
};

export const Sides: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-sides",
    incrementPosition: "sides",
  },
};

export const Neutral: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-neutral",
    appearance: "neutral",
  },
};

export const Compact: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-compact",
    compactSpacing: true,
  },
};

export const CustomWidth: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-custom-width",
    width: "320px",
  },
};

export const DecimalsFr: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-decimals-fr",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999,
  },
};

export const DecimalsEn: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-decimals-en",
    locale: "en-US",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-readonly",
    readOnly: true,
  },
};

export const WithAssistiveText: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-assistive",
    assistiveText: "Entrez une valeur entre 0 et 100, par pas de 1.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton");
    expect(input).toHaveAttribute("aria-describedby", "number-input-assistive-assistive-text");
    expect(canvasElement.querySelector("#number-input-assistive-assistive-text")).not.toBeNull();
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    id: "number-input-error",
    error: true,
    errorMessage: "Valeur invalide pour ce champ.",
    assistiveText: "Ce texte d'aide ne s'affiche pas lorsque error est activé.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton");

    expect(canvas.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument();
    expect(canvas.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", "number-input-error-assistive-text");
  },
};

export const InteractionPlay: Story = {
  tags: ["!autodocs"],
  args: {
    ...defaultArgs,
    id: "number-input-play",
    defaultValue: 10,
    max: 100,
    min: 0,
    decimalPrecision: 2,
    locale: "fr-FR",
  },
  render: (args) => ({
    props: args,
    template: `<rte-number-input
      data-testid="number-input"
      [id]="id"
      [label]="label"
      [width]="width"
      [min]="min"
      [max]="max"
      [step]="step"
      [defaultValue]="defaultValue"
      [decimalPrecision]="decimalPrecision"
      [locale]="locale"
      [unit]="unit"
    />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const host = canvas.getByTestId("number-input");
    const input = host.querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const incrementStepper = host.querySelector(".number-input-stepper--increment button") as HTMLButtonElement;
    const decrementStepper = host.querySelector(".number-input-stepper--decrement button") as HTMLButtonElement;

    expect(input).toHaveAttribute("role", "spinbutton");
    expect(input).toHaveAttribute("aria-valuemin", "0");
    expect(input).toHaveAttribute("aria-valuemax", "100");
    expect(incrementStepper).toHaveAttribute("aria-hidden", "true");
    expect(decrementStepper).toHaveAttribute("aria-hidden", "true");

    await userEvent.clear(input);
    await userEvent.type(input, "1.251212");
    await waitFor(() => expect(input.value).toBe("1,25"));

    input.focus();
    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => expect(input.value).toBe("2,25"));

    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => expect(input.value).toBe("1,25"));

    await userEvent.clear(input);
    await userEvent.type(input, "150");
    await waitFor(() => expect(canvas.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument());
    expect(input).toHaveAttribute("aria-describedby", "number-input-play-assistive-text");

    await userEvent.clear(input);
    await userEvent.tab();
    await waitFor(() => expect(input.value).toBe("10,00"));
  },
};

@Component({
  selector: "number-input-reactive-form-host",
  imports: [ReactiveFormsModule, NumberInputComponent],
  standalone: true,
  template: `
    <rte-number-input
      data-testid="number-input"
      id="number-input-reactive"
      label="Quantité"
      [min]="0"
      [max]="10"
      [formControl]="control"
    />
    <button type="button" data-testid="set-from-model" (click)="control.setValue(7)">Set from model</button>
    <span data-testid="model-value">{{ control.value }}</span>
  `,
})
class NumberInputReactiveFormHostComponent {
  readonly control = new FormControl<number | null>(3);
}

export const ReactiveForm: Story = {
  tags: ["!autodocs"],
  render: () => ({
    moduleMetadata: { imports: [NumberInputReactiveFormHostComponent] },
    template: `<number-input-reactive-form-host />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("number-input").querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const modelValue = canvas.getByTestId("model-value");

    await waitFor(() => expect(input.value).toBe("3"));
    await userEvent.click(canvas.getByTestId("set-from-model"));
    await waitFor(() => {
      expect(modelValue).toHaveTextContent("7");
      expect(input.value).toBe("7");
    });
  },
};
