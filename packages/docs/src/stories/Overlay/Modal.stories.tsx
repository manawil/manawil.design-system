import type { Meta, StoryObj } from '@storybook/react'
import {
  Modal,
  ModalTrigger,
  ModalProps,
  Button,
  ModalContent,
  ModalTitle,
} from '@manawil-ui/react'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {},
  decorators: [
    () => {
      return (
        <Modal>
          <ModalTrigger asChild>
            <Button type="button">Open Modal</Button>
          </ModalTrigger>

          <ModalContent>
            <ModalTitle>Sample modal example</ModalTitle>
            <p>This a responsive and accessible modal. enjoy :)</p>
          </ModalContent>
        </Modal>
      )
    },
  ],
} as Meta<ModalProps>

export const Primary: StoryObj<ModalProps> = {}
