import React, { ReactNode } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import { useDevVisualizationContext } from '../../contexts/DevVisualizationContext'

// Interface for the GridWrapper properties
interface GridWrapperProps {
  children: ReactNode
}

// Main content component for the GridWrapper
const GridWrapperContent: React.FC<GridWrapperProps> = ({ children }) => {
  const { showMainGridVisualization } = useDevVisualizationContext()
  const { columns, gridGap } = useGrid()

  // Safeguard to ensure showMainGridVisualization has a fallback
  const shouldShowGrid = showMainGridVisualization ?? false

  return (
    <div style={{ position: 'relative' }}>
      <GridContainer gridGap={gridGap} columns={columns}>
        {children}
        {shouldShowGrid && <GridVisualization columns={columns} />}
      </GridContainer>
    </div>
  )
}

// GridWrapper component to provide grid context to its children
const GridWrapper: React.FC<GridWrapperProps> = props => (
  <GridProvider>
    <GridWrapperContent {...props} />
  </GridProvider>
)

export default GridWrapper
