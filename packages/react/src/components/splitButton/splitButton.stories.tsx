import {Meta, StoryObj} from '@storybook/react'
import { fn } from '@storybook/test';
import SplitButton from './splitButton'

const meta = {
    title: 'SplitButton',
    component: SplitButton,
    tags:['autodocs'],
    argTypes:{
        appearance:{
            control: 'select',
            options: ['primary','secondary']
        },
        size:{
            control:'select',
            options:['s','m','l']
        },
        compactSpacing:{
            control:'boolean',
        },
        selected:{
            control:'boolean',
        },
        position:{
            control:'select',
            options:['bottom-start','bottom-end','top-start','top-end']
        },
    },
    args: { onClick: fn(), icon: ''},
} satisfies Meta<typeof SplitButton>

export default meta;
type Story = StoryObj<typeof meta>

const mockFn = fn()
const mockChildren = (
    <span
        style={{
            color: "#FF8C00",
            width:150,
            height:250,
            borderWidth: 2,
            borderColor: 'black'
        }}
    >
        Dropdown Exemple
    </span>
);

export const Default: Story = {
    args:{
        appearance : "primary",
        size : "s",
        label : "Button Label",
        compactSpacing : false,
        selected : false,
        position : "bottom-start",
        icon: "A",
        onClick: mockFn(),
        children: mockChildren,
    }
}