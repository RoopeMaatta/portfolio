import styled from 'styled-components'
import { memo } from 'react'

interface GridContainerProps {
  gridGap: number
  columns: number
}

export const GridContainer = memo(styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  grid-gap: ${({ gridGap }) => gridGap}px;
  position: relative;
  margin: 0 auto;
`)
