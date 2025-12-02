import { signal, computed } from "@angular/core";
import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { SearchbarComponent } from "../searchbar.component";

const meta: Meta<SearchbarComponent> = {
  title: "Searchbar",
  component: SearchbarComponent,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    appearance: {
      control: "select",
      options: ["primary", "secondary"],
    },
    compactSpacing: { control: "boolean" },
    showResetButton: { control: "boolean", defaultValue: true },
    assistiveText: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<SearchbarComponent>;

export const Default: Story = {
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "",
    value: "",
    disabled: false,
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
    options: ["option1", "option2", "option3"],
  },
  render: (args) => ({
    props: {
      ...args,
      onOptionSelect: (option: string) => {
        console.log("Selected option:", option);
      },
    },
    template: `
      <rte-searchbar
        [id]="id"
        [appearance]="appearance"
        [showResetButton]="showResetButton"
        [assistiveText]="assistiveText"
        [value]="value"
        [disabled]="disabled"
        [name]="name"
        [options]="options"
        (optionSelect)="onOptionSelect($event)"
      />
    `,
  }),
};

export const WithFilteredOptions: Story = {
  args: {
    compactSpacing: false,
    appearance: "primary",
  },
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

    const searchValue = signal("");
    const isDropdownOpen = signal(false);

    const filteredOptions = computed(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    });

    return {
      props: {
        ...args,
        searchValue,
        filteredOptions,
        isDropdownOpen,
        handleChange: (value: string) => {
          searchValue.set(value);
          isDropdownOpen.set(filteredOptions().length > 0);
        },
        handleOptionSelect: (option: string) => {
          console.log("Selected option:", option);
          searchValue.set(option);
          isDropdownOpen.set(false);
        },
        handleOpenChange: (isOpen: boolean) => {
          isDropdownOpen.set(isOpen);
        },
      },
      template: `
        <rte-searchbar
          id="searchbar-filtered"
          [appearance]="appearance"
          [value]="searchValue()"
          [compactSpacing]="compactSpacing"
          [options]="filteredOptions()"
          [isOpen]="isDropdownOpen()"
          [assistiveText]="'Type at least 3 characters to filter options'"
          (valueChange)="handleChange($event)"
          (openChange)="handleOpenChange($event)"
          (optionSelect)="handleOptionSelect($event)"
        />
      `,
    };
  },
};

export const KeyboardNavigationWithFilteredOptions: Story = {
  args: {
    compactSpacing: false,
    appearance: "primary",
  },
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const searchValue = signal("");
    const isDropdownOpen = signal(false);

    const filteredOptions = computed(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    });

    return {
      props: {
        ...args,
        searchValue,
        filteredOptions,
        isDropdownOpen,
        handleChange: (value: string) => {
          searchValue.set(value);
          isDropdownOpen.set(filteredOptions().length > 0);
        },
        handleOptionSelect: (option: string) => {
          console.log("Selected option:", option);
          searchValue.set(option);
          isDropdownOpen.set(false);
        },
        handleOpenChange: (isOpen: boolean) => {
          isDropdownOpen.set(filteredOptions().length >= 3 && isOpen);
        },
      },
      template: `
        filteredOptions: {{filteredOptions()}}
        <rte-searchbar
          id="searchbar-keyboard-navigation"
          [appearance]="appearance"
          [value]="searchValue()"
          [compactSpacing]="compactSpacing"
          [options]="filteredOptions()"
          [isOpen]="isDropdownOpen()"
          [assistiveText]="'Type at least 3 characters to filter options'"
          [showResetButton]="true"
          (valueChange)="handleChange($event)"
          (openChange)="handleOpenChange($event)"
          (optionSelect)="handleOptionSelect($event)"
        />
      `,
    };
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
  args: {
    compactSpacing: false,
    appearance: "primary",
  },
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const searchValue = signal("");
    const isDropdownOpen = signal(false);

    const filteredOptions = computed(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    });

    return {
      props: {
        ...args,
        searchValue,
        filteredOptions,
        isDropdownOpen,
        handleChange: (value: string) => {
          searchValue.set(value);
          isDropdownOpen.set(filteredOptions().length > 0);
        },
        handleOptionSelect: (option: string) => {
          searchValue.set(option);
          isDropdownOpen.set(false);
        },
        handleOpenChange: (isOpen: boolean) => {
          isDropdownOpen.set(isOpen);
        },
        handleSearch: (value: string | undefined) => {
          console.log("Searched content:", value);
        },
      },
      template: `
        <rte-searchbar
          id="searchbar-keyboard-search"
          [appearance]="appearance"
          [value]="searchValue()"
          [compactSpacing]="compactSpacing"
          [options]="filteredOptions()"
          [isOpen]="isDropdownOpen()"
          [assistiveText]="'Type at least 3 characters to filter options'"
          [showResetButton]="true"
          (valueChange)="handleChange($event)"
          (openChange)="handleOpenChange($event)"
          (optionSelect)="handleOptionSelect($event)"
          (search)="handleSearch($event)"
        />
      `,
    };
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
