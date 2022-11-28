import type { Meta, StoryObj } from '@storybook/react'
import { Box, RadioButton, RadioButtonProps } from '@manawil-ui/react'

export default {
  title: 'Form/RadioButton',
  component: RadioButton,
  args: {
    label: 'Option 1',
    id: 'option',
    value: 'value',
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
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<RadioButtonProps>

export const Primary: StoryObj<RadioButtonProps> = {}
