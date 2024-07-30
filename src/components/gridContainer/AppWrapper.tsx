import React, { ReactNode, Children, useState, useCallback } from 'react'
import { GridProvider, useGrid } from './GridContext'
import { GridContainer } from './GridContainerStyle'
import GridVisualization from './GridVisualization'
import withResponsiveProps from './withResponsiveProps'

// Interface for the AppWrapper properties
interface AppWrapperProps {
  children: ReactNode
}

// Main content component for the AppWrapper
const AppWrapperContent: React.FC<AppWrapperProps> = ({ children }) => {
  const [showGrid, setShowGrid] = useState(true)
  const { columns, gridGap } = useGrid()

  // Log the current grid configuration for debugging
  console.log('Current grid config:', { columns, gridGap })

  // Function to render children with responsive grid properties
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

// AppWrapper component to provide grid context to its children
const AppWrapper: React.FC<AppWrapperProps> = props => (
  <GridProvider>
    <AppWrapperContent {...props} />
  </GridProvider>
)

export default AppWrapper
