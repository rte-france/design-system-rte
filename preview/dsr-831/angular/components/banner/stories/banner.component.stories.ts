import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { fn, userEvent, within, expect, waitFor } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { ButtonComponent } from "../../button/button.component";
import { SwitchComponent } from "../../switch/switch.component";
import { BannerComponent } from "../banner.component";

const meta: Meta<BannerComponent> = {
  title: "Composants/Banner/Banner",
  component: BannerComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
    title: {
      control: "text",
    },
    message: {
      control: "text",
    },
    actionLabel: {
      control: "text",
    },
    position: {
      control: "select",
      options: ["push", "overlay"],
    },
    closable: {
      control: "boolean",
    },
    isOpen: {
      control: "boolean",
    },
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
    type: "info",
    isOpen: true,
  },
};

export const Alert: Story = {
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message:
      "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error",
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
          />
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="'error'"
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
          [closable]="true"
          [isOpen]="isOpen"
          (close)="close()"
          />
        <button rteButton (click)="toggleBanner()" style="margin-top: 16px;">
          {{ isOpen ? 'Hide banner' : 'Show banner' }}
        </button>
    </div>
    `,
  }),
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    closable: true,
    actionLabel: "Voir les détails",
  },
  render: (args) => ({
    props: {
      ...args,
      actionCallback: () => {
        console.log("Action button clicked");
      },
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="type"
          [isOpen]="isOpen"
          [actionLabel]="actionLabel"
          (click)="actionCallback()"
          />
    </div>
    `,
  }),
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
        [closable]="true"
        [isOpen]="isOpen"
        (close)="close()"
        [position]="position"
      />
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <button rteButton (click)="toggleBanner()" style="margin-top: 16px;">
          {{ isOpen ? 'Hide banner' : 'Show banner' }}
        </button>
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
      actionCallback: () => {
        console.log("Action button clicked");
      },
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <rte-banner
          [title]="title"
          [message]="message"
          [type]="type"
          [closable]="true"
          [isOpen]="isOpen"
          (close)="close()"
          [actionLabel]="actionLabel"
          (click)="actionCallback()"
          />
        <button rteButton (click)="toggleBanner()" style="margin-top: 16px;">
          {{ isOpen ? 'Hide banner' : 'Show banner' }}
        </button>
    </div>
    `,
  }),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
    const banner = await canvas.getByRole("status");
    const closeButton = await within(banner).getAllByRole("button")[1];
    await userEvent.tab();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  },
};
