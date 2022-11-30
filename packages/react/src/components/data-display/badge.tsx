import { ComponentProps } from 'react'

import { styled } from '../../styles'

export const Badge = styled('span', {
  display: 'inline-flex',
  borderRadius: '$rounded-full',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  boxSizing: 'border-box',
  fontSize: '$xs',
  lineHeight: '$short',
  backgroundColor: '$primary-300',
  color: '$gray-50',
  padding: '$2',
})

export type BadgeProps = ComponentProps<typeof Badge>

Badge.displayName = 'Badge'
