import React, { useState, useEffect, ReactNode, useCallback } from 'react'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import adjustChildren from './adjustChildren'

interface AppWrapperProps {
  children: ReactNode
  gridGap?: number
}

const useColumns = () => {
  const getColumns = useCallback((): number => {
    if (window.innerWidth <= 599) return 4
    if (window.innerWidth <= 899) return 8
    return 12
  }, [])

  const [columns, setColumns] = useState(getColumns)

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getColumns])

  return columns
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, gridGap = 20 }) => {
  const [showGrid, setShowGrid] = useState(true)
  const columns = useColumns()

  const adjustedChildren = adjustChildren(children, columns)

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setShowGrid(!showGrid)}>
        Toggle Grid Visualization
      </button>
      <GridContainer gridGap={gridGap} columns={columns}>
        {adjustedChildren}
        {showGrid && <GridVisualization columns={columns} />}
      </GridContainer>
    </div>
  )
}

export default AppWrapper
