import React from 'react'
import { Button } from './components'
import { useState } from 'react'
import { CSSProperties } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

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
        label='Click Me, Fill'
        onClick={handleButtonClick}
        buttonRole='filled'
      />
      <Button
        label='Click Me, Outline'
        onClick={handleButtonClick}
        buttonRole='outline'
      />
      <Button
        label='Click Me, Text'
        onClick={handleButtonClick}
        buttonRole='text'
      />
      <br></br>
      <Button
        label='Fill, icon left'
        onClick={handleButtonClick}
        buttonRole='filled'
        icon={<CheckIcon />}
        iconPosition='left'
      />
      <Button
        label='Outline, icon right'
        onClick={handleButtonClick}
        buttonRole='outline'
        icon={<ChevronRightIcon />}
        iconPosition='right'
      />
      <Button label='Click' onClick={handleButtonClick} buttonRole='outline' />
      <h3>Darkmode is: {isBrowserDarkModeOn ? 'on' : 'off'}</h3>
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
