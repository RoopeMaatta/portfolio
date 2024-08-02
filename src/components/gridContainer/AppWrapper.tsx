import React, { ReactNode, useState } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'

// Interface for the AppWrapper properties
interface AppWrapperProps {
  children: ReactNode
}

// Main content component for the AppWrapper
const AppWrapperContent: React.FC<AppWrapperProps> = ({ children }) => {
  const [showGrid, setShowGrid] = useState(true)
  const { columns, gridGap } = useGrid()

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setShowGrid(!showGrid)}>
        Toggle Grid Visualization
      </button>
      <GridContainer gridGap={gridGap} columns={columns}>
        {children}
        {showGrid && <GridVisualization columns={columns} />}
      </GridContainer>
    </div>
  )
}

// AppWrapper component to provide grid context to its children
const AppWrapper: React.FC<AppWrapperProps> = props => (
  <GridProvider>
    <AppWrapperContent {...props} />
  </GridProvider>
)

export default AppWrapper
