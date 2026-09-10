import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";

import { DividerComponent } from "../divider.component";

const meta: Meta<DividerComponent> = {
  title: "Composants/Divider/Divider",
  component: DividerComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
      options: ["neutral", "inverse", "brand"],
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
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 100px; width: 500px;">
        <rte-divider
          [orientation]="orientation"
          [thickness]="thickness"
          [appearance]="appearance"
          [endPoint]="endPoint">
        </rte-divider>
      </div>
    `,
  }),
};

export const Brand: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
    endPoint: "round",
    appearance: "brand",
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 100px; width: 500px;">
        <rte-divider
          [orientation]="orientation"
          [thickness]="thickness"
          [appearance]="appearance"
          [endPoint]="endPoint">
        </rte-divider>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    thickness: "light",
    endPoint: "round",
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; flex-direction: column; gap: 20px; justify-content: space-between; width: 250px;">
            <rte-divider orientation="horizontal"></rte-divider>
            <div style="height: 100px; margin: 0 auto;">
                <rte-divider
                    [orientation]="orientation"
                    [thickness]="thickness"
                    [appearance]="appearance"
                    [endPoint]="endPoint">
                </rte-divider>
            </div>
        </div>
        `,
  }),
};

export const Sizes: Story = {
  args: {
    orientation: "horizontal",
    thickness: "light",
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; flex-direction: column; gap: 20px; height: 100px; width: 500px;">
            <rte-divider [orientation]="orientation" [appearance]="appearance" thickness="light"></rte-divider>
            <rte-divider [orientation]="orientation" [appearance]="appearance" thickness="medium"></rte-divider>
            <rte-divider [orientation]="orientation" [appearance]="appearance" thickness="bold"></rte-divider>
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
            <rte-divider [orientation]="orientation" [appearance]="appearance" endPoint="square" thickness="bold"></rte-divider>
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
      (story) =>
        `<div style="background-color: var(--background-brand-pressed); width: 500px; padding: 20px;">${story}</div>`,
    ),
  ],
  render: (args) => ({
    props: args,
    template: `
                <div style="display: flex; flex-direction: column; gap: 20px; justify-content: space-between; width: 100%;">
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
