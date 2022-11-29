import { ComponentProps } from 'react'
import { keyframes, styled } from '../../styles'

const loading = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
})

const SkeletonLoading = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  zIndex: 1,
  borderRadius: '$rounded-xs',
  backgroundColor: '$gray-100',

  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    transform: 'translateX(-100%)',
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.1) 20%, rgba(196, 196, 196, 0.5) 60%, rgba(255, 255, 255, 0))',
    animation: `${loading} 3s infinite`,
  },
})

export interface SkeletonProps extends ComponentProps<typeof SkeletonLoading> {
  width: number | string
  height: number | string
  radius?: number | string
  count?: number
}

export function Skeleton({ width, height, radius, count }: SkeletonProps) {
  if (count)
    return [...Array(count)].map((_, index) => (
      <SkeletonLoading
        key={index}
        style={{ width, height, borderRadius: radius }}
      />
    ))

  return <SkeletonLoading style={{ width, height, borderRadius: radius }} />
}
