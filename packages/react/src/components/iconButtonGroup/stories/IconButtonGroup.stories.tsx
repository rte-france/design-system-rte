import type { IconButtonGroupSelectionMode, IconButtonItem } from "@design-system-rte/core";
import {
  TESTING_ENTER_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { ComponentProps, useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import IconButtonGroup from "../IconButtonGroup";

const meta = {
  title: "Composants/IconButtonGroup/IconButtonGroup",
  component: IconButtonGroup,
  tags: ["autodocs", "icon-button-group"],
  argTypes: {
    selectionMode: {
      control: { type: "radio" },
      options: ["single", "single-strict", "multiple"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isCompact: {
      control: { type: "boolean" },
    },
    appearance: {
      control: { type: "radio" },
      options: ["brand", "neutral"],
    },
  },
} satisfies Meta<typeof IconButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
type GroupProps = ComponentProps<typeof IconButtonGroup>;
type SelectionChangeHandler = (selection: string | null | string[]) => void;

const selectionModes: IconButtonGroupSelectionMode[] = ["single", "single-strict", "multiple"];

const iconButtonStrict = [
  { name: "format-align-left", label: "Align Left" },
  { name: "format-align-center", label: "Align Center" },
  { name: "format-align-right", label: "Align Right" },
  { name: "format-align-justify", label: "Align Justify" },
];

const iconButtonSingle = [
  { name: "visibility-show", label: "Read only" },
  { name: "edit", label: "Edit" },
];

const iconButtonMultiple = [
  { name: "mic", label: "Microphone" },
  { name: "volume-up", label: "Volume" },
  { name: "video-camera", label: "Video Camera" },
];

const iconButtonsBySelectionMode: Record<IconButtonGroupSelectionMode, IconButtonItem[]> = {
  single: iconButtonSingle,
  "single-strict": iconButtonStrict,
  multiple: iconButtonMultiple,
};

export const Default = {
  args: {
    iconButtons: iconButtonSingle,
    selectionMode: "single",
    isDisabled: false,
    isCompact: false,
    appearance: "brand",
    "aria-label": "Icon selection",
    defaultSelectedId: "visibility-show",
    onSelectionChange: fn(),
  },
} satisfies Story;

export const SingleStrict: Story = {
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict,
    selectionMode: "single-strict",
    defaultSelectedId: "format-align-left",
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    iconButtons: iconButtonMultiple,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["mic"],
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
    onSelectionChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const buttons = within(canvasElement).getAllByRole("button");
    for (const button of buttons) {
      await expect(button).toBeDisabled();
      await userEvent.click(button);
      button.focus();
      await expect(button).not.toHaveFocus();
      await userEvent.keyboard(TESTING_ENTER_KEY + TESTING_SPACE_KEY);
    }
    await userEvent.tab();
    for (const button of buttons) await expect(button).not.toHaveFocus();
    await expect(args.onSelectionChange).not.toHaveBeenCalled();
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
    tooltipPosition: "left",
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    isCompact: true,
  },
};

export const KeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
  },

  render: (args) => {
    return (
      <div style={{ display: "flex", gap: "16px", flexDirection: "column", alignItems: "flex-start" }}>
        <div data-testid="icon-button-group-single">
          <IconButtonGroup {...args} />
        </div>
        <div data-testid="icon-button-group-strict">
          <IconButtonGroup
            {...args}
            iconButtons={iconButtonStrict}
            selectionMode="single-strict"
            selectedIds={undefined}
            defaultSelectedIds={undefined}
            defaultSelectedId="format-align-left"
            onSelectionChange={fn()}
          />
        </div>
        <div data-testid="icon-button-group-multiple">
          <IconButtonGroup
            {...args}
            iconButtons={iconButtonMultiple}
            selectionMode="multiple"
            selectedId={undefined}
            defaultSelectedId={undefined}
            defaultSelectedIds={["mic"]}
            onSelectionChange={fn()}
          />
        </div>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const singleGroup = await canvas.getByTestId("icon-button-group-single");
    const strictGroup = await canvas.getByTestId("icon-button-group-strict");
    const multipleGroup = await canvas.getByTestId("icon-button-group-multiple");

    const singleButtons = within(singleGroup).getAllByRole("button");
    const strictButtons = within(strictGroup).getAllByRole("button");
    const multipleButtons = within(multipleGroup).getAllByRole("button");

    await focusElementBeforeComponent();

    expect(singleButtons[0]).toHaveAttribute("data-active", "true");
    expect(singleButtons[1]).toHaveAttribute("data-active", "false");
    await userEvent.tab();
    expect(singleButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(singleButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(singleButtons[0]).toHaveAttribute("data-active", "false");
    expect(singleButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(singleButtons[1]).toHaveAttribute("data-active", "false");

    await userEvent.tab();
    expect(strictButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(strictButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(strictButtons[0]).toHaveAttribute("data-active", "false");
    expect(strictButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(strictButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(strictButtons[1]).toHaveAttribute("data-active", "false");
    expect(strictButtons[2]).toHaveAttribute("data-active", "true");

    await userEvent.tab();
    await userEvent.tab();
    expect(multipleButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(multipleButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(multipleButtons[0]).toHaveAttribute("data-active", "true");
    expect(multipleButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(multipleButtons[0]).toHaveAttribute("data-active", "true");
    expect(multipleButtons[1]).toHaveAttribute("data-active", "false");
  },
};

const ControlledExample = (args: GroupProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(args.selectedId ?? null);
  const [selectedIds, setSelectedIds] = useState<readonly string[]>(args.selectedIds ?? []);
  if (args.selectionMode === "multiple") {
    return (
      <IconButtonGroup
        {...args}
        selectedIds={selectedIds}
        onSelectionChange={(nextIds) => {
          setSelectedIds(nextIds);
          args.onSelectionChange?.(nextIds);
        }}
      />
    );
  }
  return (
    <IconButtonGroup
      {...args}
      selectedId={selectedId}
      onSelectionChange={(nextId) => {
        setSelectedId(nextId);
        args.onSelectionChange?.(nextId);
      }}
    />
  );
};

export const Controlled: Story = {
  args: {
    ...Default.args,
    defaultSelectedId: undefined,
    selectedId: "visibility-show",
    onSelectionChange: fn(),
  },
  render: (args) => <ControlledExample {...args} />,
};

export const Uncontrolled: Story = {
  args: { ...Default.args, onSelectionChange: fn() },
};

const SelectionExample = ({
  mode,
  controlled,
  onSelectionChange,
}: {
  mode: IconButtonGroupSelectionMode;
  controlled: boolean;
  onSelectionChange?: SelectionChangeHandler;
}) => {
  const iconButtons = iconButtonsBySelectionMode[mode];
  const [selectedIds, setSelectedIds] = useState([iconButtons[0].name]);
  const selectionProps =
    mode === "multiple"
      ? {
          selectionMode: mode,
          selectedIds: controlled ? selectedIds : undefined,
          defaultSelectedIds: controlled ? undefined : [iconButtons[0].name],
          onSelectionChange: (nextIds: string[]) => {
            if (controlled) setSelectedIds(nextIds);
            onSelectionChange?.(nextIds);
          },
        }
      : {
          selectionMode: mode,
          selectedId: controlled ? (selectedIds[0] ?? null) : undefined,
          defaultSelectedId: controlled ? undefined : iconButtons[0].name,
          onSelectionChange: (nextId: string | null) => {
            if (controlled) setSelectedIds(nextId === null ? [] : [nextId]);
            onSelectionChange?.(nextId);
          },
        };
  return <IconButtonGroup {...selectionProps} iconButtons={iconButtons} aria-label={mode} />;
};

const selectionModeTests: NonNullable<Story["play"]> = async ({ canvasElement, args, step }) => {
  const canvas = within(canvasElement);
  let callCount = 0;
  await expect(args.onSelectionChange).not.toHaveBeenCalled();
  for (const mode of selectionModes) {
    await step(mode, async () => {
      const group = within(canvas.getByRole("group", { name: mode }));
      const iconButtons = iconButtonsBySelectionMode[mode];
      const [firstButton, secondButton, ...remainingButtons] = group.getAllByRole("button");
      const [firstId, secondId, ...remainingIds] = iconButtons.map((button) => button.name);
      await expect(firstButton).toHaveAttribute("aria-pressed", "true");
      firstButton.focus();
      await userEvent.keyboard(TESTING_ENTER_KEY);
      await expect(firstButton).toHaveAttribute("aria-pressed", String(mode === "single-strict"));
      if (mode !== "single-strict") callCount++;
      await expect(args.onSelectionChange).toHaveBeenCalledTimes(callCount);
      if (mode === "single") await expect(args.onSelectionChange).toHaveBeenLastCalledWith(null);
      await userEvent.keyboard(TESTING_SPACE_KEY);
      await expect(firstButton).toHaveAttribute("aria-pressed", "true");
      if (mode !== "single-strict") callCount++;
      await userEvent.tab();
      await expect(secondButton).toHaveFocus();
      await expect(secondButton).toHaveAttribute("aria-pressed", "false");
      await userEvent.keyboard(TESTING_ENTER_KEY);
      callCount++;
      await expect(secondButton).toHaveAttribute("aria-pressed", "true");
      await expect(firstButton).toHaveAttribute("aria-pressed", String(mode === "multiple"));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(
        mode === "multiple" ? [firstId, secondId] : secondId,
      );
      await userEvent.keyboard(TESTING_SPACE_KEY);
      if (mode !== "single-strict") callCount++;
      await expect(secondButton).toHaveAttribute("aria-pressed", String(mode === "single-strict"));
      for (const [index, button] of remainingButtons.entries()) {
        await userEvent.tab();
        await expect(button).toHaveFocus();
        await userEvent.keyboard(TESTING_SPACE_KEY);
        callCount++;
        await expect(button).toHaveAttribute("aria-pressed", "true");
        await expect(args.onSelectionChange).toHaveBeenLastCalledWith(
          mode === "multiple" ? [firstId, ...remainingIds.slice(0, index + 1)] : remainingIds[index],
        );
      }
      await userEvent.click(firstButton);
      callCount++;
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(mode === "multiple" ? remainingIds : firstId);
      await expect(args.onSelectionChange).toHaveBeenCalledTimes(callCount);
    });
  }
};

export const ControlledKeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: { ...Default.args, onSelectionChange: fn() },
  render: (args) => (
    <div style={{ display: "grid", gap: "16px", justifyItems: "start" }}>
      {selectionModes.map((mode) => (
        <SelectionExample
          key={mode}
          mode={mode}
          controlled
          onSelectionChange={args.onSelectionChange as SelectionChangeHandler}
        />
      ))}
    </div>
  ),
  play: selectionModeTests,
};

export const UncontrolledKeyboardInteraction: Story = {
  tags: ["!autodocs"],
  args: { ...Default.args, onSelectionChange: fn() },
  render: (args) => (
    <div style={{ display: "grid", gap: "16px", justifyItems: "start" }}>
      {selectionModes.map((mode) => (
        <SelectionExample
          key={mode}
          mode={mode}
          controlled={false}
          onSelectionChange={args.onSelectionChange as SelectionChangeHandler}
        />
      ))}
    </div>
  ),
  play: selectionModeTests,
};

const dynamicButtons: IconButtonItem[] = [
  { id: "microphone", name: "mic", label: "Microphone" },
  { id: "volume", name: "volume-up", label: "Volume" },
  { id: "video", name: "video-camera", label: "Video Camera" },
];

const ListUpdatesExample = (args: GroupProps) => {
  const [buttons, setButtons] = useState(dynamicButtons);
  const [mode, setMode] = useState<IconButtonGroupSelectionMode>("multiple");
  const [defaults, setDefaults] = useState(["microphone"]);
  const [controlledAttempt, setControlledAttempt] = useState(false);
  const onSelectionChange = args.onSelectionChange as SelectionChangeHandler | undefined;
  const selectionProps =
    mode === "multiple"
      ? {
          selectionMode: mode,
          defaultSelectedIds: controlledAttempt ? undefined : defaults,
          selectedIds: controlledAttempt ? ["microphone"] : undefined,
          onSelectionChange,
        }
      : {
          selectionMode: mode,
          defaultSelectedId: controlledAttempt ? undefined : (defaults[0] ?? null),
          selectedId: controlledAttempt ? "microphone" : undefined,
          onSelectionChange,
        };
  return (
    <div>
      <IconButtonGroup {...selectionProps} iconButtons={buttons} aria-label="Dynamic selection" />
      <div>
        <button type="button" onClick={() => setButtons(buttons.map((button) => ({ ...button })))}>
          Refresh items
        </button>
        <button type="button" onClick={() => setDefaults(["video"])}>
          Change defaults
        </button>
        <button type="button" onClick={() => setButtons([...buttons].reverse())}>
          Reverse items
        </button>
        <button type="button" onClick={() => setButtons(buttons.filter((button) => button.id !== "volume"))}>
          Remove volume
        </button>
        <button type="button" onClick={() => setButtons(buttons.filter((button) => button.id !== "video"))}>
          Remove video
        </button>
        <button type="button" onClick={() => setButtons([])}>
          Clear items
        </button>
        <button type="button" onClick={() => setButtons(dynamicButtons)}>
          Restore items
        </button>
        <button
          type="button"
          onClick={() =>
            setButtons(
              buttons.map((button) =>
                button.id === "microphone" ? { ...button, name: "edit", label: "Edited microphone" } : button,
              ),
            )
          }
        >
          Change icon
        </button>
        <button type="button" onClick={() => setButtons(iconButtonSingle)}>
          Replace items
        </button>
        <button type="button" onClick={() => setControlledAttempt(true)}>
          Provide controlled value
        </button>
        <button type="button" onClick={() => setControlledAttempt(false)}>
          Restore uncontrolled mode
        </button>
        <select
          aria-label="Selection mode"
          value={mode}
          onChange={(event) => setMode(event.target.value as IconButtonGroupSelectionMode)}
        >
          {selectionModes.map((selectionMode) => (
            <option key={selectionMode} value={selectionMode}>
              {selectionMode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const expectSelectionWarning = async (action: () => Promise<void>, message: string) => {
  const originalWarn = console.warn;
  const warning = fn();
  console.warn = warning;
  try {
    await action();
    await expect(warning).toHaveBeenCalledWith(`[IconButtonGroup] ${message}`);
  } finally {
    console.warn = originalWarn;
  }
};

export const ListUpdates: Story = {
  tags: ["!autodocs"],
  args: { ...Default.args, onSelectionChange: fn() },
  render: (args) => <ListUpdatesExample {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const group = () => within(canvas.getByRole("group", { name: "Dynamic selection" }));
    const action = (name: string) => userEvent.click(canvas.getByRole("button", { name }));
    const selected = () =>
      group()
        .getAllByRole("button", { pressed: true })
        .map((button) => button.getAttribute("aria-label"));
    await userEvent.click(group().getByRole("button", { name: "Volume" }));
    await expect(selected()).toEqual(["Microphone", "Volume"]);
    await action("Refresh items");
    await action("Change defaults");
    await expect(selected()).toEqual(["Microphone", "Volume"]);
    await action("Reverse items");
    await expect(selected()).toEqual(["Volume", "Microphone"]);
    await action("Remove video");
    await expectSelectionWarning(() => action("Remove volume"), "The component requires at least 2 icon buttons.");
    await expect(canvas.queryByRole("group", { name: "Dynamic selection" })).not.toBeInTheDocument();
    await action("Restore items");
    await expect(selected()).toEqual(["Microphone"]);
    await expectSelectionWarning(() => action("Clear items"), "The component requires at least 2 icon buttons.");
    await expect(canvas.queryByRole("group", { name: "Dynamic selection" })).not.toBeInTheDocument();
    await action("Restore items");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await userEvent.click(group().getByRole("button", { name: "Volume" }));
    await action("Reverse items");
    const mode = canvas.getByRole("combobox", { name: "Selection mode" });
    await userEvent.selectOptions(mode, "single");
    await expect(selected()).toEqual(["Volume"]);
    await userEvent.selectOptions(mode, "single-strict");
    await action("Remove volume");
    await expect(selected()).toEqual(["Video Camera"]);
    await action("Restore items");
    await expect(selected()).toEqual(["Video Camera"]);
    await userEvent.selectOptions(mode, "multiple");
    await action("Remove video");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await action("Restore items");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await userEvent.selectOptions(mode, "single-strict");
    await expect(selected()).toEqual(["Microphone"]);
    await action("Change icon");
    await expect(selected()).toEqual(["Edited microphone"]);
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
    await action("Provide controlled value");
    await expect(selected()).toEqual(["Edited microphone"]);
    await action("Restore uncontrolled mode");
    await expect(selected()).toEqual(["Edited microphone"]);
    await action("Replace items");
    await expect(selected()).toEqual(["Read only"]);
    await userEvent.click(group().getByRole("button", { name: "Edit" }));
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith("edit");
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(3);
  },
};

const ControlledUpdatesExample = (args: GroupProps) => {
  const [selection, setSelection] = useState<string | null | readonly string[] | undefined>("microphone");
  const [buttons, setButtons] = useState(dynamicButtons);
  const [mode, setMode] = useState<IconButtonGroupSelectionMode>("single");
  const [defaults, setDefaults] = useState<string[] | undefined>();
  const selectionProps = {
    selectionMode: mode,
    selectedId: mode === "multiple" ? undefined : selection,
    selectedIds: mode === "multiple" ? selection : undefined,
    defaultSelectedId: mode === "multiple" ? undefined : defaults?.[0],
    defaultSelectedIds: mode === "multiple" ? defaults : undefined,
    onSelectionChange: args.onSelectionChange,
  } as GroupProps;
  return (
    <div>
      <IconButtonGroup {...selectionProps} iconButtons={buttons} aria-label="Controlled updates" />
      <div>
        <button type="button" onClick={() => setSelection(mode === "multiple" ? ["volume"] : "volume")}>
          Select volume
        </button>
        <button type="button" onClick={() => setSelection(mode === "multiple" ? [] : null)}>
          Clear selection
        </button>
        <button type="button" onClick={() => setSelection(mode === "multiple" ? ["unknown"] : "unknown")}>
          Select unknown
        </button>
        <button type="button" onClick={() => setSelection(["microphone", "microphone"])}>
          Duplicate selection
        </button>
        <button type="button" onClick={() => setSelection(["microphone", "volume"])}>
          Select two
        </button>
        <button type="button" onClick={() => setSelection("volume")}>
          Provide scalar
        </button>
        <button type="button" onClick={() => setSelection(null)}>
          Provide null
        </button>
        <button type="button" onClick={() => setMode("single-strict")}>
          Use strict mode
        </button>
        <button type="button" onClick={() => setMode("single")}>
          Use single mode
        </button>
        <button
          type="button"
          onClick={() => {
            setSelection((previous) => (typeof previous === "string" ? [previous] : previous === null ? [] : previous));
            setMode("multiple");
          }}
        >
          Use multiple mode
        </button>
        <button type="button" onClick={() => setButtons(buttons.filter((button) => button.id !== "volume"))}>
          Remove volume
        </button>
        <button type="button" onClick={() => setButtons(dynamicButtons)}>
          Restore items
        </button>
        <button
          type="button"
          onClick={() => setButtons([dynamicButtons[0], { ...dynamicButtons[1], id: "microphone" }])}
        >
          Duplicate IDs
        </button>
        <button type="button" onClick={() => setSelection(undefined)}>
          Remove controlled value
        </button>
        <button type="button" onClick={() => setDefaults(["microphone"])}>
          Mix defaults
        </button>
      </div>
    </div>
  );
};

export const ControlledUpdates: Story = {
  tags: ["!autodocs"],
  args: { ...Default.args, onSelectionChange: fn() },
  render: (args) => <ControlledUpdatesExample {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const group = () => within(canvas.getByRole("group", { name: "Controlled updates" }));
    const action = (name: string) => userEvent.click(canvas.getByRole("button", { name }));
    await userEvent.click(group().getByRole("button", { name: "Volume" }));
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(1);
    await expect(args.onSelectionChange).toHaveBeenCalledWith("volume");
    await expect(group().getByRole("button", { name: "Microphone" })).toHaveAttribute("aria-pressed", "true");
    await expect(group().getByRole("button", { name: "Volume" })).toHaveAttribute("aria-pressed", "false");
    await action("Select volume");
    await expect(group().getByRole("button", { name: "Volume" })).toHaveAttribute("aria-pressed", "true");
    await action("Clear selection");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await userEvent.click(group().getByRole("button", { name: "Volume" }));
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith("volume");
    for (const [name, message] of [
      ["Select unknown", "Selected IDs must belong to the icon button group."],
      ["Duplicate selection", "In single modes, selectedId must be a string or null."],
      ["Select two", "In single modes, selectedId must be a string or null."],
    ]) {
      await expectSelectionWarning(() => action(name), message);
      await expect(canvas.queryByRole("group", { name: "Controlled updates" })).not.toBeInTheDocument();
      await action("Clear selection");
    }
    await expectSelectionWarning(
      () => action("Use strict mode"),
      "In single-strict mode, exactly one icon button must be selected.",
    );
    await action("Select volume");
    await expect(group().getByRole("button", { name: "Volume" })).toHaveAttribute("aria-pressed", "true");
    await expectSelectionWarning(() => action("Select two"), "In single modes, selectedId must be a string or null.");
    await action("Use multiple mode");
    await expect(group().getAllByRole("button", { pressed: true })).toHaveLength(2);
    for (const name of ["Provide scalar", "Provide null"]) {
      await expectSelectionWarning(() => action(name), "In multiple mode, selectedIds must be an array.");
      await expect(canvas.queryByRole("group", { name: "Controlled updates" })).not.toBeInTheDocument();
      await action("Select two");
    }
    await action("Clear selection");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await expectSelectionWarning(() => action("Duplicate selection"), "Selected IDs must be unique.");
    await action("Select two");
    await expectSelectionWarning(
      () => action("Use single mode"),
      "In single modes, selectedId must be a string or null.",
    );
    await action("Select volume");
    await expectSelectionWarning(() => action("Remove volume"), "Selected IDs must belong to the icon button group.");
    await action("Restore items");
    await expectSelectionWarning(() => action("Duplicate IDs"), "Icon button IDs must be unique.");
    await action("Restore items");
    await action("Remove controlled value");
    await expect(group().queryAllByRole("button", { pressed: true })).toHaveLength(0);
    await action("Select volume");
    await expectSelectionWarning(
      () => action("Mix defaults"),
      "Use selectedId or defaultSelectedId, not both. selectedId takes precedence.",
    );
    await expect(group().getByRole("button", { name: "Volume" })).toHaveAttribute("aria-pressed", "true");
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
  },
};

export const SameIconDifferentIds: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    iconButtons: [
      { id: "first-edit", name: "edit", label: "Edit first" },
      { id: "second-edit", name: "edit", label: "Edit second" },
    ],
    defaultSelectedIds: ["first-edit"],
    defaultSelectedId: undefined,
    selectionMode: "multiple",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <form aria-label="Editor" onSubmit={fn()}>
      <IconButtonGroup {...args} />
    </form>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const form = canvas.getByRole("form", { name: "Editor" });
    const submit = fn((event: Event) => event.preventDefault());
    form.addEventListener("submit", submit);
    try {
      await userEvent.click(canvas.getByRole("button", { name: "Edit second" }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(["first-edit", "second-edit"]);
      await userEvent.click(canvas.getByRole("button", { name: "Edit first" }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]);
      await expect(canvas.getByRole("button", { name: "Edit second" })).toHaveAttribute("aria-pressed", "true");
      await expect(submit).not.toHaveBeenCalled();
    } finally {
      form.removeEventListener("submit", submit);
    }
  },
};
