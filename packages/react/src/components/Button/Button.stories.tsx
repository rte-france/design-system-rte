import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from '@storybook/test';
import { ENTER_KEY, SPACE_KEY, TAB_KEY } from '@design-system-rte/core/constants/keyboard.constants';

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
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFn = fn();

export const Default: Story = {
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

export const Sizing: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button {...args} size="s" label="Small" />
        <Button {...args} label="Medium" />
        <Button {...args} size="l" label="Large" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallButton = canvas.getByText('Small');
    const mediumButton = canvas.getByText('Medium');
    const largeButton = canvas.getByText('Large');

    expect(smallButton.clientHeight).toBe(24);
    expect(mediumButton.clientHeight).toBe(32);
    expect(largeButton.clientHeight).toBe(40);
  },
};

export const KeyboardInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.keyboard(`{${TAB_KEY}}`);
    expect(button).toHaveFocus();
    await userEvent.keyboard(`{${ENTER_KEY}}`);
    await userEvent.keyboard(`{${SPACE_KEY}}`);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
