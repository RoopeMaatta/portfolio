import React from 'react'
import { useTheme } from 'styled-components'
import { ContainerFullWidth } from 'src/components/Atoms/ContainerFullWidth'
import Card from 'src/components/Organisms/Card/Card'
import { Button, ButtonSmall, ButtonIcon } from 'src/components/Atoms/Button'
import { Check } from 'react-feather'

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
        <Card />
        <Button label='button' disabled />
        <Button label='button' />
        <ButtonSmall label='button' disabled />
        <ButtonSmall label='button' />
        <ButtonSmall label='button' disabled />
        <ButtonSmall label='button' shape='regular' />
        <ButtonIcon icon={<Check />} disabled />
        <ButtonIcon
          icon={<Check />}
          size='small'
          buttonStyle='outline'
          shape='square'
        />
        <ButtonIcon
          icon={<Check />}
          size='small'
          buttonStyle='text'
          shape='square'
        />
      </ContainerFullWidth>
    </div>
  )
}

export default TestingPage
