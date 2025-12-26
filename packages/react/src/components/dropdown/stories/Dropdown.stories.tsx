import { DropdownProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { TESTING_DOWN_KEY, TESTING_UP_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import { Dropdown } from "../Dropdown";
import { DropdownItem } from "../dropdownItem/DropdownItem";

const meta: Meta<typeof Dropdown> = {
  title: "Composants/Dropdown (développement en cours)",
  id: "Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "bottom",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const WipWarning = () => {
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
    </>
  );
};

const DropdownTemplate = (args: DropdownProps) => {
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
};

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>
    );
  },
};

export const WithBadge: Story = {
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <WipWarning />
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
            <DropdownItem
              label="Messages"
              leftIcon="mail"
              badgeCount={5}
              badgeContent="number"
              badgeType="indicator"
              showBadge={true}
            />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>
    );
  },
};

export const KeyboardNavigation: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /click me!/i });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdown).toBeInTheDocument();
    expect(menuItems?.[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  },
};

export const KeyboardNavigationWithLink: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <WipWarning />
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
            <DropdownItem label="Messages" leftIcon="mail" link="/messages" onClick={() => console.log("click")} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /click me!/i });
    await userEvent.click(triggerButton);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  },
};
