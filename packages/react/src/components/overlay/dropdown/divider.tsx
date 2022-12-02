import { ComponentProps } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../../styles'

const StyledDivider = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$gray-100',
  margin: '$1 $2',
})

export type DropdownDividerProps = ComponentProps<typeof StyledDivider>

export function DropdownDivider(props: DropdownDividerProps) {
  return <StyledDivider {...props} />
}
