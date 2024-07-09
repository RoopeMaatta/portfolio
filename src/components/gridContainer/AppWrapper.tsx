import React, { useState, useEffect, ReactNode, cloneElement } from 'react'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'

interface AppWrapperProps {
  children: ReactNode
  gridGap?: number
}

interface GridChildProps {
  gridColumn?: string
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

  const adjustedChildren = React.Children.map(children, child => {
    if (React.isValidElement<GridChildProps>(child)) {
      const { gridColumn } = child.props
      if (gridColumn) {
        const spanValue = parseInt(gridColumn.split(' ')[1], 10)
        if (spanValue > columns) {
          return cloneElement(child, { gridColumn: `span ${columns}` })
        }
      }
    }
    return child
  })

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
