import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { within, userEvent, expect, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";

import { Dsr1005CanonicalPaginationComponent } from "./stories/dsr-1005-canonical-pagination.component";
import { Dsr1005EntiteListPanelComponent } from "./stories/dsr-1005-entite-list-panel.component";
import { CORESSY_DSR1005_ENTITIES } from "./stories/dsr-1005-story.constants";
import { Dsr1005TriggerPositionDebugComponent } from "./stories/dsr-1005-trigger-position-debug.component";
import { TooltipDirective } from "./tooltip.directive";

const dsr1005StoryDecorators = [
  moduleMetadata({
    imports: [Dsr1005EntiteListPanelComponent],
  }),
];

const dsr1005CanonicalDecorators = [
  moduleMetadata({
    imports: [Dsr1005CanonicalPaginationComponent],
  }),
];

const dsr1005DebugDecorators = [
  moduleMetadata({
    imports: [Dsr1005TriggerPositionDebugComponent],
  }),
];

const meta: Meta<TooltipDirective> = {
  title: "Composants/Tooltip",
  component: TooltipDirective,
  tags: ["autodocs"],
  argTypes: {
    rteTooltip: {
      control: "text",
      defaultValue: "Tooltip Text",
    },
    rteTooltipPosition: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right"],
      defaultValue: "top",
    },
    rteTooltipAlignment: {
      control: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
    },
    rteTooltipArrow: {
      control: "boolean",
      defaultValue: true,
    },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<TooltipDirective>;

const mockHost = (tooltipDirectives: string) => `
<div style="
    text-decoration: underline;
    text-decoration-color: #BF4C00;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    color: #BF4C00;
    font-weight: bold;
"
    ${tooltipDirectives}
>
    Hover Me!
</div>
`;

export const Default: Story = {
  args: {
    rteTooltip: "Tooltip",
    rteTooltipPosition: "top",
    rteTooltipAlignment: "center",
    rteTooltipArrow: true,
  },
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: mockHost(`
            [rteTooltip]="rteTooltip"
            [rteTooltipPosition]="rteTooltipPosition"
            [rteTooltipAlignment]="rteTooltipAlignment"
            [rteTooltipArrow]="rteTooltipArrow"
        `),
  }),
};

export const Position: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            ${mockHost(`
                rteTooltipPosition="top"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="bottom"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="left"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipPosition="right"
                [rteTooltip]="rteTooltip"
                [rteTooltipAlignment]="rteTooltipAlignment"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
        </div>
        `,
  }),
};

export const Alignment: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            ${mockHost(`
                rteTooltipAlignment="start"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipAlignment="center"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
            ${mockHost(`
                rteTooltipAlignment="end"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
                [rteTooltipArrow]="rteTooltipArrow"
            `)}
        </div>
        `,
  }),
};

export const Arrow: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: `
        <div style="display: flex; gap: 8;">
            ${mockHost(`
                [rteTooltipArrow]="true"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
            `)}
            ${mockHost(`
                [rteTooltipArrow]="false"
                [rteTooltipPosition]="rteTooltipPosition"
                [rteTooltip]="rteTooltip"
            `)}
        </div>
        `,
  }),
};

export const AutoPlacement: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-start; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: flex-end; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 75px; height: 250px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px; border: 1px solid red; width: 250px; height: 50px;">
                ${mockHost(`
                    rteTooltipPosition="auto"
                    [rteTooltip]="rteTooltip"
                `)}
            </div>
        </div>
        `,
  }),
};

export const CoressyCanonicalPaginationDSR1005: Story = {
  name: "DSR-1005 Coressy canonical (paginated card + link)",
  decorators: dsr1005CanonicalDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Canonical Coressy stack: `card-pagination-entite` selectors, `<a routerLink>` → `app-entite-list-item`, " +
          "tooltip on `entite-list-item__container`, `__container { display: block }`, host `flex: 1`.",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-canonical-pagination [entities]="entities" [selectedIndex]="2" />`,
    props: { entities: CORESSY_DSR1005_ENTITIES },
  }),
};

/** Keeps Storybook id `composants-tooltip--wide-row-trigger-dsr-1005` for saved URLs. */
export const WideRowTriggerDSR1005: Story = CoressyCanonicalPaginationDSR1005;

export const CoressyTriggerPositionDebugDSR1005: Story = {
  name: "DSR-1005 debug trigger position relative",
  decorators: dsr1005DebugDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Debug whether `rteTooltip` misplacement correlates with `position: relative` on the trigger " +
          "(`positionTooltip()` in the directive). Hover a list row and read `triggerPosition`, rects, and " +
          "`gapTriggerTopToTooltipBottom`. Compare static rows A vs B (relative without tooltip).",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-trigger-position-debug />`,
  }),
};

export const CoressyEntiteListDSR1005: Story = CoressyCanonicalPaginationDSR1005;

export const CoressyEntiteListScrollDSR1005: Story = {
  name: "DSR-1005 Coressy list (scroll)",
  decorators: dsr1005StoryDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Same Coressy layout inside a scrollable list (`overflow: auto`). Scroll the list, then hover a row: " +
          "misplacement can appear when the page or panel scrolls because `rteTooltip` only listens to `window` scroll.",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-entite-list-panel [entities]="entities" [scrollable]="true" [selectedIndex]="2" />`,
    props: {
      entities: [
        ...CORESSY_DSR1005_ENTITIES,
        { code: "EDA-0200", type: "EDA" },
        { code: "EDA-0201", type: "EDA" },
        { code: "EDR-0099", type: "EDR" },
      ],
    },
  }),
};

export const CoressyEntiteListInsideLinkDSR1005: Story = {
  name: "DSR-1005 Coressy list (router link)",
  decorators: dsr1005StoryDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Same as Coressy: each `app-entite-list-item` is wrapped in `<a [routerLink]>`. " +
          "The tooltip stays on `entite-list-item__container` while the outer `<a>` is the navigation target " +
          "(nested focusable + flex stretch on links can change layout vs a bare row).",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-entite-list-panel [entities]="entities" [wrapWithRouterLink]="true" [selectedIndex]="2" />`,
    props: { entities: CORESSY_DSR1005_ENTITIES },
  }),
};

export const CoressyEntiteListInsideLinkStretchDSR1005: Story = {
  name: "DSR-1005 Coressy list (router link stretch)",
  decorators: dsr1005StoryDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Router link wrapper with tall flex children (`flex: 1`, `justify-content: flex-end`) to mimic paginated card selectors.",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-entite-list-panel
      [entities]="entities"
      [wrapWithRouterLink]="true"
      [linkStretch]="true"
      [selectedIndex]="2"
    />`,
    props: { entities: CORESSY_DSR1005_ENTITIES },
  }),
};

export const CoressyEntiteListStretchDSR1005: Story = {
  name: "DSR-1005 Coressy list (flex stretch)",
  decorators: dsr1005StoryDecorators,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "List with extra height so each item host (`:host { flex: 1 }`) stretches like a flex child in a tall sidebar column.",
      },
    },
  },
  render: () => ({
    template: `<dsr-1005-entite-list-panel [entities]="entities" [stretchList]="true" [selectedIndex]="2" />`,
    props: { entities: CORESSY_DSR1005_ENTITIES },
  }),
};

export const KeyboardInteraction: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    imports: [TooltipDirective],
    template: `
        <div style="display: flex; gap: 8px;">
            ${mockHost(`[rteTooltip]="rteTooltip"`)}
        </div>
        `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipTrigger = canvas.queryByText("Hover Me!");
    focusElementBeforeComponent();
    await userEvent.tab();
    const tooltip = within(document.body).getByRole("tooltip");
    expect(tooltipTrigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
  },
};
