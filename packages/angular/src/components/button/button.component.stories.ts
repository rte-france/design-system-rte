import type { Meta, StoryObj } from '@storybook/angular';
import { fn, userEvent, within, expect } from '@storybook/test';
import { ButtonComponent } from './button.component';


const meta: Meta<ButtonComponent>= {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'transparent', 'danger'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { click: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;


const mockFn = fn();

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Button',
    click: mockFn,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  },
};
