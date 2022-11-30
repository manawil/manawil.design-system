import { ComponentProps } from 'react'

import { styled } from '../../styles'
import { Skeleton } from '../feedback/skeleton'

const TableContainer = styled('div', {
  flex: 1,
  overflow: 'auto',
})

const StyledTable = styled('table', {
  width: '100%',
  minWidth: '600px',
  borderCollapse: 'collapse',
  fontFamily: '$default',
  boxSizing: 'border-box',

  th: {
    backgroundColor: 'transparent',
    padding: '$4',
    textAlign: 'left',
    fontWeight: '$medium',
    lineHeight: '$tall',
    fontSize: '$xs',
    textTransform: 'uppercase',
    color: '$gray-500',
  },

  td: {
    background: '$gray-100',
    padding: '$4',
    fontSize: '$sm',
    lineHeight: '$tall',
    color: '$gray-700',
    borderTopWidth: '$thick',
    borderTopStyle: 'solid',
    borderTopColor: '$gray-50',
  },
})

export type RowType = string | number | JSX.Element

export type DataSourceType = Record<string, RowType>

export type ColumnType = {
  title: string
  dataIndex: string
  key: string
  render?: (value: RowType, row?: DataSourceType) => JSX.Element
}

export interface TableProps extends ComponentProps<typeof StyledTable> {
  columns: ColumnType[]
  dataSource: DataSourceType[]
  loading?: boolean
}

export function Table({
  columns,
  dataSource,
  loading = false,
  ...rest
}: TableProps) {
  if (loading)
    return (
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                {[...Array(columns.length)].map((__, idx) => (
                  <td key={idx}>
                    <Skeleton width="100%" height="12px" radius="999px" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    )
  return (
    <TableContainer>
      <StyledTable {...rest}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, index) => (
            <tr key={index}>
              {columns.map((column, idx) => (
                <td key={idx}>
                  {column?.render?.(data[column.dataIndex], data) ??
                    data[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}
