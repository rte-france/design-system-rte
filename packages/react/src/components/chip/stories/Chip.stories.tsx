import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { ENTER_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import Button from "../../button/Button";
import TextInput from "../../textInput/TextInput";
import Chip from "../Chip";

const meta = {
  title: "Composants/Chip/Chip",
  component: Chip,
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
  args: { onClick: fn() },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

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
  },
  render: (args) => {
    const [selectedChip, setSelectedChip] = useState<string | null>(null);

    const options = [
      { id: "all", label: "All" },
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
    ];

    const handleClick = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
      const clickedChipId = event.currentTarget.id;
      if (clickedChipId === selectedChip) {
        setSelectedChip(null);
      } else {
        setSelectedChip(clickedChipId);
      }
    };

    return (
      <>
        <div style={{ display: "flex", gap: "10px" }} role="radiogroup" data-testid="test-chip-group">
          {options.map(({ id, label }) => (
            <Chip
              id={id}
              key={id}
              label={label}
              selected={selectedChip === id}
              onClick={handleClick}
              type="single"
              compactSpacing={args.compactSpacing}
              className="chip"
            />
          ))}
        </div>
        <p style={{ fontFamily: "Arial, sans-serif" }}>
          Chip sélectionnée: {options.find((option) => option.id === selectedChip)?.label || "Aucune"}
        </p>
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getByTestId("test-chip-group").querySelectorAll("[role='radio']");

    await userEvent.click(chips[0]);
    expect(chips[0]).toHaveAttribute("aria-checked", "true");

    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "true");
    expect(chips[0]).toHaveAttribute("aria-checked", "false");

    await userEvent.click(chips[1]);

    await userEvent.tab();
    expect(chips[2]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "false");
  },
};

export const MultiSelect: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

    const options = [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
    ];

    const handleClick = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
      const clickedChipId = event.currentTarget.id;
      setSelectedChips((prev) =>
        prev.includes(clickedChipId) ? prev.filter((id) => id !== clickedChipId) : [...prev, clickedChipId],
      );
    };

    return (
      <>
        <div style={{ display: "flex", gap: "10px" }} role="group">
          {options.map(({ id, label }) => (
            <Chip
              id={id}
              key={id}
              label={label}
              selected={selectedChips.includes(id)}
              onClick={handleClick}
              type="multi"
              compactSpacing={args.compactSpacing}
            />
          ))}
        </div>
        <p style={{ fontFamily: "Arial, sans-serif" }}>
          Chip(s) sélectionnée(s):{" "}
          {options
            .filter((option) => selectedChips.includes(option.id))
            .map((option) => option.label)
            .join(", ")}
        </p>
      </>
    );
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
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
  },
};

export const Input: Story = {
  args: {
    ...Default.args,
    type: "input",
  },
  render: () => {
    const [inputValue, setInputValue] = useState("");
    const [chipsValue, setChipsValue] = useState<string[]>([]);

    const handleOnChange = (value: string) => {
      setInputValue(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === ENTER_KEY) {
        event.preventDefault();
        handleAddChip();
      }
    };

    const handleAddChip = () => {
      if (inputValue && !chipsValue.includes(inputValue)) {
        setChipsValue((prev) => [...prev, inputValue]);
        setInputValue("");
      }
    };

    const handleRemoveChip = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      const chipsToRemove = event.currentTarget.value;
      setChipsValue((chipsValue) =>
        chipsValue.includes(chipsToRemove) ? chipsValue.filter((value) => value !== chipsToRemove) : chipsValue,
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
          <TextInput
            id="input-add-chip"
            label="Ajouter un chip"
            value={inputValue}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />

          <Button label="Ajouter" onClick={handleAddChip}></Button>
        </div>
        {chipsValue.length > 0 && (
          <div style={{ display: "flex", gap: "10px" }} role="listbox" aria-label="Chips list">
            {chipsValue.map((value, index) => (
              <Chip
                id={`chip-${index}-${value}`}
                key={index + value}
                label={value}
                selected={false}
                disabled={false}
                type="input"
                onClose={handleRemoveChip}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "New Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);

    await userEvent.type(input, "Another Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);

    const allChipsList = canvas.getAllByRole("option");

    expect(allChipsList).toHaveLength(2);

    const closeButton = within(allChipsList[0]).getByRole("button");

    await userEvent.click(closeButton);

    const remainingChips = canvas.getAllByRole("option");

    expect(remainingChips).toHaveLength(1);

    await userEvent.type(input, "More Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);

    const newRemainingChips = canvas.getAllByRole("option");
    expect(newRemainingChips).toHaveLength(2);

    newRemainingChips[0].focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);

    expect(canvas.getAllByRole("option")).toHaveLength(1);

    await userEvent.type(input, "Last Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);

    expect(canvas.getAllByRole("option")).toHaveLength(2);

    const lastChip = canvas.getAllByRole("option")[1];
    lastChip.focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);

    expect(canvas.getAllByRole("option")).toHaveLength(1);
  },
};
