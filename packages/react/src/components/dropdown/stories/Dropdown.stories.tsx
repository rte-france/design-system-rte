import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "200px",
          display: "flex",
          justifyContent: "space-between",
          gap: "500px",
        }}
      >
        <Dropdown
          {...args}
          onClose={() => {
            console.log("closing from component state managemen");
            setIsOpen(false);
          }}
          trigger={
            <button onClick={() => setIsOpen(true)} style={{ color: "black" }}>
              Click Me!
            </button>
          }
          style={{ width: "250px" }}
          isOpen={isOpen}
        >
          <DropdownItem label="Messages" leftIcon="mail" hasSeparator onClick={() => console.log("click")} />
          <DropdownItem label="Actions" leftIcon="settings">
            <DropdownItem label="Edit" leftIcon="edit">
              <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
              <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" onClick={() => console.log("click")} />
              <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
            </DropdownItem>
            <DropdownItem label="Archive" leftIcon="archive" />
            <DropdownItem label="Delete" leftIcon="delete" />
          </DropdownItem>
          <DropdownItem label="Help" leftIcon="help" />
          <DropdownItem label="More information" leftIcon="info" hasSeparator />
          <DropdownItem label="First option" hasIndent />
          <DropdownItem label="Second option" hasIndent />
          <DropdownItem label="Third option" hasSeparator hasIndent />
          <DropdownItem label="Username" leftIcon="user-circle" disabled />
        </Dropdown>
      </div>
    );
  },
};
