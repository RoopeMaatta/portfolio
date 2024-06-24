import React from 'react'
import Button from './components/Button'
import { useState } from 'react'
import { CSSProperties } from 'react'

const App: React.FC = () => {
  const isBrowserDarkModeOn = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  // Initialize the counter state
  const [counter, setCounter] = useState(0)

  // Function to increment the counter
  const handleButtonClick = () => {
    console.log(isBrowserDarkModeOn)
    setCounter(counter + 1)
  }

  return (
    <div style={styles.container}>
      <h1>Wuf Wuf {counter} </h1>
      <Button
        label='Click Me Fill'
        onClick={handleButtonClick}
        buttonRole='filled'
      />
      <Button
        label='Click Me Outline'
        onClick={handleButtonClick}
        buttonRole = 'outline'
      />
      <Button
        label='Click Me Text'
        onClick={handleButtonClick}
        buttonRole='text'
      />
      <h3>
        Darkmode is:{' '}
        {isBrowserDarkModeOn ? 'on' : 'off'}
      </h3>
    </div>
  )
}

const styles: { container: CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
}

export default App
