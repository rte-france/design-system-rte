import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";

import Tooltip from "./Tooltip";

const meta = {
  title: "Composants/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
    },
    alignment: {
      control: "select",
      options: ["start", "center", "end"],
    },
    label: {
      control: "text",
    },
    arrow: {
      control: "boolean",
    },
  },
  args: {
    label: "Tooltip Text",
    position: "top",
    alignment: "center",
    arrow: true,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockChildren = (
  <span
    style={{
      textDecoration: "underline",
      textDecorationColor: "#BF4C00",
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      color: "#BF4C00",
      fontWeight: "bold",
    }}
  >
    Hover Me!
  </span>
);

export const Default: Story = {
  args: {
    label: "Tooltip",
    children: mockChildren,
  },
};

export const Position: Story = {
  args: Default.args,
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <Tooltip {...args} position="top" />
        <Tooltip {...args} position="bottom" />
        <Tooltip {...args} position="left" />
        <Tooltip {...args} position="right" />
      </div>
    );
  },
};

export const Alignment: Story = {
  args: Default.args,
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Tooltip {...args} alignment="start" />
        <Tooltip {...args} alignment="center" />
        <Tooltip {...args} alignment="end" />
      </div>
    );
  },
};

export const Arrow: Story = {
  args: Default.args,
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Tooltip {...args} arrow={true} />
        <Tooltip {...args} arrow={false} />
      </div>
    );
  },
};

export const AutoPlacement: Story = {
  args: Default.args,
  render: (args) => {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 8,
            border: "1px solid red",
            width: 75,
            height: 250,
          }}
        >
          <Tooltip {...args} position="auto" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 8,
            border: "1px solid red",
            width: 250,
            height: 50,
          }}
        >
          <Tooltip {...args} position="auto" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: 8,
            border: "1px solid red",
            width: 75,
            height: 250,
          }}
        >
          <Tooltip {...args} position="auto" />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            border: "1px solid red",
            width: 250,
            height: 50,
          }}
        >
          <Tooltip {...args} position="auto" />
        </div>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: Default.args,
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Tooltip {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipTrigger = canvas.queryByText("Hover Me!")?.parentElement;
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    const tooltip = within(document.body).getByRole("tooltip");
    expect(tooltipTrigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
  },
};
