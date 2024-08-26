import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of the context data
interface DevVisualizationContextType {
  showSpacerVisualization: boolean
  toggleSpacerVisualization: () => void
  showMainGridVisualization: boolean
  toggleMainGridVisualization: () => void
}

// Create the context with default values
const DevVisualizationContext = createContext<
  DevVisualizationContextType | undefined
>(undefined)

// Provider component
export const DevVisualizationProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [showSpacerVisualization, setShowSpacerVisualization] = useState(false)
  const [showMainGridVisualization, setShowMainGridVisualization] =
    useState(false)

  const toggleSpacerVisualization = () => {
    setShowSpacerVisualization(prev => !prev)
  }

  const toggleMainGridVisualization = () => {
    setShowMainGridVisualization(prev => !prev)
  }

  return (
    <DevVisualizationContext.Provider
      value={{
        showSpacerVisualization,
        toggleSpacerVisualization,
        showMainGridVisualization,
        toggleMainGridVisualization,
      }}
    >
      {children}
    </DevVisualizationContext.Provider>
  )
}

// Custom hook to use the context
export const useDevVisualizationContext = () => {
  const context = useContext(DevVisualizationContext)
  if (!context) {
    throw new Error(
      'useDevVisualizationContext must be used within a DevVisualizationProvider'
    )
  }
  return context
}
