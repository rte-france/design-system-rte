import { AvatarSize } from "@design-system-rte/core/components/avatar/avatar.interface";
import { TESTING_SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { userEvent, within, expect } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { ToastService } from "../../toast/toast.service";
import { AvatarComponent } from "../avatar.component";

import { AvatarInteractionComponent } from "./avatar-interaction.component";
import logo from "./company.png";
import img from "./user.png";

const meta: Meta<AvatarComponent> = {
  title: "Composants/Avatar/Avatar",
  component: AvatarComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [AvatarInteractionComponent],
      providers: [ToastService],
    }),
  ],
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
    colorType: {
      control: "select",
      options: ["neutral", "brand", "decorative"],
    },
    type: {
      control: "select",
      options: ["user", "entity"],
    },
    layout: {
      control: "select",
      options: ["image", "icon", "initials"],
    },
    status: {
      control: "select",
      options: ["available", "away", "busy", "offline", "unknown"],
    },
    size: {
      control: "select",
      options: [120, 96, 72, 64, 56, 48, 40, 36, 32, 28, 24],
    },
    initials: {
      control: "text",
    },
  },
};

const sizeOptions = [120, 96, 72, 64, 56, 48, 40, 36, 32, 28, 24] as AvatarSize[];

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    imgSrc: img,
    alt: "Avatar of Jane Doe",
    size: 64,
    colorType: "neutral",
    type: "user",
    layout: "image",
    status: "available",
  },
};

export const Icon: Story = {
  args: {
    ...Default.args,
    layout: "icon",
  },
};

export const Initials: Story = {
  args: {
    ...Default.args,
    layout: "initials",
    initials: "MB",
  },
};

export const Sizes: Story = {
  args: {
    ...Default.args,
    layout: "image",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
    </div>`,
  }),
};

export const Entity: Story = {
  args: {
    ...Default.args,
    type: "entity",
    imgSrc: logo,
  },
};

export const User: Story = {
  args: {
    ...Default.args,
    type: "user",
    initials: "MB",
    layout: "initials",
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    layout: "initials",
    initials: "MB",
    colorType: "neutral",
  },
};

export const Brand: Story = {
  args: {
    ...Neutral.args,
    colorType: "brand",
  },
};

export const Decorative: Story = {
  args: {
    ...Neutral.args,
    colorType: "decorative",
    decorativeColor: "violet",
  },
};

export const UserNeutral: Story = {
  args: {
    ...Default.args,
    type: "user",
    colorType: "neutral",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" />
      </div>
    </div>`,
  }),
};

export const UserBrand: Story = {
  args: {
    ...UserNeutral.args,
    type: "user",
    colorType: "brand",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" />
      </div>
    </div>`,
  }),
};

export const UserDecorative: Story = {
  args: {
    ...UserNeutral.args,
    type: "user",
    colorType: "decorative",
    decorativeColor: "violet",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" [decorativeColor]="decorativeColor" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" [decorativeColor]="decorativeColor" />
      </div>
    </div>`,
  }),
};

export const EntityNeutral: Story = {
  args: {
    ...Default.args,
    type: "entity",
    imgSrc: logo,
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" [type]="type" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" [type]="type" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" [type]="type" />
      </div>
    </div>`,
  }),
};

export const EntityBrand: Story = {
  args: {
    ...EntityNeutral.args,
    colorType: "brand",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" [type]="type" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" [type]="type" />
      </div>
    </div>`,
  }),
};

export const EntityDecorative: Story = {
  args: {
    ...EntityNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet",
  },
  render: (args) => ({
    props: { ...args, sizeOptions },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'icon'" [colorType]="colorType" [type]="type" [decorativeColor]="decorativeColor" />
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <rte-avatar *ngFor="let size of sizeOptions" [size]="size" [layout]="'initials'" [initials]="'MB'" [colorType]="colorType" [type]="type" [decorativeColor]="decorativeColor" />
      </div>
    </div>`,
  }),
};

export const Status: Story = {
  args: {
    ...Default.args,
    type: "user",
    colorType: "neutral",
    status: "available",
  },
  render: (args) => ({
    props: { ...args, sizeOptions, logo },
    template: `
    <div style="display: flex; flex-direction: row; gap: 16px;">
      <rte-avatar size="64" layout="image" [imgSrc]="imgSrc" status="available"></rte-avatar>
      <rte-avatar size="64" layout="icon" status="busy"></rte-avatar>
      <rte-avatar size="64" layout="initials" initials="MB" status="away"></rte-avatar>
      <rte-avatar size="64" layout="image" [imgSrc]="logo" type="entity" status="offline"></rte-avatar>
      <rte-avatar size="64" layout="icon" type="entity" status="unknown"></rte-avatar>
    </div>`,
  }),
};

export const Interactive: Story = {
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isInteractive: true,
    size: 120,
  },

  render: (args) => ({
    props: { ...args },
    template: `<avatar-interaction></avatar-interaction>`,
  }),

  play: async ({ canvasElement }) => {
    focusElementBeforeComponent();
    const availableAvatar = canvasElement.querySelector('button[data-avatar-type="user"]');

    await userEvent.tab();

    expect(availableAvatar).toHaveFocus();

    await userEvent.keyboard(TESTING_SPACE_KEY);

    const toast = within(document.body).getByRole("status");

    expect(toast).toBeInTheDocument();
  },
};
