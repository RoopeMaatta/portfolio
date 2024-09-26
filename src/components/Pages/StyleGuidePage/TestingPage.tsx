import React from 'react'
import Card from 'src/components/Molecules/Card/Card'
import {
  Button,
  ButtonIcon,
  // ButtonContainer,
} from 'src/components/Atoms/Button'
import { Check } from 'react-feather'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'

// Main component rendering the color data table
const TestingPage: React.FC = () => {
  return (
    <div style={{ display: 'contents' }}>
      <Card isHorizontal />
      <Card />
      <Card image isHorizontal />
      <Card image />

      <Button label='button' disabled />
      <Button label='button' icon={<Check />} />

      <ButtonIcon icon={<Check />} disabled />
      <ButtonIcon
        icon={<Check />}
        size='small'
        buttonStyle='outline'
        shape='square'
      />

      <PlaceholderComponent />
    </div>
  )
}

export default TestingPage
