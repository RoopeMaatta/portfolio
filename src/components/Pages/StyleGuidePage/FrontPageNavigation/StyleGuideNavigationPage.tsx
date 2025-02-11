import React from 'react'
import CardListOnGrid from '../../../Organisms/CardListOnGrid'
import { useCardDataFoundations } from './cardDataFoundations'
import { useCardDataComponents } from './cardDataComponents'
import { Spacer } from 'src/components/Atoms/Spacer'
import { Button } from 'src/components/Atoms/Button'
import { GitHub } from 'react-feather'

const StyleGuideNavigationPage: React.FC = () => {
  const cardDataFoundations = useCardDataFoundations()
  const cardDataComponents = useCardDataComponents()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Saana Design System</h1>
      <Spacer height={'048px'} />

      <p>
        {' '}
        Using custom react components powered by styled-components, this site
        establishes the Saana Design System foundation. Explore the frontend and
        Saana system code on GitHub through the link below.
      </p>
      <Spacer height={'016px'} />
      <Button
        buttonStyle='tonal'
        label='Link to github'
        onClick={() => {
          window.open(
            'https://github.com/RoopeMaatta/ComponentPlayground',
            '_blank'
          )
        }}
        icon={<GitHub />}
      />
      <Spacer height={'048px'} />

      <h2 style={{ textAlign: 'center' }}>Components</h2>
      <Spacer height={'018px'} />

      <CardListOnGrid
        cardData={cardDataComponents}
        cardStyle={{ textAlign: 'left' }}
      />
      <Spacer height={'048px'} />

      <h2 style={{ textAlign: 'center' }}>Foundations</h2>
      <Spacer height={'018px'} />

      <CardListOnGrid
        cardData={cardDataFoundations}
        cardStyle={{ textAlign: 'left' }}
      />
    </>
  )
}

export default StyleGuideNavigationPage
