import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

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
    focusElementBeforeComponent(canvasElement);
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
