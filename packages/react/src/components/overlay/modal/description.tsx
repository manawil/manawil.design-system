import { ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles'

const StyledDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: 'gray',
  fontSize: 16,
  lineHeight: 1.5,
})

export type ModalDescriptionProps = ComponentProps<typeof StyledDescription>

export function ModalDescription(props: ModalDescriptionProps) {
  return <StyledDescription {...props}>{props.children}</StyledDescription>
}
