import { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../../styles'

const StyledItem = styled(DropdownMenu.Item, {
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray-800',
  borderRadius: '$rounded-xs',
  display: 'flex',
  alignItems: 'center',
  height: '1.5rem',
  padding: '$1 $2',
  paddingLeft: '$6',
  position: 'relative',
  userSelect: 'none',
  outline: 'none',
  fontFamily: '$default',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$gray-100',
  },
})

export type DropdownItemProps = ComponentProps<typeof StyledItem>

export function DropdownItem(props: DropdownItemProps) {
  return <StyledItem {...props}>{props.children}</StyledItem>
}
