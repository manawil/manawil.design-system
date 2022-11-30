import type { Meta, StoryObj } from '@storybook/react'
import { Chip, ChipProps } from '@manawil-ui/react'

export default {
  title: 'Data Display/Chip',
  component: Chip,
  args: {
    children: 'Label',
  },
} as Meta<ChipProps>

export const Primary: StoryObj<ChipProps> = {}

export const WithOnDelete: StoryObj<ChipProps> = {
  args: {
    onDelete: () => console.log('hey'),
  },
}
