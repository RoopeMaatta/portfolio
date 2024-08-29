import React from 'react'
import { useTheme } from 'styled-components'
import GridWrapper from './components/Organisms/GridContainer/GridWrapper'
import styled from 'styled-components'
import useResponsiveValue from './hooks/useResponsiveValue'
import { NavigationBar } from './components/Organisms/NavigationBar'
import { DevVisualizationButtons } from './components/Molecules/DevVisualizationButtons'
import AppRoutes from './routes'

const PaddingContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'padding',
})<{ padding: string }>(
  ({ padding }) => `
    padding-left: ${padding};
    padding-right: ${padding};
  `
)

const items = [
  { label: 'Style Guide', href: '/style-guide' },
  { label: 'Button Variations', href: '/button-variations' },
]

const App: React.FC = () => {
  const theme = useTheme()

  const padding = useResponsiveValue(['4vw', '4vw', '6vw'])

  return (
    <PaddingContainer theme={theme} padding={padding}>
      <DevVisualizationButtons />
      <NavigationBar items={items}/>
      <GridWrapper>
        <AppRoutes />
      </GridWrapper>
    </PaddingContainer>
  )
}

export default App
