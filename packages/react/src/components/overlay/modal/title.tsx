import { ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles'

const StyledTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: 'black',
  fontSize: 17,
})

export type ModalTitleProps = ComponentProps<typeof StyledTitle>

export function ModalTitle(props: ModalTitleProps) {
  return <StyledTitle {...props}>{props.children}</StyledTitle>
}
