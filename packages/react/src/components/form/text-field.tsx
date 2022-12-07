import { ComponentProps, ReactElement } from 'react'
import { spacing } from '@manawil-ui/tokens'

import { styled } from '../../styles'

export interface TextFieldProps extends ComponentProps<typeof Input> {
  icon?: ReactElement
  onIconClick?: () => void
  error?: boolean
}

export const InputContainer = styled('div', {
  minWidth: '300px',
})

export const InputContent = styled('div', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  transition: 'opacity 0.2s',

  div: {
    position: 'absolute',
    top: 0,
    right: '-4px',
    display: 'flex',
    alignItems: 'center',
    width: spacing[12],
    height: '100%',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
})

export const Input = styled('input', {
  boxSizing: 'border-box',
  appearance: 'none',
  outline: 0,
  width: '100%',
  height: spacing[12],
  padding: '0 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray-700',
  backgroundColor: '$gray-100',
  borderWidth: '$mid',
  borderStyle: 'solid',
  borderColor: '$gray-100',
  borderRadius: '$rounded-xs',
  transition: 'border-color 0.2s',

  '&:hover': {
    borderWidth: '$mid',
    borderStyle: 'solid',
    borderColor: '$gray-700',
  },

  '&:focus': {
    borderWidth: '$mid',
    borderStyle: 'solid',
    borderColor: '$primary-300',
  },

  '&:disabled': {
    opacity: '0.5',
    cursor: 'auto',
  },

  variants: {
    hasIcon: {
      true: {
        paddingRight: '$16',
      },
    },
    hasError: {
      true: {
        borderWidth: '$mid',
        borderStyle: 'solid',
        borderColor: '$danger-light',
      },
    },
  },
})

export function TextField({
  icon,
  onIconClick,
  error,
  ...rest
}: TextFieldProps) {
  return (
    <InputContainer>
      <InputContent>
        <Input hasIcon={Boolean(icon)} hasError={Boolean(error)} {...rest} />
        <div role={onIconClick ? 'button' : ''}>{icon}</div>
      </InputContent>
    </InputContainer>
  )
}
