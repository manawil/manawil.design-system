import type { Meta, StoryObj } from '@storybook/react'
import { Box, Badge, BadgeProps } from '@manawil-ui/react'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  decorators: [
    () => {
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
          <Box
            css={{
              width: '128px',
              height: '128px',
              backgroundColor: '$gray-500',
              position: 'relative',
            }}
          >
            <Badge css={{ position: 'absolute', top: '-20px', right: '-20px' }}>
              99+
            </Badge>
          </Box>
        </Box>
      )
    },
  ],
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}
