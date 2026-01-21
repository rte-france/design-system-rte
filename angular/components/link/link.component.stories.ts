import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";

import { LinkComponent } from "./link.component";

const meta: Meta<LinkComponent> = {
  title: "Composants/Link",
  component: LinkComponent,
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

export const Reverse: Story = {
  args: {
    ...Default.args,
    externalLink: true,
    reverse: true,
    subtle: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="background-color: black; padding: 16px; display: flex; gap: 16px;">
        <rte-link [label]="label" [href]="href" [externalLink]="externalLink" [reverse]="reverse" [subtle]="subtle"/>
        <rte-link [label]="label" [href]="href" [reverse]="reverse" [subtle]="subtle"/>
      </div>`,
  }),
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
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
