import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@manawil-ui/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger', 'outline', 'ghost'],
      control: {
        type: 'inline-radio',
      },
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <PlusCircle weight="bold" />
        Label
      </>
    ),
  },
}
