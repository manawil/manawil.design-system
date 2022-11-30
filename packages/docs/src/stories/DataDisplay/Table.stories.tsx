import type { Meta, StoryObj } from '@storybook/react'
import { Box, Table, RowType, TableProps } from '@manawil-ui/react'

const columns = [
  {
    title: 'Field 1',
    dataIndex: 'field1',
    key: 'field1',
  },
  {
    title: 'Field 2',
    dataIndex: 'field2',
    key: 'field2',
  },
  {
    title: 'Custom field',
    dataIndex: 'customField',
    key: 'customField',
    render: (text: RowType) => <span style={{ color: 'red' }}>{text}</span>,
  },
]

const dataSource = [
  {
    field1: 'Lorem',
    field2: 'Lorem',
    customField: 'Custom color',
  },
  {
    field1: 'Lorem',
    field2: 'Lorem',
    customField: 'Custom color',
  },
  {
    field1: 'Lorem',
    field2: 'Lorem',
    customField: 'Custom color',
  },
]

export default {
  title: 'Data Display/Table',
  component: Table,
  args: {
    columns,
    dataSource,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '95%',
            minHeight: '85vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$gray-50',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {}

export const Loading: StoryObj<TableProps> = {
  args: {
    loading: true,
  },
}
