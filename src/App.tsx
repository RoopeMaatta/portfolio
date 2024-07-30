import React, { useState } from 'react'
import { useDarkMode } from './hooks'
import { useTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import AppWrapper from './components/gridContainer/AppWrapper'
import ButtonVariations from './views/ButtonVariations'
import styled from 'styled-components'

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const isDarkMode = useDarkMode()
  const theme = useTheme()

  const Box = styled.div<{ gridColumn: string | string[] }>`
    border: 1px solid black;
    padding: 20px;
    grid-column: ${({ gridColumn }) => gridColumn};
  `

  const Container = styled.div`
    text-align: center;
    padding: 50px;
    border: ${theme.stroke.strong} solid ${theme.colors.stroke.neutral.strong};
    grid-column: 1 / -1; /* Span full width */
    background-color: ${theme.colors.fill.background.base};
    color: ${theme.colors.text.neutral.strong};
  `

  return (
    <AppWrapper>
      <Box gridColumn='span 3'>Box 1</Box>
      <Box gridColumn={['span 3', 'span 4', 'span 6']}>Box responsive</Box>

      {/* 
      <Box gridColumn='2 / 4'>Box 2</Box>
      <Box gridColumn='span 4 / 3'>Box 3</Box>
      <Box gridColumn='7 / span 3'>Box 4</Box>
      */}

      <Container>
        <h1 style={theme.typography.h1}>Wuf Wuf {counter}</h1>
        <ButtonVariations setCounter={setCounter} />
        <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
        <StyleGuide />
      </Container>
    </AppWrapper>
  )
}

export default App
