import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'

import { styled } from '../../../styles'

const StyledModal = styled(Dialog.Root, {})

export type ModalProps = ComponentProps<typeof StyledModal>

export function Modal(props: ModalProps) {
  return <Dialog.Root {...props}>{props.children}</Dialog.Root>
}

export * from './content'
export * from './description'
export * from './title'
export * from './trigger'
