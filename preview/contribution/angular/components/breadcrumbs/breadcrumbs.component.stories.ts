import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

export default {
  title: "Composants/Breadcrumbs",
  component: BreadcrumbsComponent,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
    },
    ariaLabel: {
      control: "text",
    },
    breadcrumbItemMaxWidth: {
      control: "number",
      description: "Maximum width for each breadcrumb item in pixels.",
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
  render: (args) => ({
    props: {
      ...args,
      mockItems,
    },
    template: `
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
    `,
  }),
};

export const MaxWidthBreadcrumbItem: StoryObj<BreadcrumbsComponent> = {
  args: {
    items: mockItems,
    breadcrumbItemMaxWidth: 50,
  },
  render: (args) => ({
    props: {
      ...args,
      mockItems,
    },
    template: `
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
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
    template: `<rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>`,
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
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
      <rte-breadcrumbs [items]="mockItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-truncated" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
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
      <rte-breadcrumbs [items]="oneItem" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-one-item" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
      <rte-breadcrumbs [items]="twoItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-two-items" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
      <rte-breadcrumbs [items]="threeItems" [ariaLabel]="ariaLabel" data-testid="breadcrumbs-three-items" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth"/>
    `,
  }),
};

export const KeyboardNavigationWithDropdown: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
    items: [
      ...(Default.args?.items ?? []),
      { label: "FancyBrand Phone", link: "/products/electronics/smartphones/fancybrand-phone" },
    ],
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs"/>`,
    };
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const overlay = document.getElementById("overlay-root");
    const dropdownMenu = overlay?.querySelector("rte-dropdown-menu");
    const menuItems = dropdownMenu?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdownMenu).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => expect(menuItems?.[0]).toHaveFocus());
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await waitFor(() => expect(menuItems?.[1]).toHaveFocus());
    await userEvent.keyboard(TESTING_UP_KEY);
    await waitFor(() => expect(menuItems?.[0]).toHaveFocus());
  },
};
