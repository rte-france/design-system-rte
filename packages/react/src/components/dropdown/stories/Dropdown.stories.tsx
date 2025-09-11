import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Dropdown } from "../Dropdown";
import { DropdownItem } from "../dropdownItem/DropdownItem";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown (développement en cours)",
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
      <>
        <div>
          <span
            style={{
              fontFamily: "sans-serif",
              marginBottom: 16,
              border: "1px solid #F4922B",
              padding: 8,
              borderRadius: 5,
              backgroundColor: "#FAFFC1",
              margin: 0,
            }}
          >
            Ce composant est en cours de développement et n'est pas encore disponible
          </span>
        </div>
        <br />

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
      </>
    );
  },
};
