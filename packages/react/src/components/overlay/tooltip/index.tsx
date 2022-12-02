import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

import { styled } from '../../../styles'

const StyledTooltip = styled(RadixTooltip.Root, {})

export type TooltipProps = ComponentProps<typeof StyledTooltip>

export function Tooltip(props: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <StyledTooltip>{props.children}</StyledTooltip>
    </RadixTooltip.Provider>
  )
}

export * from './content'
export * from './trigger'
