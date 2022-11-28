import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@manawil-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </div>
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
