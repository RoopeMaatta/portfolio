import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react'
import { debounce } from 'lodash'

interface GridContextProps {
  columns: number
}

const GridContext = createContext<GridContextProps | undefined>(undefined)

const useColumns = () => {
  const getColumns = useCallback((): number => {
    if (window.innerWidth <= 599) return 4
    if (window.innerWidth <= 899) return 8
    return 12
  }, [])

  const [columns, setColumns] = useState(getColumns)

  useEffect(() => {
    const handleResize = debounce(() => {
      setColumns(getColumns())
    }, 100)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getColumns])

  return columns
}

interface GridProviderProps {
  children: ReactNode
}

const GridProvider: React.FC<GridProviderProps> = ({ children }) => {
  const columns = useColumns()

  return (
    <GridContext.Provider value={{ columns }}>{children}</GridContext.Provider>
  )
}

const useGrid = () => {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGrid must be used within a GridProvider')
  }
  return context
}

export { GridProvider, useGrid }
