import React from 'react'
import { useGrid } from './GridContext'

interface WithResponsiveProps {
  gridColumn: string | string[]
}

const withResponsiveProps = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithResponsiveProps>
) => {
  const ComponentWithResponsiveProps: React.FC<P & WithResponsiveProps> = ({
    gridColumn,
    ...props
  }) => {
    const { columns } = useGrid()

    const getResponsiveGridColumn = () => {
      if (Array.isArray(gridColumn)) {
        if (columns <= 4) return gridColumn[0]
        if (columns <= 8) return gridColumn[1]
        return gridColumn[2]
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
