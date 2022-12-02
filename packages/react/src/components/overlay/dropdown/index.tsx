import { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../../styles'

const StyledDropdown = styled(DropdownMenu.Root, {})

export type DropdownProps = ComponentProps<typeof StyledDropdown>

export function Dropdown(props: DropdownProps) {
  return <StyledDropdown>{props.children}</StyledDropdown>
}

export * from './content'
export * from './divider'
export * from './item'
export * from './trigger'
