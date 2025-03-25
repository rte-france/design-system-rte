import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';
import { ButtonProps } from '@design-system-rte/core/components/button/button.interface';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
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
  args: { click: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

const DefaultArgs: ButtonProps = {
  type: 'filled',
  label: 'Button',
};

export const Primary: Story = {
  args: {
    ...DefaultArgs,
  },
};

export const Small: Story = {
  args: {
    ...DefaultArgs,
    size: 's',
  },
};

export const Medium: Story = {
  args: {
    ...DefaultArgs,
    size: 'm',
  },
};

export const Large: Story = {
  args: {
    ...DefaultArgs,
    size: 'm',
  },
};