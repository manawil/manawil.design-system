import { ComponentProps } from 'react'
import { styled } from '../../styles'

const MultistepContainer = styled('div', {})

const MultistepLabel = styled('label', {
  color: '$gray-300',
  fontSize: '$xs',
  fontFamily: '$default',
  display: 'block',

  span: {
    display: 'block',
    margin: '$1 0',
    fontSize: '$md',
    color: '$gray-500',
  },
})

const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

const Step = styled('div', {
  height: '4px',
  borderRadius: '$rounded-xs',
  backgroundColor: '$gray-100',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary-300',
      },
    },
  },
})

export interface MultistepProps
  extends ComponentProps<typeof MultistepContainer> {
  size: number
  currentStep: number
  label: string
}

export function Multistep({
  size,
  label,
  currentStep = 1,
  ...rest
}: MultistepProps) {
  return (
    <MultistepContainer {...rest}>
      <MultistepLabel>
        Passo {currentStep} de {size}
        <span>{label}</span>
      </MultistepLabel>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultistepContainer>
  )
}
