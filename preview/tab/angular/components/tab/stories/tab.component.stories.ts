import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { TabComponent } from "../tab.component";

const meta: Meta<TabComponent> = {
  title: "Tab",
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
        disabled: true,
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
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div *ngIf="selectedTabId === 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-3'" id="panel-3">
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
        />
        <div style="width: 100%; border: 1px solid #ccc; padding: 8px">
          <div *ngIf="selectedTabId === 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-3'" id="panel-3">
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
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div *ngIf="selectedTabId === 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-3'" id="panel-3">
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
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div *ngIf="selectedTabId === 'home'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'bookmarks'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'chat'" id="panel-3">
            Content for Third Tab
          </div>
          <div *ngIf="selectedTabId === 'settings'" id="panel-3">
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
        badgeAppearance: "text",
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
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div *ngIf="selectedTabId === 'photos'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'videos'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'musique'" id="panel-3">
            Content for Third Tab
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
    ],
    selectedTabId: "tab-1",
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
        />
        <div style="height: 100px; border: 1px solid #ccc; padding: 8px; marginTop: 16px">
          <div *ngIf="selectedTabId === 'tab-1'" id="panel-1">
            Content for First Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-2'" id="panel-2">
            Content for Second Tab
          </div>
          <div *ngIf="selectedTabId === 'tab-3'" id="panel-3">
            Content for Third Tab
          </div>
        </div>
    </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const firstTab = await canvas.getByRole("tab", { name: "First Tab" });
    const secondTab = await canvas.getByRole("tab", { name: "Second Tab" });
    const thirdTab = await canvas.getByRole("tab", { name: "Third Tab" });

    const expectTabToBeSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "true");
      expect(tab).toHaveFocus();
      expect(canvas.getByText(`Content for ${tab.textContent}`)).toBeVisible();
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

    await step("Navigate back to the first tab when there are no next tabs", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(firstTab);
    });

    await step("Navigate back to the third tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expectTabToBeSelected(thirdTab);
    });
  },
};
