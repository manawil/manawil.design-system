import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbProps,
} from '@manawil-ui/react'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  args: {
    id: 'name',
    placeholder: 'Type your name',
  },
  decorators: [
    () => {
      return (
        <Box
          css={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Breadcrumb>
            <BreadcrumbItem to="/">Label 1</BreadcrumbItem>
            <BreadcrumbItem to="/label">Label 2</BreadcrumbItem>
            <BreadcrumbItem to="/label/label" isActivePage>
              Label 3
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      )
    },
  ],
} as Meta<BreadcrumbProps>

export const Primary: StoryObj<BreadcrumbProps> = {}
