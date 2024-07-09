import React, { useEffect } from 'react'
import styled from 'styled-components'

interface GridVisualizationProps {
  columns: number
}

const GridOverlay = styled.div<{ columns: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  pointer-events: none;
  z-index: 1000;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  grid-gap: inherit;
`

const GridColumn = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  grid-column: span 1;
`

const GridVisualization: React.FC<GridVisualizationProps> = ({ columns }) => {
  useEffect(() => {
    console.log('Columns:', columns)
  }, [columns])

  return (
    <GridOverlay columns={columns}>
      {Array.from({ length: columns }).map((_, index) => (
        <GridColumn key={index} />
      ))}
    </GridOverlay>
  )
}

export default GridVisualization
