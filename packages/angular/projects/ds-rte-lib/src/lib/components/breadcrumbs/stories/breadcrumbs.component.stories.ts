import { Component, inject, OnInit } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router } from "@angular/router";
import {
  TESTING_DOWN_KEY,
  TESTING_ENTER_KEY,
  TESTING_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { filter, map, startWith } from "rxjs";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { BreadcrumbsComponent } from "../breadcrumbs.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

export default {
  title: "Composants/Breadcrumbs/Breadcrumbs",
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
} satisfies Meta<BreadcrumbsComponent>;

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

function getOverflowMenu() {
  const menu = document.getElementById("overlay-root")?.querySelector("ul.rte-dropdown-items");
  if (!menu) {
    throw new Error("Overflow menu not found");
  }
  return within(menu as HTMLElement);
}

@Component({
  selector: "rte-breadcrumbs-spa-navigation-demo",
  imports: [BreadcrumbsComponent],
  standalone: true,
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 640px;">
      <p style="margin: 0; line-height: 1.6; color: #555;">
        Click breadcrumb items with <code>link</code> to navigate in-app (hash URL updates, no reload). With four items,
        <code>Products</code> is collapsed into the overflow menu (<code>...</code>).
      </p>
      <rte-breadcrumbs [items]="items" data-testid="breadcrumbs-spa" />
      <p style="margin: 0; font-family: monospace; font-size: 12px;" data-testid="current-route">
        Current route: <span data-testid="current-pathname">{{ currentUrl() }}</span>
      </p>
    </div>
  `,
})
class BreadcrumbsSpaNavigationDemoComponent implements OnInit {
  private readonly router = inject(Router);

  readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly items = spaNavigationItems;

  ngOnInit() {
    void this.router.navigateByUrl("/products/electronics/smartphones");
  }
}

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

export const SpaNavigation: StoryObj<BreadcrumbsComponent> = {
  tags: ["!autodocs"],
  render: () => ({
    template: `<rte-breadcrumbs-spa-navigation-demo />`,
    moduleMetadata: {
      imports: [BreadcrumbsSpaNavigationDemoComponent],
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const currentPathname = canvas.getByTestId("current-pathname");

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics/smartphones");
    });

    expect(canvas.getByTestId("show-more")).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("link", { name: "Electronics" }));

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics");
    });

    await userEvent.click(canvas.getByTestId("show-more"));

    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector("ul.rte-dropdown-items")).toBeInTheDocument();
    });

    await userEvent.click(getOverflowMenu().getByRole("link", { name: "Products" }));

    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products");
    });

    expect(canvas.getByTestId("breadcrumbs-spa")).toBeInTheDocument();
  },
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
    focusElementBeforeComponent(canvasElement);

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

export const WithBadge: StoryObj<BreadcrumbsComponent> = {
  args: {
    items: [
      { label: "Home", link: "/" },
      {
        label: "Products",
        link: "/products",
        showBadge: true,
        badgeContent: "number",
        badgeType: "indicator",
        badgeCount: 5,
        badgeSize: "m",
      },
      { label: "Electronics", link: "/products/electronics" },
      {
        label: "Smartphones",
        link: "/products/electronics/smartphones",
      },
    ],
    badgeContent: "empty",
    badgeCount: 7,
    badgeType: "indicator",
    badgeSize: "xs",
    showBadge: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <rte-breadcrumbs [items]="items" [ariaLabel]="ariaLabel" data-testid="breadcrumbs" [breadcrumbItemMaxWidth]="breadcrumbItemMaxWidth" [badgeContent]="badgeContent" [badgeCount]="badgeCount" [badgeType]="badgeType" [showBadge]="showBadge" [badgeIcon]="badgeIcon" [badgeSize]="badgeSize" />
    `,
  }),
};

export const KeyboardNavigationWithDropdown: StoryObj<BreadcrumbsComponent> = {
  args: {
    ...Default.args,
    items: [
      ...(Default.args?.items ?? []),
      {
        label: "FancyBrand Phone",
        link: "/products/electronics/smartphones/fancybrand-phone",
      },
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
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);

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
