import type { Meta, StoryObj } from '@storybook/angular';
import { fn, userEvent, within, expect } from '@storybook/test';
// TODO: Resolve import from core 
// import { ENTER_KEY, SPACE_KEY, TAB_KEY } from '@design-system-rte/core/constants/keyboard.constants'; 

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

export const Default: Story = {

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

export const Sizing: Story = {

  render: (args) => ({
    props: args,
    template: `
    <div style="display: flex; gap: 8px;">
        <rte-button
          size="s"
          label="Small"
          variant="filled"
          data-testid="small-button"
          />
        <rte-button
          size="m"
          label="Medium"
          variant="filled"
          data-testid="medium-button"
          />
          <rte-button
          size="l"
          label="Large"
          variant="filled"
          data-testid="large-button"
          />
    </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallButton = canvas.getByTestId('small-button').getElementsByTagName('button')[0];
    const mediumButton = canvas.getByTestId('medium-button').getElementsByTagName('button')[0];
    const largeButton = canvas.getByTestId('large-button').getElementsByTagName('button')[0];

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
    await userEvent.keyboard(`{Tab}`);
    expect(button).toHaveFocus();
    await userEvent.keyboard(`{Enter}}`);
    await userEvent.keyboard(`{ }`);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  },
};
