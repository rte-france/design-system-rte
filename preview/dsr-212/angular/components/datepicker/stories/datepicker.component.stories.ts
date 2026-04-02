import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { DatepickerComponent } from "../datepicker.component";

const meta: Meta<DatepickerComponent> = {
  title: "Composants/Datepicker/Datepicker",
  component: DatepickerComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Single-date Datepicker.\n\nHandoff note for React:\n- Keep the same state model: `isOpen`, `calendarType` (`day|month|year`), `viewDate`, `selectedDate`, `pendingDate`.\n- Display format is fixed to `jj/mm/aaaa` with automatic separators (no dynamic parsing/formatting).\n- Keyboard behavior follows W3C APG datepicker dialog guidance for grid navigation (arrows move, Enter/Space select) and ESC closes.",
      },
    },
  },
  argTypes: {
    interactionState: {
      control: "select",
      options: ["enabled", "hover", "activeInput", "activeMenu", "error", "disabled", "readOnly"],
    },
    labelPosition: { control: "select", options: ["top", "side"] },
    valueChange: { action: "value changed" },
    openedChange: { action: "opened changed" },
  },
  args: {
    id: "datepicker",
    hasLabel: true,
    labelText: "Label",
    labelPosition: "top",
    interactionState: "enabled",
    isRequiredOptional: false,
    required: false,
    showLabelRequirement: false,
    hasAssistiveText: false,
    assistiveTextLabel: "",
    assistiveTextAppearance: "description",
    showAssistiveIcon: false,
  },
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

export const Default: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
      <div style="width: 320px">
        <rte-datepicker
          [id]="id"
          [hasLabel]="hasLabel"
          [labelText]="labelText"
          [labelPosition]="labelPosition"
          [interactionState]="interactionState"
          [isRequiredOptional]="isRequiredOptional"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [hasAssistiveText]="hasAssistiveText"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveTextAppearance]="assistiveTextAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          (valueChange)="valueChange($event)"
          (openedChange)="openedChange($event)"
        />
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    ...Default.args,
    interactionState: "error",
    hasAssistiveText: true,
    assistiveTextLabel: "Message d’erreur",
    assistiveTextAppearance: "error",
    showAssistiveIcon: true,
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    interactionState: "disabled",
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector("input") as HTMLInputElement | null;
    expect(input).toBeInTheDocument();
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.tab();
    expect(canvas.getByRole("button", { name: /ouvrir le calendrier/i })).not.toHaveFocus();
  },
};

export const OpenSelectConfirm: Story = {
  name: "Open + select + confirm",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: /ouvrir le calendrier/i });
    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const menu = overlay?.querySelector("rte-datepicker-menu");
      expect(menu).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const dayButtons = overlay.querySelectorAll("rte-datepicker-menu .day-cell");
    expect(dayButtons.length).toBeGreaterThan(0);

    await userEvent.click(dayButtons[10] as HTMLElement);
    const confirmButton = within(overlay).getByRole("button", { name: /confirmer/i });
    await userEvent.click(confirmButton);

    await waitFor(() => {
      const menu = overlay.querySelector("rte-datepicker-menu");
      expect(menu).not.toBeInTheDocument();
    });
  },
};

export const OpenFocusAndEsc: Story = {
  name: "Open focuses grid + ESC closes",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: /ouvrir le calendrier/i });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;

    await waitFor(() => {
      const activeDayButton = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(activeDayButton).toBeInTheDocument();
      expect(activeDayButton).toHaveFocus();
    });

    await userEvent.keyboard("{Escape}");

    await waitFor(() => {
      expect(overlay.querySelector("rte-datepicker-menu")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(calendarButton).toHaveFocus();
    });
  },
};

export const OpenTabAnnulerConfirmerNavPrevYear: Story = {
  name: "Open + Tab: Annuler → Confirmer → année précédente",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: /ouvrir le calendrier/i });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;

    await waitFor(() => {
      const activeDayButton = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(activeDayButton).toBeInTheDocument();
      expect(activeDayButton).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /^annuler$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /^confirmer$/i })).toHaveFocus();
    });

    await userEvent.tab();
    await waitFor(() => {
      expect(within(overlay).getByRole("button", { name: /année précédente/i })).toHaveFocus();
    });
  },
};

export const ViewModesFourVsTwoNavAndGrids: Story = {
  name: "View modes: day grid + 4 nav → month grid + 2 nav → decade + 2 nav",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /ouvrir le calendrier/i }));

    await waitFor(() => {
      const overlayRoot = document.getElementById("overlay-root");
      expect(overlayRoot?.querySelector("rte-datepicker-menu")).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    const menuOverlay = within(overlay);

    expect(menuOverlay.getByRole("button", { name: /année précédente/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /mois précédent/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /mois suivant/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /année suivante/i })).toBeInTheDocument();
    expect(overlay.querySelector(".rte-datepicker-day-grid")).toBeInTheDocument();

    const dayHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(dayHeaderLabel).toBeTruthy();
    await userEvent.click(dayHeaderLabel!);

    await waitFor(() => {
      expect(overlay.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });

    expect(overlay.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument();
    expect(menuOverlay.queryAllByRole("button", { name: /année précédente/i })).toHaveLength(1);
    expect(menuOverlay.queryAllByRole("button", { name: /année suivante/i })).toHaveLength(1);
    expect(menuOverlay.queryByRole("button", { name: /mois précédent/i })).not.toBeInTheDocument();
    expect(menuOverlay.queryByRole("button", { name: /mois suivant/i })).not.toBeInTheDocument();

    const yearHeaderLabel = overlay.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(yearHeaderLabel).toBeTruthy();
    await userEvent.click(yearHeaderLabel!);

    await waitFor(() => {
      expect(overlay.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument();
    });

    expect(overlay.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /décennie précédente/i })).toBeInTheDocument();
    expect(menuOverlay.getByRole("button", { name: /décennie suivante/i })).toBeInTheDocument();
    expect(overlay.querySelector(".month-label-static")).toBeInTheDocument();
    expect(overlay.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument();

    const yearCells = overlay.querySelectorAll("rte-datepicker-menu .year-cell");
    expect(yearCells.length).toBe(10);
  },
};

export const KeyboardTabOrderAndArrows: Story = {
  name: "Keyboard: tab order + arrows scoped to grid",
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", { name: /ouvrir le calendrier/i });

    await userEvent.click(calendarButton);

    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const menu = overlay?.querySelector("rte-datepicker-menu");
      expect(menu).toBeInTheDocument();
    });

    const overlay = document.getElementById("overlay-root") as HTMLElement;
    await waitFor(() => {
      const active = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });

    const activeDayButton = overlay.querySelector(
      'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
    ) as HTMLButtonElement | null;

    await userEvent.tab();
    const cancelButton = within(overlay).getByRole("button", { name: /^annuler$/i });
    expect(cancelButton).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(cancelButton).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(activeDayButton).toHaveFocus();

    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      const nextActive = overlay.querySelector(
        'rte-datepicker-menu .day-cell[data-datepicker-active="true"]',
      ) as HTMLButtonElement | null;
      expect(nextActive).toBeInTheDocument();
      expect(nextActive).toHaveFocus();
      expect(nextActive).not.toBe(activeDayButton);
    });
  },
};
