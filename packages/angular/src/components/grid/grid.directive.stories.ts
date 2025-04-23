import { CommonModule } from '@angular/common';
import { GridType } from '@design-system-rte/core/components/grid/grid.interface';
import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridDirective } from './grid.directive';
import { ColDirective } from '../col/col.directive';

type GridStoriesArgs = GridDirective;

const COLUMN_NUMBER = 12;

const meta: Meta<GridStoriesArgs>= {
  title: 'Grid/GridDirective',
  component: GridDirective,
  tags: ['autodocs'],
  argTypes: {
    gridType: {
      control: 'select',
      defaultValue: (args: GridStoriesArgs) => args.gridType,
      options: ['fluid', 'fixed-narrow', 'fixed-wide'],
      description: 'The type of grid to use',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ColDirective],
    }),
    componentWrapperDecorator((story) => `<div class="sb-css-grid-container">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<GridStoriesArgs>;

const defaultTemplate = (gridType: GridType) => {
  return `
        <div dsGrid 
          [gridType]="'${gridType}'"
          data-testid="grid"
          >
            <ng-container *ngFor="let item of items">
              <div
                dsCol
                ></div>
            </ng-container>
          </div>
    `;
};

export const Fluid: Story = {
  args: {
    gridType: 'fluid',
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_,i)=>i+1)
    },
    template: defaultTemplate(args.gridType),
  }),
};

export const FixedWide: Story = {
  args: {
    gridType: 'fixed-wide',
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_,i)=>i+1)
    },
    template: defaultTemplate(args.gridType),
  }),
};

export const FixedNarrow: Story = {
  args: {
      gridType: 'fixed-narrow',
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_,i)=>i+1)
    },
    template: defaultTemplate(args.gridType),
  }),
};