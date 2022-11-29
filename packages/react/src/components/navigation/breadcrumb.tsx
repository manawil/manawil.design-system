import { CaretRight } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react'

import { styled } from '../../styles'

export const StyledBreadcrumb = styled('nav', {
  display: 'flex',
  alignItems: 'center',

  ol: {
    display: 'flex',
    margin: 0,
    padding: 0,
  },
})

export const StyledBreadcrumbItem = styled('li', {
  display: 'flex',
  alignItems: 'center',

  a: {
    fontWeight: '$regular',
    fontFamily: '$default',
    fontSize: '$sm',
    lineHeight: '$short',
    textDecoration: 'none',
    color: '$gray-300',
    cursor: 'pointer',
    padding: '$2',
    borderRadius: '$rounded-xs',
    transition: 'background-color 0.2s',
  },

  'a:hover': {
    backgroundColor: '$gray-100',
  },

  'span svg': {
    display: 'flex',
    color: '$gray-300',
    margin: '0 $1',
  },

  '&:last-child svg': {
    display: 'none',
  },

  variants: {
    isActivePage: {
      true: {
        a: {
          color: '$gray-800',
          fontWeight: '$medium',
        },
      },
    },
  },
})

export interface BreadcrumbProps
  extends ComponentProps<typeof StyledBreadcrumb> {
  children: ReactNode
}

interface BreadcrumbItemProps {
  children: ReactNode
  isActivePage?: boolean
  to: string
}

export function BreadcrumbItem({
  children,
  isActivePage,
  to,
}: BreadcrumbItemProps) {
  return (
    <StyledBreadcrumbItem isActivePage={isActivePage}>
      <a href={to}>{children}</a>
      <span>
        <CaretRight size={16} />
      </span>
    </StyledBreadcrumbItem>
  )
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <StyledBreadcrumb {...props}>
      <ol>{props.children}</ol>
    </StyledBreadcrumb>
  )
}
