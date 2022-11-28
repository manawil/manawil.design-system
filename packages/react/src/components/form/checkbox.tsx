import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { spacing } from '@manawil-ui/tokens'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { styled } from '../../styles'

export const CheckboxContainer = styled(RadixCheckbox.Root, {
  all: 'unset',
  width: spacing[6],
  height: spacing[6],
  backgroundColor: '$gray-100',
  borderRadius: '$rounded-xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderWidth: '$thin',
  borderStyle: 'solid',
  borderColor: '$gray-100',
  outline: 0,

  '&[data-state="checked"]': {
    backgroundColor: '$primary-300',
    borderWidth: 0,

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
})

export const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: '$gray-50',
  width: spacing[4],
  height: spacing[4],
})

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
