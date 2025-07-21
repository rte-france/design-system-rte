import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import Chip from "../Chip";

const meta = {
  title: "Chip",
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
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
        <div style={{ display: "flex", gap: "10px" }} role="radiogroup">
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
        <p>Chip sélectionnée: {options.find((option) => option.id === selectedChip)?.label || "Aucune"}</p>
      </>
    );
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
    await userEvent.keyboard(ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(SPACE_KEY);
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
        <p>
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
    await userEvent.keyboard(ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
  },
};
