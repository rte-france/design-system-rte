import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { LinkComponent } from "./link.component";

const meta: Meta<LinkComponent> = {
  title: "Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {
    subtle: {
      control: "boolean",
    },
    externalLink: {
      control: "boolean",
    },
  },
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {
    label: "Link",
    href: "#",
  },
};

export const SubtleLink: Story = {
  args: {
    ...Default.args,
    subtle: true,
  },
};

export const SubtleLinkExternal: Story = {
  args: {
    ...SubtleLink.args,
    externalLink: true,
  },
};

export const ExternalLink: Story = {
  args: {
    ...Default.args,
    externalLink: true,
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    href: "#",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.tab();
    expect(link).toHaveFocus();
  },
};
