import { ComponentProps, ReactNode } from 'react'

import { styled } from '../../styles'

const AlertContainer = styled('div', {
  padding: '0 $4 $4 $4',
  borderTopRightRadius: '$rounded-xs',
  borderBottomRightRadius: '$rounded-xs',
  fontFamily: '$default',

  variants: {
    variant: {
      success: {
        borderLeftWidth: '$tick',
        borderLeftStyle: 'solid',
        borderLeftColor: '#2e7d32',
        backgroundColor: '#e3f3e4',
        color: '#388e3c',
      },
      info: {
        borderLeftWidth: '$tick',
        borderLeftStyle: 'solid',
        borderLeftColor: '#1565c0',
        backgroundColor: '#d2e8fa',
        color: '#1976d2',
      },
      warning: {
        borderLeftWidth: '$tick',
        borderLeftStyle: 'solid',
        borderLeftColor: '#f9a825',
        backgroundColor: '#fff9c4',
        color: '#fbc02d',
      },
      danger: {
        borderLeftWidth: '$tick',
        borderLeftStyle: 'solid',
        borderLeftColor: '#c62828',
        backgroundColor: '#ffe0e3',
        color: '#d32f2f',
      },
    },
  },
})

const AlertTitleContainer = styled('p', {
  fontWeight: '$bold',

  variants: {
    variant: {
      success: {
        color: '#2e7d32',
      },
      info: {
        color: '#1565c0',
      },
      warning: {
        color: '#f9a825',
      },
      danger: {
        color: '#c62828',
      },
    },
  },
})

export interface AlertProps extends ComponentProps<typeof AlertContainer> {
  variant: 'success' | 'danger' | 'info' | 'warning'
  children: ReactNode
}

export interface AlertTitleProps
  extends ComponentProps<typeof AlertTitleContainer> {
  variant: 'success' | 'danger' | 'info' | 'warning'
  children: ReactNode
}

export function AlertTitle({ children, variant, ...rest }: AlertTitleProps) {
  return (
    <AlertTitleContainer variant={variant} {...rest}>
      {children}
    </AlertTitleContainer>
  )
}

export function Alert({ variant = 'info', children, ...rest }: AlertProps) {
  return (
    <AlertContainer variant={variant} {...rest}>
      {children}
    </AlertContainer>
  )
}
