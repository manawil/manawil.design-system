import { ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles'

const StyledTrigger = styled(Dialog.Trigger, {})

export type ModalTriggerProps = ComponentProps<typeof StyledTrigger>

export function ModalTrigger(props: ModalTriggerProps) {
  return <StyledTrigger asChild>{props.children}</StyledTrigger>
}
