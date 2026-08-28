import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { Link as RouterLink, MemoryRouter, Route, Routes, useLocation } from "react-router";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import NavigationProvider from "../../../provider/NavigationProvider";
import { FakeRouterLink } from "../../../utils/stories";
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

const spaNavigationItems = [
  { label: "Home", link: "/home" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

const TRUNCATED_DROPDOWN_ID = "breadcrumbs-truncated-listFil d'Ariane";

function getOverflowMenu() {
  const overlay = document.getElementById("overlay-root");
  const dropdown = overlay?.querySelector(`[data-dropdown-id="${CSS.escape(TRUNCATED_DROPDOWN_ID)}"]`);
  const menu = dropdown?.querySelector('ul[role="menu"]');

  if (!menu) {
    throw new Error("Overflow menu not found");
  }

  return within(menu as HTMLElement);
}

const BreadcrumbsSpaNavigationDemo = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
      <p style={{ margin: 0, lineHeight: 1.6, color: "#555" }}>
        Click breadcrumb items with <code>link</code> to navigate in-app (URL updates, no reload). Wrap the component in{" "}
        <code>NavigationProvider</code> with your router link component. With four items, <code>Products</code> is
        collapsed into the overflow menu (<code>...</code>).
      </p>
      <NavigationProvider linkComponent={RouterLink}>
        <Breadcrumbs items={spaNavigationItems} data-testid="breadcrumbs-spa" />
      </NavigationProvider>
      <p data-testid="current-route" style={{ margin: 0, fontFamily: "monospace", fontSize: 12 }}>
        Current route: <span data-testid="current-pathname">{location.pathname}</span>
      </p>
      <Routes>
        <Route path="/home" element={<div data-testid="page-home">Home page</div>} />
        <Route path="/products" element={<div data-testid="page-products">Products page</div>} />
        <Route path="/products/electronics" element={<div data-testid="page-electronics">Electronics page</div>} />
        <Route
          path="/products/electronics/smartphones"
          element={<div data-testid="page-smartphones">Smartphones page</div>}
        />
      </Routes>
    </div>
  );
};

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => <Breadcrumbs {...args} data-testid="breadcrumbs" />,
};

export const WithCustomRouter: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => (
    <NavigationProvider linkComponent={FakeRouterLink}>
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </NavigationProvider>
  ),
};

export const SpaNavigation: Story = {
  tags: ["!autodocs"],
  args: {
    items: spaNavigationItems,
  },
  render: () => (
    <MemoryRouter initialEntries={["/products/electronics/smartphones"]}>
      <BreadcrumbsSpaNavigationDemo />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const currentPathname = canvas.getByTestId("current-pathname");

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics/smartphones");
      expect(canvas.getByTestId("page-smartphones")).toBeInTheDocument();
    });

    expect(canvas.getByTestId("show-more")).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("link", { name: "Electronics" }));

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics");
      expect(canvas.getByTestId("page-electronics")).toBeInTheDocument();
    });

    await userEvent.click(canvas.getByTestId("show-more"));

    await waitFor(() => {
      expect(
        document
          .getElementById("overlay-root")
          ?.querySelector(`[data-dropdown-id="${CSS.escape(TRUNCATED_DROPDOWN_ID)}"] ul[role="menu"]`),
      ).toBeInTheDocument();
    });

    await userEvent.click(getOverflowMenu().getByRole("menuitem", { name: "Products" }));

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products");
      expect(canvas.getByTestId("page-products")).toBeInTheDocument();
    });

    expect(canvas.getByTestId("breadcrumbs-spa")).toBeInTheDocument();
  },
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
