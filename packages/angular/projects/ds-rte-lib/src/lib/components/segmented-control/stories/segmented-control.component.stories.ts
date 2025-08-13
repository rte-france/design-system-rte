import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { SegmentedControlComponent } from "../segmented-control.component";

const meta: Meta<SegmentedControlComponent> = {
  title: "Segmented Control",
  component: SegmentedControlComponent,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "Array of segment options",
      table: {
        type: { summary: "SegmentProps[]" },
        defaultValue: { summary: "[]" },
      },
    },
  },
};
export default meta;
type Story = StoryObj<SegmentedControlComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
      { label: "Option 3", id: "option3" },
    ],
    selectedSegment: "option1",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        (change)="change($event)"
        />
    </div>
    `,
  }),

  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");

    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");

    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  },
};

export const TwoOptions: Story = {
  args: {
    options: [
      { label: "Option 1", id: "option1" },
      { label: "Option 2", id: "option2" },
    ],
    selectedSegment: "option1",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const Icons: Story = {
  args: {
    options: [
      { id: "agenda", icon: "view-agenda", label: "Vue agenda" },
      { id: "column", icon: "view-column", label: "Vue colonne" },
      { id: "grid", icon: "view-grid", label: "Vue grille" },
    ],
    selectedSegment: "agenda",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};
