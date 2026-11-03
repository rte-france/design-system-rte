import { CommonModule } from "@angular/common";
import { GridType } from "@design-system-rte/core/components/grid/grid.interface";
import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";

import { ColDirective } from "./col/col.directive";
import { GridDirective } from "./grid.directive";

type GridStoriesArgs = GridDirective;

const COLUMN_NUMBER = 12;

const meta: Meta<GridStoriesArgs> = {
  title: "Composants/Grid",
  component: GridDirective,
  tags: ["autodocs"],
  argTypes: {
    gridType: {
      control: "select",
      defaultValue: (args: GridStoriesArgs) => args.gridType,
      options: ["fluid", "fixed-narrow", "fixed-wide"],
      description: "The type of grid to use",
    },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ColDirective],
    }),
    componentWrapperDecorator((story) => `<div class="sb-css-grid-container">${story}</div>`),
  ],
};

export default meta;
type Story = StoryObj<GridStoriesArgs>;

const defaultTemplate = (gridType: GridType) => {
  return `
        <div rteGrid 
          [gridType]="'${gridType}'"
          data-testid="grid"
          >
            <ng-container *ngFor="let item of items">
              <div
                rteCol
                ></div>
            </ng-container>
          </div>
    `;
};

export const Fluid: Story = {
  args: {
    gridType: "fluid",
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_, i) => i + 1),
    },
    template: defaultTemplate(args.gridType),
  }),
};

export const FixedWide: Story = {
  args: {
    gridType: "fixed-wide",
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_, i) => i + 1),
    },
    template: defaultTemplate(args.gridType),
  }),
};

export const FixedNarrow: Story = {
  args: {
    gridType: "fixed-narrow",
  },
  render: (args) => ({
    props: {
      ...args,
      items: Array.from(Array(COLUMN_NUMBER)).map((_, i) => i + 1),
    },
    template: defaultTemplate(args.gridType),
  }),
};

export const ResponsiveColumns: Story = {
  args: {
    gridType: "fluid",
  },
  render: (args) => ({
    template: `
        <div rteGrid 
          [gridType]="'${args.gridType}'"
          data-testid="grid"
        >
          <div rteCol [xxs]=1 [xs]=1 [s]=3 [m]=4 [l]=4 [xl]=12>
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
          </div>
          <div rteCol [xxs]=1 [xs]=3 [s]=3 [m]=4 [l]=8 [xl]=12>
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
          </div>
          <div rteCol [xxs]=2 [xs]=2 [s]=3 [m]=4 [l]=10 [xl]=12>
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
            </div>
          <div rteCol [xxs]=2 [xs]=6 [s]=6 [m]=4 [l]=12 [xl]=12>
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
          </div>
        </div>
    `,
  }),
};
