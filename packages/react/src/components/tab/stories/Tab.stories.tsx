import { BadgeContent, BadgeType } from "@design-system-rte/core/components/badge/badge.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";
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
      { id: "home", panelId: "panel-1", icon: "home", ariaLabel: "Home" },
      { id: "bookmarks", panelId: "panel-2", icon: "bookmarks", ariaLabel: "Bookmarks" },
      { id: "chat", panelId: "panel-3", icon: "chat", ariaLabel: "Chat" },
      { id: "settings", panelId: "panel-4", icon: "settings", ariaLabel: "Settings" },
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

export const BadgeVisibility: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    options: [
      { id: "none", label: "No badge", panelId: "panel-none" },
      { id: "indicator", label: "Indicator", panelId: "panel-indicator", showBadge: true },
      { id: "number", label: "Number", panelId: "panel-number", badgeContent: "number", badgeCount: 5 },
      {
        id: "number-auto",
        label: "Automatic number",
        panelId: "panel-number-auto",
        badgeContent: "number",
        badgeCount: 5,
        showBadge: false,
      },
      { id: "icon", label: "Icon", panelId: "panel-icon", badgeContent: "icon", badgeIcon: "notification" },
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
    "aria-label": "Badge visibility",
  },
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState(args.selectedTabId);
    return (
      <>
        <Tab {...args} selectedTabId={selectedTab} onChange={setSelectedTab} />
        {args.options.map((option) => (
          <div
            key={option.id}
            role="tabpanel"
            id={option.panelId}
            aria-labelledby={option.id}
            hidden={selectedTab !== option.id}
          >
            Content for {option.label}
          </div>
        ))}
      </>
    );
  },
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
          await expect(badge).toHaveAttribute("data-badge-type", tab.id === "neutral" ? "neutral" : "indicator");
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
