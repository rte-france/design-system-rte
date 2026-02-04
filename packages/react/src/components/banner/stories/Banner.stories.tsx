import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor, expect } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Button from "../../button/Button";
import Switch from "../../switch/Switch";
import Banner from "../Banner";

const meta = {
  title: "Composants/Banner/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    type: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
    closable: { control: "boolean" },
    actionCallback: { action: "actionCallback" },
    actionLabel: { control: "text" },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "La mise à jour est disponible !",
    message:
      "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true,
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
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Banner {...args} />
        <Banner {...Alert.args} />
      </div>
    );
  },
};

export const Closable: Story = {
  args: {
    ...Default.args,
    closable: true,
  },
  render: (args) => {
    const [showBanner, setShowBanner] = useState(false);
    return (
      <div>
        <Banner {...args} closable isOpen={showBanner} onClose={() => setShowBanner(false)} />
        <Button
          label={showBanner ? "Hide banner" : "Show banner"}
          onClick={() => setShowBanner((prev) => !prev)}
          style={{ marginTop: "16px" }}
        />
      </div>
    );
  },
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    },
  },
};

export const Overlay: Story = {
  args: {
    ...Default.args,
    closable: true,
  },
  render: (args) => {
    const [showBanner, setShowBanner] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    return (
      <>
        <Banner
          {...args}
          closable
          onClose={() => setShowBanner(false)}
          isOpen={showBanner}
          position={isOverlay ? "overlay" : "push"}
        />
        <div
          style={{ gap: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10px" }}
        >
          <Button
            label={showBanner ? "Hide banner" : "Show banner"}
            onClick={() => setShowBanner((prev) => !prev)}
            style={{ marginTop: "16px" }}
          />
          <Switch
            label={`${isOverlay ? "Overlay" : "Push"} mode`}
            checked={isOverlay}
            onChange={() => setIsOverlay((prev) => !prev)}
          />
          <div style={{ width: "100%", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "#e1e1e0" }}></div>
          </div>
        </div>
      </>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    closable: true,
    isOpen: true,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    },
  },
  render: (args) => {
    const [showBanner, setShowBanner] = useState(true);
    return (
      <>
        <Banner {...args} closable onClose={() => setShowBanner(false)} isOpen={showBanner} />
        <Button
          label={showBanner ? "Hide banner" : "Show banner"}
          onClick={() => setShowBanner((prev) => !prev)}
          style={{ marginTop: "16px" }}
        />
      </>
    );
  },
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
