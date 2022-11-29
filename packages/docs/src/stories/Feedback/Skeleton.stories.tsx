import type { Meta, StoryObj } from '@storybook/react'
import { Box, Skeleton, SkeletonProps } from '@manawil-ui/react'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    width: '100%',
    height: '8px',
    radius: '999px',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '100%',
            maxWidth: '480px',
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
} as Meta<SkeletonProps>

export const Primary: StoryObj<SkeletonProps> = {}
