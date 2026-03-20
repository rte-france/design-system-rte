import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { expect, userEvent, within } from "@storybook/test";

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
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
  },
};

export const Responsive: Story = {
  decorators: [
    moduleMetadata({
      imports: [DrawerModule, ButtonComponent],
    }),
  ],
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
    const drawer = canvas.getByRole("region");
    expect(drawer).toBeInTheDocument();
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
    rteDrawerTitle: undefined,
    rteDrawerPrimaryButtonLabel: undefined,
    rteDrawerSecondaryButtonLabel: undefined,
    rteDrawerIcon: undefined,
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
