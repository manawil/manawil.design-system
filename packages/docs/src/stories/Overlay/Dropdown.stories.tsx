import type { Meta, StoryObj } from '@storybook/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
  DropdownProps,
  Button,
} from '@manawil-ui/react'

export default {
  title: 'Overlay/Dropdown',
  component: Dropdown,
  args: {},
  decorators: [
    () => {
      return (
        <Dropdown>
          <DropdownTrigger asChild>
            <Button type="button" variant="ghost">
              Open Dropdown
            </Button>
          </DropdownTrigger>

          <DropdownContent>
            <DropdownItem>Label 1</DropdownItem>
            <DropdownItem>Label 2</DropdownItem>
            <DropdownItem>Label 3</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Label 1</DropdownItem>
            <DropdownItem>Label 2</DropdownItem>
            <DropdownItem>Label 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
    },
  ],
} as Meta<DropdownProps>

export const Primary: StoryObj<DropdownProps> = {}
