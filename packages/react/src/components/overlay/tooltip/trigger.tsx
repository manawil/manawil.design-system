import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

import { styled } from '../../../styles'

const StyledTtigger = styled(RadixTooltip.Trigger, {})

export type TooltipTriggerProps = ComponentProps<typeof StyledTtigger>

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <RadixTooltip.Trigger asChild>{props.children}</RadixTooltip.Trigger>
}
