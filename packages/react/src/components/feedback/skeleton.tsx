import { ComponentProps } from 'react'
import { keyframes, styled } from '../../styles'

const loading = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
})

const SkeletonLoading = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  zIndex: 1,
  borderRadius: '$rounded-xs',
  backgroundColor: '$gray-300',
  animation: `${loading} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})

export interface SkeletonProps extends ComponentProps<typeof SkeletonLoading> {
  width: number | string
  height: number | string
  radius?: number | string
  count?: number
}

export function Skeleton({ width, height, radius, count }: SkeletonProps) {
  if (count)
    return (
      <>
        {[...Array(count)].map((_, index) => (
          <SkeletonLoading
            key={index}
            style={{ width, height, borderRadius: radius }}
          />
        ))}
      </>
    )

  return <SkeletonLoading style={{ width, height, borderRadius: radius }} />
}
