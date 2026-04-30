import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import DateRangePicker from "../DateRangePicker";

const meta = {
  title: "Composants/DateRangePicker/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "date-range-picker",
    label: "Label",
    required: true,
    showLabelRequirement: true,
    value: [new Date(), new Date()],
  },

  render: (args) => {
    const [date, setDate] = useState<[Date | null, Date | null] | null>(args.value);

    useEffect(() => {
      console.log(date);
    }, [date]);

    const handleOnChange = (value: [Date | null, Date | null] | null) => {
      setDate(value);
    };

    return (
      <>
        <p>
          Date sélectionnée:{" "}
          {date
            ? `${date[0] ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date[0]) : "Choisir une date début"} - ${date[1] ? new Intl.DateTimeFormat(navigator.language, { dateStyle: "long" }).format(date[1]) : "Choisir une date fin"}`
            : "aucune"}
        </p>
        <DateRangePicker {...args} onChange={handleOnChange} />
      </>
    );
  },
};
