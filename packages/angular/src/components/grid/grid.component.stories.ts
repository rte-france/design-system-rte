import { CommonModule } from '@angular/common';
import { GridType } from '@design-system-rte/core/components/grid/grid.interface';
import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridComponent } from './grid.component';
import { ColComponent } from '../col/col.component';

type GridStoriesArgs = GridComponent;

const COLUMN_NUMBER = 12;

const meta: Meta<GridStoriesArgs>= {
  title: 'Grid',
  component: GridComponent,
  subcomponents: {ColComponent},
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
      declarations: [ColComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator((story) => `<div class="sb-css-grid-container">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<GridStoriesArgs>;

const defaultTemplate = (gridType: GridType) => {
  return `
        <rte-grid
          gridType=${gridType}
          data-testid="grid"
          >
            <ng-container *ngFor="let item of items">
              <rte-col
                data-testid="col{{item}}"
                />
            </ng-container>
          </rte-grid>
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