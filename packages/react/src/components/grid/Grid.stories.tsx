import { Meta, StoryObj } from '@storybook/react';
import { GridProps } from '@design-system-rte/core/components/grid/grid.interface';
import Grid from './Grid';

type GridStoriesArgs = GridProps;

const COLUMN_NUMBER = 12;

const meta: Meta<GridStoriesArgs> = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    gridType: {
      control: 'select',
      options: ['fluid', 'fixed-narrow', 'fixed-wide'],
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
    gridType: 'fluid',
  },
  render: (args) => defaultRender(args),
};

export const FixedWide: Story = {
  args: {
    gridType: 'fixed-wide',
  },
  render: (args) => defaultRender(args),
};

export const FixedNarrow: Story = {
  args: {
    gridType: 'fixed-narrow',
  },
  render: (args) => defaultRender(args),
};
