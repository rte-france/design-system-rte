import { BadgeContent, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_DOWN_KEY,
  TESTING_ARROW_UP_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent, fn } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Tab from "../Tab";

const meta = {
  title: "Composants/Tab",
  component: Tab,
  argTypes: {
    options: { control: "object" },
    alignment: {
      control: "select",
      options: ["start", "center"],
    },
    onChange: { action: "tab changed" },
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
    "aria-label": {
      control: "text",
      description: "Accessible name for the tab list",
    },
  },
  parameters: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
    options: [],
    alignment: "start",
    overflowType: "scrollable",
    "aria-label": "Sample tabs",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("tab-2");
    const tabs = [
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
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <>
        <div>
          <div style={{ height: "100%", padding: "16px", fontFamily: "Arial" }}>
            <span>Normal</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          </div>
          <div
            style={{
              backgroundColor: "var(--background-inverse)",
              marginTop: "16px",
              padding: "10px",
              fontFamily: "Arial",
            }}
          >
            <span style={{ color: "var(--content-primary-inverse)" }}>Inverted</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} inverted={true} />
          </div>
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid #ccc",
            padding: "8px",
            marginTop: "64px",
            color: "var(--content-secondary)",
            fontFamily: "Arial",
          }}
        >
          {tabs.map((tab) => (
            <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
    direction: "vertical",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [
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
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <div style={{ display: "flex", gap: "16px" }}>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div
          style={{
            height: "100px",
            border: "1px solid var(--border-secondary)",
            padding: "8px",
            marginTop: "16px",
            color: "var(--content-secondary)",
            fontFamily: "Arial",
          }}
        >
          <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" hidden={selectedTab !== "tab-1"}>
            Contenu onglet 1
          </div>
          <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden={selectedTab !== "tab-2"}>
            Contenu onglet 2
          </div>
          <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden={selectedTab !== "tab-3"}>
            Contenu onglet 3
          </div>
        </div>
      </div>
    );
  },
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
    compactSpacing: true,
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [
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
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div
            style={{
              height: "100px",
              border: "1px solid var(--border-secondary)",
              padding: "8px",
              marginTop: "16px",
              color: "var(--content-secondary)",
              fontFamily: "Arial",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={selectedTab !== tab.id}
              >
                Contenu onglet {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", height: "200px" }}>
          <Tab {...args} direction="vertical" options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div
            style={{
              height: "100px",
              border: "1px solid var(--border-secondary)",
              padding: "8px",
              marginTop: "16px",
              color: "var(--content-secondary)",
              fontFamily: "Arial",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={selectedTab !== tab.id}
              >
                Contenu onglet {tab.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("photos");
    const tabs = [
      { id: "photos", label: "Photos", panelId: "panel-1", icon: "photo-camera" },
      { id: "videos", label: "Vidéos", panelId: "panel-2", icon: "video-camera", disabled: true },
      { id: "musique", label: "Musique", panelId: "panel-3", icon: "headphones" },
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div
          style={{
            height: "100px",
            border: "1px solid var(--border-secondary)",
            padding: "8px",
            marginTop: "16px",
            color: "var(--content-secondary)",
            fontFamily: "Arial",
          }}
        >
          {tabs.map((tab) => (
            <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const IconsOnly: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("home");
    const tabs = [
      { id: "home", panelId: "panel-1", icon: "home" },
      { id: "bookmarks", panelId: "panel-2", icon: "bookmarks" },
      { id: "chat", panelId: "panel-3", icon: "chat" },
      { id: "settings", panelId: "panel-3", icon: "settings" },
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div
          style={{
            height: "100px",
            border: "1px solid var(--border-secondary)",
            padding: "8px",
            marginTop: "16px",
            color: "var(--content-secondary)",
            fontFamily: "Arial",
          }}
        >
          {tabs.map((tab) => (
            <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.id}
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("photos");
    const tabs = [
      {
        id: "photos",
        label: "Photos",
        panelId: "panel-1",
        icon: "photo-camera",
        badgeCount: 5,
        badgeContent: "number" as BadgeContent,
        badgeType: "indicator" as BadgeType,
        showBadge: true,
      },
      { id: "videos", label: "Vidéos", panelId: "panel-2", icon: "video-camera" },
      { id: "musique", label: "Musique", panelId: "panel-3", icon: "headphones" },
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div
          style={{
            height: "100px",
            border: "1px solid var(--border-secondary)",
            padding: "8px",
            marginTop: "16px",
            color: "var(--content-secondary)",
            fontFamily: "Arial",
          }}
        >
          {tabs.map((tab) => (
            <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const OverflowType: Story = {
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [
      {
        id: "tab-1",
        label: "First Tab very long and descriptive",
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
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          color: "var(--content-secondary)",
          fontFamily: "Arial",
        }}
      >
        <div style={{ width: "400px" }}>
          <span style={{ fontFamily: "Arial" }}>Scrollable</span>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div
            style={{
              height: "100px",
              border: "1px solid #ccc",
              padding: "8px",
              marginTop: "16px",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={selectedTab !== tab.id}
              >
                Contenu onglet {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "400px" }}>
          <span style={{ fontFamily: "Arial" }}>Dropdown</span>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} overflowType="dropdown" />
          <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={selectedTab !== tab.id}
              >
                Contenu onglet {tab.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
  },

  render: (args) => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [
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
    ];

    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };

    return (
      <div style={{ height: "150px" }}>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
          {tabs.map((tab) => (
            <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>
          ))}
        </div>
      </div>
    );
  },

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
      expect(canvas.getByText(`Contenu onglet ${tab.textContent}`)).toBeVisible();
    };

    const expectTabToBeNotSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "false");
      expect(tab).not.toHaveFocus();
      expect(canvas.getByText(`Contenu onglet ${tab.textContent}`)).not.toBeVisible();
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
    onChange: fn(),
  },
  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState(args.selectedTabId);
    return (
      <>
        <button type="button">Before tabs</button>
        <Tab
          {...args}
          aria-label="Fallback tabs"
          selectedTabId={selectedTabId}
          onChange={(id) => {
            args.onChange(id);
            setSelectedTabId(id);
          }}
        />
        <button type="button">After tabs</button>
        {args.options.map((tab) => (
          <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTabId !== tab.id}>
            Content for {tab.label}
          </div>
        ))}
      </>
    );
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const tabs = within(canvas.getByRole("tablist")).getAllByRole("tab");
    const enabledTabs = tabs.filter((tab) => tab.getAttribute("aria-disabled") !== "true");
    const initialTab = enabledTabs.find((tab) => tab.id === args.selectedTabId) ?? enabledTabs[0];
    const nextKey = args.direction === "vertical" ? TESTING_ARROW_DOWN_KEY : TESTING_ARROW_RIGHT_KEY;
    const previousKey = args.direction === "vertical" ? TESTING_ARROW_UP_KEY : TESTING_ARROW_LEFT_KEY;

    await step("TAB reaches the first enabled tab when selection is missing or invalid", async () => {
      canvas.getByRole("button", { name: "Before tabs" }).focus();
      await userEvent.tab();
      await expect(initialTab).toHaveFocus();
      await expect(initialTab).toHaveAttribute("aria-selected", "true");
      await expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([initialTab]);
      if (!args.options.some((option) => option.id === args.selectedTabId)) {
        await expect(args.onChange).toHaveBeenCalledWith(initialTab.id);
      } else {
        await expect(args.onChange).not.toHaveBeenCalled();
      }
      for (const tab of tabs.filter((tab) => !enabledTabs.includes(tab))) {
        await expect(tab).toHaveAttribute("aria-selected", "false");
        await expect(args.onChange).not.toHaveBeenCalledWith(tab.id);
      }
    });

    await step("Arrow keys wrap and skip disabled tabs", async () => {
      const previousTab = enabledTabs[(enabledTabs.indexOf(initialTab) - 1 + enabledTabs.length) % enabledTabs.length];
      await userEvent.keyboard(previousKey);
      await expect(previousTab).toHaveFocus();
      await expect(previousTab).toHaveAttribute("aria-selected", "true");
      await expect(args.onChange).toHaveBeenLastCalledWith(previousTab.id);
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
    await expect(args.onChange).not.toHaveBeenCalled();
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
  render: (args) => (
    <>
      <button type="button">Before tabs</button>
      <Tab {...args} />
    </>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    canvas.getByRole("button", { name: "Before tabs" }).focus();
    await userEvent.tab();
    await expect(tabs[1]).toHaveFocus();
    await expect(args.onChange).toHaveBeenCalledWith(tabs[1].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[2]).toHaveFocus();
    await expect(args.onChange).toHaveBeenLastCalledWith(tabs[2].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[1]).toHaveFocus();
    await expect(args.onChange).toHaveBeenLastCalledWith(tabs[1].id);
    await expect(args.onChange).not.toHaveBeenCalledWith(tabs[0].id);
    await expect(tabs.filter((tab) => tab.tabIndex === 0)).toEqual([tabs[1]]);
  },
};
