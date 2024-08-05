import React, { useState } from 'react'
import { useDarkMode } from './hooks'
import { useTheme, DefaultTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import AppWrapper from './components/gridContainer/AppWrapper'
import ButtonVariations from './views/ButtonVariations'
import styled from 'styled-components'
import useResponsiveValue from './hooks/useResponsiveValue'

const Container = styled.div(
  ({ theme }: { theme: DefaultTheme }) => `
    text-align: center;
    padding: 50px;
    border: ${theme.stroke.strong} solid ${theme.colors.stroke.neutral.strong};
    grid-column: 1 / -1; /* Span full width */
    background-color: ${theme.colors.fill.background.base};
    color: ${theme.colors.text.neutral.strong};
  `
)

const Box = styled.div`
  border: 1px solid black;
  padding: 20px;
`

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const isDarkMode = useDarkMode()
  const theme = useTheme()

  return (
    <AppWrapper>
      <Box style={{ gridColumn: 'span 3' }}>Box 1</Box>
      <Box
        style={{
          gridColumn: useResponsiveValue(['span 2', 'span 3', 'span 4']),
        }}
      >
        Box responsive works
      </Box>

      <Box style={{ gridColumn: useResponsiveValue(['span 3', 'span 6']) }}>
        Box error too few values
      </Box>
      <Box
        style={{
          gridColumn: useResponsiveValue([
            'span 2',
            'span 3',
            'span 4',
            'span 5',
          ]),
        }}
      >
        Box error too many values
      </Box>

      {/* <Box style={{ gridColumn: '2 / 4' }}>Box 2</Box>
      <Box style={{ gridColumn: 'span 4 / 3' }}>Box 3</Box>
      <Box style={{ gridColumn: '2 / span 3' }}>Box 4</Box> */}

      <Container theme={theme}>
        <h1 style={theme.typography.h1}>Wuf Wuf {counter}</h1>
        <ButtonVariations setCounter={setCounter} />
        <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
        <StyleGuide />
      </Container>
    </AppWrapper>
  )
}

export default App
