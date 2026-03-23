import { TESTING_ESCAPE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { ButtonComponent } from "../../button/button.component";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { DrawerDirective } from "../drawer.directive";
import { DrawerModule } from "../drawer.module";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<DrawerDirective> = {
  title: "Composants/Drawer",
  component: DrawerDirective,
  tags: ["autodocs"],
  argTypes: {
    rteDrawerId: { control: "text", description: "Drawer id (required)" },
    rteDrawerIsOpen: {
      control: "boolean",
      description: "Initial open only (applied once); use #drawerHost open()/close() or trigger afterward",
    },
    rteDrawerTitle: { control: "text", description: "Title when using default header" },
    rteDrawerIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
    },
    rteDrawerIconAppearance: { control: "select", options: ["outlined", "filled"] },
    rteDrawerPosition: { control: "select", options: ["modal", "responsive"] },
    rteDrawerWidth: { control: "text" },
    rteDrawerCloseOnOverlayClick: { control: "boolean" },
    rteDrawerPrimaryButtonLabel: { control: "text" },
    rteDrawerSecondaryButtonLabel: { control: "text" },
    rteDrawerIsCollapsible: { control: "boolean" },
    rteDrawerFixedHeader: { control: "boolean" },
    rteDrawerCloseOnEscape: { control: "boolean" },
    rteDrawerIsClosable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<DrawerDirective>;

const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida.";

export const Default: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent],
    }),
  ],
  args: {
    rteDrawerId: "example-drawer",
    rteDrawerTitle: "Example Drawer",
    rteDrawerIcon: "settings",
    rteDrawerIconAppearance: "outlined",
    rteDrawerPosition: "modal",
    rteDrawerWidth: "400px",
    rteDrawerCloseOnOverlayClick: false,
    rteDrawerPrimaryButtonLabel: "Confirm",
    rteDrawerSecondaryButtonLabel: "Cancel",
    rteDrawerIsCollapsible: false,
    rteDrawerFixedHeader: true,
    rteDrawerCloseOnEscape: false,
    rteDrawerIsClosable: true,
  },
  render: (args) => ({
    props: args,
    template: `<div
      rteDrawer
      [rteDrawerId]="rteDrawerId"
      [rteDrawerTitle]="rteDrawerTitle"
      [rteDrawerIcon]="rteDrawerIcon"
      [rteDrawerIconAppearance]="rteDrawerIconAppearance"
      [rteDrawerPosition]="rteDrawerPosition"
      [rteDrawerWidth]="rteDrawerWidth"
      [rteDrawerCloseOnOverlayClick]="rteDrawerCloseOnOverlayClick"
      [rteDrawerPrimaryButtonLabel]="rteDrawerPrimaryButtonLabel"
      [rteDrawerSecondaryButtonLabel]="rteDrawerSecondaryButtonLabel"
      [rteDrawerIsCollapsible]="rteDrawerIsCollapsible"
      [rteDrawerFixedHeader]="rteDrawerFixedHeader"
      [rteDrawerCloseOnEscape]="rteDrawerCloseOnEscape"
      [rteDrawerIsClosable]="rteDrawerIsClosable"
    >
      <button rteButton rteButtonVariant="primary" rteDrawerTrigger>Open drawer</button>
      <ng-template #drawerContent>
        <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
          ${loremShort}
        </span>
      </ng-template>
    </div>`,
  }),
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", { name: "Open drawer" });
    await userEvent.click(openButton);
    const drawer = await within(document.body).findByRole("dialog");
    expect(drawer).toBeInTheDocument();
  },
};

export const CloseOnEscape: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteDrawerId: "drawer-close-on-escape",
    rteDrawerTitle: "Close on Escape",
    rteDrawerCloseOnEscape: true,
    rteDrawerCloseOnOverlayClick: false,
  },
  render: (args) => ({
    props: args,
    template: `<div
      rteDrawer
      [rteDrawerId]="rteDrawerId"
      [rteDrawerTitle]="rteDrawerTitle"
      [rteDrawerIcon]="rteDrawerIcon"
      [rteDrawerIconAppearance]="rteDrawerIconAppearance"
      [rteDrawerPosition]="rteDrawerPosition"
      [rteDrawerWidth]="rteDrawerWidth"
      [rteDrawerCloseOnOverlayClick]="rteDrawerCloseOnOverlayClick"
      [rteDrawerPrimaryButtonLabel]="rteDrawerPrimaryButtonLabel"
      [rteDrawerSecondaryButtonLabel]="rteDrawerSecondaryButtonLabel"
      [rteDrawerIsCollapsible]="rteDrawerIsCollapsible"
      [rteDrawerFixedHeader]="rteDrawerFixedHeader"
      [rteDrawerCloseOnEscape]="rteDrawerCloseOnEscape"
      [rteDrawerIsClosable]="rteDrawerIsClosable"
    >
      <button rteButton rteButtonVariant="primary" rteDrawerTrigger>Open drawer</button>
      <ng-template #drawerContent>
        <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
          ${loremShort}
        </span>
      </ng-template>
    </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Modal drawer with **rteDrawerCloseOnEscape** enabled (spec: close on Esc). Escape closes the drawer without using the header close control.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open drawer" }));
    const dialog = await within(document.body).findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  },
};

export const CloseOnOverlayClick: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteDrawerId: "drawer-close-on-overlay-click",
    rteDrawerTitle: "Close on overlay click",
    rteDrawerCloseOnEscape: false,
    rteDrawerCloseOnOverlayClick: true,
  },
  render: (args) => ({
    props: args,
    template: `<div
      rteDrawer
      [rteDrawerId]="rteDrawerId"
      [rteDrawerTitle]="rteDrawerTitle"
      [rteDrawerIcon]="rteDrawerIcon"
      [rteDrawerIconAppearance]="rteDrawerIconAppearance"
      [rteDrawerPosition]="rteDrawerPosition"
      [rteDrawerWidth]="rteDrawerWidth"
      [rteDrawerCloseOnOverlayClick]="rteDrawerCloseOnOverlayClick"
      [rteDrawerPrimaryButtonLabel]="rteDrawerPrimaryButtonLabel"
      [rteDrawerSecondaryButtonLabel]="rteDrawerSecondaryButtonLabel"
      [rteDrawerIsCollapsible]="rteDrawerIsCollapsible"
      [rteDrawerFixedHeader]="rteDrawerFixedHeader"
      [rteDrawerCloseOnEscape]="rteDrawerCloseOnEscape"
      [rteDrawerIsClosable]="rteDrawerIsClosable"
    >
      <button rteButton rteButtonVariant="primary" rteDrawerTrigger>Open drawer</button>
      <ng-template #drawerContent>
        <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
          ${loremShort}
        </span>
      </ng-template>
    </div>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Modal drawer with **rteDrawerCloseOnOverlayClick** enabled. A mousedown on the backdrop (outside the panel and outside the host) closes the drawer. Only applies when **rteDrawerPosition** is `modal`.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open drawer" }));
    const dialog = await within(document.body).findByRole("dialog");
    const backdropElement = dialog.previousElementSibling;
    expect(backdropElement).not.toBeNull();
    await userEvent.click(backdropElement as HTMLElement);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  },
};

export const Responsive: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Responsive drawer stays inside the bordered host: main column (`#drawerMainContent`) and panel side-by-side. The host uses a fixed height so the flex layout can resolve.",
      },
    },
  },
  args: {
    ...Default.args,
    rteDrawerId: "responsive-drawer",
    rteDrawerTitle: "Responsive Drawer",
    rteDrawerPosition: "responsive",
    rteDrawerIcon: undefined,
    rteDrawerIsClosable: true,
    rteDrawerWidth: "400px",
  },
  render: (args) => ({
    props: args,
    template: `<div style="border: 1px solid #ccc; width: 600px; height: 500px" rteDrawer
      [rteDrawerId]="rteDrawerId"
      [rteDrawerTitle]="rteDrawerTitle"
      [rteDrawerIcon]="rteDrawerIcon"
      [rteDrawerIconAppearance]="rteDrawerIconAppearance"
      [rteDrawerPosition]="rteDrawerPosition"
      [rteDrawerWidth]="rteDrawerWidth"
      [rteDrawerCloseOnOverlayClick]="rteDrawerCloseOnOverlayClick"
      [rteDrawerPrimaryButtonLabel]="rteDrawerPrimaryButtonLabel"
      [rteDrawerSecondaryButtonLabel]="rteDrawerSecondaryButtonLabel"
      [rteDrawerIsCollapsible]="rteDrawerIsCollapsible"
      [rteDrawerFixedHeader]="rteDrawerFixedHeader"
      [rteDrawerCloseOnEscape]="rteDrawerCloseOnEscape"
      [rteDrawerIsClosable]="rteDrawerIsClosable"
    >
      <ng-template #drawerContent>
        <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
          ${loremShort}
        </span>
      </ng-template>
      <ng-template #drawerMainContent>
        <div style="height: 100%; display: flex; flex-direction: column; gap: 16px; padding: 16px">
          <button rteButton rteButtonVariant="primary" rteDrawerTrigger>Open drawer</button>
          <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
            ${loremShort}
          </span>
        </div>
      </ng-template>
    </div>`,
  }),
  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", { name: "Open drawer" });
    await userEvent.click(openButton);
    const drawer = await canvas.findByRole("region", { name: /Responsive Drawer/i }, { timeout: 5000 });
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveAttribute("data-testid", "drawer-responsive-panel");
  },
};

export const CustomHeaderFooter: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent, IconButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    rteDrawerId: "custom-header-footer-drawer",
    rteDrawerCloseOnEscape: true,
  },
  render: (args) => ({
    props: args,
    template: `<div
      rteDrawer
      #drawerHost="rteDrawer"
      [rteDrawerId]="rteDrawerId"
      [rteDrawerTitle]="rteDrawerTitle"
      [rteDrawerIcon]="rteDrawerIcon"
      [rteDrawerIconAppearance]="rteDrawerIconAppearance"
      [rteDrawerPosition]="rteDrawerPosition"
      [rteDrawerWidth]="rteDrawerWidth"
      [rteDrawerCloseOnOverlayClick]="rteDrawerCloseOnOverlayClick"
      [rteDrawerPrimaryButtonLabel]="rteDrawerPrimaryButtonLabel"
      [rteDrawerSecondaryButtonLabel]="rteDrawerSecondaryButtonLabel"
      [rteDrawerIsCollapsible]="rteDrawerIsCollapsible"
      [rteDrawerFixedHeader]="rteDrawerFixedHeader"
      [rteDrawerCloseOnEscape]="rteDrawerCloseOnEscape"
      [rteDrawerIsClosable]="rteDrawerIsClosable"
    >
      <button rteButton rteButtonVariant="primary" rteDrawerTrigger>Open drawer</button>
      <ng-template #drawerContent>
        <span style="font-family: arial; font-size: 14px; line-height: 20px; color: var(--content-primary)">
          ${loremShort}
        </span>
      </ng-template>
      <ng-template #drawerHeader>
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; width: 100%">
          <span style="font-size: 16px; font-weight: bold; font-family: arial; color: var(--content-primary)">
            Custom Header
          </span>
          <rte-icon-button
            name="close"
            size="m"
            variant="neutral"
            ariaLabel="Close drawer"
            (clickEvent)="drawerHost.close()"
          />
        </div>
      </ng-template>
      <ng-template #drawerFooter>
        <div
          style="display: flex; justify-content: flex-end; gap: 8px; box-sizing: border-box; width: 100%"
        >
          <button rteButton rteButtonVariant="primary">Custom Action</button>
        </div>
      </ng-template>
    </div>`,
  }),
};
