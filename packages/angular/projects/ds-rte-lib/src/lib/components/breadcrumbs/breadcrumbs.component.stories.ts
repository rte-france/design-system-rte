import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

export default {
  title: "Breadcrumbs (développement en cours)",
  component: BreadcrumbsComponent,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
    },
    ariaLabel: {
      control: "text",
    },
  },
} satisfies Meta<BreadcrumbsComponent>;

const mockItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

const wipWarning = `
<div>
  <span style="font-family: sans-serif; margin-bottom: 16px; border: 1px solid #F4922B; padding: 8px; border-radius: 5px; background-color: #FAFFC1; margin: 0;">
    Ce composant est en cours de développement et n'est pas encore disponible
  </span>
</div>
<br/>
`;

export const Default: StoryObj<BreadcrumbsComponent> = {
  args: {
    items: mockItems,
  },
  render: (args) => ({
    props: {
      ...args,
      mockItems,
    },
    template: `
      ${wipWarning}
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs"/>
    `,
  }),
};

export const KeyboardNavigation: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs"/>`,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs").querySelectorAll("div");
    const breadCrumbsHead = breadcrumbs[breadcrumbs.length - 1].querySelector("a");
    args.items.forEach(async () => {
      await userEvent.tab();
    });
    await waitFor(() => expect(breadCrumbsHead).toHaveFocus());
    await userEvent.tab({ shift: true });
    expect(breadcrumbs[breadcrumbs.length - 2].querySelector("a")).toHaveFocus();
  },
};

export const Truncated: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
    items: Default.args?.items ? Default.args.items.slice(0, 2) : [],
  },
  render: (args) => ({
    props: {
      ...args,
      mockItems,
    },
    template: `
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs"/>
      <rte-breadcrumbs [items]="mockItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-truncated"/>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs");
    const breadcrumbsTruncated = canvas.getByTestId("breadcrumbs-truncated");
    expect(within(breadcrumbs).queryByTestId("show-more")).not.toBeInTheDocument();
    expect(within(breadcrumbsTruncated).queryByTestId("show-more")).toBeInTheDocument();
  },
};

export const MultipleElements: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: {
      ...args,
      oneItem: args.items.slice(0, 1),
      twoItems: args.items.slice(0, 2),
      threeItems: args.items.slice(0, 3),
      fourItems: [...args.items, { label: "brand", link: "/products/electronics/smartphones/brand" }],
    },
    template: `
      <rte-breadcrumbs [items]="oneItem" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-one-item"/>
      <rte-breadcrumbs [items]="twoItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-two-items"/>
      <rte-breadcrumbs [items]="threeItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-three-items"/>
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs"/>
    `,
  }),
};
