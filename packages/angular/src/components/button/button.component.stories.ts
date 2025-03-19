import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'm',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    label: 'Button',
  },
};
