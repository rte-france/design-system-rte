import {
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_LEFT_KEY,
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import SegmentedControl from "../SegmentedControl";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/SegmentedControl/SegmentedControl",
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
      badgeContent: {
        control: "select",
        options: ["number", "icon", "empty"],
      },
      badgeType: {
        control: "select",
        options: ["brand", "neutral", "indicator"],
      },
      badgeIcon: {
        control: "select",
        options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      },
      showBadge: {
        control: "boolean",
      },
      badgeCount: {
        control: "number",
      },
      badgeSize: {
        control: "select",
        options: ["xs", "s", "m", "l"],
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
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
      { label: "Option 3", id: "option3" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }} data-testid="segmented-control-story">
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas)
      .getByTestId("segmented-control-story")
      .querySelectorAll("[role='radio']");

    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");

    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  },
};

export const TwoOptions: Story = {
  args: {
    options: [
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const Icons: Story = {
  args: {
    options: [
      { id: "agenda", icon: "view-agenda", label: "Vue agenda" },
      { id: "column", icon: "view-column", label: "Vue colonne" },
      { id: "grid", icon: "view-grid", label: "Vue grille" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("agenda");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const WithBadge: Story = {
  args: {
    options: [
      { label: "Option 1", id: "option1" },
      {
        label: "Option 2",
        id: "option2",
        showBadge: true,
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
      },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "380px" }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};
