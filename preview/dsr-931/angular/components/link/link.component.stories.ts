import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../.storybook/testing/testing.utils";

import { LinkComponent } from "./link.component";

@Component({
  selector: "rte-link-navigation-demo",
  imports: [LinkComponent],
  standalone: true,
  template: `
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 420px;">
      <p style="margin: 0;">
        <code>routerLink</code> navigates in-app (hash URL updates, no reload). <code>href</code> uses the browser.
        <code>externalLink</code> opens in a new tab.
      </p>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <rte-link label="SPA — /products" routerLink="/products" />
        <rte-link label="SPA — /about" routerLink="/about" />
        <rte-link label="Native — #anchor" href="#anchor" />
        <rte-link label="External — angular.dev" href="https://angular.dev" [externalLink]="true" />
      </div>
      <p style="margin: 0; font-family: monospace; font-size: 12px;">Current route: {{ router.url }}</p>
    </div>
  `,
})
class LinkNavigationDemoComponent {
  readonly router = inject(Router);
}

const meta: Meta<LinkComponent> = {
  title: "Composants/Link/Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {
    routerLink: {
      control: "text",
      description: "Angular Router link for SPA navigation (preferred over deprecated `link`)",
    },
    link: {
      control: "text",
      description: "Deprecated alias of `routerLink`",
    },
    href: {
      control: "text",
      description: "External or native browser navigation URL",
    },
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

export const Navigation: Story = {
  render: () => ({
    template: `<rte-link-navigation-demo />`,
    moduleMetadata: {
      imports: [LinkNavigationDemoComponent],
    },
  }),
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
    href: "https://angular.dev",
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
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(link).toHaveFocus();
  },
};
