import { ComponentProps } from 'react'

import { styled } from '../../styles'

export const Box = styled('div', {
  padding: '$4',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
