import React from 'react'
import { useState } from 'react'
import { CSSProperties } from 'react'
import { useDarkMode } from './hooks'
import { useTheme } from 'styled-components'
import StyleGuide from './views/StyleGuide'
import AppWrapper from './components/gridContainer/gridContainer'
import ButtonVariations from './views/ButtonVariations'

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const isDarkMode = useDarkMode()

  const theme = useTheme()

  const styles: { container: CSSProperties } = {
    container: {
      textAlign: 'center',
      padding: '50px',
      border: `${theme.stroke.strong} solid ${theme.colors.stroke.neutral.strong}`,
      gridColumn: 'span 12',
      backgroundColor: `${theme.colors.fill.background.base}`,
      color: `${theme.colors.text.neutral.strong}`,
    },
  }

  return (
    <AppWrapper>
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          gridColumn: 'span 3',
        }}
      >
        Box 1
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          gridColumn: 'span 6',
        }}
      >
        Box 2
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          gridColumn: 'span 3',
        }}
      >
        Box 3
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          gridColumn: 'span 4',
        }}
      >
        Box 4
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          gridColumn: 'span 8',
        }}
      >
        Box 5
      </div>

      <div style={styles.container}>
        <h1 style={theme.typography.h1}>Wuf Wuf {counter} </h1>

        <ButtonVariations setCounter={setCounter} />

        <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
        <StyleGuide />
      </div>
    </AppWrapper>
  )
}

export default App
