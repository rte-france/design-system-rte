import { Component, signal } from "@angular/core";
import type { Meta, StoryObj } from "@storybook/angular";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { DatepickerSegmentedFieldComponent } from "../datepicker-segmented-field/datepicker-segmented-field.component";

function normalizedSegmentedDateText(root: Element | null | undefined): string {
  return (root?.textContent ?? "").replace(/[\s\u200b]/g, "");
}

function activeSegmentIndex(root: Element | null | undefined): number {
  if (!root) {
    return -1;
  }
  return Array.from(root.querySelectorAll(".segment")).findIndex((element) =>
    element.classList.contains("segment--active"),
  );
}

@Component({
  selector: "rte-segmented-date-field-isolated-story",
  imports: [DatepickerSegmentedFieldComponent],
  standalone: true,
  template: `
    <div style="width: 320px">
      <rte-datepicker-segmented-field
        id="seg-isolated"
        [label]="'Date'"
        [hasLabel]="true"
        [showRightIcon]="false"
        [value]="text()"
        (valueChange)="text.set($event)"
      />
    </div>
  `,
})
class SegmentedDateFieldIsolatedStoryComponent {
  readonly text = signal("");
}

const meta: Meta<SegmentedDateFieldIsolatedStoryComponent> = {
  title: "Composants/Datepicker/Segmented field (sans calendrier)",
  component: SegmentedDateFieldIsolatedStoryComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Champ segmenté seul (sans `rte-dropdown`) pour valider clavier et focus sans le wrapper datepicker.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<SegmentedDateFieldIsolatedStoryComponent>;

export const Default: Story = {
  render: () => ({}),
};

export const Type13InDayKeepsFocus: Story = {
  name: "Clavier: 1 puis 3 → 13, focus conservé",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    field.focus();
    expect(field).toHaveFocus();

    await userEvent.keyboard("13");

    await waitFor(() => {
      const segmented = canvasElement.querySelector(".segmented-date-field");
      expect(normalizedSegmentedDateText(segmented).startsWith("13")).toBe(true);
    });

    expect(field).toHaveFocus();
  },
};

export const ArrowLeftFromDayNoOp: Story = {
  name: "Clavier: ← depuis le jour ne change pas de segment",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(activeSegmentIndex(segmented)).toBe(0);
  },
};

export const ArrowRightFromYearNoOp: Story = {
  name: "Clavier: → depuis l’année (date complète) ne change pas de segment",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("15012024");
    await waitFor(() => {
      expect(activeSegmentIndex(segmented)).toBe(2);
    });
    await userEvent.keyboard("{ArrowRight}");
    expect(activeSegmentIndex(segmented)).toBe(2);
  },
};

export const NavigateRightPadsIncompleteDay: Story = {
  name: "Clavier: → depuis le jour incomplet complète avec zéros (01/MM/YYYY)",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("1");
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^01\/MM\/YYYY$/);
    });
    expect(activeSegmentIndex(segmented)).toBe(1);
  },
};

export const BlurPadsIncompleteDaySegment: Story = {
  name: "Blur: jour incomplet complété avec zéros (01/MM/YYYY)",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("1");
    await userEvent.tab();
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^01\/MM\/YYYY$/);
    });
  },
};

export const BlurPadsPartialYearToFourDigits: Story = {
  name: "Blur: année partielle 123 → 0123 (DD/MM/0123)",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("123");
    await userEvent.tab();
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^DD\/MM\/0123$/);
    });
  },
};

export const CompleteDayThenAdvanceToMonth: Story = {
  name: "Clavier: jour complet (2 chiffres) puis saisie mois",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("15");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^15\/MM\/YYYY$/);
      expect(activeSegmentIndex(segmented)).toBe(1);
    });
    await userEvent.keyboard("0");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^15\/00\/YYYY$/);
    });
  },
};

export const ArrowUpOnEmptyMonthSetsTo01: Story = {
  name: "Clavier: ↑ sur mois vide → 01",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^DD\/01\/YYYY$/);
    });
  },
};

export const ArrowDownOnEmptyDaySetsToMaxDay: Story = {
  name: "Clavier: ↓ sur jour vide → dernier jour possible (31 sans mois/année)",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    field.focus();
    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^31\/MM\/YYYY$/);
    });
  },
};

export const DigitOnFulfilledDayRestartsSegment: Story = {
  name: "Clavier: chiffre sur jour déjà rempli redémarre le jour (13 → 01)",
  render: () => ({}),
  play: async ({ canvasElement }) => {
    const field = within(canvasElement).getByRole("group");
    const segmented = canvasElement.querySelector(".segmented-date-field");
    const daySegment = canvasElement.querySelectorAll(".segmented-date-field .segment")[0];
    field.focus();
    await userEvent.keyboard("13");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^13\/MM\/YYYY$/);
    });
    await userEvent.click(daySegment as HTMLElement);
    expect(daySegment?.classList.contains("segment--active")).toBe(true);
    await userEvent.keyboard("1");
    await waitFor(() => {
      expect(normalizedSegmentedDateText(segmented)).toMatch(/^01\/MM\/YYYY$/);
    });
  },
};
