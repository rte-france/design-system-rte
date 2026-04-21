import { signal } from "@angular/core";
import type { TimeFormat } from "@design-system-rte/core/components/timepicker/timepicker.interface";
import {
  TESTING_ARROW_RIGHT_KEY,
  TESTING_ARROW_UP_KEY,
  TESTING_ENTER_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { expect, fn, userEvent, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { TimePickerComponent } from "../time-picker.component";

const emptyTime = (): TimeFormat => ({ hh: "", mm: "", ss: "" });

const meta: Meta<TimePickerComponent> = {
  title: "Composants/TimePicker/TimePicker",
  component: TimePickerComponent,
  tags: ["autodocs"],
  argTypes: {
    assistiveAppearance: {
      control: { type: "radio" },
      options: ["description", "error", "success", "link"],
    },
    valueChange: { action: "valueChange" },
  },
};

export default meta;

type Story = StoryObj<TimePickerComponent>;

const mockFn = fn();

export const Default: Story = {
  args: {
    id: "time-picker",
    label: "Label",
    labelId: "time-picker-label",
    showLabel: true,
    required: true,
    showLabelRequirement: true,
    assistiveTextLabel: "Assistive text",
    assistiveAppearance: "description",
    showAssistiveIcon: true,
    assistiveTextLink: "https://www.example.com",
    isError: false,
    disabled: false,
    readOnly: false,
    isHourReadOnly: false,
    isMinuteReadOnly: false,
    isSecondReadOnly: false,
    hourIncrement: 1,
    minuteIncrement: 1,
    secondIncrement: 1,
  },
  render: (args) => {
    const timeValue = signal<TimeFormat>(emptyTime());
    return {
      props: {
        ...args,
        timeValue,
        onValueChange(time: TimeFormat) {
          timeValue.set({ ...time });
          mockFn(time);
        },
      },
      template: `
        <rte-time-picker
          [id]="id"
          [labelId]="labelId"
          [label]="label"
          [showLabel]="showLabel"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveAppearance]="assistiveAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [assistiveTextLink]="assistiveTextLink"
          [isError]="isError"
          [disabled]="disabled"
          [readOnly]="readOnly"
          [isHourReadOnly]="isHourReadOnly"
          [isMinuteReadOnly]="isMinuteReadOnly"
          [isSecondReadOnly]="isSecondReadOnly"
          [hourIncrement]="hourIncrement"
          [minuteIncrement]="minuteIncrement"
          [secondIncrement]="secondIncrement"
          [value]="timeValue()"
          (valueChange)="onValueChange($event)"
        />
      `,
    };
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
  render: (args) => ({
    props: {
      ...args,
      timeValue: signal<TimeFormat>(args["value"] as TimeFormat),
      onValueChange(time: TimeFormat) {
        mockFn(time);
      },
    },
    template: `
        <rte-time-picker
          [id]="id"
          [labelId]="labelId"
          [label]="label"
          [showLabel]="showLabel"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveAppearance]="assistiveAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [assistiveTextLink]="assistiveTextLink"
          [isError]="isError"
          [disabled]="disabled"
          [readOnly]="readOnly"
          [isHourReadOnly]="isHourReadOnly"
          [isMinuteReadOnly]="isMinuteReadOnly"
          [isSecondReadOnly]="isSecondReadOnly"
          [value]="timeValue()"
          (valueChange)="onValueChange($event)"
        />
      `,
  }),
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message",
  },
  render: Default.render,
};

export const HourReadOnly: Story = {
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: { hh: "12", mm: "10", ss: "15" },
  },
  render: (args) => ({
    props: {
      ...args,
      timeValue: signal<TimeFormat>(args["value"] as TimeFormat),
      onValueChange(time: TimeFormat) {
        mockFn(time);
      },
    },
    template: `
        <rte-time-picker
          [id]="id"
          [labelId]="labelId"
          [label]="label"
          [showLabel]="showLabel"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveAppearance]="assistiveAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [assistiveTextLink]="assistiveTextLink"
          [isError]="isError"
          [disabled]="disabled"
          [readOnly]="readOnly"
          [isHourReadOnly]="isHourReadOnly"
          [isMinuteReadOnly]="isMinuteReadOnly"
          [isSecondReadOnly]="isSecondReadOnly"
          [value]="timeValue()"
          (valueChange)="onValueChange($event)"
        />
      `,
  }),
};

export const MinuteReadOnly: Story = {
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: { hh: "12", mm: "30", ss: "15" },
  },
};

export const SecondReadOnly: Story = {
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: { hh: "12", mm: "30", ss: "45" },
  },
};

export const WithIncrement: Story = {
  args: {
    ...Default.args,
    minuteIncrement: 15,
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent(canvasElement);
    const mainInput = canvasElement.querySelector(".rte-base-input-picker-input") as HTMLInputElement;
    expect(mainInput).toBeTruthy();

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mainInput.value).toBe("00:00:00");

    const menuSelector = '[data-menu-id="time_picker_time-picker"]';
    await waitFor(() => {
      const menuHost = document.querySelector(menuSelector);
      expect(menuHost).toBeTruthy();
      const segmentInputs = menuHost!.querySelectorAll(
        "input.rte-time-picker-segment-input",
      ) as NodeListOf<HTMLInputElement>;
      expect(segmentInputs.length).toBe(3);
      expect(document.activeElement).toBe(segmentInputs[0]);
    });

    await userEvent.tab();
    const menuHost = document.querySelector(menuSelector)!;
    const segmentInputs = menuHost.querySelectorAll(
      "input.rte-time-picker-segment-input",
    ) as NodeListOf<HTMLInputElement>;
    expect(document.activeElement).toBe(segmentInputs[1]);

    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(mainInput.value).toBe("00:15:00");

    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(mainInput.value).toBe("00:30:00");
  },
};

export const KeyboardInteractions: Story = {
  args: {
    ...Default.args,
    value: { hh: "12", mm: "30", ss: "45" },
  },
  render: (args) => {
    const timeValue = signal<TimeFormat>(args["value"] as TimeFormat);
    return {
      props: {
        ...args,
        timeValue,
        onValueChange(time: TimeFormat) {
          timeValue.set({ ...time });
          mockFn(time);
        },
      },
      template: `
        <rte-time-picker
          [id]="id"
          [labelId]="labelId"
          [label]="label"
          [showLabel]="showLabel"
          [required]="required"
          [showLabelRequirement]="showLabelRequirement"
          [assistiveTextLabel]="assistiveTextLabel"
          [assistiveAppearance]="assistiveAppearance"
          [showAssistiveIcon]="showAssistiveIcon"
          [assistiveTextLink]="assistiveTextLink"
          [isError]="isError"
          [disabled]="disabled"
          [readOnly]="readOnly"
          [isHourReadOnly]="isHourReadOnly"
          [isMinuteReadOnly]="isMinuteReadOnly"
          [isSecondReadOnly]="isSecondReadOnly"
          [hourIncrement]="hourIncrement"
          [minuteIncrement]="minuteIncrement"
          [secondIncrement]="secondIncrement"
          [value]="timeValue()"
          (valueChange)="onValueChange($event)"
        />
      `,
    };
  },
  play: async ({ canvasElement }) => {
    await focusElementBeforeComponent(canvasElement);
    const input = canvasElement.querySelector(".rte-base-input-picker-input") as HTMLInputElement;
    expect(input).toBeTruthy();
    await userEvent.tab();
    await userEvent.keyboard("a");
    expect(input.value).toBe("12:30:45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("3");
    expect(input.value).toBe("12:03:45");

    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:45");

    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:02");

    const menuSelectorKb = '[data-menu-id="time_picker_time-picker"]';

    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await waitFor(() => {
      const menuHost = document.querySelector(menuSelectorKb);
      expect(menuHost).toBeTruthy();
      const segments = menuHost!.querySelectorAll(
        "input.rte-time-picker-segment-input",
      ) as NodeListOf<HTMLInputElement>;
      expect(document.activeElement).toBe(segments[0]);
    });
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:32:02");

    await userEvent.tab();
    const menuHostAfterTab = document.querySelector(menuSelectorKb)!;
    const segmentsAfterTab = menuHostAfterTab.querySelectorAll(
      "input.rte-time-picker-segment-input",
    ) as NodeListOf<HTMLInputElement>;
    expect(document.activeElement).toBe(segmentsAfterTab[1]);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:33:02");
  },
};
