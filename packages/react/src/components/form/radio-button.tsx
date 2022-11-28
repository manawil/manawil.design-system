import { ComponentProps } from 'react'
import { spacing } from '@manawil-ui/tokens'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { styled } from '../../styles'

export const RadioButtonContainer = styled(RadioGroup.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontFamily: '$default',
  color: '$gray-800',
})

export const RadioButtonItem = styled(RadioGroup.Item, {
  backgroundColor: '$gray-100',
  width: spacing[5],
  height: spacing[5],
  borderRadius: '$rounded-full',
  outline: 0,
  borderWidth: '$thin',
  borderStyle: 'solid',
  borderColor: '$gray-100',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state="checked"]': {
    '&:focus': {
      borderWidth: '$mid',
      borderStyle: 'solid',
      borderColor: '$primary-100',
    },
  },

  '&:focus': {
    borderWidth: '$mid',
    borderStyle: 'solid',
    borderColor: '$primary-300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const RadioButtonIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: spacing[4],
  height: spacing[4],
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: spacing[3],
    height: spacing[3],
    borderRadius: '50%',
    backgroundColor: '$primary-300',
  },
})

export interface RadioButtonProps
  extends ComponentProps<typeof RadioButtonContainer> {
  label: string
  id: string
  value: string
}

export function RadioButton({ label, id, value, ...rest }: RadioButtonProps) {
  return (
    <RadioButtonContainer {...rest}>
      <RadioButtonItem id={id} value={value}>
        <RadioButtonIndicator />
      </RadioButtonItem>
      <label htmlFor={id}>{label}</label>
    </RadioButtonContainer>
  )
}
