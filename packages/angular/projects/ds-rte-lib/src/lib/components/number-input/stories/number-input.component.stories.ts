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
    appearance: { control: { type: "radio" }, options: ["brand", "neutral"] },
    incrementPosition: { control: { type: "radio" }, options: ["right", "sides"] },
    valueChange: { action: "value changed" },
    width: { control: "text", description: "Total width (field + steppers). Defaults to 184px when omitted." },
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
    const incrementButton = canvas.getByRole("button", { name: /Augmenter/i });
    const decrementButton = canvas.getByRole("button", { name: /Diminuer/i });

    expect(input).toHaveAttribute("role", "spinbutton");
    expect(input).toHaveAttribute("aria-valuemin", "0");
    expect(input).toHaveAttribute("aria-valuemax", "100");

    await userEvent.clear(input);
    await userEvent.type(input, "1.251212");
    await waitFor(() => expect(input.value).toBe("1,25"));

    await userEvent.click(incrementButton);
    await waitFor(() => expect(input.value).toBe("2,25"));

    await userEvent.click(decrementButton);
    await waitFor(() => expect(input.value).toBe("1,25"));

    await userEvent.clear(input);
    await userEvent.type(input, "150");
    await waitFor(() => expect(canvas.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument());

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
