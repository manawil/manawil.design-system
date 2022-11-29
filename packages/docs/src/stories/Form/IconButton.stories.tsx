import type { Meta, StoryObj } from '@storybook/react'
import { Box, IconButton, IconButtonProps } from '@manawil-ui/react'
import { PlusCircle } from 'phosphor-react'
import { colors } from '@manawil-ui/tokens'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    icon: <PlusCircle size={16} color="#000" weight="bold" />,
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
  },
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {}

export const WithBackground: StoryObj<IconButtonProps> = {
  args: {
    css: {
      backgroundColor: '$primary-300',
      borderRadius: '$rounded-xs',
      padding: '$2',
      transition: 'background 0.2s',

      '&:hover': {
        backgroundColor: '$primary-400',
      },
    },
    icon: <PlusCircle size={16} color="#fff" weight="bold" />,
  },
}

export const Outline: StoryObj<IconButtonProps> = {
  args: {
    css: {
      borderWidth: '$thin',
      borderStyle: 'solid',
      borderColor: '$primary-300',
      borderRadius: '$rounded-xs',
      padding: '$2',
      transition: 'background 0.2s',

      '&:hover': {
        backgroundColor: '$primary-50',
      },
    },
    icon: <PlusCircle size={16} color={colors['primary-300']} weight="bold" />,
  },
}
