import { TESTING_ENTER_KEY, TESTING_SPACE_KEY } from "@design-system-rte/core";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { useState } from "react";

import Pagination from "../Pagination";

const meta = {
  title: "Composants/Pagination/Pagination",
  component: Pagination,
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
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOnPageChange = fn();

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

  render: (args) => {
    const [activePage, setActivePage] = useState(args.activePage);

    return <Pagination {...args} activePage={activePage} onPageChange={(page) => setActivePage(page)} />;
  },
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
    expect(nav.getByTestId("pagination-page-1").tagName).toBe("BUTTON");
    expect(nav.getByLabelText("Page 1")).toBeInTheDocument();

    expect(nav.getByLabelText("Première page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled", "true");
  },
};
export const Interactions: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10,
    onPageChange: mockOnPageChange,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);

    expect(nav.getByTestId("pagination-page-1")).toHaveAttribute("aria-current", "page");

    expect(nav.getByLabelText("Première page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled");
    expect(nav.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled");

    await userEvent.click(nav.getByTestId("pagination-page-3"));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);

    await userEvent.click(nav.getByLabelText("Page suivante"));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);

    await userEvent.click(nav.getByLabelText("Dernière page"));
    expect(mockOnPageChange).toHaveBeenCalledWith(10);
    expect(nav.getByLabelText("Dernière page")).toHaveFocus();
    expect(nav.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled", "true");

    await nav.getByLabelText("Première page").focus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  },
};

export const KeyboardNavigation: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10,
    onPageChange: mockOnPageChange,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);

    expect(nav.getByTestId("pagination-page-5")).toHaveAttribute("aria-current", "page");
    expect(nav.getByLabelText("Première page")).toBeInTheDocument();
    expect(nav.getByLabelText("Page précédente")).toBeInTheDocument();
    expect(nav.getByLabelText("Page suivante")).toBeInTheDocument();
    expect(nav.getByLabelText("Dernière page")).toBeInTheDocument();

    await nav.getByLabelText("Première page").focus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page précédente")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 1")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 4")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 5")).toHaveFocus();

    await userEvent.tab();
    expect(nav.getByLabelText("Page 6")).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  },
};
