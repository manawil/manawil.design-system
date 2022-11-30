import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, HeadingProps } from '@manawil-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const WithCustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h4',
    children: 'I am a <h4> tag',
  },
}

export const WithCustomCSS: StoryObj<HeadingProps> = {
  args: {
    children: 'Look at this, I am red :0',
    css: {
      color: 'red',
      fontWeight: '$regular',
    },
  },
}
