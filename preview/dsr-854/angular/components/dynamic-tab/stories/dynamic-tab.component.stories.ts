import { DynamicTabItemOption } from "@design-system-rte/core/components/dynamic-tab/dynamic-tab.interface";
import {
  TESTING_ARROW_LEFT_KEY,
  TESTING_ARROW_RIGHT_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { DynamicTabComponent } from "../dynamic-tab.component";

const keyboardTabs: DynamicTabItemOption[] = [
  { id: "tab1", title: "Tab 1" },
  { id: "tab2", title: "Tab 2" },
  { id: "tab3", title: "Tab 3" },
  { id: "tab4", title: "Tab 4" },
];

const tabManagementTabs: DynamicTabItemOption[] = [
  { id: "tab1", title: "Tab 1" },
  { id: "tab2", title: "Tab 2" },
  { id: "tab3", title: "Tab 3" },
  { id: "tab4", title: "Tab 4" },
];

const defaultTabs: DynamicTabItemOption[] = [
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

const manualTestChecklist = `
**Manual test checklist (spec a11y):**
- TAB enters component and reaches tabs, title, close, +N, + in DOM order
- Arrow Left/Right cycles tabs and updates selection immediately
- SPACE on active tab enters move mode; arrows reorder; SPACE exits
- Double-click renames; Enter validates; Esc cancels; empty input reverts
- Active tab visually distinct; drag elevates tab; edit state visible
- Close button shows pointer cursor; rest of tab shows default cursor
- Touch targets on close/add buttons ≥ 24×24 px
`;

const meta: Meta<DynamicTabComponent> = {
  title: "Composants/DynamicTab",
  component: DynamicTabComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: manualTestChecklist,
      },
    },
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["neutral", "brand"],
    },
    compactSpacing: { control: "boolean" },
    isClosable: { control: "boolean" },
    isEditable: { control: "boolean" },
    iconName: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<DynamicTabComponent>;

const renderDynamicTab =
  (containerWidth = "1000px") =>
  (args: Story["args"]) => ({
    props: {
      ...args,
      tabOptions: [...(args?.options ?? defaultTabs)],
      selectedTabId: args?.selectedTabId ?? "tab3",
      newTabConfig: args?.newTabConfig ?? { id: "new-tab", title: "New Tab" },
      onChangeActiveTab(id: string) {
        this["selectedTabId"] = id;
      },
      onUpdateTabs(tabs: DynamicTabItemOption[]) {
        this["tabOptions"] = tabs;
      },
    },
    template: `
    <div style="width: ${containerWidth}">
      <rte-dynamic-tab
        [id]="id"
        [appearance]="appearance"
        [options]="tabOptions"
        [selectedTabId]="selectedTabId"
        [compactSpacing]="compactSpacing"
        [isClosable]="isClosable"
        [isEditable]="isEditable"
        [iconName]="iconName"
        [newTabConfig]="newTabConfig"
        (changeActiveTab)="onChangeActiveTab($event)"
        (updateTabs)="onUpdateTabs($event)"
      />
      <p style="font-family: Arial, sans-serif; margin-top: 16px">
        Selected tab: {{ selectedTabId }}
      </p>
    </div>
  `,
  });

export const Default: Story = {
  args: {
    id: "dynamic-tab",
    appearance: "neutral",
    selectedTabId: "tab3",
    compactSpacing: false,
    isClosable: true,
    isEditable: true,
    iconName: "star",
    options: defaultTabs,
  },
  render: renderDynamicTab(),
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
  render: renderDynamicTab(),
};

export const AppearanceBrand: Story = {
  args: {
    ...Default.args,
    appearance: "brand",
  },
  render: renderDynamicTab(),
};

export const Overflow: Story = {
  args: {
    ...Default.args,
    options: [
      { id: "tab1", title: "Tab 1" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
      { id: "tab5", title: "Tab 5" },
      { id: "tab6", title: "Tab 6" },
      { id: "tab7", title: "Tab 7" },
      { id: "tab8", title: "Tab 8" },
      { id: "tab9", title: "Tab 9" },
      { id: "tab10", title: "Tab 10" },
    ],
    selectedTabId: "tab1",
  },
  render: renderDynamicTab("400px"),
};

export const KeyboardInteraction: Story = {
  args: {
    id: "dynamic-tab",
    appearance: "neutral",
    selectedTabId: "tab1",
    compactSpacing: false,
    isClosable: false,
    isEditable: false,
    options: keyboardTabs,
  },
  render: (args) => ({
    props: {
      ...args,
      tabOptions: [...keyboardTabs],
      selectedTabId: "tab1",
      onChangeActiveTab(id: string) {
        this["selectedTabId"] = id;
      },
    },
    template: `
      <div style="width: 1000px">
        <rte-dynamic-tab
          [id]="id"
          [appearance]="appearance"
          [options]="tabOptions"
          [selectedTabId]="selectedTabId"
          [compactSpacing]="compactSpacing"
          [isClosable]="isClosable"
          [isEditable]="isEditable"
          (changeActiveTab)="onChangeActiveTab($event)"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);

    const tab1 = canvas.getByRole("tab", { name: "Tab 1" });
    const tab2 = canvas.getByRole("tab", { name: "Tab 2" });
    const tab3 = canvas.getByRole("tab", { name: "Tab 3" });
    const tab4 = canvas.getByRole("tab", { name: "Tab 4" });

    await step("Tab entre dans le composant et focus le tab sélectionné (tab1)", async () => {
      await userEvent.tab();
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
    id: "dynamic-tab",
    appearance: "neutral",
    selectedTabId: "tab1",
    compactSpacing: false,
    isClosable: true,
    isEditable: false,
    options: tabManagementTabs,
  },
  render: (args) => ({
    props: {
      ...args,
      tabOptions: [...tabManagementTabs],
      selectedTabId: "tab1",
      newTabConfig: { id: "new-tab", title: "New Tab" },
      onChangeActiveTab(id: string) {
        this["selectedTabId"] = id;
      },
      onUpdateTabs(tabs: DynamicTabItemOption[]) {
        this["tabOptions"] = tabs;
      },
    },
    template: `
      <div style="width: 1000px">
        <rte-dynamic-tab
          [id]="id"
          [appearance]="appearance"
          [options]="tabOptions"
          [selectedTabId]="selectedTabId"
          [compactSpacing]="compactSpacing"
          [isClosable]="isClosable"
          [isEditable]="isEditable"
          [newTabConfig]="newTabConfig"
          (changeActiveTab)="onChangeActiveTab($event)"
          (updateTabs)="onUpdateTabs($event)"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Vérifier le nombre initial de tabs (4)", async () => {
      expect(canvas.getAllByRole("tab")).toHaveLength(4);
    });

    await step("Ajouter un tab via le bouton +", async () => {
      const addButton = canvas.getByRole("button", { name: "Ajouter un onglet" });
      await userEvent.click(addButton);
      expect(canvas.getAllByRole("tab")).toHaveLength(5);
    });

    await step("Le nouveau tab est sélectionné après ajout", async () => {
      const newTab = canvas.getByRole("tab", { name: "New Tab" });
      expect(newTab).toHaveAttribute("aria-selected", "true");
    });

    await step("Supprimer Tab 2 via son bouton de fermeture", async () => {
      const closeTab2Button = canvas.getByRole("button", { name: "Fermer l'onglet Tab 2" });
      await userEvent.click(closeTab2Button);
      await waitFor(() => expect(canvas.getAllByRole("tab")).toHaveLength(4), { timeout: 500 });
    });

    await step("Tab 2 n'est plus présent dans la liste", async () => {
      expect(canvas.queryByRole("tab", { name: "Tab 2" })).not.toBeInTheDocument();
    });
  },
};

export const Rename: Story = {
  args: {
    ...Default.args,
    selectedTabId: "tab1",
    isClosable: false,
    isEditable: true,
    options: defaultTabs.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story: "Manual: Double-click tab title to edit. Enter validates, Esc cancels, empty input reverts.",
      },
    },
  },
  render: renderDynamicTab(),
};

export const DragAndDrop: Story = {
  args: {
    ...Default.args,
    selectedTabId: "tab2",
    isClosable: false,
    isEditable: false,
    options: defaultTabs.slice(0, 5),
  },
  parameters: {
    docs: {
      description: {
        story: "Manual: Drag tabs horizontally. Use SPACE on active tab then arrows to reorder via keyboard.",
      },
    },
  },
  render: renderDynamicTab(),
};

export const ManualTestGuide: Story = {
  args: Default.args,
  parameters: {
    docs: {
      description: {
        story: manualTestChecklist,
      },
    },
  },
  render: renderDynamicTab(),
};
