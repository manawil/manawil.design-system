import { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../../styles'

const StyledContent = styled(DropdownMenu.Content, {
  minWidth: '220px',
  backgroundColor: 'white',
  borderRadius: '6px',
  padding: '5px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})

export type DropdownContentProps = ComponentProps<typeof StyledContent>

export function DropdownContent(props: DropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <StyledContent sideOffset={5} {...props}>
        {props.children}
      </StyledContent>
    </DropdownMenu.Portal>
  )
}
