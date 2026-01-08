import { ARROW_DOWN_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../icon/IconMap";

import SplitButton from "./SplitButton";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/SplitButton",
  id: "SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    compactSpacing: {
      control: "boolean",
    },
    position: {
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "",
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
  args: { onClick: fn() },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

const defaultOptions = [
  { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1 clicked") },
  { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2 clicked") },
  { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3 clicked") },
];

export const Default: Story = {
  args: {
    appearance: "primary",
    label: "Button Label",
    compactSpacing: false,
    position: "bottom-start",
    disabled: false,
    ariaLabelRight: "Open menu",
    onClick: mockFn(),
    options: defaultOptions,
  },
  render: (args) => <SplitButton {...args} />,
};

export const Appearance: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} appearance="primary" />
      <SplitButton {...args} appearance="secondary" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} size="s" />
      <SplitButton {...args} size="m" />
      <SplitButton {...args} size="l" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const CompactSpacing: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <SplitButton {...args} size="s" compactSpacing={true} />
      <SplitButton {...args} size="m" compactSpacing={true} />
      <SplitButton {...args} size="l" compactSpacing={true} />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const Position: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600 }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gap: 24 }}>
        <SplitButton {...args} position="top-end" />
        <SplitButton {...args} position="top-start" />
        <SplitButton {...args} position="bottom-end" />
        <SplitButton {...args} position="bottom-start" />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    showBadge: true,
    badgeContent: "empty",
    badgeType: "indicator",
    badgeIcon: "star",
    badgeCount: 7,
    options: [
      {
        id: "option-1",
        label: "Option 1",
        onClick: () => console.log("Option 1 clicked"),
        showBadge: true,
        badgeCount: 2,
        badgeContent: "number",
        badgeType: "indicator",
      },
      { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2 clicked") },
      {
        id: "option-3",
        label: "Option 3",
        onClick: () => console.log("Option 3 clicked"),
        showBadge: true,
        badgeCount: 5,
        badgeContent: "number",
        badgeType: "indicator",
      },
    ],
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(`{${ARROW_DOWN_KEY}}`);
    await waitFor(() => expect(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible());
  },
};
