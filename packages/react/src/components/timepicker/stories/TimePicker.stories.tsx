import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from "../TimePicker";

const meta = {
  title: "TimePicker",
  component: TimePicker,
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
