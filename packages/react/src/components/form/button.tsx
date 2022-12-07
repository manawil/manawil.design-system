import { ComponentProps, ReactNode } from 'react'
import { CircleNotch } from 'phosphor-react'

import { keyframes, styled } from '../../styles'

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

const StyledButton = styled('button', {
  all: 'unset',
  borderRadius: '$rounded-xs',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 96,
  height: 38,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',
  textTransform: 'uppercase',
  transition: 'all 0.2s',

  svg: {
    width: '$4',
    height: '$4',
    animation: `${spin} 1s linear infinite`,
    transition: 'all 0.2s',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'auto',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray-50',
        backgroundColor: '$primary-300',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-400',
        },
      },
      secondary: {
        color: '$gray-50',
        backgroundColor: '$secondary-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$secondary-600',
        },
      },
      outline: {
        color: '$primary-300',
        borderWidth: '$thin',
        borderStyle: 'solid',
        borderColor: '$primary-300',

        '&:not(:disabled):hover': {
          color: '$gray-50',
          backgroundColor: '$primary-300',
        },
      },
      danger: {
        color: '$gray-50',
        backgroundColor: '$danger-light',

        '&:not(:disabled):hover': {
          backgroundColor: '$danger-dark',
        },
      },
      ghost: {
        color: '$primary-300',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray-100',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
  loading?: boolean
  children: ReactNode
}

export function Button({ variant, loading, children }: ButtonProps) {
  if (loading) {
    return (
      <StyledButton variant={variant} disabled={loading}>
        <CircleNotch size={20} color="#fff" />
      </StyledButton>
    )
  }

  return <StyledButton variant={variant}>{children}</StyledButton>
}
