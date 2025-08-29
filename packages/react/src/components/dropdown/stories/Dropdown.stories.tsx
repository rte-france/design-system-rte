import { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../Dropdown";
import { DropdownItem } from "../dropdownItem/DropdownItem";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  args: {},
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
        // border: "1px solid black",
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px",
      }}
    >
      <Dropdown {...args} style={{ width: "250px" }}>
        <DropdownItem label="Messages" leftIcon="mail" withSeparator onClick={() => console.log("click")} />
        <DropdownItem label="Actions" leftIcon="settings">
          <DropdownItem label="Edit" leftIcon="edit">
            <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
            <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" />
            <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
          </DropdownItem>
          <DropdownItem label="Archive" leftIcon="archive" />
          <DropdownItem label="Delete" leftIcon="delete" />
        </DropdownItem>
        <DropdownItem label="Help" leftIcon="help" />
        <DropdownItem label="More information" leftIcon="info" withSeparator />
        <DropdownItem label="First option" />
        <DropdownItem label="Second option" />
        <DropdownItem label="Third option" withSeparator />
        <DropdownItem label="Username" leftIcon="user-circle" />
      </Dropdown>
      {/* <Dropdown {...args} options={optionsWithCategories} style={{ width: "250px" }}>
        <DropdownItem label="Messages" leftIcon="mail" withSeparator />
        <DropdownItem label="Actions" leftIcon="settings">
          <DropdownItem label="Edit" leftIcon="edit">
            <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
            <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" />
            <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
          </DropdownItem>
          <DropdownItem label="Archive" leftIcon="archive" />
          <DropdownItem label="Delete" leftIcon="delete" />
        </DropdownItem>
        <DropdownItem label="Help" leftIcon="help" />
        <DropdownItem label="More information" leftIcon="info" withSeparator />
        <DropdownItem label="First option" />
        <DropdownItem label="Second option" />
        <DropdownItem label="Third option" withSeparator />
        <DropdownItem label="Username" leftIcon="user-circle" />
      </Dropdown> */}
    </div>
  ),
};
