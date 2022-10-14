import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create',
    },
    argTypes: {       
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
