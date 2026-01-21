import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Breadcrumbs from "../Breadcrumbs";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/Breadcrumbs/Breadcrumbs",
  component: Breadcrumbs,
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
    },
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"],
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"],
    },
    badgeIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
    },
    showBadge: {
      control: "boolean",
    },
    badgeCount: {
      control: "number",
    },
    badgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"],
    },
  },
} satisfies Meta<typeof Breadcrumbs>;
export default meta;

type Story = StoryObj<typeof meta>;

const mockItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => <Breadcrumbs {...args} data-testid="breadcrumbs" />,
};

export const KeyboardNavigation: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs").querySelectorAll("div");
    const first = breadcrumbs[0].querySelector("a");
    first?.focus();
    const breadCrumbsHead = breadcrumbs[breadcrumbs.length - 1].querySelector("a");

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    expect(breadCrumbsHead).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(breadcrumbs[breadcrumbs.length - 2].querySelector("a")).toHaveFocus();
  },
};

export const Truncated: Story = {
  args: {
    ...Default.args,
    items: [...Default.args.items.slice(0, 2)],
  },
  render: (args) => {
    return (
      <>
        <Breadcrumbs {...args} data-testid="breadcrumbs" />
        <Breadcrumbs {...Default.args} data-testid="breadcrumbs-truncated" />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs");
    const breadcrumbsTruncated = canvas.getByTestId("breadcrumbs-truncated");
    expect(within(breadcrumbs).queryByTestId("show-more")).not.toBeInTheDocument();
    expect(within(breadcrumbsTruncated).queryByTestId("show-more")).toBeInTheDocument();
  },
};

export const MaxWidthBreadcrumbItem: Story = {
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50,
  },
  render: (args) => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
};

export const MultipleElements: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <>
        <Breadcrumbs {...args} items={args.items.slice(0, 1)} />
        <Breadcrumbs {...args} items={args.items.slice(0, 2)} />
        <Breadcrumbs {...args} items={args.items.slice(0, 3)} />
        <Breadcrumbs {...args} items={args.items} />
      </>
    );
  },
};

export const WithBadge: Story = {
  args: {
    items: [
      { label: "Home", link: "/" },
      {
        label: "Products",
        link: "/products",
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
        showBadge: true,
      },
      {
        label: "Electronics",
        link: "/products/electronics",
      },
      { label: "Smartphones", link: "/products/electronics/smartphones" },
    ],
    badgeContent: "empty",
    badgeCount: 5,
    badgeType: "indicator",
    showBadge: true,
  },
  render: (args) => <Breadcrumbs {...args} data-testid="breadcrumbs" />,
};

export const KeyboardNavigationWithDropdown: Story = {
  args: {
    ...Default.args,
    items: [
      ...Default.args.items,
      { label: "FancyBrand Phone", link: "/products/electronics/smartphones/fancybrand-phone" },
    ],
  },
  render: (args) => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const value = "breadcrumbs-truncated-listFil d'Ariane";
    const safeValue = CSS.escape(value);
    const dropdown = document.querySelector(`[data-dropdown-id="${safeValue}"]`);
    expect(dropdown).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[1]).toHaveFocus());
    await userEvent.keyboard(TESTING_UP_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
  },
};
