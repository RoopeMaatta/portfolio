import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import GridWrapper from './components/GridContainer/GridWrapper'
import ButtonVariations from './views/ButtonVariations'
import styled from 'styled-components'
import useResponsiveValue from './hooks/useResponsiveValue'
import { NavigationBar } from './components/NavigationBar'
import { DevVisualizationButtons } from './components/DevVisualizationButtons'

const PaddingContainer = styled.div.withConfig({
  // shouldForwardProp filters out the "padding" prop so it doesn't get passed to the DOM
  shouldForwardProp: prop => prop !== 'padding',
})<{ padding: string }>(
  ({ padding }) => `
    padding-left: ${padding};
    padding-right: ${padding};
  `
)
// const MakeDirectChilOfParentContainer = styled.div`
//   display: contents;

//   & > * {
//     display: contents;
//   }
// `

const App: React.FC = () => {
  const theme = useTheme()

  console.log(theme.typography)
  const padding = useResponsiveValue(['2vw', '4vw', '6vw'])

  return (
    <Router>
      <PaddingContainer theme={theme} padding={padding}>
        <DevVisualizationButtons />
        <NavigationBar />
        <GridWrapper>
          <Routes>
            <Route path='/style-guide/*' element={<StyleGuide />} />
            <Route path='/button-variations' element={<ButtonVariations />} />
          </Routes>
        </GridWrapper>
      </PaddingContainer>
    </Router>
  )
}

export default App
