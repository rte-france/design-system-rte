import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect, waitFor } from "@storybook/test";

import { ButtonComponent } from "../../button/button.component";
import { SwitchComponent } from "../../switch/switch.component";
import { BannerComponent } from "../banner.component";

const meta: Meta<BannerComponent> = {
  title: "Banner",
  component: BannerComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "alert"],
    },
    position: {
      control: "select",
      options: ["push", "overlay"],
    },
    closable: {
      control: "boolean",
    },
    showIcon: {
      control: "boolean",
    },
    isOpen: {
      control: "boolean",
    },
    actionCallback: { action: "actionCallback" },
    close: { action: "close" },
  },
  args: { close: fn() },
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Default: Story = {
  args: {
    title: "La mise à jour est disponible !",
    message:
      "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default",
    isOpen: true,
  },
};

export const Alert: Story = {
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message:
      "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "alert",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="type"
          [showIcon]="true"
          />
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="'alert'"
          [showIcon]="true"
          />
    </div>
    `,
  }),
};

export const Closable: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    closable: true,
    isOpen: false,
  },
  render: (args) => ({
    props: {
      ...args,
      close() {
        this["isOpen"] = false;
      },
      toggleBanner() {
        this["isOpen"] = !this["isOpen"];
      },
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="type"
          [showIcon]="true"
          [closable]="true"
          [isOpen]="isOpen"
          (close)="close()"
          />
        <rte-button [label]="isOpen ? 'Hide banner' : 'Show banner' " (click)="toggleBanner()" style="margin-top: 16px;"/>
    </div>
    `,
  }),
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    closable: true,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    },
  },
};

export const Overlay: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, SwitchComponent],
    }),
  ],
  args: {
    ...Default.args,
    closable: true,
    isOpen: false,
    position: "overlay",
  },
  render: (args) => ({
    props: {
      ...args,
      close() {
        this["isOpen"] = false;
      },
      toggleBanner() {
        this["isOpen"] = !this["isOpen"];
      },
      toggleOverlay() {
        this["position"] = this["position"] === "overlay" ? "push" : "overlay";
      },
    },
    template: `
      <rte-banner
        [title]="title"
        [message]="message"
        [type]="type"
        [showIcon]="true"
        [closable]="true"
        [isOpen]="isOpen"
        (close)="close()"
        [position]="position"
      />
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-button [label]="isOpen ? 'Hide banner' : 'Show banner' " (click)="toggleBanner()" style="margin-top: 16px;"/>
         <rte-switch
            label="{{position === 'overlay' ? 'Overlay' : 'Push'}} mode"
            [checked]="position === 'overlay'"
            (stateChange)="toggleOverlay()"
          />
        <div style="width: 100%; display: flex; gap: 16px; flexWrap: wrap">
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 400px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 400px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 200px; height: 300px; backgroundColor: #e1e1e0"></div>
          <div style="width: 400px; height: 300px; backgroundColor: #e1e1e0"></div>
        </div>
    </div>
    `,
  }),
};

export const KeyboardInteraction: Story = {
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    ...Default.args,
    closable: true,
    isOpen: true,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    },
  },
  render: (args) => ({
    props: {
      ...args,
      close() {
        this["isOpen"] = false;
      },
      toggleBanner() {
        this["isOpen"] = !this["isOpen"];
      },
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="type"
          [showIcon]="true"
          [closable]="true"
          [isOpen]="isOpen"
          (close)="close()"
          [actionLabel]="actionLabel"
          [actionCallback]="actionCallback"
          />
        <rte-button [label]="isOpen ? 'Hide banner' : 'Show banner' " (click)="toggleBanner()" style="margin-top: 16px;"/>
    </div>
    `,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const banner = await canvas.getByRole("status");
    const actionButton = await within(banner).getAllByRole("button")[0];
    const closeButton = await within(banner).getAllByRole("button")[1];
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  },
};
