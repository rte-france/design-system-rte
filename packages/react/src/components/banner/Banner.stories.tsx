import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../button/Button";
import Switch from "../switch/Switch";

import Banner from "./Banner";

const meta = {
  title: "Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    type: {
      control: "select",
      options: ["default", "alert"],
    },
    closable: { control: "boolean" },
    showIcon: { control: "boolean" },
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
    type: "default",
  },
};
export const Alert: Story = {
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message:
      "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent insponible du 29 mars au 12 avril 2026.",
    type: "alert",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Banner {...args} showIcon />
        <Banner {...Alert.args} showIcon />
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
        <Banner {...args} showIcon closable isOpen={showBanner} onClose={() => setShowBanner(false)} />
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
    closable: true,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    },
  },
  render: (args) => {
    const [showBanner, setShowBanner] = useState(false);
    return (
      <div>
        <Banner {...args} onClose={() => setShowBanner(false)} isOpen={showBanner} />
        <Button
          label={showBanner ? "Hide banner" : "Show banner"}
          onClick={() => setShowBanner((prev) => !prev)}
          style={{ marginTop: "16px" }}
        />
      </div>
    );
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
      <div
        style={{
          height: "1300px",
          boxSizing: "border-box",
          overflow: "auto",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <Banner
          {...args}
          showIcon
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
            <div style={{ width: "200px", height: "300px", backgroundColor: "grey" }}>Content</div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "grey" }}>Content</div>
            <div style={{ width: "200px", height: "600pxpx", backgroundColor: "grey" }}></div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "grey" }}>Content</div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "grey" }}>Content</div>
            <div style={{ width: "200px", height: "600pxpx", backgroundColor: "grey" }}></div>
            <div style={{ width: "200px", height: "300px", backgroundColor: "grey" }}>Content</div>
            <div style={{ width: "200px", height: "600pxpx", backgroundColor: "grey" }}></div>
            <div style={{ width: "400px", height: "300px", backgroundColor: "grey" }}>Content</div>
          </div>
        </div>
      </div>
    );
  },
};
