import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextProps } from '@manawil-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const WithCustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'I am a <strong> tag',
  },
}

export const WithCustomCSS: StoryObj<TextProps> = {
  args: {
    children: 'Look at this, I am red :0',
    css: {
      color: 'red',
    },
  },
}
