import React from 'react'
import { useTheme } from 'styled-components'
import { ContainerFullWidth } from 'src/components/Atoms/ContainerFullWidth'
import Card from 'src/components/Organisms/Card/Card'
import {
  Button,
  ButtonIcon,
  // ButtonContainer,
} from 'src/components/Atoms/Button'
import { Check } from 'react-feather'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'

// Main component rendering the color data table
const TestingPage: React.FC = () => {
  const theme = useTheme()

  return (
    <div style={{ display: 'contents' }}>
      <ContainerFullWidth
        style={{
          // backgroundColor: 'hsl(212 100% 45% / 100%)',
          borderStyle: 'dotted',
          borderColor: theme.colors.stroke.neutral.strong,
          borderWidth: theme.stroke.strong,
          padding: theme.spacing['032px'],
        }}
      >
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
      </ContainerFullWidth>
    </div>
  )
}

export default TestingPage
