import { ComponentProps, ReactNode } from 'react'
import { XCircle } from 'phosphor-react'

import { styled } from '../../styles'

const ChipContainer = styled('span', {
  padding: '$2 $4',
  backgroundColor: '$gray-100',
  color: '$gray-600',
  fontFamily: '$default',
  boxSizing: 'border-box',
  borderRadius: '$rounded-xs',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'opacity 0.2s',
  cursor: 'pointer',

  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  svg: {
    color: '$gray-600',
    fontSize: '$lg',
    marginLeft: '$2',
  },

  '&:hover': {
    opacity: 0.8,
  },
})

export interface ChipProps extends ComponentProps<typeof ChipContainer> {
  onDelete?: () => void
  children: ReactNode
}

export function Chip({ onDelete, children, ...rest }: ChipProps) {
  return (
    <ChipContainer {...rest}>
      {children}
      {Boolean(onDelete) && (
        <button type="button" onClick={onDelete}>
          <XCircle size={16} />
        </button>
      )}
    </ChipContainer>
  )
}
