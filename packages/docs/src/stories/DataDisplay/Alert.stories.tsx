import type { Meta, StoryObj } from '@storybook/react'
import { Box, Alert, AlertTitle, AlertProps } from '@manawil-ui/react'

export default {
  title: 'Data Display/Alert',
  component: Alert,
} as Meta<AlertProps>

export const Primary: StoryObj<AlertProps> = {
  decorators: [
    () => {
      return (
        <Box
          css={{
            width: '100%',
            maxWidth: '580px',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert variant="info">
            <AlertTitle variant="info">Lorem ipsum</AlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Alert>
        </Box>
      )
    },
  ],
}

export const Danger: StoryObj<AlertProps> = {
  decorators: [
    () => {
      return (
        <Box
          css={{
            width: '100%',
            maxWidth: '580px',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert variant="danger">
            <AlertTitle variant="danger">Lorem ipsum</AlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Alert>
        </Box>
      )
    },
  ],
}

export const Success: StoryObj<AlertProps> = {
  decorators: [
    () => {
      return (
        <Box
          css={{
            width: '100%',
            maxWidth: '580px',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert variant="success">
            <AlertTitle variant="success">Lorem ipsum</AlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Alert>
        </Box>
      )
    },
  ],
}

export const Warning: StoryObj<AlertProps> = {
  decorators: [
    () => {
      return (
        <Box
          css={{
            width: '100%',
            maxWidth: '580px',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert variant="warning">
            <AlertTitle variant="warning">Lorem ipsum</AlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Alert>
        </Box>
      )
    },
  ],
}
