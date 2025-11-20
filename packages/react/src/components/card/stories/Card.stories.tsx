import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import Button from "../../button/Button";
import Card from "../Card";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
      description: "Size of the card",
    },
    cardType: {
      control: "select",
      options: ["default", "outlined"],
      description: "Type of card styling",
    },
    clickable: {
      control: "boolean",
      description: "Whether the card is clickable",
    },
    disabled: {
      control: "boolean",
      description: "Whether the card is disabled",
    },
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent = (
  <div style={{ padding: "16px" }}>
    <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Card Title</h2>
    <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>
      This is a sample card with some content. You can add any content you want here, including text, images, buttons,
      or other components.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
    children: defaultContent,
  },
};

export const Sizes: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card {...args} size="xs">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>Extra Small (xs)</h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>240px width</p>
        </div>
      </Card>
      <Card {...args} size="s">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>Small (s)</h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>360px width</p>
        </div>
      </Card>
      <Card {...args} size="m">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>Medium (m)</h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>480px width</p>
        </div>
      </Card>
      <Card {...args} size="l">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>Large (l)</h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>600px width</p>
        </div>
      </Card>
      <Card {...args} size="xl">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>Extra Large (xl)</h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>720px width</p>
        </div>
      </Card>
    </div>
  ),
};

export const CardTypes: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card {...args} cardType="default">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "600" }}>Default Card</h3>
          <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
            This card uses the default styling with elevation shadow.
          </p>
        </div>
      </Card>
      <Card {...args} cardType="outlined">
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "600" }}>Outlined Card</h3>
          <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
            This card uses outlined styling with a border instead of shadow.
          </p>
        </div>
      </Card>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false,
  },
  render: (args) => (
    <Card {...args} onClick={args.onClick}>
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Clickable Card</h2>
        <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>
          This card is clickable. Click anywhere on the card to trigger an action.
        </p>
        <p style={{ margin: "0", color: "#999", fontSize: "14px" }}>
          Check the console or Actions panel to see the click event.
        </p>
      </div>
    </Card>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const cardText = canvas.getByText("Clickable Card");
    const card = cardText.closest("[data-clickable='true']") as HTMLElement;
    expect(card).toBeInTheDocument();
    await userEvent.click(card);
    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: true,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card {...args} cardType="default">
        <div style={{ padding: "16px" }}>
          <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Disabled Default Card</h2>
          <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>This card is disabled and cannot be clicked.</p>
        </div>
      </Card>
      <Card {...args} cardType="outlined">
        <div style={{ padding: "16px" }}>
          <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Disabled Outlined Card</h2>
          <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>This outlined card is also disabled.</p>
        </div>
      </Card>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const cards = canvasElement.querySelectorAll("[data-disabled='true']");
    expect(cards.length).toBeGreaterThan(0);
    cards.forEach((card) => {
      expect(card).toHaveAttribute("data-disabled", "true");
    });
  },
};

export const WithButtons: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card {...args}>
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "600" }}>Primary Button</h3>
          <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>Card with primary button variant</p>
          <Button variant="primary" label="Primary Action" onClick={() => console.log("Primary clicked")} />
        </div>
      </Card>
      <Card {...args}>
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "600" }}>Secondary Button</h3>
          <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>Card with secondary button variant</p>
          <Button variant="secondary" label="Secondary Action" onClick={() => console.log("Secondary clicked")} />
        </div>
      </Card>
      <Card {...args}>
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "600" }}>Multiple Buttons</h3>
          <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>Card with multiple button actions</p>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button variant="primary" label="Save" onClick={() => console.log("Save clicked")} />
            <Button variant="neutral" label="Cancel" onClick={() => console.log("Cancel clicked")} />
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const ClickableWithContent: Story = {
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false,
  },
  render: (args) => (
    <Card {...args}>
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Clickable Card with Button</h2>
        <p style={{ margin: "0 0 16px 0", color: "#666", lineHeight: "1.5" }}>
          This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will
          stop propagation, so clicking it won't trigger the card click.
        </p>
        <Button
          variant="primary"
          label="Action Button"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Button clicked inside card");
          }}
        />
      </div>
    </Card>
  ),
};
