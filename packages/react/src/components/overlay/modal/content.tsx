import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles'

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  position: 'fixed',
  inset: 0,
  animation: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
})

const StyledContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',

  '&:focus': {
    outline: 'none',
  },
})

const StyledCloseButton = styled(Dialog.Close, {
  padding: '0.5rem',
  border: '1px solid black',
  background: '$gray-50',
  position: 'absolute',
  top: '-15%',
  right: '-3%',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
})

export type ModalContentProps = ComponentProps<typeof StyledContent>

export function ModalContent(props: ModalContentProps) {
  return (
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent {...props}>
        {props.children}
        <StyledCloseButton asChild>
          <button className="IconButton" aria-label="Close">
            <X size={24} color="#000" />
          </button>
        </StyledCloseButton>
      </StyledContent>
    </Dialog.Portal>
  )
}
