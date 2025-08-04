import { Meta, StoryObj } from "@storybook/angular";

import { SegmentedControlComponent } from "../segmented-control.component";

const meta: Meta<SegmentedControlComponent> = {
  title: "Segmented Control",
  component: SegmentedControlComponent,
  tags: ["autodocs"],
  argTypes: {},
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
        console.log("Selected Segment:", id);
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 360px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};
