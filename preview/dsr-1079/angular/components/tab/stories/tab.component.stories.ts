import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { TabComponent } from "../tab.component";

const meta: Meta<TabComponent> = {
  title: "Composants/Tab",
  component: TabComponent,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    alignment: {
      control: "select",
      options: ["start", "center"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    selectedTabId: { control: "text" },
    compactSpacing: { control: "boolean" },
    inverted: { control: "boolean" },
    overflowType: {
      control: "select",
      options: ["scrollable", "dropdown"],
    },
  },
};
export default meta;
type Story = StoryObj<TabComponent>;

export const Default: Story = {
  args: {
    options: [
      {
        id: "tab-1",
        label: "First Tab",
        panelId: "panel-1",
      },
      {
        id: "tab-2",
        label: "Second Tab",
        panelId: "panel-2",
      },
      {
        id: "tab-3",
        label: "Third Tab",
        panelId: "panel-3",
      },
    ],
    selectedTabId: "tab-1",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
    inverted: false,
    overflowType: "scrollable",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div>
      <div style="height: 100%; padding: 16px">
        <span style="font-family: Arial">Normal</span>
        <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="inverted"
        [overflowType]="overflowType"
        />
      </div>
      <div style="height: 100%; padding: 16px;  background-color: var(--background-inverse)">
        <span style="color: var(--content-primary-inverse); font-family: Arial">Inverted</span>
        <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="true"
        [overflowType]="overflowType"
        />
      </div>
      <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 64px">
          <div [hidden]="selectedTabId !== 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
        </div>
    </div>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    options: [
      {
        id: "tab-1",
        label: "First Tab",
        panelId: "panel-1",
      },
      {
        id: "tab-2",
        label: "Second Tab",
        panelId: "panel-2",
      },
      {
        id: "tab-3",
        label: "Third Tab",
        panelId: "panel-3",
      },
    ],
    selectedTabId: "tab-1",
    alignment: "start",
    direction: "vertical",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        console.log("Tab changed to:", id);
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div style="display: flex; gap: 16px; height: 200px">
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="inverted"
        [overflowType]="overflowType"
        />
        <div style="width: 100%; border: 1px solid #ccc; padding: 8px">
          <div [hidden]="selectedTabId !== 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
        </div>
    </div>
    `,
  }),
};

export const WithIcons: Story = {
  args: {
    options: [
      {
        id: "photos",
        label: "Photos",
        panelId: "panel-1",
        icon: "photo-camera",
      },
      {
        id: "videos",
        label: "Vidéos",
        panelId: "panel-2",
        icon: "video-camera",
      },
      {
        id: "musique",
        label: "Musique",
        panelId: "panel-3",
        icon: "headphones",
      },
    ],
    selectedTabId: "photos",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div>
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="inverted"
        [overflowType]="overflowType"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'photos'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'videos'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'musique'" id="panel-3">
            Content for Third Tab
          </div>
        </div>
    </div>
    `,
  }),
};

export const IconsOnly: Story = {
  args: {
    options: [
      { id: "home", panelId: "panel-1", icon: "home", ariaLabel: "Home tab" },
      { id: "bookmarks", panelId: "panel-2", icon: "bookmarks", ariaLabel: "Bookmarks tab" },
      { id: "chat", panelId: "panel-3", icon: "chat", ariaLabel: "Chat tab" },
      { id: "settings", panelId: "panel-3", icon: "settings", ariaLabel: "Settings tab" },
    ],
    selectedTabId: "home",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div>
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="inverted"
        [overflowType]="overflowType"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'home'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'bookmarks'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'chat'" id="panel-3">
            Content for Third Tab
          </div>
          <div [hidden]="selectedTabId !== 'settings'" id="panel-3">
            Content for Fourth Tab
          </div>
        </div>
    </div>
    `,
  }),
};
export const WithBadge: Story = {
  args: {
    options: [
      {
        id: "photos",
        label: "Photos",
        panelId: "panel-1",
        icon: "photo-camera",
        badgeCount: 5,
        badgeContent: "number",
        badgeType: "indicator",
        showBadge: true,
      },
      {
        id: "videos",
        label: "Vidéos",
        panelId: "panel-2",
        icon: "video-camera",
      },
      {
        id: "musique",
        label: "Musique",
        panelId: "panel-3",
        icon: "headphones",
      },
    ],
    selectedTabId: "photos",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div>
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [inverted]="inverted"
        [overflowType]="overflowType"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'photos'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'videos'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'musique'" id="panel-3">
            Content for Third Tab
          </div>
        </div>
    </div>
    `,
  }),
};

export const BadgeVisibility: Story = {
  tags: ["!autodocs"],
  args: {
    options: [
      { id: "none", label: "No badge", panelId: "panel-none" },
      { id: "indicator", label: "Indicator", panelId: "panel-indicator", showBadge: true },
      {
        id: "number",
        label: "Number",
        panelId: "panel-number",
        badgeContent: "number",
        badgeCount: 5,
        showBadge: true,
      },
      {
        id: "number-auto",
        label: "Automatic number",
        panelId: "panel-number-auto",
        badgeContent: "number",
        badgeCount: 5,
        showBadge: false,
      },
      {
        id: "icon",
        label: "Icon",
        panelId: "panel-icon",
        badgeContent: "icon",
        badgeIcon: "notification",
        showBadge: true,
      },
      {
        id: "icon-auto",
        label: "Automatic icon",
        panelId: "panel-icon-auto",
        badgeContent: "icon",
        badgeIcon: "notification",
        showBadge: false,
      },
      { id: "neutral", label: "Neutral", panelId: "panel-neutral", showBadge: true, badgeType: "neutral" },
      { id: "hidden", label: "Explicitly hidden", panelId: "panel-hidden", showBadge: false },
      { id: "type-only", label: "Type only", panelId: "panel-type-only", badgeType: "neutral" },
      { id: "content-only", label: "Content only", panelId: "panel-content-only", badgeContent: "empty" },
      { id: "count-only", label: "Count only", panelId: "panel-count-only", badgeCount: 5 },
      { id: "icon-only", label: "Icon name only", panelId: "panel-icon-only", badgeIcon: "notification" },
      { id: "missing-count", label: "Missing count", panelId: "panel-missing-count", badgeContent: "number" },
      { id: "zero", label: "Zero", panelId: "panel-zero", badgeContent: "number", badgeCount: 0 },
      { id: "negative", label: "Negative", panelId: "panel-negative", badgeContent: "number", badgeCount: -1 },
      { id: "missing-icon", label: "Missing icon", panelId: "panel-missing-icon", badgeContent: "icon" },
      {
        id: "disabled-indicator",
        label: "Disabled indicator",
        panelId: "panel-disabled-indicator",
        disabled: true,
        showBadge: true,
      },
      {
        id: "disabled-number",
        label: "Disabled number",
        panelId: "panel-disabled-number",
        disabled: true,
        showBadge: true,
        badgeContent: "number",
        badgeCount: 5,
      },
      {
        id: "disabled-icon",
        label: "Disabled icon",
        panelId: "panel-disabled-icon",
        disabled: true,
        showBadge: true,
        badgeContent: "icon",
        badgeIcon: "notification",
      },
    ],
    selectedTabId: "none",
    direction: "vertical",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        [direction]="direction"
        [inverted]="inverted"
        ariaLabel="Badge visibility"
        (change)="change($event)"
      />
      @for (option of options; track option.id) {
        <div
          role="tabpanel"
          [id]="option.panelId"
          [attr.aria-labelledby]="option.id"
          [hidden]="selectedTabId !== option.id"
        >
          Content for {{ option.label }}
        </div>
      }
    `,
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    const tabsWithBadge = ["indicator", "number", "number-auto", "icon", "icon-auto", "neutral"];
    await expect(tabs).toHaveLength(args.options.length);

    for (const tab of tabs) {
      await step(`Badge visibility: ${tab.id}`, async () => {
        const badge = within(tab).queryByTestId("badge");
        if (tabsWithBadge.includes(tab.id)) {
          await expect(badge).toBeVisible();
          await expect(badge).toHaveClass(tab.id === "neutral" ? "type-neutral" : "type-indicator");
        } else {
          await expect(badge).not.toBeInTheDocument();
        }
      });
    }

    await expect(within(canvas.getByRole("tab", { name: "Number 5" })).getByTestId("badge")).toHaveTextContent("5");
    await expect(
      within(canvas.getByRole("tab", { name: "Icon" }))
        .getByTestId("badge")
        .querySelector("svg"),
    ).toBeInTheDocument();
  },
};

export const OverflowType: Story = {
  args: {
    options: [
      {
        id: "tab-1",
        label: "First Tab very long and descriptive",
        panelId: "panel-1",
      },
      {
        id: "tab-2",
        label: "Second Tab",
        panelId: "panel-2",
        badgeCount: 5,
        badgeContent: "number",
        badgeType: "indicator",
        showBadge: true,
      },
      {
        id: "tab-3",
        label: "Third Tab",
        panelId: "panel-3",
      },
      {
        id: "tab-4",
        label: "Fourth Tab",
        panelId: "panel-4",
        disabled: true,
      },
      {
        id: "tab-5",
        label: "Fifth Tab",
        panelId: "panel-5",
      },
    ],
    selectedTabId: "tab-1",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
    overflowType: "scrollable",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div style="display: flex; flexDirection: column; gap: 32px">
      <div style="width: 400px">
        <span style="font-family: Arial">Scrollable</span>
        <rte-tab
          [options]="options"
          [selectedTabId]="selectedTabId"
          (change)="change($event)"
          [direction]="direction"
          [alignment]="alignment"
          [compactSpacing]="compactSpacing"
          [overflowType]="overflowType"
          [inverted]="inverted"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-4'" id="panel-4">
            Content for Fourth Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-5'" id="panel-5">
            Content for Fifth Tab
          </div>
        </div>
      </div>
      <div style="width: 400px">
        <span style="font-family: Arial">Dropdown</span>
        <rte-tab
          [options]="options"
          [selectedTabId]="selectedTabId"
          (change)="change($event)"
          [direction]="direction"
          [alignment]="alignment"
          [compactSpacing]="compactSpacing"
          [overflowType]="'dropdown'"
          ariaLabel="Dropdown tabs"
          [inverted]="inverted"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-4'" id="panel-4">
            Content for Fourth Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-5'" id="panel-5">
            Content for Fifth Tab
          </div>
        </div>
      </div>
    </div>
    `,
  }),
};

export const OverflowTypeInteraction: Story = {
  tags: ["!autodocs", "tab-dropdown-interaction"],
  args: OverflowType.args,
  render: OverflowType.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const tabList = within(canvas.getByRole("tablist", { name: "Dropdown tabs" }));
    const selectedTab = await tabList.findByRole("tab", {
      name: "First Tab very long and descriptive",
      selected: true,
    });
    const dropdownButton = await canvas.findByRole("button", { name: "Afficher les autres onglets" });
    const expectChevronAlignment = async () => {
      const selectedTab = tabList.getByRole("tab", { selected: true });
      const tabBounds = selectedTab.getBoundingClientRect();
      const buttonBounds = dropdownButton.getBoundingClientRect();

      await expect(buttonBounds.left - tabBounds.right).toBeCloseTo(
        parseFloat(getComputedStyle(selectedTab).marginRight),
        1,
      );
      await expect(buttonBounds.top + buttonBounds.height / 2).toBeCloseTo(tabBounds.top + tabBounds.height / 2, 1);
    };

    await expect(selectedTab.querySelector("button")).toBeNull();
    await expect(tabList.queryByRole("button", { name: "Afficher les autres onglets" })).toBeNull();
    await expectChevronAlignment();
    await expect(dropdownButton).toHaveAttribute("aria-haspopup", "true");
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(selectedTab);
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(dropdownButton);
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "true"));
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement?.closest('[role="menu"]')).not.toBeNull());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "false"));
    await waitFor(() => expect(dropdownButton).toHaveFocus());

    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "true"));
    await waitFor(() => expect(canvasElement.ownerDocument.activeElement?.closest('[role="menu"]')).not.toBeNull());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "false"));
    await waitFor(() => expect(dropdownButton).toHaveFocus());

    await userEvent.keyboard("{Enter}");
    await userEvent.click(await page.findByRole("menuitem", { name: "Second Tab 5" }));
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(tabList.getByRole("tab", { name: "Second Tab", selected: true })).toBeVisible();
    await waitFor(() => expect(dropdownButton).toHaveFocus());
    await expectChevronAlignment();
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    options: [
      {
        id: "tab-1",
        label: "First Tab",
        panelId: "panel-1",
      },
      {
        id: "tab-2",
        label: "Second Tab",
        panelId: "panel-2",
      },
      {
        id: "tab-3",
        label: "Third Tab",
        panelId: "panel-3",
      },
      {
        id: "tab-4",
        label: "Fourth Tab",
        panelId: "panel-4",
        disabled: true,
      },
      {
        id: "tab-5",
        label: "Fifth Tab",
        panelId: "panel-5",
      },
    ],
    selectedTabId: "tab-1",
    alignment: "start",
    compactSpacing: false,
    direction: "horizontal",
    overflowType: "scrollable",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
    <div style="height: 150px">
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        (change)="change($event)"
        [direction]="direction"
        [alignment]="alignment"
        [compactSpacing]="compactSpacing"
        [overflowType]="overflowType"
        [inverted]="inverted"
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div [hidden]="selectedTabId !== 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-4'" id="panel-4">
            Content for Fourth Tab
          </div>
          <div [hidden]="selectedTabId !== 'tab-5'" id="panel-5">
            Content for Fifth Tab
          </div>
        </div>
    </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent();
    const firstTab = await canvas.getByRole("tab", { name: "First Tab" });
    const secondTab = await canvas.getByRole("tab", { name: "Second Tab" });
    const thirdTab = await canvas.getByRole("tab", { name: "Third Tab" });
    const fourthTab = await canvas.getByRole("tab", { name: "Fourth Tab" });
    const fifthTab = await canvas.getByRole("tab", { name: "Fifth Tab" });

    const expectTabToBeSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "true");
      expect(tab).toHaveFocus();
      expect(canvas.getByText(`Content for ${tab.textContent}`)).toBeVisible();
    };

    const expectTabToBeNotSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "false");
      expect(tab).not.toHaveFocus();
      expect(canvas.getByText(`Content for ${tab.textContent}`)).not.toBeVisible();
    };

    await step("Focus on the first tab and select it", async () => {
      await userEvent.tab();
      expectTabToBeSelected(firstTab);
    });

    await step("Navigate to the second tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(secondTab);
    });

    await step("Navigate to the second tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(thirdTab);
    });

    await step("Navigate directly to the fifth tab and select it because the forth is disabled", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(fifthTab);
      expectTabToBeNotSelected(fourthTab);
    });

    await step("Navigate back to the first tab when there are no next tabs", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(firstTab);
    });

    await step("Navigate back to the last tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expectTabToBeSelected(fifthTab);
    });
  },
};

const accessibleNameValidationCases = [
  {
    id: "label",
    title: "label only",
    expectedAriaLabel: "Libellé seul",
    options: [
      { id: "ref", panelId: "ref-panel", label: "Référence" },
      { id: "target", panelId: "target-panel", label: "Libellé seul" },
    ],
  },
  {
    id: "ariaLabel",
    title: "ariaLabel override",
    expectedAriaLabel: "3 nouvelles alertes",
    options: [
      { id: "ref", panelId: "ref-panel", label: "Référence" },
      {
        id: "target",
        panelId: "target-panel",
        label: "Visible (ignoré SR)",
        ariaLabel: "3 nouvelles alertes",
      },
    ],
  },
  {
    id: "labelNumberBadge",
    title: "label + number badge",
    expectedAriaLabel: "Alertes, 3",
    options: [
      { id: "ref", panelId: "ref-panel", label: "Référence" },
      {
        id: "target",
        panelId: "target-panel",
        label: "Alertes",
        badgeContent: "number",
        badgeCount: 3,
        badgeType: "indicator",
      },
    ],
  },
  {
    id: "labelEmptyBadge",
    title: "label + empty badge",
    expectedAriaLabel: "Favoris. Notification",
    options: [
      { id: "ref", panelId: "ref-panel", label: "Référence" },
      {
        id: "target",
        panelId: "target-panel",
        label: "Favoris",
        showBadge: true,
        badgeContent: "empty",
        badgeType: "indicator",
      },
    ],
  },
  {
    id: "iconOnly",
    title: "icon without label",
    expectedAriaLabel: "view-column",
    options: [
      { id: "ref", panelId: "ref-panel", icon: "view-agenda", ariaLabel: "view-agenda" },
      { id: "target", panelId: "target-panel", icon: "view-column", ariaLabel: "view-column" },
    ],
  },
  {
    id: "iconNumberBadge",
    title: "icon + badgeCount",
    expectedAriaLabel: "view-column. Notifications, 3",
    options: [
      { id: "ref", panelId: "ref-panel", icon: "view-agenda", ariaLabel: "view-agenda" },
      {
        id: "target",
        panelId: "target-panel",
        icon: "view-column",
        ariaLabel: "view-column",
        showBadge: true,
        badgeContent: "number",
        badgeCount: 3,
        badgeType: "indicator",
      },
    ],
  },
  {
    id: "iconBadgeIcon",
    title: "icon + badgeIcon",
    expectedAriaLabel: "view-grid. Notification",
    options: [
      { id: "ref", panelId: "ref-panel", icon: "view-agenda", ariaLabel: "view-agenda" },
      {
        id: "target",
        panelId: "target-panel",
        icon: "view-grid",
        ariaLabel: "view-grid",
        showBadge: true,
        badgeContent: "icon",
        badgeIcon: "notification",
        badgeType: "indicator",
      },
    ],
  },
];

export const AccessibleNameValidation: Story = {
  tags: ["!autodocs"],
  render: () => ({
    props: {
      cases: accessibleNameValidationCases,
      selectedByCase: Object.fromEntries(
        accessibleNameValidationCases.map((validationCase) => [validationCase.id, "ref"]),
      ),
      onCaseChange(caseId: string, tabId: string) {
        this["selectedByCase"] = { ...this["selectedByCase"], [caseId]: tabId };
      },
    },
    template: `
      <div
        data-testid="accessible-name-validation"
        style="display: flex; flex-direction: column; gap: 28px; max-width: 420px; padding: 8px;"
      >
        <p style="margin: 0; font-size: 14px;">
          Focus the <strong>second tab</strong> of each list. Compare its <code>aria-label</code> with the expected
          value below.
        </p>
        @for (validationCase of cases; track validationCase.id) {
          <section [attr.aria-labelledby]="'case-' + validationCase.id + '-title'">
            <h3 [id]="'case-' + validationCase.id + '-title'" style="margin: 0 0 4px; font-size: 16px;">
              {{ validationCase.title }}
            </h3>
            <p style="margin: 0 0 8px; font-size: 13px; color: #555;">
              Expected 2nd tab: <code>{{ validationCase.expectedAriaLabel }}</code>
            </p>
            <rte-tab
              [options]="validationCase.options"
              [selectedTabId]="selectedByCase[validationCase.id]"
              [ariaLabel]="validationCase.title"
              (change)="onCaseChange(validationCase.id, $event)"
            />
          </section>
        }
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sections = canvas.getByTestId("accessible-name-validation").querySelectorAll("section");

    accessibleNameValidationCases.forEach((validationCase, index) => {
      const tabs = Array.from(sections[index].querySelectorAll("[role='tab']"));
      expect(tabs[1]).toHaveAttribute("aria-label", validationCase.expectedAriaLabel);
    });
  },
};
