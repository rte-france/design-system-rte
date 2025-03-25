import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from '@storybook/test';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'transparent', 'danger'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onClick: fn(), icon: '' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Filled: Story = {
  args: {
    type: 'filled',
    label: 'Button',
    onClick: mockFn,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    label: 'Button',
    onClick: mockFn,
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Button',
    onClick: mockFn,
  },
};

export const Transparent: Story = {
  args: {
    type: 'transparent',
    label: 'Button',
    onClick: mockFn,
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    label: 'Button',
    onClick: mockFn,
  },
};
