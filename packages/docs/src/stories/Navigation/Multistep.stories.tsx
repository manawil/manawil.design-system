import type { Meta, StoryObj } from '@storybook/react'
import { Multistep, MultistepProps } from '@manawil-ui/react'

export default {
  title: 'Navigation/Multistep',
  component: Multistep,
  args: {
    size: 3,
    currentStep: 1,
    label: 'Faça login em sua conta',
  },
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}

export const StepTwo: StoryObj<MultistepProps> = {
  args: {
    currentStep: 2,
    label: 'Pagamento',
  },
}

export const StepThree: StoryObj<MultistepProps> = {
  args: {
    currentStep: 3,
    label: 'Finalizado',
  },
}
