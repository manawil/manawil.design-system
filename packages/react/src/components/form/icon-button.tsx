import { ComponentProps, ReactNode } from 'react'

import { styled } from '../../styles'

export const IconButtonContainer = styled('button', {
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  lineHeight: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:disabled': {
    opacity: 0.5,
  },
})

export interface IconButtonProps
  extends ComponentProps<typeof IconButtonContainer> {
  icon: ReactNode
}

export function IconButton({ icon, ...rest }: IconButtonProps) {
  return (
    <IconButtonContainer type="button" {...rest}>
      {icon}
    </IconButtonContainer>
  )
}
