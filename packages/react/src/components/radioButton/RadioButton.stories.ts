import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
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
};

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
};