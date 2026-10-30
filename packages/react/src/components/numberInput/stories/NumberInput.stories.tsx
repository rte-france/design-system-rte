import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import NumberInput from "../NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Composants/NumberInput/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Required. Stable id for the field, label association, and assistive text.",
    },
    appearance: { control: { type: "radio" }, options: ["brand", "neutral"] },
    incrementPosition: { control: { type: "radio" }, options: ["right", "sides"] },
    isError: { control: "boolean" },
    errorMessage: { control: "text" },
    readOnly: { control: "boolean" },
    label: {
      control: "text",
      description: "Visible label. Leave empty only if aria-label (or aria-labelledby) is set.",
    },
    "aria-label": { control: "text", description: "Accessible name when label is empty." },
    assistiveTextLabel: { control: "text", description: "Help text below the field when no error is shown." },
    onChange: { action: "value changed" },
    width: { control: "text", description: "Total width (field + steppers). Defaults to 184px when omitted." },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

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
    assistiveTextLabel: "Entrez une valeur entre 0 et 100, par pas de 1.",
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
    isError: true,
    errorMessage: "Valeur invalide pour ce champ.",
    assistiveTextLabel: "Ce texte d'aide ne s'affiche pas lorsque error est activé.",
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
  render: (args) => (
    <div data-testid="number-input">
      <NumberInput {...args} />
    </div>
  ),
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

const ControlledNumberInputHost = () => {
  const [value, setValue] = useState<number | null>(3);

  return (
    <div data-testid="number-input-controlled">
      <NumberInput id="number-input-controlled" label="Quantité" min={0} max={10} value={value} onChange={setValue} />
      <button type="button" data-testid="set-from-model" onClick={() => setValue(7)}>
        Set from model
      </button>
      <span data-testid="model-value">{value}</span>
    </div>
  );
};

export const Controlled: Story = {
  tags: ["!autodocs"],
  render: () => <ControlledNumberInputHost />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const host = canvas.getByTestId("number-input-controlled");
    const input = host.querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const modelValue = canvas.getByTestId("model-value");

    await waitFor(() => expect(input.value).toBe("3"));
    await userEvent.click(canvas.getByTestId("set-from-model"));
    await waitFor(() => {
      expect(modelValue).toHaveTextContent("7");
      expect(input.value).toBe("7");
    });
  },
};
