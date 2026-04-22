import { Component, signal } from "@angular/core";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { expect, fn, userEvent } from "@storybook/test";

import { focusElementBeforeComponent } from "../../../../../../../.storybook/testing/testing.utils";
import { AccordionComponent } from "../accordion.component";

@Component({
  selector: "story-accordion-exclusive-demo",
  imports: [AccordionComponent],
  standalone: true,
  template: `
    <div style="width: 400px; background: #c7dbf0; padding: 16px; overflow: scroll; height: 200px;">
      <rte-accordion
        title="Accordion title"
        alignement="right"
        appearance="brand"
        [compactSpacing]="false"
        [disabled]="false"
        icon="power-wind"
        [isOpen]="openIndex() === 0"
        size="small"
        (isOpenChange)="onFirstOpenChange($event)"
      >
        <p style="margin: 0; font-family: Arial">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </rte-accordion>
      <rte-accordion
        title="Accordion title"
        alignement="right"
        appearance="brand"
        [compactSpacing]="false"
        [disabled]="false"
        icon="power-wind"
        [isOpen]="openIndex() === 1"
        size="small"
        (isOpenChange)="onSecondOpenChange($event)"
      >
        <p style="margin: 0; font-family: Arial">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </rte-accordion>
    </div>
  `,
})
class AccordionExclusiveDemoComponent {
  protected readonly openIndex = signal<number | null>(null);

  protected onFirstOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 0 : null);
  }

  protected onSecondOpenChange(isOpen: boolean): void {
    this.openIndex.set(isOpen ? 1 : null);
  }
}

const loremParagraph = `
  <p style="margin: 0; font-family: Arial">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
    tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
  </p>
`;

const meta: Meta<AccordionComponent> = {
  title: "Composants/Accordion",
  component: AccordionComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [AccordionComponent],
    }),
  ],
  argTypes: {
    alignement: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    appearance: {
      options: ["brand", "neutral"],
      control: { type: "radio" },
    },
    compactSpacing: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
  },
  args: {
    clicked: fn(),
    isOpenChange: fn(),
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  args: {
    alignement: "right",
    title: "Accordion title",
    icon: "power-wind",
    disabled: false,
    appearance: "brand",
    compactSpacing: false,
    size: "small",
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 400px; background: #c7dbf0; padding: 16px">
        <rte-accordion
          [alignement]="alignement"
          [title]="title"
          [appearance]="appearance"
          [compactSpacing]="compactSpacing"
          [disabled]="disabled"
          [icon]="icon"
          [size]="size"
          (clicked)="clicked($event)"
          (isOpenChange)="isOpenChange($event)"
        >
          ${loremParagraph}
        </rte-accordion>
        <rte-accordion
          [alignement]="alignement"
          [appearance]="appearance"
          [compactSpacing]="compactSpacing"
          [disabled]="disabled"
          [icon]="icon"
          [title]="title"
          [size]="size"
          (clicked)="clicked($event)"
          (isOpenChange)="isOpenChange($event)"
        >
          ${loremParagraph}
        </rte-accordion>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>(".rte-accordion-summary");
    await expect(buttons.length).toBe(2);
    await focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    await expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  },
};

export const Brand: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="background: #c7dbf0; padding: 16px; display: flex; flex-direction: column">
        <div style="width: 400px">
          <rte-accordion
            [alignement]="alignement"
            [appearance]="appearance"
            [title]="title"
            [compactSpacing]="compactSpacing"
            [disabled]="disabled"
            [icon]="icon"
            [size]="size"
            (clicked)="clicked($event)"
            (isOpenChange)="isOpenChange($event)"
          >
            ${loremParagraph}
          </rte-accordion>
          <rte-accordion
            alignement="left"
            [appearance]="appearance"
            [title]="title"
            [compactSpacing]="compactSpacing"
            [disabled]="disabled"
            [icon]="icon"
            [size]="size"
            (clicked)="clicked($event)"
            (isOpenChange)="isOpenChange($event)"
          >
            ${loremParagraph}
          </rte-accordion>
        </div>
        <div style="width: 400px">
          <rte-accordion
            alignement="left"
            [appearance]="appearance"
            [title]="title"
            [compactSpacing]="compactSpacing"
            [disabled]="disabled"
            [icon]="icon"
            size="large"
            (clicked)="clicked($event)"
            (isOpenChange)="isOpenChange($event)"
          >
            ${loremParagraph}
          </rte-accordion>
          <rte-accordion
            alignement="right"
            [appearance]="appearance"
            [title]="title"
            [compactSpacing]="compactSpacing"
            [disabled]="disabled"
            [icon]="icon"
            size="large"
            (clicked)="clicked($event)"
            (isOpenChange)="isOpenChange($event)"
          >
            ${loremParagraph}
          </rte-accordion>
        </div>
      </div>
    `,
  }),
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    appearance: "neutral",
  },
  render: Brand.render,
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compactSpacing: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column">
        <div style="background: #c7dbf0; padding: 16px; display: flex; flex-direction: column">
          <div style="width: 400px">
            <rte-accordion
              [alignement]="alignement"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="left"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
          <div style="width: 400px">
            <rte-accordion
              alignement="left"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="right"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
        </div>
        <div style="background: #c7dbf0; padding: 16px; display: flex; flex-direction: column">
          <div style="width: 400px">
            <rte-accordion
              appearance="neutral"
              [alignement]="alignement"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="left"
              appearance="neutral"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
          <div style="width: 400px">
            <rte-accordion
              alignement="left"
              appearance="neutral"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="right"
              appearance="neutral"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column">
        <div style="background: #c7dbf0; padding: 16px; display: flex; flex-direction: column">
          <div style="width: 400px">
            <rte-accordion
              [alignement]="alignement"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="left"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
          <div style="width: 400px">
            <rte-accordion
              alignement="left"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="right"
              [appearance]="appearance"
              [title]="title"
              [compactSpacing]="compactSpacing"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
        </div>
        <div style="background: #c7dbf0; padding: 16px; display: flex; flex-direction: column">
          <div style="width: 400px">
            <rte-accordion
              [title]="title"
              [compactSpacing]="true"
              [alignement]="alignement"
              [appearance]="appearance"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="left"
              [title]="title"
              [compactSpacing]="true"
              [appearance]="appearance"
              [disabled]="disabled"
              [icon]="icon"
              [size]="size"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
          <div style="width: 400px">
            <rte-accordion
              alignement="left"
              [title]="title"
              [compactSpacing]="true"
              [appearance]="appearance"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
            <rte-accordion
              alignement="right"
              [title]="title"
              [compactSpacing]="true"
              [appearance]="appearance"
              [disabled]="disabled"
              [icon]="icon"
              size="large"
              (clicked)="clicked($event)"
              (isOpenChange)="isOpenChange($event)"
            >
              ${loremParagraph}
            </rte-accordion>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Exclusive: Story = {
  decorators: [
    moduleMetadata({
      imports: [AccordionExclusiveDemoComponent],
    }),
  ],
  render: () => ({
    template: `<story-accordion-exclusive-demo />`,
  }),
};
