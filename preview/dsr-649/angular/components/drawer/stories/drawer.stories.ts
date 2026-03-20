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

const drawerDocsDescription = `
Use \`rteDrawer\` on a host element with \`#drawerContent\` (required). For **responsive** mode, add \`#drawerMainContent\` and set \`rteDrawerPosition\` to \`responsive\`.

**Responsive layout:** the host must define a **height** (e.g. inline \`height: 500px\`) or sit in a flex parent with a definite size so the drawer and main column share the box. The directive applies a column flex layout on the host and **moves** the created \`rte-drawer\` **inside** that host (Angular’s default dynamic insert would leave it as a sibling and break the “one bordered context” layout). Main column + drawer panel both live inside the same host, like React’s single \`drawer-responsive-container\`.

**Trigger:** use \`rteDrawerTrigger\` on a control inside or beside the templates; clicks are handled via event delegation (\`data-rte-drawer-trigger\`).

**vs React:** drawer panel \`max-height\` uses \`100%\` of the responsive shell (React uses \`100vh\` in one place) so embedded Storybook frames size correctly.

**Focus:** responsive mode uses the same focus trap as modal when open (parity with React \`useFocusTrap\`).

When the design specification (Google Doc) is available, validate: roles, 240ms animation, inline vs modal layout, and focus behavior against this API.
`.trim();

const meta: Meta<DrawerDirective> = {
  title: "Composants/Drawer",
  component: DrawerDirective,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: drawerDocsDescription,
      },
    },
  },
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
    const drawer = await within(document.body).findByRole("dialog");
    expect(drawer).toBeInTheDocument();
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
