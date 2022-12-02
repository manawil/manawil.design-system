import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  Tooltip,
  TooltipContent,
  TooltipProps,
  TooltipTrigger,
} from '@manawil-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    () => {
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
          <Tooltip>
            <TooltipTrigger>
              <Text>hover me</Text>
            </TooltipTrigger>

            <TooltipContent>This is the tooltip content</TooltipContent>
          </Tooltip>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
