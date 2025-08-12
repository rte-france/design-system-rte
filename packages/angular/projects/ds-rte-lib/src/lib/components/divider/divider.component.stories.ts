import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";

import { DividerComponent } from "./divider.component";

const meta: Meta<DividerComponent> = {
  title: "Divider",
  component: DividerComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [componentWrapperDecorator((story) => `<div style="height: 100px; width: 500px;">${story}</div>`)],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the divider",
    },
    thickness: {
      control: "select",
      options: ["light", "medium", "bold"],
      description: "Thickness of the divider",
    },
    appearance: {
      control: "select",
      options: ["default", "inverse"],
      description: "Color of the divider",
    },
    endPoint: {
      control: "select",
      options: ["round", "square"],
      description: "End point style of the divider",
    },
    isHorizontal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    endPoint: "round",
  },
};

export const VerticalSizes: Story = {
  args: {
    orientation: "vertical",
    thickness: "light",
    endPoint: "round",
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; justify-content: space-between; gap: 20px; height: 100px; width: 500px;">
            <rte-divider
                orientation="vertical"
                thickness="light"
                data-testid="vertical-light-divider">
            </rte-divider>
            <rte-divider
                orientation="vertical"
                thickness="medium"
                data-testid="vertical-medium-divider">
            </rte-divider>
            <rte-divider
                orientation="vertical"
                thickness="bold"
                data-testid="vertical-bold-divider">
            </rte-divider>
        </div>
        `,
  }),
};

export const HorizontalSizes: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; flex-direction: column; gap: 20px; height: 100px; width: 500px;">
            <rte-divider
                orientation="horizontal"
                thickness="light"
                data-testid="horizontal-light-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="medium"
                data-testid="horizontal-medium-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="bold"
                data-testid="horizontal-bold-divider">
            </rte-divider>
        </div>
        `,
  }),
};

export const SquaredEnd: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    endPoint: "square",
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; flex-direction: column; gap: 20px; height: 100px; width: 500px;">
            <rte-divider
                orientation="horizontal"
                thickness="light"
                endPoint="square"
                data-testid="horizontal-light-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="medium"
                endPoint="square"
                data-testid="horizontal-medium-divider">
            </rte-divider>
            <rte-divider
                orientation="horizontal"
                thickness="bold"
                endPoint="square"
                data-testid="horizontal-bold-divider">
            </rte-divider>
        </div>
        `,
  }),
};

export const InverseColor: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "inverse",
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="background-color: #214770; width: 100%; padding: 20px;">${story}</div>`,
    ),
  ],
  render: (args) => ({
    props: args,
    template: `
                <div style="display: flex; flex-direction: column; gap: 20px; justify-content: space-between; width: 500px;">
                        <rte-divider
                                orientation="horizontal"
                                thickness="light"
                                appearance="inverse"
                                data-testid="inverse-light-divider">
                        </rte-divider>
                        <rte-divider
                                orientation="horizontal"
                                thickness="medium"
                                appearance="inverse"
                                data-testid="inverse-medium-divider">
                        </rte-divider>
                        <rte-divider
                                orientation="horizontal"
                                thickness="bold"
                                appearance="inverse"
                                data-testid="inverse-bold-divider">
                        </rte-divider>
                </div>
                `,
  }),
};
