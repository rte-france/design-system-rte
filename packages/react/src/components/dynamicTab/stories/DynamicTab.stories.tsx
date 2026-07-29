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
    appearance: "neutral",
    selectedTabId: "tab3",
    options: [
      { id: "tab1", title: "Tab 1", badgeContent: "number", badgeCount: 5, badgeType: "indicator", iconName: "star" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
    ],
    compactSpacing: false,
  },

  render: (args) => {
    const [selectedTabId, setSelectedTabId] = useState(args.selectedTabId);

    const handleOnChange = (newSelectedTabId: string) => {
      setSelectedTabId(newSelectedTabId);
    };

    return <DynamicTab {...args} selectedTabId={selectedTabId} onChange={handleOnChange} />;
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

    return <DynamicTab {...args} selectedTabId={selectedTabId} onChange={handleOnChange} />;
  },
};
