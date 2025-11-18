import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";
import Toast from "../Toast";

const meta = {
  title: "Toast",
  component: Toast,
  argTypes: {
    message: { control: "text" },
    actionButton: { control: false },
    type: { control: "select", options: ["info", "success", "warning", "error", "neutral"] },
    placement: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "bottom-center"],
    },
    closable: { control: "boolean" },
    isOpen: { control: "boolean" },
    autoDismiss: { control: "boolean" },
    duration: { control: "select", options: ["short", "medium", "long"] },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: "16px" }} />
        <Toast
          {...args}
          isOpen={isOpen}
          handleOnClose={() => {
            setIsOpen(false);
          }}
          actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
        />
      </>
    );
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: "16px" }} />
        <Toast
          {...args}
          isOpen={isOpen}
          actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
        />
        <Toast
          {...args}
          isOpen={isOpen}
          actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
        />
        <Toast
          {...args}
          isOpen={isOpen}
          actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />}
        />
      </>
    );
  },
};
