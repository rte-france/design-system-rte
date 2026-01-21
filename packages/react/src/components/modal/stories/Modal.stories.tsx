import {
  TESTING_ENTER_KEY,
  TESTING_ESCAPE_KEY,
  TESTING_SPACE_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard-test.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, fn, waitFor } from "@storybook/test";
import { useState } from "react";

import { focusElementBeforeComponent } from "../../../../.storybook/testing/testing.utils";
import Button from "../../button/Button";
import { RegularIcons as RegularIconsList, TogglableIcons as TogglableIconsList } from "../../icon/IconMap";
import Textarea from "../../textarea/Textarea";
import Modal from "../Modal";

const RegularIconIds = Object.keys(RegularIconsList);
const TogglableIconIds = Object.keys(TogglableIconsList);

const meta = {
  title: "Composants/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    icon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b)),
      description: "Nom de l’icône à afficher",
      defaultValue: "",
    },
    iconAppearance: { control: "select", options: ["outlined", "filled"] },
    description: { control: "text" },
    size: { control: "select", options: ["xs", "s", "m", "l", "xl"] },
    closeOnOverlayClick: { control: "boolean" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
  args: {
    id: "modal-1",
    onClose: () => {},
    isOpen: false,
    title: "Connect to Wi-Fi",
    icon: "wifi",
    iconAppearance: "outlined",
    description: "Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",
    primaryButton: <Button variant="primary" label="Continue" />,
    secondaryButton: <Button variant="neutral" label="Cancel" />,
    size: "xs",
    closeOnOverlayClick: true,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const Sizes: Story = {
  args: {
    ...Default.args,
    id: "modal-1",
    onClose: () => {},
    isOpen: false,
    title: "Modal Title",
    icon: "settings",
    description:
      "La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",
    primaryButton: <Button variant="primary" label="Continue" />,
    secondaryButton: <Button variant="neutral" label="Cancel" />,
    size: "xs",
    closeOnOverlayClick: true,
  },

  render: (args) => {
    const [openState, setOpenState] = useState<{ [key: string]: boolean }>({});

    const handleOpen = (id: string) => {
      setOpenState((prevState) => ({ ...prevState, [id]: true }));
    };

    const handleClose = (id: string) => {
      setOpenState((prevState) => ({ ...prevState, [id]: false }));
    };

    return (
      <>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <Button variant="primary" label="Open modal xs" onClick={() => handleOpen("modal-1")} />
          <Button variant="primary" label="Open modal s" onClick={() => handleOpen("modal-2")} />
          <Button variant="primary" label="Open modal m" onClick={() => handleOpen("modal-3")} />
          <Button variant="primary" label="Open modal l" onClick={() => handleOpen("modal-4")} />
          <Button variant="primary" label="Open modal xl" onClick={() => handleOpen("modal-5")} />
        </div>
        <Modal
          {...args}
          id={"modal-1"}
          size="xs"
          isOpen={openState["modal-1"]}
          onClose={() => handleClose("modal-1")}
        />
        <Modal {...args} id={"modal-2"} size="s" isOpen={openState["modal-2"]} onClose={() => handleClose("modal-2")} />
        <Modal {...args} id={"modal-3"} size="m" isOpen={openState["modal-3"]} onClose={() => handleClose("modal-3")} />
        <Modal {...args} id={"modal-4"} size="l" isOpen={openState["modal-4"]} onClose={() => handleClose("modal-4")} />
        <Modal
          {...args}
          id={"modal-5"}
          size="xl"
          isOpen={openState["modal-5"]}
          onClose={() => handleClose("modal-5")}
        />
      </>
    );
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Default.args,
    id: "modal-2",
    onClose: () => {},
    isOpen: false,
    title: "Préciser le motif du refus",
    description:
      "En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",
    primaryButton: <Button variant="primary" label="Envoyer" />,
    secondaryButton: <Button variant="neutral" label="Annuler" />,
    size: "m",
    closeOnOverlayClick: true,
    children: <Textarea resizeable={true} />,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
    id: "modal-3",
    onClose: () => {},
    isOpen: false,
    title: "Delete 3 documents",
    description: "The selected documents will be deleted.",
    size: "s",
    icon: "delete",
    closeOnOverlayClick: true,
    primaryButton: <></>,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          {...args}
          isOpen={args.isOpen || isOpen}
          onClose={() => setIsOpen(false)}
          primaryButton={<Button variant="danger" label="Continue" onClick={mockFn} />}
          secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />}
        />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    focusElementBeforeComponent(canvasElement);

    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);

    const modal = within(document.body).getByRole("dialog");
    expect(modal).toBeInTheDocument();

    await userEvent.tab();
    const cancelButton = within(modal).getByRole("button", { name: /cancel/i });
    expect(cancelButton).toHaveFocus();

    await userEvent.tab();
    const continueButton = within(modal).getByRole("button", { name: /continue/i });
    expect(continueButton).toHaveFocus();

    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockFn).toHaveBeenCalled();

    await userEvent.tab();
    const closeButton = within(modal).getByTestId("modal-close-button");
    expect(closeButton).toHaveFocus();

    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => expect(modal).not.toBeVisible());
  },
};
