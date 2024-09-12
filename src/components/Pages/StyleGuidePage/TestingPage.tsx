import React from 'react'
import { useTheme } from 'styled-components'
import { ContainerFullWidth } from 'src/components/Atoms/ContainerFullWidth'
import Card from 'src/components/Organisms/Card/Card'
import { Button, ButtonSmall, ButtonIcon } from 'src/components/Atoms/Button'
import { Check } from 'react-feather'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'

// Main component rendering the color data table
const TestingPage: React.FC = () => {
  const theme = useTheme()

  return (
    <div style={{ display: 'contents' }}>
      <Card
        image='https://hds.hel.fi/images/foundation/visual-assets/placeholders/image-m@2x.png'
        style={{ gridColumn: 'span 4' }}
      />
      <Card
        isHorizontal
        image='https://hds.hel.fi/images/foundation/visual-assets/placeholders/image-m@2x.png'
        style={{ gridColumn: 'span 6' }}
      />
      <ContainerFullWidth
        style={{
          // backgroundColor: 'hsl(212 100% 45% / 100%)',
          borderStyle: 'dotted',
          borderColor: theme.colors.stroke.neutral.strong,
          borderWidth: theme.stroke.strong,
          padding: theme.spacing['032px'],
        }}
      >
        <Card content={false} image='https://dummyimage.com/640x360/eee/aaa' />
        <Card isHorizontal image />
        <Card />
        <Card title={false} />
        <Card cardStyle='raised' />
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

        <PlaceholderComponent />
      </ContainerFullWidth>
    </div>
  )
}

export default TestingPage
