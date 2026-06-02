import { componentWrapperDecorator, Meta, StoryObj } from "@storybook/angular";

import { BaseSideNavComponent } from "./base-side-nav.component";

const meta: Meta<BaseSideNavComponent> = {
  title: "Composants/BaseSideNav",
  component: BaseSideNavComponent,
  tags: ["autodocs"],
  decorators: [
    componentWrapperDecorator((story) => `<div style="height: 600px; width: 100%; display: flex;">${story}</div>`),
  ],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description: "Size of the side navigation",
    },
    appearance: {
      control: "select",
      options: ["neutral", "brand"],
      description: "Appearance of the side navigation",
    },
    collapsed: {
      control: "boolean",
      description: "Whether the side navigation is collapsed",
    },
    showHeader: {
      control: "boolean",
      description: "Whether to show the header",
    },
    showFooter: {
      control: "boolean",
      description: "Whether to show the footer",
    },
  },
};

export default meta;
type Story = StoryObj<BaseSideNavComponent>;

const SimpleBody = `
  <div style="padding: 0.5rem 0;">
    <p style="margin: 0.5rem 0; font-size: 0.875rem;">Content goes here</p>
  </div>
`;

const PageContent = `
  <div style="padding: 2rem; width: 320px; box-sizing: border-box;">
    <h1 style="margin: 0 0 1rem 0;">Welcome to the Design System</h1>
    <p style="line-height: 1.6; color: #555; margin-bottom: 1rem;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
    <p style="line-height: 1.6; color: #555; margin-bottom: 1rem;">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
`;

export const BodyOnly: Story = {
  args: {
    size: "m",
    collapsed: false,
    showHeader: false,
    showFooter: false,
    appearance: "brand",
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-base-side-nav
        [size]="size"
        [collapsed]="collapsed"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [appearance]="appearance">
        <div side-nav-body>${SimpleBody}</div>
        <div side-nav-content>${PageContent}</div>
      </rte-base-side-nav>
    `,
  }),
};

export const HeaderWithBody: Story = {
  args: {
    size: "m",
    collapsed: false,
    showHeader: true,
    showFooter: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-base-side-nav
        [size]="size"
        [collapsed]="collapsed"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [appearance]="appearance">
        <div side-nav-header>
          <div style="font-weight: 600; font-size: 0.875rem;">Menu</div>
        </div>
        <div side-nav-body>${SimpleBody}</div>
        <div side-nav-content>${PageContent}</div>
      </rte-base-side-nav>
    `,
  }),
};

export const BodyWithFooter: Story = {
  args: {
    size: "m",
    collapsed: false,
    showHeader: false,
    showFooter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-base-side-nav
        [size]="size"
        [collapsed]="collapsed"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [appearance]="appearance">
        <div side-nav-body>${SimpleBody}</div>
        <div side-nav-footer>
          <div style="font-size: 0.75rem; color: #666;">Footer</div>
        </div>
        <div side-nav-content>${PageContent}</div>
      </rte-base-side-nav>
    `,
  }),
};

export const HeaderBodyFooter: Story = {
  args: {
    size: "m",
    collapsed: false,
    showHeader: true,
    showFooter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-base-side-nav
        [size]="size"
        [collapsed]="collapsed"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [appearance]="appearance">
        <div side-nav-header>
          <div style="font-weight: 600; font-size: 0.875rem;">Navigation</div>
        </div>
        <div side-nav-body>${SimpleBody}</div>
        <div side-nav-footer>
          <div style="font-size: 0.75rem;">© 2025</div>
        </div>
        <div side-nav-content>${PageContent}</div>
      </rte-base-side-nav>
    `,
  }),
};

export const ColoredSections: Story = {
  args: {
    size: "m",
    appearance: "brand",
    collapsed: false,
    showHeader: true,
    showFooter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <rte-base-side-nav
        [size]="size"
        [collapsed]="collapsed"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [appearance]="appearance">
        <div side-nav-header style="font-weight: 600; color: #000; padding: 1rem; background-color: #E8F4F8; box-sizing: border-box;">
          📍 Header Section
        </div>
        <div side-nav-body style="padding: 1rem; background-color: #F0E8F8; width: 100%; height: 100%; box-sizing: border-box; color: #000;">
          📄 Body Section
          <br />
          <small>Expands to fill available space</small>
        </div>
        <div side-nav-footer style="padding: 1rem; background-color: #F8F0E8; width: 100%; box-sizing: border-box; color: #000;">
          🔧 Footer Section
        </div>
        <div side-nav-content>${PageContent}</div>
      </rte-base-side-nav>
    `,
  }),
};
