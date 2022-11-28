import { ComponentProps } from 'react'
import { spacing } from '@manawil-ui/tokens'
import * as RadixAvatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(RadixAvatar.Root, {
  borderRadius: '$rounded-full',
  display: 'inline-block',
  overflow: 'hidden',
  fontFamily: '$default',
  fontWeight: '$medium',
  userSelect: 'none',

  variants: {
    size: {
      sm: {
        width: spacing[8],
        height: spacing[8],
        fontSize: '$xs',
      },
      md: {
        width: spacing[16],
        height: spacing[16],
        fontSize: '$xl',
      },
      xl: {
        width: spacing[40],
        height: spacing[40],
        fontSize: '$3xl',
      },
    },
  },
})

export const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray-200',
  color: '$gray-800',

  svg: {
    width: spacing[6],
    height: spacing[6],
  },
})

export interface AvatarProps extends ComponentProps<typeof AvatarContainer> {
  fallback: string
  size: 'sm' | 'md' | 'xl'
}

export function Avatar({ fallback, size = 'md', ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size} {...rest}>
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarContainer>
  )
}
