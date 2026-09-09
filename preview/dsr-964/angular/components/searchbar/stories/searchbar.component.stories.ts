import { Component, ElementRef, signal, viewChild, effect, computed } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DROPDOWN_OFFSET } from "@design-system-rte/core/components/searchbar/searchbar.constants";
import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { DropdownModule } from "../../dropdown/dropdown.module";
import { DropdownItemConfig } from "../../dropdown/dropdown.types";
import { SearchbarComponent } from "../searchbar.component";

@Component({
  selector: "story-dropdown-wrapper",
  template: `
    <div #wrapperRef style="width: fit-content">
      <ng-content></ng-content>
    </div>
  `,
})
class DropdownWrapperComponent {
  readonly wrapperRef = viewChild<ElementRef<HTMLDivElement>>("wrapperRef");
  readonly width = signal<number | undefined>(undefined);

  constructor() {
    effect(() => {
      const element = this.wrapperRef()?.nativeElement;
      if (element) {
        this.width.set(element.offsetWidth);
      }
    });
  }
}

const meta: Meta<SearchbarComponent> = {
  title: "Composants/Searchbar/Searchbar",
  component: SearchbarComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [SearchbarComponent, DropdownModule, DropdownWrapperComponent],
    }),
  ],
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
  },
};
export default meta;
type Story = StoryObj<SearchbarComponent>;

export const Default: Story = {
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Texte assistif",
    label: "Rechercher",
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
  },
  render: (args) => {
    const options = ["option1", "option2", "option3"];
    const isOpenState = signal(false);
    const searchValue = signal("");

    const dropdownItems = computed<DropdownItemConfig[]>(() => {
      return options.map((option) => ({
        label: option,
      }));
    });

    const isOpen = computed(() => {
      return isOpenState() && dropdownItems().length > 0;
    });

    function handleChange(value: string): void {
      searchValue.set(value);
      if (dropdownItems().length > 0) {
        isOpenState.set(true);
      } else {
        isOpenState.set(false);
      }
    }

    function handleOptionSelect(event: { event: Event; id: string }): void {
      console.log("Selected option:", event.id);
      searchValue.set(event.id);
      isOpenState.set(false);
    }

    function handleDropdownClose(): void {
      isOpenState.set(false);
    }

    return {
      props: {
        ...args,
        searchValue,
        isOpen,
        dropdownItems,
        handleChange,
        handleOptionSelect,
        handleDropdownClose,
        DROPDOWN_OFFSET,
      },
      template: `
        <story-dropdown-wrapper #wrapper>
          <div
            rteDropdown
            rteDropdownPosition="bottom"
            [rteDropdownIsOpen]="isOpen()"
            [rteDropdownOffset]="DROPDOWN_OFFSET"
            [rteDropdownWidth]="wrapper.width()"
            [rteDropdownAutofocus]="false"
            (menuEvent)="handleOptionSelect($event)"
          >
            <div rteDropdownTrigger style="width: fit-content">
              <rte-searchbar
                [id]="id"
                [appearance]="appearance"
                [value]="searchValue()"
                [showResetButton]="showResetButton"
                [assistiveText]="assistiveText"
                (valueChange)="handleChange($event)"
              />
            </div>
            <rte-dropdown-menu [items]="dropdownItems()" />
          </div>
        </story-dropdown-wrapper>
      `,
    };
  },
};

export const WithFilteredOptions: Story = {
  args: {
    ...Default.args,
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

    const filteredOptions = computed<DropdownItemConfig[]>(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions
        .filter((option) => option.toLowerCase().includes(value.toLowerCase()))
        .map((option) => ({
          label: option,
        }));
    });

    const isOpen = computed(() => {
      return !!filteredOptions().length;
    });

    function handleChange(value: string): void {
      searchValue.set(value);
    }

    function handleDropdownClose(): void {
      searchValue.set("");
    }

    function handleOptionSelect(event: { event: Event; id: string }): void {
      searchValue.set(event.id);
    }

    return {
      props: {
        ...args,
        searchValue,
        isOpen,
        filteredOptions,
        handleChange,
        handleDropdownClose,
        handleOptionSelect,
        DROPDOWN_OFFSET,
      },
      template: `
        <story-dropdown-wrapper #wrapper>
          <div
            rteDropdown
            rteDropdownPosition="bottom"
            [rteDropdownIsOpen]="isOpen()"
            [rteDropdownOffset]="DROPDOWN_OFFSET"
            [rteDropdownWidth]="wrapper.width()"
            [rteDropdownAutofocus]="false"
            [rteDropdownAutoOpen]="false"
            (menuEvent)="handleOptionSelect($event)"
          >
            <div rteDropdownTrigger style="width: fit-content">
              <rte-searchbar
                id="searchbar-filtered"
                [appearance]="appearance"
                [value]="searchValue()"
                [compactSpacing]="compactSpacing"
                [assistiveText]="assistiveText"
                (valueChange)="handleChange($event)"
              />
            </div>
            <rte-dropdown-menu [items]="filteredOptions()" />
          </div>
        </story-dropdown-wrapper>
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

    const filteredOptions = computed<DropdownItemConfig[]>(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions
        .filter((option) => option.toLowerCase().includes(value.toLowerCase()))
        .map((option) => ({
          label: option,
        }));
    });

    const isOpen = computed(() => {
      return filteredOptions().length > 0;
    });

    function handleChange(value: string): void {
      console.log(value);
      searchValue.set(value);
    }

    function handleOptionSelect(event: { event: Event; id: string }): void {
      console.log("Selected option:", event.id);
      searchValue.set(event.id);
    }

    function handleDropdownClose(): void {
      searchValue.set("");
    }

    return {
      props: {
        ...args,
        searchValue,
        isOpen,
        filteredOptions,
        handleChange,
        handleOptionSelect,
        handleDropdownClose,
        DROPDOWN_OFFSET,
      },
      template: `
        <story-dropdown-wrapper #wrapper>
          <div
            rteDropdown
            rteDropdownPosition="bottom"
            [rteDropdownIsOpen]="isOpen()"
            [rteDropdownOffset]="DROPDOWN_OFFSET"
            [rteDropdownWidth]="wrapper.width()"
            [rteDropdownAutofocus]="false"
            [rteDropdownAutoOpen]="false"
            (menuEvent)="handleOptionSelect($event)"
          >
            <div rteDropdownTrigger style="width: fit-content">
              <rte-searchbar
                id="searchbar-keyboard-navigation"
                [appearance]="appearance"
                [value]="searchValue()"
                [compactSpacing]="compactSpacing"
                [assistiveText]="'Type at least 3 characters to filter options'"
                [showResetButton]="true"
                (valueChange)="handleChange($event)"
              />
            </div>
            <rte-dropdown-menu [items]="filteredOptions()" />
          </div>
        </story-dropdown-wrapper>
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
      const dropdown = overlay?.querySelector("[data-menu-id]");
      expect(dropdown).toBeInTheDocument();
    });

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-menu-id]");
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
    ...Default.args,
    compactSpacing: false,
    appearance: "primary",
  },
  render: (args) => {
    const allOptions = ["Apple", "Apple2"];

    const searchValue = signal("");

    const filteredOptions = computed<DropdownItemConfig[]>(() => {
      const value = searchValue();
      if (!value || value.length < 3) {
        return [];
      }
      return allOptions
        .filter((option) => option.toLowerCase().includes(value.toLowerCase()))
        .map((option) => ({
          label: option,
        }));
    });

    const isOpen = computed(() => {
      return filteredOptions().length > 0;
    });

    function handleChange(value: string): void {
      searchValue.set(value);
    }

    function handleOptionSelect(event: { event: Event; id: string }): void {
      searchValue.set(event.id);
    }

    function handleSearch(value: string | undefined): void {
      console.log("Searched content:", value);
    }

    function handleDropdownClose(): void {
      searchValue.set("");
    }

    return {
      props: {
        ...args,
        searchValue,
        isOpen,
        filteredOptions,
        handleChange,
        handleOptionSelect,
        handleSearch,
        handleDropdownClose,
        DROPDOWN_OFFSET,
      },
      template: `
        <story-dropdown-wrapper #wrapper>
          <div
            rteDropdown
            rteDropdownPosition="bottom"
            [rteDropdownIsOpen]="isOpen()"
            [rteDropdownOffset]="DROPDOWN_OFFSET"
            [rteDropdownWidth]="wrapper.width()"
            [rteDropdownAutofocus]="false"
            [rteDropdownAutoOpen]="false"
            (menuEvent)="handleOptionSelect($event)"
          >
            <div rteDropdownTrigger style="width: fit-content">
              <rte-searchbar
                id="searchbar-keyboard-search"
                [appearance]="appearance"
                [value]="searchValue()"
                [compactSpacing]="compactSpacing"
                [assistiveText]="'Type at least 3 characters to filter options'"
                [showResetButton]="true"
                (valueChange)="handleChange($event)"
                (searchEvent)="handleSearch($event)"
              />
            </div>
            <rte-dropdown-menu [items]="filteredOptions()" />
          </div>
        </story-dropdown-wrapper>
      `,
    };
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox") as HTMLInputElement;

    await userEvent.click(input);
    expect(input).toHaveFocus();

    await userEvent.type(input, "app");

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const dropdown = overlay?.querySelector("[data-menu-id]");
      expect(dropdown).toBeInTheDocument();
    });

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-menu-id]");
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

@Component({
  selector: "searchbar-reactive-form-host",
  imports: [ReactiveFormsModule, SearchbarComponent],
  standalone: true,
  template: `
    <rte-searchbar id="searchbar-reactive-form" [showResetButton]="true" [formControl]="control" />
    <button type="button" data-testid="blur-away">Blur away</button>
    <button type="button" data-testid="set-from-model" (click)="control.setValue('from model')">Set from model</button>
    <button type="button" data-testid="toggle-disabled" (click)="toggleDisabled()">Toggle disabled</button>
    <span data-testid="model-value">{{ control.value }}</span>
    <span data-testid="model-touched">{{ control.touched }}</span>
    <span data-testid="model-status">{{ control.status }}</span>
  `,
})
class SearchbarReactiveFormHostComponent {
  readonly control = new FormControl("");

  toggleDisabled(): void {
    if (this.control.disabled) {
      this.control.enable();
    } else {
      this.control.disable();
    }
  }
}

export const ReactiveForm: Story = {
  render: () => ({
    moduleMetadata: { imports: [SearchbarReactiveFormHostComponent] },
    template: `<searchbar-reactive-form-host />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;
    const modelValue = canvas.getByTestId("model-value");
    const modelTouched = canvas.getByTestId("model-touched");
    const modelStatus = canvas.getByTestId("model-status");

    await userEvent.type(input, "abc");
    await waitFor(() => expect(modelValue).toHaveTextContent("abc"));

    expect(modelTouched).toHaveTextContent("false");
    await userEvent.click(canvas.getByTestId("blur-away"));
    await waitFor(() => expect(modelTouched).toHaveTextContent("true"));

    const clearButton = canvas.getByTestId("right-icon").querySelector("button");
    await userEvent.click(clearButton!);
    await waitFor(() => expect(input).toHaveValue(""));

    await userEvent.click(canvas.getByTestId("set-from-model"));
    await waitFor(() => expect(input).toHaveValue("from model"));

    await userEvent.click(canvas.getByTestId("toggle-disabled"));
    await waitFor(() => expect(modelStatus).toHaveTextContent("DISABLED"));
    expect(input).toBeDisabled();
  },
};
