import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_DOWN_KEY,
  TESTING_ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect, fn, waitFor } from "@storybook/test";

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
      { id: "home", panelId: "panel-1", icon: "home" },
      { id: "bookmarks", panelId: "panel-2", icon: "bookmarks" },
      { id: "chat", panelId: "panel-3", icon: "chat" },
      { id: "settings", panelId: "panel-3", icon: "settings" },
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

export const WithoutSelectedTab: Story = {
  tags: ["!autodocs"],
  args: {
    options: [
      { id: "tab-1", label: "First Tab", panelId: "panel-1" },
      { id: "tab-2", label: "Second Tab", panelId: "panel-2" },
      { id: "tab-3", label: "Third Tab", panelId: "panel-3" },
    ],
    change: fn(),
    direction: "horizontal",
  },
  render: (args) => ({
    props: {
      ...args,
      handleTabChange(id: string) {
        args.change?.(id);
        this["selectedTabId"] = id;
      },
    },
    template: `
      <button type="button">Before tabs</button>
      <rte-tab
        [options]="options"
        [selectedTabId]="selectedTabId"
        [direction]="direction"
        ariaLabel="Fallback tabs"
        (change)="handleTabChange($event)"
      />
      <button type="button">After tabs</button>
      @for (tab of options; track tab.id) {
        <div
          role="tabpanel"
          [id]="tab.panelId"
          [attr.aria-labelledby]="tab.id"
          [hidden]="selectedTabId !== tab.id"
        >
          Content for {{ tab.label }}
        </div>
      }
    `,
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const tabs = within(canvas.getByRole("tablist")).getAllByRole("tab");
    const enabledTabs = tabs.filter((tab) => tab.getAttribute("data-disabled") !== "true");
    const initialTab = enabledTabs.find((tab) => tab.id === args.selectedTabId) ?? enabledTabs[0];
    const nextKey = args.direction === "vertical" ? TESTING_ARROW_DOWN_KEY : TESTING_ARROW_RIGHT_KEY;
    const previousKey = args.direction === "vertical" ? TESTING_ARROW_UP_KEY : TESTING_ARROW_LEFT_KEY;

    await step("TAB reaches the first enabled tab when selection is missing or invalid", async () => {
      canvas.getByRole("button", { name: "Before tabs" }).focus();
      await userEvent.tab();
      await expect(initialTab).toHaveFocus();
      await expect(initialTab).toHaveAttribute("aria-selected", "true");
      await expect(canvas.getByRole("tabpanel")).toHaveAttribute("aria-labelledby", initialTab.id);
      await expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([initialTab]);
      if (!enabledTabs.some((tab) => tab.id === args.selectedTabId)) {
        await expect(args.change).toHaveBeenCalledTimes(1);
        await expect(args.change).toHaveBeenCalledWith(initialTab.id);
      } else {
        await expect(args.change).not.toHaveBeenCalled();
      }
      for (const tab of tabs.filter((tab) => !enabledTabs.includes(tab))) {
        await expect(tab).toHaveAttribute("aria-selected", "false");
        await expect(args.change).not.toHaveBeenCalledWith(tab.id);
      }
    });

    await step("Arrow keys wrap and skip disabled tabs", async () => {
      const previousTab = enabledTabs[(enabledTabs.indexOf(initialTab) - 1 + enabledTabs.length) % enabledTabs.length];
      await userEvent.keyboard(previousKey);
      await expect(previousTab).toHaveFocus();
      await expect(previousTab).toHaveAttribute("aria-selected", "true");
      await expect(args.change).toHaveBeenLastCalledWith(previousTab.id);
      await expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([previousTab]);
      await userEvent.keyboard(nextKey);
      await expect(initialTab).toHaveFocus();
      await expect(initialTab).toHaveAttribute("aria-selected", "true");
    });

    await step("TAB leaves the tablist without visiting the other tabs", async () => {
      await userEvent.tab();
      await expect(canvas.getByRole("button", { name: "After tabs" })).toHaveFocus();
    });
  },
};

export const InvalidSelectedTab: Story = {
  ...WithoutSelectedTab,
  args: { ...WithoutSelectedTab.args, selectedTabId: "missing-tab" },
  play: WithoutSelectedTab.play,
};

export const FirstTabDisabled: Story = {
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option, index) => ({ ...option, disabled: index === 0 })),
  },
  play: WithoutSelectedTab.play,
};

export const InvalidSelectedTabWithFirstDisabled: Story = {
  ...FirstTabDisabled,
  args: { ...FirstTabDisabled.args, selectedTabId: "missing-tab" },
  play: WithoutSelectedTab.play,
};

export const VerticalWithoutSelectedTab: Story = {
  ...WithoutSelectedTab,
  args: { ...WithoutSelectedTab.args, direction: "vertical" },
  play: WithoutSelectedTab.play,
};

export const SelectedTabIsPreserved: Story = {
  ...WithoutSelectedTab,
  args: { ...WithoutSelectedTab.args, selectedTabId: "tab-2" },
  play: WithoutSelectedTab.play,
};

export const AllTabsDisabled: Story = {
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option) => ({ ...option, disabled: true })),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const tabs = within(canvas.getByRole("tablist")).queryAllByRole("tab");
    await expect(tabs.every((tab) => tab.tabIndex === -1)).toBe(true);
    await expect(tabs.every((tab) => tab.getAttribute("aria-selected") === "false")).toBe(true);
    await expect(args.change).not.toHaveBeenCalled();
    canvas.getByRole("button", { name: "Before tabs" }).focus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "After tabs" })).toHaveFocus();
  },
};

export const EmptyOptions: Story = {
  ...WithoutSelectedTab,
  args: { ...WithoutSelectedTab.args, options: [] },
  play: AllTabsDisabled.play,
};

export const FocusWithoutSelectionUpdate: Story = {
  ...FirstTabDisabled,
  render: (args) => ({
    props: args,
    template: `
      <button type="button">Before tabs</button>
      <rte-tab [options]="options" [selectedTabId]="selectedTabId" (change)="change($event)" />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    canvas.getByRole("button", { name: "Before tabs" }).focus();
    await userEvent.tab();
    await expect(tabs[1]).toHaveFocus();
    await expect(args.change).toHaveBeenCalledTimes(1);
    await expect(args.change).toHaveBeenCalledWith(tabs[1].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[2]).toHaveFocus();
    await expect(args.change).toHaveBeenLastCalledWith(tabs[2].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[1]).toHaveFocus();
    await expect(args.change).toHaveBeenLastCalledWith(tabs[1].id);
    await expect(args.change).not.toHaveBeenCalledWith(tabs[0].id);
    await expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([tabs[1]]);
  },
};

export const SelectionFallbackOnInputChanges: Story = {
  ...FirstTabDisabled,
  render: (args) => ({
    props: {
      ...args,
      currentOptions: [],
      remainingOptions: args.options?.filter((option) => option.id !== "tab-2"),
      handleTabChange(id: string) {
        args.change?.(id);
        this["selectedTabId"] = id;
      },
    },
    template: `
      <button type="button" (click)="currentOptions = options">Load tabs</button>
      <button type="button" (click)="selectedTabId = 'missing-tab'">Invalidate selection</button>
      <button type="button" (click)="currentOptions = remainingOptions">Remove selected tab</button>
      <button type="button" (click)="currentOptions = []">Empty tabs</button>
      <rte-tab
        [options]="currentOptions"
        [selectedTabId]="selectedTabId"
        ariaLabel="Fallback tabs"
        (change)="handleTabChange($event)"
      />
      @for (tab of currentOptions; track tab.id) {
        <div
          role="tabpanel"
          [id]="tab.panelId"
          [attr.aria-labelledby]="tab.id"
          [hidden]="selectedTabId !== tab.id"
        >
          Content for {{ tab.label }}
        </div>
      }
    `,
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);

    await step("Select the first enabled tab when options arrive", async () => {
      await expect(args.change).not.toHaveBeenCalled();
      await userEvent.click(canvas.getByRole("button", { name: "Load tabs" }));
      await waitFor(() => {
        expect(canvas.getByRole("tab", { name: "Second Tab" })).toHaveAttribute("aria-selected", "true");
      });
      await expect(args.change).toHaveBeenCalledTimes(1);
      await expect(args.change).toHaveBeenLastCalledWith("tab-2");
      await expect(args.change).not.toHaveBeenCalledWith("tab-1");
    });

    await step("Restore the default when selectedTabId becomes invalid", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Invalidate selection" }));
      await waitFor(() => expect(args.change).toHaveBeenCalledTimes(2));
      await expect(args.change).toHaveBeenLastCalledWith("tab-2");
      await expect(canvas.getByRole("tab", { name: "Second Tab" })).toHaveAttribute("aria-selected", "true");
    });

    await step("Select the next enabled tab when the selected option is removed", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Remove selected tab" }));
      await waitFor(() => {
        expect(canvas.getByRole("tab", { name: "Third Tab" })).toHaveAttribute("aria-selected", "true");
      });
      await expect(args.change).toHaveBeenCalledTimes(3);
      await expect(args.change).toHaveBeenLastCalledWith("tab-3");
    });

    await step("Preserve a valid selection when other options return", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Load tabs" }));
      await expect(canvas.getByRole("tab", { name: "Third Tab" })).toHaveAttribute("aria-selected", "true");
      await expect(args.change).toHaveBeenCalledTimes(3);
    });

    await step("Do not request selection when options become empty", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Empty tabs" }));
      await expect(canvas.queryAllByRole("tab")).toHaveLength(0);
      await expect(args.change).toHaveBeenCalledTimes(3);
    });
  },
};
