import type { Meta, StoryObj } from '@storybook/react'
import { Box, Avatar, AvatarProps } from '@manawil-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    fallback: 'JD',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '95%',
            minHeight: '85vh',
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
    size: {
      options: ['sm', 'md', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'xl',
  },
}
