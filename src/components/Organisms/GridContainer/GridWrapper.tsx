import React, { ReactNode } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import { useDevVisualizationContext } from '../../../contexts/DevVisualizationContext'

// Interface for the GridWrapper properties
interface GridWrapperProps {
  children: ReactNode
  rowGap?: boolean
}

// Main content component for the GridWrapper
const GridWrapperContent: React.FC<GridWrapperProps> = ({
  children,
  rowGap,
}) => {
  const { showMainGridVisualization } = useDevVisualizationContext()
  const { columns, gridGap } = useGrid()

  // Safeguard to ensure showMainGridVisualization has a fallback
  const shouldShowGrid = showMainGridVisualization ?? false

  return (
    <GridContainer gridGap={gridGap} columns={columns} rowGap={rowGap}>
      {children}
      {shouldShowGrid && <GridVisualization columns={columns} />}
    </GridContainer>
  )
}

// GridWrapper component to provide grid context to its children
const GridWrapper: React.FC<GridWrapperProps> = ({ children, rowGap }) => (
  <GridProvider>
    <GridWrapperContent rowGap={rowGap}>{children}</GridWrapperContent>
  </GridProvider>
)

export default GridWrapper
