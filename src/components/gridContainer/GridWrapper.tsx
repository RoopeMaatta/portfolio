import React, { ReactNode, useState } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import { Button } from '../Button'

// Interface for the GridWrapper properties
interface GridWrapperProps {
  children: ReactNode
}

// Main content component for the GridWrapper
const GridWrapperContent: React.FC<GridWrapperProps> = ({ children }) => {
  const [showGrid, setShowGrid] = useState(false)
  const { columns, gridGap } = useGrid()

  return (
    <div style={{ position: 'relative' }}>
      <Button
        label='Toggle Grid Visualization'
        onClick={() => setShowGrid(!showGrid)}
        buttonStyle='tonal'
        fullWidth={true}
      />

      <GridContainer gridGap={gridGap} columns={columns}>
        {children}
        {showGrid && <GridVisualization columns={columns} />}
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
