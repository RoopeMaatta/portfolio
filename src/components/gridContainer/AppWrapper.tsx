import React, { ReactNode, Children, useState, useCallback } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import withResponsiveProps from './withResponsiveProps'

interface AppWrapperProps {
  children: ReactNode
  gridGap?: number
}

const AppWrapperContent: React.FC<AppWrapperProps> = ({
  children,
  gridGap = 20,
}) => {
  const [showGrid, setShowGrid] = useState(true)
  const { columns } = useGrid()

  // Log columns to ensure it works
  console.log('Current number of columns:', columns)

  const renderChildren = useCallback(() => {
    return Children.map(children, child => {
      if (React.isValidElement(child) && typeof child.type !== 'string') {
        const ResponsiveChild = withResponsiveProps(child.type)
        return <ResponsiveChild {...child.props} />
      }
      return child
    })
  }, [children, columns])

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setShowGrid(!showGrid)}>
        Toggle Grid Visualization
      </button>
      <GridContainer gridGap={gridGap} columns={columns}>
        {renderChildren()}
        {showGrid && <GridVisualization columns={columns} />}
      </GridContainer>
    </div>
  )
}

const AppWrapper: React.FC<AppWrapperProps> = props => (
  <GridProvider>
    <AppWrapperContent {...props} />
  </GridProvider>
)

export default AppWrapper
