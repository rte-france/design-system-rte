import {
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_LEFT_KEY,
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import SegmentedControl from "../SegmentedControl";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "Array of segment options",
      table: {
        type: { summary: "SegmentProps[]" },
        defaultValue: { summary: "[]" },
      },
      appearance: {
        control: "select",
        options: ["brand", "neutral"],
      },
      badgeContent: {
        control: "select",
        options: ["number", "icon", "empty"],
      },
      badgeType: {
        control: "select",
        options: ["brand", "neutral", "indicator"],
      },
      badgeIcon: {
        control: "select",
        options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      },
      showBadge: {
        control: "boolean",
      },
      badgeCount: {
        control: "number",
      },
      badgeSize: {
        control: "select",
        options: ["xs", "s", "m", "l"],
      },
      isCompact: {
        control: "boolean",
      },
    },
  },
  args: { onClick: fn(), appearance: "brand" },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { labelText: "Option 1", id: "option1" },
      { labelText: "Option 2", id: "option2" },
      { labelText: "Option 3", id: "option3" },
    ],
    onChange: fn(),
    appearance: "brand",
    isCompact: false,
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }} data-testid="segmented-control-story">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const DifferentLabelTextLengths: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Jour", id: "day" },
      { labelText: "Semaine en cours", id: "current-week" },
      { labelText: "Historique des consommations", id: "consumption-history" },
    ],
  },

  render: (args) => {
    const [selected, setSelected] = useState("day");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }}>
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: Default.args,
  render: Default.render,

  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas)
      .getByTestId("segmented-control-story")
      .querySelectorAll("[role='radio']");

    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");

    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  },
};

export const Appearance: Story = {
  args: {
    ...Default.args,
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div
        style={{ width: "420px", display: "flex", gap: "20px", flexDirection: "column" }}
        data-testid="segmented-control-story"
      >
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} appearance="neutral" />
      </div>
    );
  },
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    isCompact: true,
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div
        style={{ width: "420px", display: "flex", gap: "20px", flexDirection: "column" }}
        data-testid="segmented-control-story"
      >
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} appearance="neutral" />
      </div>
    );
  },
};

export const TwoOptions: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Option 1", id: "option1" },
      { labelText: "Option 2", id: "option2" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }}>
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const Icons: Story = {
  args: {
    ...Default.args,
    options: [
      { id: "agenda", icon: "view-agenda", labelText: "Vue agenda" },
      { id: "column", icon: "view-column", labelText: "Vue colonne" },
      { id: "grid", icon: "view-grid", labelText: "Vue grille" },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("agenda");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "420px" }}>
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Option 1", id: "option1" },
      {
        labelText: "Option 2",
        id: "option2",
        showBadge: true,
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
      },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("option1");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "380px" }} data-testid="segmented-control-with-badge">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const segments = Array.from(
      within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"),
    );

    expect(segments[1]).toHaveAttribute("aria-label", "Option 2, 5");
  },
};

export const WithBadgeCustomAriaLabel: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Option 1", id: "option1" },
      {
        labelText: "Option 2",
        id: "option2",
        showBadge: true,
        badgeContent: "number",
        badgeCount: 5,
        badgeType: "indicator",
        ariaLabel: "3 nouvelles alertes",
      },
    ],
    onChange: fn(),
  },

  render: WithBadge.render,

  play: async ({ canvasElement }) => {
    const segments = Array.from(
      within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"),
    );

    expect(segments[1]).toHaveAttribute("aria-label", "3 nouvelles alertes");
  },
};

export const WithBadgeEmptyDefaultAriaLabel: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Option 1", id: "option1" },
      {
        labelText: "Alertes",
        id: "option2",
        showBadge: true,
        badgeContent: "empty",
        badgeType: "indicator",
      },
    ],
    onChange: fn(),
  },

  render: WithBadge.render,

  play: async ({ canvasElement }) => {
    const segments = Array.from(
      within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"),
    );

    expect(segments[1]).toHaveAttribute("aria-label", "Alertes. Notification");
  },
};

export const IconOnlyWithBadge: Story = {
  tags: ["!autodocs"],
  args: {
    options: [
      { id: "agenda", icon: "view-agenda" },
      {
        id: "column",
        icon: "view-column",
        showBadge: true,
        badgeContent: "number",
        badgeCount: 3,
        badgeType: "indicator",
      },
    ],
    onChange: fn(),
  },

  render: (args) => {
    const [selected, setSelected] = useState("agenda");

    const handleOnChange = (id: string) => {
      setSelected(id);
    };

    return (
      <div style={{ width: "380px" }} data-testid="segmented-control-icon-badge">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const segments = Array.from(
      within(canvasElement).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"),
    );

    expect(segments[1]).toHaveAttribute("aria-label", "view-column. Notifications, 3");
  },
};

const accessibleNameValidationCases = [
  {
    id: "labelText",
    title: "labelText only",
    expectedAriaLabel: "Libellé seul",
    options: [
      { labelText: "Référence", id: "ref" },
      { labelText: "Libellé seul", id: "target" },
    ],
  },
  {
    id: "ariaLabel",
    title: "ariaLabel override",
    expectedAriaLabel: "3 nouvelles alertes",
    options: [
      { labelText: "Référence", id: "ref" },
      { labelText: "Visible (ignoré SR)", id: "target", ariaLabel: "3 nouvelles alertes" },
    ],
  },
  {
    id: "labelTextNumberBadge",
    title: "labelText + number badge",
    expectedAriaLabel: "Alertes, 3",
    options: [
      { labelText: "Référence", id: "ref" },
      {
        labelText: "Alertes",
        id: "target",
        showBadge: true,
        badgeContent: "number" as const,
        badgeCount: 3,
        badgeType: "indicator" as const,
      },
    ],
  },
  {
    id: "iconOnly",
    title: "icon without labelText",
    expectedAriaLabel: "view-column",
    options: [
      { id: "ref", icon: "view-agenda" },
      { id: "target", icon: "view-column" },
    ],
  },
  {
    id: "iconNumberBadge",
    title: "icon + badgeCount",
    expectedAriaLabel: "view-column. Notifications, 3",
    options: [
      { id: "ref", icon: "view-agenda" },
      {
        id: "target",
        icon: "view-column",
        showBadge: true,
        badgeContent: "number" as const,
        badgeCount: 3,
        badgeType: "indicator" as const,
      },
    ],
  },
  {
    id: "iconBadgeIcon",
    title: "icon + badgeIcon (empty/icon badge)",
    expectedAriaLabel: "view-grid. Notification",
    options: [
      { id: "ref", icon: "view-agenda" },
      {
        id: "target",
        icon: "view-grid",
        showBadge: true,
        badgeContent: "icon" as const,
        badgeIcon: "notification",
        badgeType: "indicator" as const,
      },
    ],
  },
] as const;

export const AccessibleNameValidation: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onChange: fn(),
  },
  render: () => {
    const [selectedByCase, setSelectedByCase] = useState<Record<string, string>>(
      Object.fromEntries(accessibleNameValidationCases.map((validationCase) => [validationCase.id, "ref"])),
    );

    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 420, padding: 8 }}
        data-testid="accessible-name-validation"
      >
        <p style={{ margin: 0, fontSize: 14 }}>
          Focus the <strong>second segment</strong> of each control (right). Compare with the expected{" "}
          <code>aria-label</code> below (screen reader or devtools).
        </p>
        {accessibleNameValidationCases.map((validationCase) => (
          <section key={validationCase.id} aria-labelledby={`case-${validationCase.id}-title`}>
            <h3 id={`case-${validationCase.id}-title`} style={{ margin: "0 0 4px", fontSize: 16 }}>
              {validationCase.title}
            </h3>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>
              Expected 2nd segment: <code>{validationCase.expectedAriaLabel}</code>
            </p>
            <SegmentedControl
              options={[...validationCase.options]}
              selectedSegment={selectedByCase[validationCase.id]}
              onChange={(id) => setSelectedByCase((previous) => ({ ...previous, [validationCase.id]: id }))}
            />
          </section>
        ))}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const sections = within(canvasElement).getByTestId("accessible-name-validation").querySelectorAll("section");

    accessibleNameValidationCases.forEach((validationCase, index) => {
      const segments = Array.from(sections[index].querySelectorAll("[role='radio']"));
      expect(segments[1]).toHaveAttribute("aria-label", validationCase.expectedAriaLabel);
    });
  },
};
