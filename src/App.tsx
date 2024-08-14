import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import GridWrapper from './components/gridContainer/GridWrapper'
import ButtonVariations from './views/ButtonVariations'
import styled, { createGlobalStyle } from 'styled-components'
import useResponsiveValue from './hooks/useResponsiveValue'
import { NavigationBar } from './components/NavigationBar'

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.fill.background.base};
      color: ${theme.colors.text.neutral.strong};
      ${Object.entries(theme.typography.body)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ')}
    }
  `
)

const Container = styled.div.withConfig({
  // shouldForwardProp filters out the "padding" prop so it doesn't get passed to the DOM
  shouldForwardProp: prop => prop !== 'padding',
})<{ padding: string }>(
  ({ theme, padding }) => `
    padding-left: ${padding};
    padding-right: ${padding};
    text-align: left;
    border: ${theme.stroke.strong} solid ${theme.colors.stroke.neutral.strong};
    grid-column: 1 / -1;
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

  const padding = useResponsiveValue(['2vw', '4vw', '6vw'])

  return (
    <Router>
      <GlobalStyle theme={theme} />
      <Container theme={theme} padding={padding}>
        <NavigationBar />
        <GridWrapper>
          <Routes>
            <Route path='/style-guide/*' element={<StyleGuide />} />
            <Route path='/button-variations' element={<ButtonVariations />} />
          </Routes>
        </GridWrapper>
      </Container>
    </Router>
  )
}

export default App
