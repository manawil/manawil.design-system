import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps } from '@manawil-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
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
  // argTypes: {
  //   disabled: {
  //     control: 'boolean',
  //     defaultValue: false,
  //   },
  // },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
