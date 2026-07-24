import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { expect, fn, userEvent, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { PaginationComponent } from "../pagination.component";

const meta = {
  title: "Composants/Pagination/Pagination",
  component: PaginationComponent,
  tags: ["autodocs"],
  argTypes: {
    activePage: {
      control: "number",
      description: "Current active page (1-based)",
    },
    totalPages: {
      control: "number",
      description: "Total number of pages",
    },
    appearance: {
      control: "select",
      options: ["brand", "neutral"],
    },
    hasGoToFirst: {
      control: "boolean",
    },
    hasGoToPrev: {
      control: "boolean",
    },
    hasGoToNext: {
      control: "boolean",
    },
    hasGoToLast: {
      control: "boolean",
    },
    ariaLabel: {
      control: "text",
    },
  },
} satisfies Meta<PaginationComponent>;

export default meta;

type Story = StoryObj<PaginationComponent>;

export const Default: Story = {
  args: {
    activePage: 1,
    totalPages: 10,
    appearance: "neutral",
    hasGoToFirst: true,
    hasGoToPrev: true,
    hasGoToNext: true,
    hasGoToLast: true,
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange(page: number) {
        this["activePage"] = page;
      },
    },
    template: `
      <rte-pagination
        [activePage]="activePage"
        [totalPages]="totalPages"
        [appearance]="appearance"
        [hasGoToFirst]="hasGoToFirst"
        [hasGoToPrev]="hasGoToPrev"
        [hasGoToNext]="hasGoToNext"
        [hasGoToLast]="hasGoToLast"
        [ariaLabel]="ariaLabel"
        (pageChange)="onPageChange($event)"
      />
    `,
  }),
};

export const Brand: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10,
  },
  render: Default.render,
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10,
  },
  render: Default.render,
};

export const StartPosition: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10,
  },
  render: Default.render,
};

export const MidPosition: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10,
  },
  render: Default.render,
};

export const EndPosition: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10,
  },
  render: Default.render,
};

export const WithoutEllipsis: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7,
  },
  render: Default.render,
};

export const HiddenEndControls: Story = {
  args: {
    ...Default.args,
    activePage: 3,
    totalPages: 10,
    hasGoToFirst: false,
    hasGoToPrev: false,
    hasGoToNext: false,
    hasGoToLast: false,
  },
  render: Default.render,
};

export const SinglePage: Story = {
  args: {
    ...Default.args,
    activePage: 1,
    totalPages: 1,
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);

    expect(nav.getByTestId("pagination-page-1")).toHaveAttribute("aria-current", "page");
    expect(nav.getByTestId("pagination-page-1").tagName).toBe("SPAN");
    expect(nav.queryAllByRole("button", { name: /^Page \d/ })).toHaveLength(0);

    expect(nav.getByLabelText("Première page")).toBeDisabled();
    expect(nav.getByLabelText("Page précédente")).toBeDisabled();
    expect(nav.getByLabelText("Page suivante")).toBeDisabled();
    expect(nav.getByLabelText("Dernière page")).toBeDisabled();
  },
};

export const Interactions: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10,
    pageChange: fn(),
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange(page: number) {
        this["activePage"] = page;
        this["pageChange"](page);
      },
    },
    template: `
      <rte-pagination
        [activePage]="activePage"
        [totalPages]="totalPages"
        [appearance]="appearance"
        [hasGoToFirst]="hasGoToFirst"
        [hasGoToPrev]="hasGoToPrev"
        [hasGoToNext]="hasGoToNext"
        [hasGoToLast]="hasGoToLast"
        (pageChange)="onPageChange($event)"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);

    expect(nav.getByTestId("pagination-page-1")).toHaveAttribute("aria-current", "page");

    expect(nav.getByLabelText("Première page")).toBeDisabled();
    expect(nav.getByLabelText("Page précédente")).toBeDisabled();
    expect(nav.getByLabelText("Page suivante")).not.toBeDisabled();
    expect(nav.getByLabelText("Dernière page")).not.toBeDisabled();

    await userEvent.click(nav.getByTestId("pagination-page-3"));
    expect(args["pageChange"]).toHaveBeenCalledWith(3);

    await userEvent.click(nav.getByLabelText("Page suivante"));
    expect(args["pageChange"]).toHaveBeenCalledWith(4);

    await userEvent.click(nav.getByLabelText("Dernière page"));
    expect(args["pageChange"]).toHaveBeenCalledWith(10);

    await focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(nav.getByLabelText("Première page")).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(args["pageChange"]).toHaveBeenCalledWith(1);
  },
};

export const KeyboardNavigation: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10,
    pageChange: fn(),
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange(page: number) {
        this["activePage"] = page;
        this["pageChange"](page);
      },
    },
    template: `
      <rte-pagination
        [activePage]="activePage"
        [totalPages]="totalPages"
        [appearance]="appearance"
        (pageChange)="onPageChange($event)"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);

    expect(nav.getByTestId("pagination-page-5")).toHaveAttribute("aria-current", "page");
    expect(nav.getByLabelText("Première page")).toBeInTheDocument();
    expect(nav.getByLabelText("Page précédente")).toBeInTheDocument();
    expect(nav.getByLabelText("Page suivante")).toBeInTheDocument();
    expect(nav.getByLabelText("Dernière page")).toBeInTheDocument();

    await focusElementBeforeComponent(canvasElement);

    await userEvent.tab();
    expect(nav.getByLabelText("Première page")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page précédente")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 1")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 4")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 6")).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(args["pageChange"]).toHaveBeenCalledWith(6);
  },
};
