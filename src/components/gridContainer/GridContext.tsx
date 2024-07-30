import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'
import { useTheme } from 'styled-components'
import { debounce } from 'lodash'

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
  const breakpoints = theme.breakpoints

  const getGridConfig = useCallback(() => {
    const width = window.innerWidth
    for (let i = breakpoints.length - 1; i >= 0; i--) {
      if (width >= breakpoints[i].minWidthBreakpoint) {
        return {
          columns: breakpoints[i].columns,
          gridGap: breakpoints[i].gridGap,
        }
      }
    }
    // Default to smallest config if no breakpoints match
    return { columns: 4, gridGap: 16 }
  }, [breakpoints])

  const [gridConfig, setGridConfig] = useState(getGridConfig)

  useEffect(() => {
    const handleResize = debounce(() => {
      setGridConfig(getGridConfig())
    }, 100)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
