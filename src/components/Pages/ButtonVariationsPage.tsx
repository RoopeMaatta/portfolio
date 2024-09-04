import React, { useState } from 'react'
import { Button } from '..'
import { useTheme } from 'styled-components'
import { ContainerFullWidth } from '../../components/Atoms/ContainerFullWidth'
import { Check, ArrowRight } from 'react-feather'

const ButtonVariationsPage: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const theme = useTheme()

  // Function to increment the counter
  const handleButtonClick = () => {
    setCounter((prevCounter: number) => prevCounter + 1)
  }

  return (
    <ContainerFullWidth>
      <h1 style={theme.typography.h1}>Wuf Wuf counter: {counter}</h1>
      <Button
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ArrowRight />}
      />
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
        icon={<Check />}
        iconPosition='left'
      />
      <Button
        label='Outline, icon right'
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ArrowRight />}
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
        icon={<Check />}
        iconPosition='left'
        fullWidth={true}
      />
      <Button
        label='Outline, icon right, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ArrowRight />}
        iconPosition='right'
        fullWidth={true}
      />
      <Button
        label='Tonal, icon right, fullWidth'
        onClick={handleButtonClick}
        buttonStyle='tonal'
        icon={<ArrowRight />}
        iconPosition='right'
        fullWidth={true}
      />
      <br />
      <Button
        onClick={handleButtonClick}
        buttonStyle='filled'
        icon={<ArrowRight />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='tonal'
        icon={<ArrowRight />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='outline'
        icon={<ArrowRight />}
      />
      <Button
        onClick={handleButtonClick}
        buttonStyle='text'
        icon={<ArrowRight />}
      />
    </ContainerFullWidth>
  )
}

export default ButtonVariationsPage
