import React from 'react'
import { useDarkMode } from './hooks'
import { useTheme, DefaultTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import GridWrapper from './components/gridContainer/GridWrapper'
import ButtonVariations from './views/ButtonVariations'
import styled from 'styled-components'
import useResponsiveValue from './hooks/useResponsiveValue'

const Container = styled.div<{ padding: string }>(
  ({ theme, padding }: { theme: DefaultTheme; padding: string }) => `
    padding-left: ${padding};
    padding-right: ${padding};
    
    text-align: center;
    border: ${theme.stroke.strong} solid ${theme.colors.stroke.neutral.strong};
    grid-column: 1 / -1; /* Span full width */
    background-color: ${theme.colors.fill.background.base};
    color: ${theme.colors.text.neutral.strong};
  `
)

console.log(Container)

// const MakeDirectChilOfParentContainer = styled.div`
//   display: contents;

//   & > * {
//     display: contents;
//   }
// `

const App: React.FC = () => {
  const isDarkMode = useDarkMode()
  const theme = useTheme()

  const padding = useResponsiveValue(['2vw', '4vw', '6vw'])

  return (
    <Container theme={theme} padding={padding}>
      <GridWrapper>
        <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
        <ButtonVariations />
        <StyleGuide />
      </GridWrapper>
    </Container>
  )
}

export default App
