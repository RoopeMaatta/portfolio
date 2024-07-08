import React, { useState, ReactNode } from 'react'
import { GridContainer } from './gridContainerStyle'

interface AppWrapperProps {
  children: ReactNode
  gridGap?: number
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, gridGap = 10 }) => {
  const [showGrid, setShowGrid] = useState<boolean>(false)

  return (
    <div>
      {/* Button to toggle grid visualization */}
      <button onClick={() => setShowGrid(!showGrid)}>
        Toggle Grid Visualization
      </button>
      {/* Grid container with optional grid visualization */}
      <GridContainer showGrid={showGrid} gridGap={gridGap}>
        {children}
      </GridContainer>
    </div>
  )
}

export default AppWrapper
