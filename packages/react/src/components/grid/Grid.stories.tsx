import { GridProps } from "@design-system-rte/core/components/grid/grid.interface";
import { Meta, StoryObj } from "@storybook/react";

import Grid from "./Grid";

type GridStoriesArgs = GridProps;

const COLUMN_NUMBER = 12;

const meta: Meta<GridStoriesArgs> = {
  title: "Composants/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gridType: {
      control: "select",
      options: ["fluid", "fixed-narrow", "fixed-wide"],
    },
  },

  decorators: [
    (Story) => {
      return (
        <div className="sb-css-grid-container">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<GridStoriesArgs>;

const defaultRender = (args: GridStoriesArgs) => {
  return (
    <Grid gridType={args.gridType} data-testid="grid">
      {Array.from(Array(COLUMN_NUMBER)).map((_, i) => (
        <Grid.Col key={`col${i}`} data-testid={`col${i}`} />
      ))}
    </Grid>
  );
};

export const Fluid: Story = {
  args: {
    gridType: "fluid",
  },
  render: (args) => defaultRender(args),
};

export const FixedWide: Story = {
  args: {
    gridType: "fixed-wide",
  },
  render: (args) => defaultRender(args),
};

export const FixedNarrow: Story = {
  args: {
    gridType: "fixed-narrow",
  },
  render: (args) => defaultRender(args),
};

export const ResponsiveColumns: Story = {
  args: {
    gridType: "fluid",
  },
  render: (args) => {
    return (
      <Grid gridType={args.gridType} data-testid="grid">
        <Grid.Col xxs={1} xs={1} s={3} m={4} l={4} xl={12} data-testid="col0">
          <div>
            <p>xxs : Span 1 de 2</p>
            <p>xs : Span 1 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 4 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={1} xs={3} s={3} m={4} l={8} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 1 de 2</p>
            <p>xs : Span 3 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 8 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={2} xs={2} s={3} m={4} l={10} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 2 de 2</p>
            <p>xs : Span 2 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 10 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={2} xs={6} s={6} m={4} l={12} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 2 de 2</p>
            <p>xs : Span 6 de 6</p>
            <p>s : Span 6 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 12 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
      </Grid>
    );
  },
};
