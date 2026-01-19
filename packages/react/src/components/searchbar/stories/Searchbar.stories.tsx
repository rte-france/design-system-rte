import { DROPDOWN_OFFSET } from "@design-system-rte/core/components/searchbar/searchbar.constants";
import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useEffect, useMemo, useRef, useState } from "react";

import { Dropdown } from "../../dropdown/Dropdown";
import { DropdownItem } from "../../dropdown/dropdownItem/DropdownItem";
import Searchbar from "../Searchbar";

const meta = {
  title: "Composants/Searchbar/Searchbar",
  component: Searchbar,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    compactSpacing: { control: "boolean" },
    showResetButton: { control: "boolean", defaultValue: true },
    assistiveText: { control: "text", defaultValue: "" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    label: { control: "text", defaultValue: "Rechercher" },
    autoComplete: { control: "text" },
  },
  args: {
    autoComplete: "off",
  },
} satisfies Meta<typeof Searchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Texte assistif",
    label: "Rechercher",
    value: "",
    disabled: false,
    autoComplete: "off",
  },
};

export const WithDropdown: Story = {
  render: (args) => {
    const options = ["option1", "option2", "option3"];
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);

    useEffect(() => {
      function handleFocus() {
        if (options.length > 0 && !isOpen) {
          setIsOpen(true);
        }
      }

      const input = wrapperRef.current?.querySelector("input");
      input?.addEventListener("focus", handleFocus);
      return () => {
        input?.removeEventListener("focus", handleFocus);
      };
    }, [options.length, isOpen]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
      if (options.length > 0) {
        setIsOpen(true);
      }
    }

    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsOpen(false);
    }

    function handleDropdownClose() {
      setIsOpen(false);
    }

    return (
      <div ref={wrapperRef} style={{ width: "fit-content" }}>
        <Dropdown
          dropdownId={`${args.id ?? "searchbar"}-dropdown`}
          trigger={
            <Searchbar {...args} value={searchValue} onChange={handleChange} assistiveText={args.assistiveText} />
          }
          isOpen={isOpen}
          onClose={handleDropdownClose}
          position="bottom"
          alignment="start"
          offset={DROPDOWN_OFFSET}
          autofocus={false}
          style={dropdownWidth ? { width: dropdownWidth } : undefined}
        >
          {options.map((option) => (
            <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />
          ))}
        </Dropdown>
      </div>
    );
  },
  args: {
    id: "searchbar-with-dropdown",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Select a filter option before typing",
    value: "",
    disabled: false,
    autoComplete: "off",
  },
};

export const WithFilteredOptions: Story = {
  render: (args) => {
    const allOptions = [
      "Apple",
      "Apple2",
      "Banana",
      "Banana2",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
      "Honeydew",
      "Kiwi",
      "Lemon",
    ];

    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);

    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);

    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }

    function handleDropdownClose() {
      setIsOpen(false);
    }

    return (
      <div ref={wrapperRef} style={{ width: "fit-content" }}>
        <Dropdown
          dropdownId={`${args.id ?? "searchbar"}-dropdown`}
          trigger={
            <Searchbar
              id="searchbar-filtered"
              appearance={args.appearance}
              value={searchValue}
              compactSpacing={args.compactSpacing}
              onChange={handleChange}
              assistiveText={args.assistiveText}
              autoComplete={args.autoComplete}
            />
          }
          isOpen={isOpen}
          onClose={handleDropdownClose}
          position="bottom"
          alignment="start"
          offset={DROPDOWN_OFFSET}
          autofocus={false}
          style={dropdownWidth ? { width: dropdownWidth } : undefined}
        >
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option}
              label={option}
              onClick={() => {
                setSearchValue(option);
                setIsOpen(false);
              }}
            />
          ))}
        </Dropdown>
      </div>
    );
  },
  args: {
    ...Default.args,
    compactSpacing: false,
    appearance: "primary",
  },
};

export const KeyboardNavigationWithFilteredOptions: Story = {
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);

    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);

    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);

    function handleChange(value: string | undefined) {
      console.log(value);
      setSearchValue(value ?? "");
    }

    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsOpen(false);
    }

    function handleDropdownClose() {
      setIsOpen(false);
    }

    return (
      <div ref={wrapperRef} style={{ width: "fit-content" }}>
        <Dropdown
          dropdownId={`${args.id ?? "searchbar"}-dropdown`}
          trigger={
            <Searchbar
              id="searchbar-keyboard-navigation"
              appearance={args.appearance}
              value={searchValue}
              compactSpacing={args.compactSpacing}
              onChange={handleChange}
              assistiveText="Type at least 3 characters to filter options"
              showResetButton={true}
              autoComplete={args.autoComplete}
            />
          }
          isOpen={isOpen}
          onClose={handleDropdownClose}
          position="bottom"
          alignment="start"
          offset={DROPDOWN_OFFSET}
          autofocus={false}
          style={dropdownWidth ? { width: dropdownWidth } : undefined}
        >
          {filteredOptions.map((option) => (
            <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />
          ))}
        </Dropdown>
      </div>
    );
  },
  args: {
    compactSpacing: false,
    appearance: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox") as HTMLInputElement;

    await userEvent.click(input);
    expect(input).toHaveFocus();

    await userEvent.type(input, "app");

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const dropdown = overlay?.querySelector("[data-dropdown-id]");
      expect(dropdown).toBeInTheDocument();
    });

    await userEvent.tab();

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(menuItems?.[0]).toHaveFocus();
    });

    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();

    await userEvent.keyboard(TESTING_ENTER_KEY);

    await waitFor(() => {
      expect(input.value).toBe("Apple2");
    });
  },
};

export const KeyboardNavigationAndSearch: Story = {
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);

    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);

    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }

    function handleOptionSelect(option: string) {
      setSearchValue(option);
      setIsOpen(false);
    }

    function handleSearch(value: string | undefined) {
      console.log("Searched content:", value);
    }

    function handleDropdownClose() {
      setIsOpen(false);
    }

    return (
      <div ref={wrapperRef} style={{ width: "fit-content" }}>
        <Dropdown
          dropdownId={`${args.id ?? "searchbar"}-dropdown`}
          trigger={
            <Searchbar
              id="searchbar-keyboard-search"
              appearance={args.appearance}
              value={searchValue}
              compactSpacing={args.compactSpacing}
              onChange={handleChange}
              onSearch={handleSearch}
              assistiveText="Type at least 3 characters to filter options"
              showResetButton={true}
              autoComplete={args.autoComplete}
            />
          }
          isOpen={isOpen}
          onClose={handleDropdownClose}
          position="bottom"
          alignment="start"
          offset={DROPDOWN_OFFSET}
          autofocus={false}
          style={dropdownWidth ? { width: dropdownWidth } : undefined}
        >
          {filteredOptions.map((option) => (
            <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />
          ))}
        </Dropdown>
      </div>
    );
  },
  args: {
    ...Default.args,
    compactSpacing: false,
    appearance: "primary",
    autoComplete: "off",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox") as HTMLInputElement;

    await userEvent.click(input);
    expect(input).toHaveFocus();

    await userEvent.type(input, "app");

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const dropdown = overlay?.querySelector("[data-dropdown-id]");
      expect(dropdown).toBeInTheDocument();
    });

    await userEvent.tab();

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(menuItems?.[0]).toHaveFocus();
    });

    await userEvent.keyboard(TESTING_ENTER_KEY);

    await waitFor(() => {
      expect(input.value).toBe("Apple");
    });

    const searchButton = canvas.getByRole("button", { name: args.label });
    await userEvent.click(searchButton);
  },
};
