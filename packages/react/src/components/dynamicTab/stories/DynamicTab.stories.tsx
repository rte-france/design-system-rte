import { DynamicTabItemOption } from "@design-system-rte/core";
import type { Meta, StoryObj } from "@storybook/react";
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
    closable: true,
    editable: true,
    options: [
      {
        id: "tab1",
        title: "Tab 1",
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
        iconName: "star",
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
        iconName: "star",
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

    const handleOnChange = (newSelectedTabId: string) => {
      setSelectedTabId(newSelectedTabId);
    };

    return <DynamicTab {...args} selectedTabId={selectedTabId} onChangeActiveTab={handleOnChange} />;
  },
};
