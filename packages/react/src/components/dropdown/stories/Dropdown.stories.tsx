import { BadgeContent, BadgeSize, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import { DropdownProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";
import { TESTING_DOWN_KEY, TESTING_UP_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import { Dropdown } from "../Dropdown";
import { DropdownItem } from "../dropdownItem/DropdownItem";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

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
  args: { dropdownId: "storybook-dropdown" },
  render: (args) => {
    return (
      <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>
    );
  },
};

export const WithBadge: StoryObj<{
  badgeContent?: BadgeContent;
  badgeType?: BadgeType;
  badgeIcon: string;
  showBadge: boolean;
  badgeCount: number;
  badgeSize?: BadgeSize;
}> = {
  args: {
    badgeContent: "number",
    badgeType: "indicator",
    badgeIcon: "settings",
    showBadge: true,
    badgeCount: 5,
  },
  argTypes: {
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
            dropdownId="storybook-dropdown-with-badge"
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
              badgeCount={args.badgeCount}
              badgeContent={args.badgeContent}
              badgeType={args.badgeType}
              showBadge={args.showBadge}
              badgeIcon={args.badgeIcon}
              badgeSize={args.badgeSize}
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
    let menuItems: NodeListOf<Element> | undefined;

    await waitFor(
      () => {
        const found = overlay?.querySelector("[data-dropdown-id]");
        expect(found).toBeInTheDocument();
        if (!found) throw new Error("Dropdown not found");
        menuItems = found.querySelector("ul")?.querySelectorAll("li");
        expect(menuItems?.length).toBeGreaterThan(0);
        expect(menuItems?.[0]).toHaveFocus();
      },
      { timeout: 500 },
    );

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

const MOCKUP_ITEMS = [
  { label: "Messages", leftIcon: "mail", hasSeparator: true },
  { label: "Actions", leftIcon: "settings" },
  { label: "Help", leftIcon: "help" },
  { label: "More information", leftIcon: "info", hasSeparator: true },
  { label: "First option", hasIndent: true },
  { label: "Second option", hasIndent: true },
  { label: "Third option", hasSeparator: true, hasIndent: true },
  { label: "Username", leftIcon: "user-circle", disabled: true },
];

export const WithProjectedHeaderAndFooter: Story = {
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
                Menu with Header/Footer ⬇
              </button>
            }
            style={{ width: "250px" }}
            isOpen={isOpen}
            header={<div style={{ padding: "8px 16px", fontWeight: "bold" }}>Dropdown Header</div>}
            footer={<div style={{ padding: "8px 16px", fontWeight: "bold" }}>Dropdown Footer</div>}
          >
            {MOCKUP_ITEMS.map((item, index) => (
              <DropdownItem
                key={index}
                label={item.label}
                leftIcon={item.leftIcon}
                hasSeparator={item.hasSeparator}
                hasIndent={item.hasIndent}
                disabled={item.disabled}
                onClick={() => console.log("click")}
              />
            ))}
          </Dropdown>
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /menu with header\/footer/i });
    await userEvent.click(triggerButton);

    const overlay = document.getElementById("overlay-root");
    let dropdown!: Element;

    await waitFor(() => {
      const found = overlay?.querySelector("[data-dropdown-id]");
      expect(found).toBeInTheDocument();
      if (!found) {
        throw new Error("Dropdown not found");
      }
      dropdown = found;
      return found;
    });

    const headerSection = dropdown.querySelector(".rte-dropdown-menu-header");
    const footerSection = dropdown.querySelector(".rte-dropdown-menu-footer");

    expect(headerSection).toBeInTheDocument();
    expect(footerSection).toBeInTheDocument();

    const headerContent = headerSection?.textContent?.trim();
    const footerContent = footerSection?.textContent?.trim();

    expect(headerContent).toContain("Dropdown Header");
    expect(footerContent).toContain("Dropdown Footer");
  },
};

export const WithFilterableHeader: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>("");
    const allItems = [
      { label: "Messages", leftIcon: "mail", hasSeparator: true },
      { label: "Actions", leftIcon: "settings" },
      { label: "Help", leftIcon: "help" },
    ];
    const [filteredItems, setFilteredItems] = useState(allItems);

    function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
      const filter = event.target.value.toLowerCase();
      setFilterValue(event.target.value);
      if (!filter) {
        setFilteredItems(allItems);
      } else {
        setFilteredItems(allItems.filter((item) => item.label.toLowerCase().includes(filter)));
      }
    }

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
                Filterable Menu ⬇
              </button>
            }
            style={{ width: "250px" }}
            isOpen={isOpen}
            header={
              <div style={{ padding: "8px 16px" }}>
                <input
                  type="text"
                  placeholder="Filter items..."
                  value={filterValue}
                  onChange={handleFilterChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            }
          >
            {filteredItems.map((item, index) => (
              <DropdownItem
                key={index}
                label={item.label}
                leftIcon={item.leftIcon}
                hasSeparator={item.hasSeparator}
                onClick={() => console.log("click")}
              />
            ))}
          </Dropdown>
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", { name: /filterable menu/i });
    await userEvent.click(triggerButton);

    const overlay = document.getElementById("overlay-root");
    let dropdown!: Element;

    await waitFor(() => {
      const found = overlay?.querySelector("[data-dropdown-id]");
      expect(found).toBeInTheDocument();
      if (!found) {
        throw new Error("Dropdown not found");
      }
      dropdown = found;
      return found;
    });

    const headerSection = dropdown.querySelector(".rte-dropdown-menu-header");
    expect(headerSection).toBeInTheDocument();

    const filterInput = headerSection?.querySelector("input") as HTMLInputElement;
    expect(filterInput).toBeInTheDocument();

    await userEvent.type(filterInput, "Help");
    await waitFor(() => {
      const menuItems = dropdown.querySelector("ul")?.querySelectorAll("li");
      expect(menuItems?.length).toBe(1);
    });
  },
};
