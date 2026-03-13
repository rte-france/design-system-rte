import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, waitFor } from "@storybook/test";
import { useState } from "react";

import Button from "../../button/Button";
import IconButton from "../../iconButton/IconButton";
import Drawer from "../Drawer";

const meta = {
  title: "Composants/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    icon: { control: "text" },
    iconAppearance: { control: "select", options: ["outlined", "filled"] },
    closeOnOverlayClick: { control: "boolean" },
    primaryButtonLabel: { control: "text" },
    secondaryButtonLabel: { control: "text" },
    isCollapsible: { control: "boolean" },
    position: { control: "select", options: ["modal", "responsive"] },
    fixedHeader: { control: "boolean" },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose() {
      console.log("Drawer closed");
    },
    id: "example-drawer",
    title: "Example Drawer",
    icon: "settings",
    iconAppearance: "outlined",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    isCollapsible: false,
    position: "modal",
    fixedHeader: true,
    width: "400px",
    isClosable: true,
    onClickToggle() {
      console.log("Toggle drawer");
    },
    content: (
      <span style={{ fontFamily: "arial", fontSize: "14px", lineHeight: "20px", color: "var(--content-primary)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non
        arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam
        tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non
        magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras
        scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus
        sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum.
        Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus
        convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra
        tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at
        porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu
        mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed
        turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit
        ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh.
        Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis
        odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim,
        pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas
        vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id
        mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat
        erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus,
        maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla.
        Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit
        amet, luctus sed ligula.
      </span>
    ),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOnClickToggle = () => {
      setIsOpen((prev) => !prev);
    };
    return (
      <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} />
      </>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", { name: "Open drawer" });
    await userEvent.click(openButton);
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
  },
};
export const Responsive: Story = {
  args: {
    ...Default.args,
    id: "responsive-drawer",
    title: "Responsive Drawer",
    position: "responsive",
    icon: undefined,
    isClosable: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOnClickToggle = () => {
      setIsOpen((prev) => !prev);
    };
    return (
      <div style={{ border: "1px solid #ccc", width: "600px", height: "500px" }}>
        <Drawer
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onClickToggle={handleOnClickToggle}
          content={
            <span
              style={{ fontFamily: "arial", fontSize: "14px", lineHeight: "20px", color: "var(--content-primary)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu.
              Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit.
              Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc,
              ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc
              eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed
              vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio.
              Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor
              eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex.
              Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet
              tincidunt.
            </span>
          }
          width="400px"
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "16px",
            }}
          >
            <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
            <span
              style={{ fontFamily: "arial", fontSize: "14px", lineHeight: "20px", color: "var(--content-primary)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada
              nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque
              a feugiat tellus. Proin vehicula risus non magna hendrerit mollis.
            </span>
          </div>
        </Drawer>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", { name: "Open drawer" });
    await userEvent.click(openButton);
    await waitFor(() => {
      const drawer = canvas.getByRole("region");
      expect(drawer).toBeInTheDocument();
    });
  },
};

export const CustomHeaderFooter: Story = {
  args: {
    ...Default.args,
    closeOnEscape: true,
    id: "custom-header-footer-drawer",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOnClickToggle = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onClickToggle={handleOnClickToggle}
          header={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <span
                style={{ fontSize: "16px", fontWeight: "bold", fontFamily: "arial", color: "var(--content-primary)" }}
              >
                Custom Header
              </span>
              <IconButton name="close" size="m" onClick={() => setIsOpen(false)} aria-label="Close drawer" />
            </div>
          }
          footer={
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <Button label="Custom Action" variant="primary" />
            </div>
          }
        />
      </>
    );
  },
};
