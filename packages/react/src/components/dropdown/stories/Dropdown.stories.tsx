import { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../Dropdown";

const options = [
  {
    label: "Messages",
    leftIcon: "mail",
  },
  {
    label: "Settings",
    leftIcon: "settings",
    subOptions: [
      {
        label: "Edit",
        leftIcon: "edit",
        subOptions: [
          { label: "Cut", leftIcon: "cut", trailingText: "⌘X" },
          { label: "Copy", leftIcon: "copy", trailingText: "⌘C" },
          { label: "Paste", leftIcon: "paste", trailingText: "⌘V" },
        ],
      },
      {
        label: "Duplicate",
        leftIcon: "copy",
      },
      { label: "Archive", leftIcon: "archive" },
      { label: "Delete", leftIcon: "delete" },
    ],
  },
  { label: "Help", leftIcon: "help" },
  { label: "More information", leftIcon: "info" },
  { label: "First Option" },
  { label: "Second Option", subOptions: [{ label: "Sub Option 1" }, { label: "Sub Option 2" }], disabled: true },
  { label: "Third Option" },
  { label: "Username", leftIcon: "user", trailingText: "⌘U" },
];

const optionsWithCategories = [
  {
    category: "Category 1",
    values: [
      {
        label: "Messages",
        leftIcon: "mail",
      },
    ],
  },
  {
    category: "Category 2",
    values: [
      {
        label: "Settings",
        leftIcon: "settings",
        subOptions: [
          {
            label: "Edit",
            leftIcon: "edit",
            subOptions: [
              { label: "Cut", leftIcon: "cut", trailingText: "⌘X" },
              { label: "Copy", leftIcon: "copy", trailingText: "⌘C" },
              { label: "Paste", leftIcon: "paste", trailingText: "⌘V" },
            ],
          },
          {
            label: "Duplicate",
            leftIcon: "copy",
          },
          { label: "Archive", leftIcon: "archive" },
          { label: "Delete", leftIcon: "delete" },
        ],
      },
      { label: "Help", leftIcon: "help" },
      { label: "More information", leftIcon: "info" },
    ],
  },
  {
    category: "Category 3",
    values: [
      { label: "First Option" },
      { label: "Second Option", subOptions: [{ label: "Sub Option 1" }, { label: "Sub Option 2" }], disabled: true },
      { label: "Third Option" },
    ],
  },
  { label: "Username", leftIcon: "user", trailingText: "⌘U" },
];
const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  args: {
    options,
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <button style={{ color: "black" }}>Click Me!</button>,
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        gap: "500px",
      }}
    >
      <Dropdown {...args} style={{ width: "1504px" }} />
      <Dropdown {...args} options={optionsWithCategories} style={{ width: "1504px" }} />
      {/* <Tooltip position="top" label="This is a tooltip">
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
      </Tooltip> */}
    </div>
  ),
};
