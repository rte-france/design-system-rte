import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { forwardRef } from "react";

import { focusElementBeforeComponent } from "../../../.storybook/testing/testing.utils";
import NavigationProvider from "../../provider/NavigationProvider";

import Link from "./Link";

const meta = {
  title: "Composants/Link/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    subtle: {
      control: "boolean",
    },
    externalLink: {
      control: "boolean",
    },
    reverse: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Link",
    href: "#",
    reverse: false,
  },
};

export const Subtle: Story = {
  args: {
    label: "Subtle Link",
    href: "#",
    subtle: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Link {...args} label="Subtle Link" href="#" />
        <Link {...args} label="Subtle Link" href="#" externalLink />
      </div>
    );
  },
};

export const NotSubtle: Story = {
  args: {
    label: "External Link",
    href: "#",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Link {...args} label="External Link" href="#" />
        <Link {...args} label="External Link" href="#" externalLink />
      </div>
    );
  },
};

export const Reverse: Story = {
  args: {
    label: "External Link",
    href: "#",
    reverse: true,
    subtle: true,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8, backgroundColor: "black", padding: 16 }}>
        <Link {...args} label="External Link" href="#" />
        <Link {...args} label="External Link" href="#" externalLink />
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    label: "Link",
    href: "#",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(link).toHaveFocus();
  },
};

const FakeRouterLink = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ href, children, onClick, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);

        console.log(`SPA navigation to ${href}`);
      }}
      {...props}
    >
      {children}
    </a>
  ),
);

export const WithCustomRouter: Story = {
  args: {
    label: "SPA Link",
    href: "/dashboard",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Link {...args} customLinkComponent={FakeRouterLink} />

        <NavigationProvider linkComponent={FakeRouterLink}>
          <Link {...args} label="SPA Link via NavigationProvider" />
        </NavigationProvider>
      </div>
    );
  },
};
