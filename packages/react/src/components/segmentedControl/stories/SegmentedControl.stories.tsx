import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

import SegmentedControl from "../SegmentedControl";

const meta = {
  title: "SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "Array of segment options",
      table: {
        type: { summary: "SegmentProps[]" },
        defaultValue: { summary: "[]" },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { id: "label-1", label: "Label" },
      { id: "label-2", label: "Label" },
      { id: "label-3", label: "Label" },
    ],
  },

  render: (args) => {
    const [selected, setSelected] = useState("label-1");

    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      setSelected(event.currentTarget.getAttribute("id") || "");
    };

    return (
      <div style={{ width: "360px" }}>
        <SegmentedControl options={args.options} onClick={handleClick} selected={selected} />
      </div>
    );
  },
};

export const TwoItems: Story = {
  args: {
    options: [
      { id: "label-1", label: "Label" },
      { id: "label-2", label: "Label" },
    ],
  },

  render: (args) => {
    const [selected, setSelected] = useState("label-1");

    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      setSelected(event.currentTarget.getAttribute("id") || "");
    };

    return (
      <div style={{ width: "360px" }}>
        {/* <button>Autre bouton</button> */}
        <SegmentedControl options={args.options} onClick={handleClick} selected={selected} />

        {/* <button>Bouton a focus</button> */}
      </div>
    );
  },
};
