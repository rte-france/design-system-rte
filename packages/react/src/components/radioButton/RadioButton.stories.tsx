import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Radio Button',
    },
    groupName: {
      control: 'text',
      defaultValue: 'radio-group',
    },
    showLabel: {
      control: 'boolean',
      defaultValue: true,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    error: {
      control: 'boolean',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio Button',
    groupName: 'radio-group',
    showLabel: true,
    disabled: false,
    error: false,
    readOnly: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio');
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <RadioButton {...args} label="Disabled" disabled={true} />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <RadioButton {...args} label="Read Only" readOnly={true} />
      </div>
    );
  },
};
export const Error: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <RadioButton {...args} label="Error" error={true} />
      </div>
    );
  },
}