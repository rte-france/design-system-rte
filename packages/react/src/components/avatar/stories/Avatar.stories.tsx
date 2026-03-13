import { TESTING_SPACE_KEY } from "@design-system-rte/core";
import { AvatarSize } from "@design-system-rte/core/components/avatar/avatar.interface";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, within } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Toast from "../../toast/Toast";
import ToastQueueProvider from "../../toast/toastQueue/ToastQueueProvider";
import Avatar from "../Avatar";

import logo from "./company.png";
import img from "./user.png";

const meta = {
  title: "Composants/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    decorativeColor: {
      control: "select",
      options: [
        "neutral",
        "bleu-iceberg",
        "vert-foret",
        "violet",
        "bleu-rte",
        "bleu-digital",
        "marine",
        "bleu-petrole",
        "bleu-cyan",
        "vert",
        "vert-indications",
        "vert-digital",
        "jaune",
        "jaune-ocre",
        "jaune-indications",
        "saumon",
        "rose-digital",
        "fuschia",
        "rouge-indication",
        "taupe",
      ],
    },
    status: {
      control: "select",
      options: ["available", "away", "busy", "offline", "unknown"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizeOptions = [120, 96, 72, 64, 56, 48, 40, 36, 32, 28, 24] as AvatarSize[];

export const Default: Story = {
  args: {
    imgSrc: img,
    alt: "Avatar of Jane Doe",
    size: 32,
    colorType: "neutral",
    type: "user",
  },
};

export const UserNeutral: Story = {
  args: {
    ...Default.args,
    type: "user",
    colorType: "neutral",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};

export const UserBrand: Story = {
  args: {
    ...UserNeutral.args,
    colorType: "brand",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};

export const UserDecorative: Story = {
  args: {
    ...UserNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};

export const EntityNeutral: Story = {
  args: {
    ...Default.args,
    type: "entity",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="image" imgSrc={logo} alt="Company Logo" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};
export const EntityBrand: Story = {
  args: {
    ...EntityNeutral.args,
    colorType: "brand",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};
export const EntityDecorative: Story = {
  args: {
    ...EntityNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />
        ))}
      </div>
    </div>
  ),
};

export const Status: Story = {
  args: {
    ...Default.args,
    status: "available",
  },

  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" alt="Avatar of Jane Doe" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar key={size} {...args} size={size} layout="icon" status="busy" />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar
            key={size}
            {...args}
            size={size}
            layout="initials"
            initials="MB"
            type="entity"
            status="away"
            colorType="brand"
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar
            key={size}
            {...args}
            size={size}
            layout="image"
            imgSrc={logo}
            alt="Company Logo"
            type="entity"
            status="offline"
            colorType="decorative"
            decorativeColor="violet"
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {sizeOptions.map((size) => (
          <Avatar
            key={size}
            {...args}
            size={size}
            layout="icon"
            alt="Company Logo"
            type="entity"
            status="unknown"
            colorType="decorative"
            decorativeColor="violet"
          />
        ))}
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    ...Default.args,
    onClick: () => {},
    size: 120,
  },

  render: (args) => {
    const [isAvailableToastOpen, setIsAvailableToastOpen] = useState(false);
    const [isBusyToastOpen, setIsBusyToastOpen] = useState(false);
    return (
      <ToastQueueProvider>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Toast
            message={"Clicked on the available avatar !"}
            type="success"
            isOpen={isAvailableToastOpen}
            onClose={() => setIsAvailableToastOpen(false)}
            closable={true}
          />
          <Toast
            message={"Clicked on the busy avatar !"}
            type="error"
            isOpen={isBusyToastOpen}
            onClose={() => setIsBusyToastOpen(false)}
            closable={true}
          />
          <Avatar
            {...args}
            type="user"
            layout="image"
            imgSrc={img}
            alt="Avatar of Jane Doe"
            onClick={() => setIsAvailableToastOpen(true)}
            status="available"
          />
          <Avatar {...args} layout="icon" type="entity" status="busy" onClick={() => setIsBusyToastOpen(true)} />
        </div>
      </ToastQueueProvider>
    );
  },

  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);
    const availableAvatar = canvasElement.querySelector('button[data-avatar-type="user"]');

    await userEvent.tab();

    expect(availableAvatar).toHaveFocus();

    await userEvent.keyboard(TESTING_SPACE_KEY);

    const toast = within(document.body).getByRole("status");

    expect(toast).toBeInTheDocument();
  },
};
