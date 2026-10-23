import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/icon-map";
import { SegmentedControlComponent } from "../segmented-control.component";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta: Meta<SegmentedControlComponent> = {
  title: "Composants/SegmentedControl",
  component: SegmentedControlComponent,
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
};
export default meta;
type Story = StoryObj<SegmentedControlComponent>;

export const Default: Story = {
  args: {
    options: [
      { labelText: "Option 1", id: "option1" },
      { labelText: "Option 2", id: "option2" },
      { labelText: "Option 3", id: "option3" },
    ],
    selectedSegment: "option1",
    appearance: "brand",
    isCompact: false,
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px" data-testid="segmented-control-story">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const DifferentLabelTextLengths: Story = {
  args: {
    ...Default.args,
    selectedSegment: "day",
    options: [
      { labelText: "Jour", id: "day" },
      { labelText: "Semaine en cours", id: "current-week" },
      { labelText: "Historique des consommations", id: "consumption-history" },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: Default.args,
  render: Default.render,

  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = Array.from(
      within(canvas).getByTestId("segmented-control-story").querySelectorAll("[role='radio']"),
    );

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
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px; display: flex; flex-direction: column; gap: 20px" data-testid="segmented-control-story">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="'neutral'"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    isCompact: true,
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px; display: flex; flex-direction: column; gap: 20px" data-testid="segmented-control-story">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
        <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="'neutral'"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const TwoOptions: Story = {
  args: {
    ...Default.args,
    options: [
      { labelText: "Option 1", id: "option1" },
      { labelText: "Option 2", id: "option2" },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
};

export const Icons: Story = {
  args: {
    ...Default.args,
    options: [
      { id: "agenda", icon: "view-agenda", labelText: "Vue agenda" },
      { id: "column", icon: "view-column", labelText: "Vue colonne" },
      { id: "grid", icon: "view-grid", labelText: "Vue grille" },
    ],
    selectedSegment: "agenda",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 420px">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
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
        badgeSize: "m",
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 380px" data-testid="segmented-control-with-badge">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
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
        badgeSize: "m",
        ariaLabel: "3 nouvelles alertes",
      },
    ],
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
        badgeSize: "m",
      },
    ],
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
        badgeSize: "m",
      },
    ],
    selectedSegment: "agenda",
  },
  render: (args) => ({
    props: {
      ...args,
      change(id: string) {
        this["selectedSegment"] = id;
      },
    },
    template: `
    <div style="width: 380px" data-testid="segmented-control-icon-badge">
      <rte-segmented-control
        [options]="options"
        [selectedSegment]="selectedSegment"
        [appearance]="appearance"
        [isCompact]="isCompact"
        (change)="change($event)"
        />
    </div>
    `,
  }),
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
        badgeContent: "number",
        badgeCount: 3,
        badgeType: "indicator",
        badgeSize: "m",
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
        badgeContent: "number",
        badgeCount: 3,
        badgeType: "indicator",
        badgeSize: "m",
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
        badgeContent: "icon",
        badgeIcon: "notification",
        badgeType: "indicator",
        badgeSize: "m",
      },
    ],
  },
];

export const AccessibleNameValidation: Story = {
  tags: ["!autodocs"],
  render: () => ({
    props: {
      cases: accessibleNameValidationCases,
      selectedByCase: Object.fromEntries(
        accessibleNameValidationCases.map((validationCase) => [validationCase.id, "ref"]),
      ),
      onCaseChange(caseId: string, segmentId: string) {
        this["selectedByCase"] = { ...this["selectedByCase"], [caseId]: segmentId };
      },
    },
    template: `
    <div
      data-testid="accessible-name-validation"
      style="display: flex; flex-direction: column; gap: 28px; max-width: 420px; padding: 8px;"
    >
      <p style="margin: 0; font-size: 14px;">
        Focus the <strong>second segment</strong> of each control (right). Compare with the expected
        <code>aria-label</code> below (screen reader or devtools).
      </p>
      @for (validationCase of cases; track validationCase.id) {
        <section [attr.aria-labelledby]="'case-' + validationCase.id + '-title'">
          <h3 [id]="'case-' + validationCase.id + '-title'" style="margin: 0 0 4px; font-size: 16px;">
            {{ validationCase.title }}
          </h3>
          <p style="margin: 0 0 8px; font-size: 13px; color: #555;">
            Expected 2nd segment: <code>{{ validationCase.expectedAriaLabel }}</code>
          </p>
          <rte-segmented-control
            [options]="validationCase.options"
            [selectedSegment]="selectedByCase[validationCase.id]"
            (change)="onCaseChange(validationCase.id, $event)"
          />
        </section>
      }
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const sections = within(canvasElement).getByTestId("accessible-name-validation").querySelectorAll("section");

    accessibleNameValidationCases.forEach((validationCase, index) => {
      const segments = Array.from(sections[index].querySelectorAll("[role='radio']"));
      expect(segments[1]).toHaveAttribute("aria-label", validationCase.expectedAriaLabel);
    });
  },
};
