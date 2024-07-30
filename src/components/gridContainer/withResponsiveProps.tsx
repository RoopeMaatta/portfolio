import React from 'react'
import { useTheme } from 'styled-components'
import { useGrid } from './GridContext'

// Interface for the responsive grid props
interface WithResponsiveProps {
  gridColumn: string | string[]
}

// Higher-Order Component to provide responsive grid properties
const withResponsiveProps = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithResponsiveProps>
) => {
  const ComponentWithResponsiveProps: React.FC<P & WithResponsiveProps> = ({
    gridColumn,
    ...props
  }) => {
    const { columns } = useGrid()
    const theme = useTheme()
    const breakpoints = theme.breakpoints

    const getResponsiveGridColumn = () => {
      if (Array.isArray(gridColumn)) {
        for (let i = breakpoints.length - 1; i >= 0; i--) {
          if (columns >= breakpoints[i].columns) {
            return gridColumn[i]
          }
        }
      }
      return gridColumn
    }

    return (
      <WrappedComponent
        gridColumn={getResponsiveGridColumn()}
        {...(props as P)}
      />
    )
  }

  ComponentWithResponsiveProps.displayName = `WithResponsiveProps(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return React.memo(ComponentWithResponsiveProps)
}

export default withResponsiveProps
