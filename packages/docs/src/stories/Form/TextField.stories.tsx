import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextField, TextFieldProps } from '@manawil-ui/react'
import { Eye } from 'phosphor-react'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    id: 'name',
    placeholder: 'Type your name',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    error: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {}

export const WithError: StoryObj<TextFieldProps> = {
  args: {
    error: true,
  },
}

export const WithIcon: StoryObj<TextFieldProps> = {
  args: {
    icon: <Eye size={24} color="#B1B1B1" />,
  },
}
