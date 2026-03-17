import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Accordion from "../Accordion";

const meta = {
  title: "Composants/Accordion",
  component: Accordion,
  argTypes: {
    alignement: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    appearance: {
      options: ["brand", "neutral"],
      control: { type: "radio" },
    },
    compactSpacing: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
    title: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignement: "right",
    icon: "power-wind",
    disabled: false,
    isOpen: false,
    appearance: "brand",
    compactSpacing: false,
    size: "small",
    title: "Accordion title",
  },

  render: (args) => (
    <div style={{ width: "400px", background: "#C7DBF0", padding: "16px" }}>
      <Accordion {...args}>
        <p style={{ margin: 0, fontFamily: "Arial" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
      <Accordion {...args}>
        <p style={{ margin: 0, fontFamily: "Arial" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
    </div>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByTestId("accordion-button");
    focusElementBeforeComponent(canvasElement);

    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");

    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  },
};

export const Brand: Story = {
  args: {
    ...Default.args,
  },

  render: (args) => (
    <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "400px" }}>
        <Accordion {...args}>
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="left">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
      <div style={{ width: "400px" }}>
        <Accordion {...args} alignement="left" size="large">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="right" size="large">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
    </div>
  ),
};
export const Neutral: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
  },

  render: (args) => (
    <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "400px" }}>
        <Accordion {...args}>
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="left">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
      <div style={{ width: "400px" }}>
        <Accordion {...args} alignement="left" size="large">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="right" size="large">
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
    </div>
  ),
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "400px" }}>
          <Accordion {...args}>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{ width: "400px" }}>
          <Accordion {...args} alignement="left" size="large">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
      <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "400px" }}>
          <Accordion {...args} appearance="neutral">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left" appearance="neutral">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{ width: "400px" }}>
          <Accordion {...args} alignement="left" size="large" appearance="neutral">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large" appearance="neutral">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "400px" }}>
          <Accordion {...args}>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{ width: "400px" }}>
          <Accordion {...args} alignement="left" size="large">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large">
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
      <div style={{ background: "#C7DBF0", padding: "16px", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "400px" }}>
          <Accordion {...args} compactSpacing>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left" compactSpacing>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{ width: "400px" }}>
          <Accordion {...args} alignement="left" size="large" compactSpacing>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large" compactSpacing>
            <p style={{ margin: 0, fontFamily: "Arial" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  ),
};

export const Exclusive: Story = {
  args: {
    ...Default.args,
  },

  render: (args) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
      <div style={{ width: "400px", background: "#C7DBF0", padding: "16px", overflow: "scroll", height: "200px" }}>
        <Accordion
          {...args}
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex((prevIndex) => (prevIndex === 0 ? null : 0))}
        >
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion
          {...args}
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex((prevIndex) => (prevIndex === 1 ? null : 1))}
        >
          <p style={{ margin: 0, fontFamily: "Arial" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
    );
  },
};
