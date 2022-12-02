import { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../../styles'

const StyledTrigger = styled(DropdownMenu.Trigger, {})

export type DropdownTriggerProps = ComponentProps<typeof StyledTrigger>

export function DropdownTrigger(props: DropdownTriggerProps) {
  return <StyledTrigger {...props}>{props.children}</StyledTrigger>
}
