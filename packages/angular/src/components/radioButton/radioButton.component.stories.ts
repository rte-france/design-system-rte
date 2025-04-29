import {Meta, StoryObj} from '@storybook/angular';
import {userEvent, within, expect} from '@storybook/test';
import {RadioButtonComponent} from './radioButton.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/RadioButton',
  component: RadioButtonComponent,
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
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Radio Button',
    groupName: 'radio-group',
    showLabel: true,
    disabled: false,
    error: false,
    readOnly: false,
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio');
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  },
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 8px;">
        <rte-radio-button
          label="Disabled"
          groupName="radio-group"
          showLabel="true"
          disabled="true"
          data-testid="disabled-radio-button"
        />
      </div>
    `,
  }),
};

export const ReadOnly: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 8px;">
        <rte-radio-button
          label="Read Only"
          groupName="radio-group"
          showLabel="true"
          readOnly="true"
          data-testid="readonly-radio-button"
        />
      </div>
    `,
  }),
};

export const Error: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 8px;">
        <rte-radio-button
          label="Error State"
          groupName="radio-group"
          showLabel="true"
          error="true"
          data-testid="error-radio-button"
        />
      </div>
    `,
  }),
};
