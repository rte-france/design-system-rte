import {
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_LEFT_KEY,
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
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
      { id: "label-1", label: "Label 1" },
      { id: "label-2", label: "Label 2" },
      { id: "label-3", label: "Label 3" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("label-1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "360px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const [firstSegments, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");

    const firstSegmentFocusableChild = firstSegments.firstChild as HTMLElement;
    const secondSegmentFocusableChild = secondSegment.firstChild as HTMLElement;
    const thirdSegmentFocusableChild = thirdSegment.firstChild as HTMLElement;

    expect(firstSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.click(secondSegmentFocusableChild);
    expect(secondSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.click(thirdSegmentFocusableChild);
    expect(thirdSegmentFocusableChild).toHaveAttribute("aria-selected", "true");

    await userEvent.click(firstSegmentFocusableChild);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegmentFocusableChild).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegmentFocusableChild).toHaveFocus();
  },
};

export const TwoItems: Story = {
  args: {
    options: [
      { id: "label-1", label: "Label 1" },
      { id: "label-2", label: "Label 2" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("label-1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "360px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const Icons: Story = {
  args: {
    options: [
      { id: "agenda", icon: "view-agenda" },
      { id: "column", icon: "view-column" },
      { id: "grid", icon: "view-grid" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("agenda");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "360px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};
