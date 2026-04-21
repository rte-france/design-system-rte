import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import DatePicker from "../DatePicker";

const meta = {
  title: "Composants/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: null },

  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };

    return (
      <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date) : "None"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>
    );
  },
};
