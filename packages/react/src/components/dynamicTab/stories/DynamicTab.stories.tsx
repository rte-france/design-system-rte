import { DynamicTabItemOption, TESTING_ARROW_LEFT_KEY, TESTING_ARROW_RIGHT_KEY } from "@design-system-rte/core";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent, waitFor } from "@storybook/test";
import { useState } from "react";

import DynamicTab from "../DynamicTab";

const meta = {
  title: "Composants/DynamicTab/DynamicTab",
  component: DynamicTab,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: { type: "select" },
      options: ["neutral", "brand"],
    },
  },
} satisfies Meta<typeof DynamicTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "dynamic-tab",
    appearance: "neutral",
    selectedTabId: "tab3",
    isClosable: true,
    isEditable: true,
    iconName: "star",
    options: [
      {
        id: "tab1",
        title: "Tab 1",
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
      },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
    ],
    compactSpacing: false,
  },

  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState(args.selectedTabId);

    const myTabs: DynamicTabItemOption[] = [
      {
        id: "tab1",
        title: "Tab 1",
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
      },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
      { id: "tab5", title: "Tab 5" },
    ];

    const [tabOptions, setTabOptions] = useState<DynamicTabItemOption[]>(myTabs);

    const newTabConfig: DynamicTabItemOption = {
      id: "tab" + (tabOptions.length + 1),
      title: "New Tab",
    };

    const handleOnChange = (newSelectedTabId: string) => {
      setSelectedTabId(newSelectedTabId);
    };

    return (
      <>
        <div style={{ width: `1000px` }}>
          <DynamicTab
            {...args}
            options={tabOptions}
            selectedTabId={selectedTabId}
            newTabConfig={newTabConfig}
            onChangeActiveTab={handleOnChange}
            onUpdateTabs={(updatedTabs) => setTabOptions(updatedTabs)}
          />
          <div style={{ fontFamily: "Arial" }}>
            <p>Selected Tab ID: {selectedTabId}</p>
          </div>
        </div>
      </>
    );
  },
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },

  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState(args.selectedTabId);

    const myTabs: DynamicTabItemOption[] = [
      {
        id: "tab1",
        title: "Tab 1",
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
      },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
      { id: "tab5", title: "Tab 5" },
    ];

    const [tabOptions, setTabOptions] = useState<DynamicTabItemOption[]>(myTabs);

    const newTabConfig: DynamicTabItemOption = {
      id: "tab" + (tabOptions.length + 1),
      title: "New Tab",
    };

    const handleOnChange = (newSelectedTabId: string) => {
      setSelectedTabId(newSelectedTabId);
    };

    return (
      <>
        <div style={{ width: `1000px` }}>
          <DynamicTab
            {...args}
            options={tabOptions}
            selectedTabId={selectedTabId}
            newTabConfig={newTabConfig}
            onChangeActiveTab={handleOnChange}
            onUpdateTabs={(updatedTabs) => setTabOptions(updatedTabs)}
          />
          <div style={{ fontFamily: "Arial" }}>
            <p>Selected Tab ID: {selectedTabId}</p>
          </div>
        </div>
      </>
    );
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    selectedTabId: "tab1",
    isClosable: false,
    isEditable: false,
  },

  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState("tab1");
    const tabs: DynamicTabItemOption[] = [
      { id: "tab1", title: "Tab 1" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
    ];

    return (
      <div style={{ width: "1000px" }}>
        <DynamicTab
          {...args}
          options={tabs}
          selectedTabId={selectedTabId}
          onChangeActiveTab={(id) => setSelectedTabId(id)}
        />
      </div>
    );
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tab1 = canvas.getByRole("tab", { name: "Tab 1" });
    const tab2 = canvas.getByRole("tab", { name: "Tab 2" });
    const tab3 = canvas.getByRole("tab", { name: "Tab 3" });
    const tab4 = canvas.getByRole("tab", { name: "Tab 4" });

    await step("Tab entre dans le composant et focus le tab sélectionné (tab1)", async () => {
      expect(tab1).toHaveFocus();
      expect(tab1).toHaveAttribute("aria-selected", "true");
    });

    await step("ArrowRight sélectionne et focus le tab suivant (tab2)", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expect(tab2).toHaveFocus();
      expect(tab2).toHaveAttribute("aria-selected", "true");
      expect(tab1).toHaveAttribute("aria-selected", "false");
    });

    await step("ArrowRight sélectionne et focus le tab suivant (tab3)", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expect(tab3).toHaveFocus();
      expect(tab3).toHaveAttribute("aria-selected", "true");
      expect(tab2).toHaveAttribute("aria-selected", "false");
    });

    await step("ArrowRight sélectionne et focus le tab suivant (tab4)", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expect(tab4).toHaveFocus();
      expect(tab4).toHaveAttribute("aria-selected", "true");
      expect(tab3).toHaveAttribute("aria-selected", "false");
    });

    await step("ArrowRight en fin de liste revient au premier tab (tab1)", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expect(tab1).toHaveFocus();
      expect(tab1).toHaveAttribute("aria-selected", "true");
      expect(tab4).toHaveAttribute("aria-selected", "false");
    });

    await step("ArrowLeft en début de liste revient au dernier tab (tab4)", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expect(tab4).toHaveFocus();
      expect(tab4).toHaveAttribute("aria-selected", "true");
      expect(tab1).toHaveAttribute("aria-selected", "false");
    });

    await step("ArrowLeft sélectionne et focus le tab précédent (tab3)", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expect(tab3).toHaveFocus();
      expect(tab3).toHaveAttribute("aria-selected", "true");
      expect(tab4).toHaveAttribute("aria-selected", "false");
    });
  },
};

export const TabManagement: Story = {
  args: {
    ...Default.args,
    selectedTabId: "tab1",
    isClosable: true,
    isEditable: false,
  },

  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState("tab1");
    const initialTabs: DynamicTabItemOption[] = [
      { id: "tab1", title: "Tab 1" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
    ];
    const [tabOptions, setTabOptions] = useState<DynamicTabItemOption[]>(initialTabs);
    const newTabConfig: DynamicTabItemOption = { id: "new-tab", title: "New Tab" };

    return (
      <div style={{ width: "1000px" }}>
        <DynamicTab
          {...args}
          options={tabOptions}
          selectedTabId={selectedTabId}
          newTabConfig={newTabConfig}
          onChangeActiveTab={(id) => setSelectedTabId(id)}
          onUpdateTabs={(updatedTabs) => setTabOptions(updatedTabs)}
        />
      </div>
    );
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Vérifier le nombre initial de tabs (4)", async () => {
      expect(canvas.getAllByRole("tab")).toHaveLength(4);
    });

    await step("Ajouter un tab via le bouton +", async () => {
      const addButton = canvas.getByRole("button", { name: "Add new tabitem" });
      await userEvent.click(addButton);
      expect(canvas.getAllByRole("tab")).toHaveLength(5);
    });

    await step("Le nouveau tab est sélectionné après ajout", async () => {
      const newTab = canvas.getByRole("tab", { name: "New Tab" });
      expect(newTab).toHaveAttribute("aria-selected", "true");
    });

    await step("Supprimer Tab 2 via son bouton de fermeture", async () => {
      const closeTab2Button = canvas.getByRole("button", { name: "Close Tab 2 tab" });
      await userEvent.click(closeTab2Button);
      await waitFor(() => expect(canvas.getAllByRole("tab")).toHaveLength(4), { timeout: 500 });
    });

    await step("Tab 2 n'est plus présent dans la liste", async () => {
      expect(canvas.queryByRole("tab", { name: "Tab 2" })).not.toBeInTheDocument();
    });
  },
};
