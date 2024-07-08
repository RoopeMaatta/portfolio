import React from 'react'
import { Button } from '../components'
import CheckIcon from '@mui/icons-material/Check'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// Define the type for the props
interface ButtonVariationsProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const ButtonVariations: React.FC<ButtonVariationsProps> = ({ setCounter }) => {
  // Function to increment the counter
  const handleButtonClick = () => {
    setCounter((prevCounter: number) => prevCounter + 1)
  }

  return (
    <>
      <Button
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ChevronRightIcon />}
      />
      <br />
      <Button
        label='Click Me, Fill'
        onClick={handleButtonClick}
        buttonStyle='filled'
      />
      <Button
        label='Click Me, Outline'
        onClick={handleButtonClick}
        buttonStyle='outline'
      />
      <Button
        label='Click Me, Text'
        onClick={handleButtonClick}
        buttonStyle='text'
      />
      <br />
      <Button
        label='Fill, icon left'
        onClick={handleButtonClick}
        buttonStyle='filled'
        icon={<CheckIcon />}
        iconPosition='left'
      />
      <Button
        label='Outline, icon right'
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ChevronRightIcon />}
        iconPosition='right'
      />
      <Button label='Click' onClick={handleButtonClick} buttonStyle='outline' />
      <br />
      <Button
        label='Fill, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='filled'
        fullWidth={true}
      />
      <Button
        label='Fill, icon left, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='filled'
        icon={<CheckIcon />}
        iconPosition='left'
        fullWidth={true}
      />
      <Button
        label='Outline, icon right, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ChevronRightIcon />}
        iconPosition='right'
        fullWidth={true}
      />
      <Button
        label='Tonal, icon right, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='tonal'
        icon={<ChevronRightIcon />}
        iconPosition='right'
        fullWidth={true}
      />
      <br />
      <Button
        onClick={handleButtonClick}
        buttonStyle='filled'
        icon={<ChevronRightIcon />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='tonal'
        icon={<ChevronRightIcon />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ChevronRightIcon />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='text'
        icon={<ChevronRightIcon />}
      />
    </>
  )
}

export default ButtonVariations
