import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'
import { useTheme } from 'styled-components'
import { useWindowSizeContext } from 'src/contexts/WindowSizeContext'

// Interface for the grid context properties
interface GridContextProps {
  columns: number
  gridGap: number
}

// Create the GridContext
const GridContext = createContext<GridContextProps | undefined>(undefined)

// Custom hook to get the grid configuration based on the current window width
const useGridConfig = () => {
  const theme = useTheme()
  const { windowWidth } = useWindowSizeContext()
  const breakpoints = theme.breakpoints

  const getGridConfig = useCallback(() => {
    const matchingBreakpoint = Object.values(breakpoints)
      .reverse()
      .find(breakpoint => windowWidth >= breakpoint.minScreenWidth)

    if (matchingBreakpoint) {
      return {
        columns: matchingBreakpoint.columns,
        gridGap: matchingBreakpoint.gridGap,
      }
    }

    throw new Error('No matching breakpoints found for the given width')
  }, [breakpoints, windowWidth])

  const [gridConfig, setGridConfig] = useState(getGridConfig)

  useEffect(() => {
    setGridConfig(getGridConfig())
  }, [getGridConfig])

  return gridConfig
}

// Provider component to supply the grid configuration to its children
const GridProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const gridConfig = useGridConfig()

  return (
    <GridContext.Provider value={gridConfig}>{children}</GridContext.Provider>
  )
}

// Custom hook to access the grid configuration context
const useGrid = () => {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGrid must be used within a GridProvider')
  }
  return context
}

export { GridProvider, useGrid }
