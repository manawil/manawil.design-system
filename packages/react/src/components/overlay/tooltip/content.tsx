import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { styled } from '../../../styles'

const StyledContent = styled(RadixTooltip.Content, {
  padding: '10px 15px',
  fontSize: '15px',
  lineHeight: 1,
  color: 'black',
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '100ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  fontFamily: '$default',
})

const StyledArrow = styled(RadixTooltip.Arrow, {
  fill: 'white',
})

export type TooltipContentProps = ComponentProps<typeof StyledContent>

export function TooltipContent(props: TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <StyledContent sideOffset={5} {...props}>
        {props.children}
        <StyledArrow />
      </StyledContent>
    </RadixTooltip.Portal>
  )
}
