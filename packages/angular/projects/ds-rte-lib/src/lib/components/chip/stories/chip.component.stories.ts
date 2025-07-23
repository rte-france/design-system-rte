import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import { moduleMetadata } from "@storybook/angular";
import type { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { ChipComponent } from "../chip.component";

const meta = {
  title: "Chip",
  component: ChipComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label of the chip",
      defaultValue: "Chip",
    },
    disabled: {
      control: "boolean",
    },
    compactSpacing: {
      control: "boolean",
      description: "Whether the chip should be compact",
    },
    type: {
      control: "select",
      options: ["single", "multi", "input"],
      description: "Type of the chip",
      defaultValue: "single",
    },
  },
} satisfies Meta<ChipComponent>;

export default meta;

type Story = StoryObj<ChipComponent>;

export const Default: Story = {
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false,
  },
};

export const SingleSelect: Story = {
  args: {
    ...Default.args,
    type: "single",
  },
  render: (args) => {
    const options = [
      { id: "all", label: "All" },
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
    ];

    return {
      props: {
        ...args,
        options,
        selectedChip: null,
        selectedLabel: "Aucune",
        onChipClick(optionId: string) {
          this["selectedChip"] = this["selectedChip"] === optionId ? null : optionId;
          const found = options.find((option) => option.id === this["selectedChip"]);
          this["selectedLabel"] = found ? found.label : "Aucune";
        },
      },
      template: `
        <div style="display: flex; gap: 10px;" role="radiogroup">
          <rte-chip
            *ngFor="let option of options"
            [id]="option.id"
            [label]="option.label"
            [selected]="selectedChip === option.id"
            [type]="type"
            [compactSpacing]="compactSpacing"
            (click)="onChipClick(option.id)"
            class="chip"
          ></rte-chip>
        </div>
        <p>Chip sélectionnée: {{ selectedLabel }}</p>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole("radio");

    await userEvent.click(chips[0]);
    expect(chips[0]).toHaveAttribute("aria-checked", "true");

    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "true");
    expect(chips[0]).toHaveAttribute("aria-checked", "false");

    await userEvent.click(chips[1]);

    await userEvent.tab();
    expect(chips[2]).toHaveFocus();
    await userEvent.keyboard(`{${ENTER_KEY}}`);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(`{${SPACE_KEY}}`);
    expect(chips[2]).toHaveAttribute("aria-checked", "false");
  },
};

export const MultiSelect: Story = {
  args: {
    ...Default.args,
    type: "multi",
  },
  render: (args) => {
    const options = [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
    ];

    return {
      props: {
        ...args,
        options,
        selectedChips: new Set<string>(),
        onChipClick(optionId: string) {
          if (this["selectedChips"].has(optionId)) {
            this["selectedChips"].delete(optionId);
          } else {
            this["selectedChips"].add(optionId);
          }
        },
      },
      template: `
        <div style="display: flex; gap: 10px;" role="group">
          <rte-chip
            *ngFor="let option of options"
            [id]="option.id"
            [label]="option.label"
            [selected]="selectedChips.has(option.id)"
            [type]="type"
            [compactSpacing]="compactSpacing"
            (click)="onChipClick(option.id)"
            class="chip"
          ></rte-chip>
        </div>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole("checkbox");

    await userEvent.click(chips[0]);
    expect(chips[0]).toHaveAttribute("aria-checked", "true");

    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "true");
    expect(chips[0]).toHaveAttribute("aria-checked", "true");

    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "false");

    await userEvent.tab();
    expect(chips[2]).toHaveFocus();
    await userEvent.keyboard(`{${ENTER_KEY}}`);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
  },
};
export const InputChip: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    type: "input",
  },
  render: (args) => {
    return {
      props: {
        ...args,
        inputValue: "",
        chipsValues: [],
        onChange(event: Event) {
          const target = event.target as HTMLInputElement;
          this["inputValue"] = target.value;
        },
        onClose(event: Event) {
          const target = event.currentTarget as HTMLInputElement;
          this["chipsValues"] = this["chipsValues"].filter((chip: string) => chip !== target.value);
        },
        handleAddChip() {
          if (this["inputValue"].trim()) {
            this["chipsValues"].push(this["inputValue"]);
            this["inputValue"] = "";
          }
        },
      },
      template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;" role="listbox">
        <input
          type="text"
          name="chip-input"
          (input)="onChange($event)"
          [value]="inputValue"
          (keydown.enter)="handleAddChip()"
          />
          <rte-button label="Add Chip" size="s" (click)="handleAddChip()"></rte-button>
        </div>
        <div style="display: flex; gap: 10px;" role="listbox">
          <rte-chip
            *ngFor="let chip of chipsValues"
            [id]="'chip-' + chip"
            [label]="chip"
            [type]="type"
            (close)="onClose($event)"
          >
          </rte-chip>
        </div>
      </div>
    `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "New Chip");
    await userEvent.keyboard(`{${ENTER_KEY}}`);

    await userEvent.type(input, "Another Chip");
    await userEvent.keyboard(`{${ENTER_KEY}}`);

    const allChipsList = canvas.getAllByRole("option");

    expect(allChipsList).toHaveLength(2);

    const closeButton = within(allChipsList[0]).getByRole("button");

    await userEvent.click(closeButton);

    const remainingChips = canvas.getAllByRole("option");

    expect(remainingChips).toHaveLength(1);

    await userEvent.type(input, "More Chip");
    await userEvent.keyboard(`{${ENTER_KEY}}`);

    const newRemainingChips = canvas.getAllByRole("option");
    expect(newRemainingChips).toHaveLength(2);

    newRemainingChips[0].focus();
    await userEvent.tab();
    await userEvent.keyboard(`{${ENTER_KEY}}`);

    expect(canvas.getAllByRole("option")).toHaveLength(1);

    await userEvent.type(input, "Last Chip");
    await userEvent.keyboard(`{${ENTER_KEY}}`);

    expect(canvas.getAllByRole("option")).toHaveLength(2);

    const lastChip = canvas.getAllByRole("option")[1];
    lastChip.focus();
    await userEvent.tab();
    await userEvent.keyboard(`{${SPACE_KEY}}`);

    expect(canvas.getAllByRole("option")).toHaveLength(1);
  },
};
