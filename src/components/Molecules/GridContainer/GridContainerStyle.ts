import React from 'react'
import styled from 'styled-components'

interface GridContainerProps {
  gridGap: number
  columns: number
  rowGap?: boolean
}

const GridContainerStyled = styled.div.withConfig({
  shouldForwardProp: prop => !['columns', 'gridGap', 'rowGap'].includes(prop),
})<GridContainerProps>`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  column-gap: ${({ gridGap }) => gridGap}px;
  row-gap: ${({ rowGap, gridGap }) => (rowGap ? `${gridGap}px` : '0px')};
  position: relative;
  margin: 0 auto;
  align-items: stretch;
  position: relative;
`

export const GridContainer = React.memo(GridContainerStyled)
