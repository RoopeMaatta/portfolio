import React, { useState, useEffect, ReactNode } from 'react'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'

interface AppWrapperProps {
  children: ReactNode
  gridGap?: number
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, gridGap = 20 }) => {
  const getColumns = () => {
    if (window.innerWidth <= 599) return 4
    if (window.innerWidth <= 899) return 8
    return 12
  }

  const [showGrid, setShowGrid] = useState(true)
  const [columns, setColumns] = useState(getColumns)

  useEffect(() => {
    const handleResize = () => setColumns(getColumns())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

export default AppWrapper
