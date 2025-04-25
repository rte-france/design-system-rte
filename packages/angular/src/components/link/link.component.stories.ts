import { Meta, StoryObj } from '@storybook/angular';
import { fn, userEvent, within, expect } from '@storybook/test';

import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
    title: 'Link',
    component: LinkComponent,
    tags: ['autodocs'],
    argTypes: {
        subtle: {
            control: 'boolean',
        },
        externalLink: {
            control: 'boolean',
        },
    },
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
    args: {
        label: 'Link',
        href: '#',
    },
};

export const Subtle: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; gap: 8px;">
                <rte-link label="Subtle Link" href="#" [subtle]="true" />
                <rte-link label="Subtle Link" href="#" [subtle]="true" [externalLink]="true" />
            </div>
        `,
    }),
};

export const NotSubtle: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; gap: 8px;">
                <rte-link [label]="'External Link'" [href]="'#'"></rte-link>
                <rte-link [label]="'External Link'" [href]="'#'" [externalLink]="true"></rte-link>
            </div>
        `,
    }),
};

export const KeyboardInteraction: Story = {
    args: {
        label: 'Link',
        href: '#',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const link = canvas.getByRole('link');
        await userEvent.tab();
        expect(link).toHaveFocus();
    }
};