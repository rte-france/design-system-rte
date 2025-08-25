import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

export default {
  title: "Breadcrumbs",
  component: BreadcrumbsComponent,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
    },
  },
} satisfies Meta<BreadcrumbsComponent>;

const mockItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

export const Default: StoryObj<BreadcrumbsComponent> = {
  args: {
    items: mockItems,
  },
};

export const KeyboardNavigation: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<rte-breadcrumbs [items]="items" data-testid="breadcrumbs"/>`,
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
    },
    template: `
      <rte-breadcrumbs [items]="items" data-testid="breadcrumbs"/>
      <rte-breadcrumbs [items]="items" data-testid="breadcrumbs-truncated"/>
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
