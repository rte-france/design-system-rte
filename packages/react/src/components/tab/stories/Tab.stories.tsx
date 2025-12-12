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
          <div style={{ height: "100%", padding: "16px" }}>
            <span style={{ fontFamily: "Arial" }}>Normal</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          </div>
          <div style={{ backgroundColor: "var(--background-inverse)", marginTop: "16px", padding: "10px" }}>
            <span style={{ color: "var(--content-primary-inverse)", fontFamily: "Arial" }}>Inverted</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} inverted={true} />
          </div>
        </div>
        <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "64px" }}>
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
            width: "100%",
            border: "1px solid #ccc",
            padding: "8px",
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
        <div style={{ display: "flex", gap: "16px", height: "200px" }}>
          <Tab {...args} direction="vertical" options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div
            style={{
              width: "100%",
              border: "1px solid #ccc",
              padding: "8px",
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
        <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
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
        <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
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
        <div style={{ height: "100px", border: "1px solid #ccc", padding: "8px", marginTop: "16px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ width: "400px" }}>
          <span style={{ fontFamily: "Arial" }}>Scrollable</span>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
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
    focusElementBeforeComponent(canvasElement);
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
