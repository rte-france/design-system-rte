import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import Breadcrumbs from "../Breadcrumbs";

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

export const maxWidthBreadcrumbItem: Story = {
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
  play: async () => {
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
