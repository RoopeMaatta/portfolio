import React from 'react'
import { Button } from './components'
import { useState } from 'react'
import { CSSProperties } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useDarkMode } from './hooks'

const App: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const isDarkMode = useDarkMode()

  // Function to increment the counter
  const handleButtonClick = () => {
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

      <br></br>

      <Button
        label='Fill, fullWidth'
        onClick={handleButtonClick}
        buttonRole='filled'
        fullWidth={true}
      />
      <Button
        label='Fill, icon left, fullWidth'
        onClick={handleButtonClick}
        buttonRole='filled'
        icon={<CheckIcon />}
        iconPosition='left'
        fullWidth={true}
      />
      <Button
        label='Outline, icon right, fullWidth'
        onClick={handleButtonClick}
        buttonRole='outline'
        icon={<ChevronRightIcon />}
        iconPosition='right'
        fullWidth={true}
      />
      <h3>Darkmode is: {isDarkMode ? 'on' : 'off'}</h3>
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
