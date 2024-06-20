import React from 'react'
import Button from './components/Button'
import { useState } from 'react'
import { useTheme } from './contexts/ThemeContext'

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  // Initialize the counter state
  const [counter, setCounter] = useState(0)

  // Function to increment the counter
  const handleButtonClick = () => {
    console.log(isDarkMode)
    setCounter(counter + 1)
  }



  return (
    <div style={styles.container}>
      <h1>Wuf Wuf {counter} </h1>
      <Button label='Click Me' onClick={handleButtonClick} />
      <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
      <Button label='Toggle darkmode' onClick={toggleTheme} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
}

export default App
