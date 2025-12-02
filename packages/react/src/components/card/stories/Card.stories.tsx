import {
  cardStoryArgTypes,
  sizeExamples,
  cardTypeExamples,
  defaultStoryArgs,
  clickableStoryArgs,
  disabledStoryArgs,
} from "@design-system-rte/core/components/card/card.stories.shared";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";

import Button from "../../button/Button";
import Card from "../Card";

const meta = {
  title: "Composants/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    ...cardStoryArgTypes,
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
    ...defaultStoryArgs,
    children: defaultContent,
  },
};

export const Sizes: Story = {
  args: defaultStoryArgs,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {sizeExamples.map((example) => (
        <Card key={example.size} {...args} size={example.size}>
          <div style={{ padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>{example.label}</h3>
            <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>{example.width}</p>
          </div>
        </Card>
      ))}
    </div>
  ),
};

export const CardTypes: Story = {
  args: defaultStoryArgs,
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {cardTypeExamples.map((example) => (
        <Card key={example.cardType} {...args} cardType={example.cardType}>
          <div style={{ padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "600" }}>{example.title}</h3>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>{example.description}</p>
          </div>
        </Card>
      ))}
    </div>
  ),
};

export const Clickable: Story = {
  args: clickableStoryArgs,
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
  args: disabledStoryArgs,
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
  args: defaultStoryArgs,
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
  args: clickableStoryArgs,
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
