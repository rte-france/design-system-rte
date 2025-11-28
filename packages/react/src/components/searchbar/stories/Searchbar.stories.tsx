import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, waitFor } from "@storybook/test";
import { useState, useMemo, useEffect } from "react";

import Searchbar from "../Searchbar";

const meta = {
  title: "Searchbar",
  component: Searchbar,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    compactSpacing: { control: "boolean" },
    label: { control: "text" },
    showResetButton: { control: "boolean", defaultValue: true },
    assistiveText: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    name: { control: "text" },
  },
} satisfies Meta<typeof Searchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "searchbar-default",
    appearance: "primary",
    label: "",
    showResetButton: true,
    assistiveText: "",
    value: "",
    disabled: false,
    name: "",
  },
};

export const WithDropdown: Story = {
  args: {
    id: "searchbar-with-dropdown",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Select a filter option before typing",
    value: "",
    disabled: false,
    name: "search-dropdown",
    placeholder: "Search anything",
    options: ["option1", "option2", "option3"],
    onOptionSelect: (option: string) => {
      console.log("Selected option:", option);
    },
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);

    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }

    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsDropdownOpen(false);
    }

    return (
      <Searchbar
        id="searchbar-filtered"
        appearance={args.appearance}
        value={searchValue}
        compactSpacing={args.compactSpacing}
        onChange={handleChange}
        options={filteredOptions}
        isOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
        onOptionSelect={handleOptionSelect}
        assistiveText="Type at least 3 characters to filter options"
      />
    );
  },
  args: {
    compactSpacing: false,
    appearance: "primary",
  },
};

export const KeyboardNavigationWithFilteredOptions: Story = {
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);

    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }

    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsDropdownOpen(false);
    }

    return (
      <Searchbar
        id="searchbar-keyboard-navigation"
        appearance={args.appearance}
        value={searchValue}
        compactSpacing={args.compactSpacing}
        onChange={handleChange}
        options={filteredOptions}
        isOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
        onOptionSelect={handleOptionSelect}
        assistiveText="Type at least 3 characters to filter options"
        showResetButton={true}
      />
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);

    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);

    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }

    function handleOptionSelect(option: string) {
      setSearchValue(option);
      setIsDropdownOpen(false);
    }

    function handleSearch(value: string | undefined) {
      console.log("Searched content:", value);
    }

    return (
      <Searchbar
        id="searchbar-keyboard-search"
        appearance={args.appearance}
        value={searchValue}
        compactSpacing={args.compactSpacing}
        onChange={handleChange}
        options={filteredOptions}
        isOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
        onOptionSelect={handleOptionSelect}
        onSearch={handleSearch}
        assistiveText="Type at least 3 characters to filter options"
        showResetButton={true}
      />
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

    await userEvent.keyboard(TESTING_ENTER_KEY);

    await waitFor(() => {
      expect(input.value).toBe("Apple");
    });

    const searchButton = canvas.getByRole("button", { name: "Search" });
    await userEvent.click(searchButton);
  },
};
