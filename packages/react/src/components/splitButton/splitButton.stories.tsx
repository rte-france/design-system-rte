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
        disabled: {
            control: 'boolean',
        },
    },
    args: { onClick: fn(), icon: ''},
} satisfies Meta<typeof SplitButton>

export default meta;
type Story = StoryObj<typeof meta>

const mockFn = fn()
const mockChildren = (
    <div
        style={{
            color: "#FF8C00",
            backgroundColor: "#00FF00",
            width:100,
            height:50,
            borderWidth: 2,
            borderColor: 'black'
        }}
    >
        Dropdown Exemple
    </div>
);

export const Default: Story = {
    args:{
        appearance : "primary",
        size : "s",
        label : "Button Label",
        compactSpacing : false,
        selected : true,
        position : "bottom-start",
        icon: ">",
        disabled: false,
        onClick: mockFn(),
        children: mockChildren,
    }
}