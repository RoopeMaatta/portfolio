import React from 'react'
import ClickableCardList from '../../../Organisms/ClickableCardList'
import { useFoundationsCardData } from './cardDataFoundations'
import { useComponentsCardData } from './cardDataComponents'
import { Spacer } from 'src/components/Atoms/Spacer'

const StyleGuideNavigationPage: React.FC = () => {
  const cardDataFoundations = useFoundationsCardData()
  const cardDataComponents = useComponentsCardData()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Saana Design System</h1>
      <Spacer height={'048px'} />
      <h2 style={{ textAlign: 'center' }}>Components</h2>
      <Spacer height={'018px'} />
      <ClickableCardList cardData={cardDataComponents} />
      <Spacer height={'048px'} />
      <h2 style={{ textAlign: 'center' }}>Foundations</h2>
      <Spacer height={'018px'} />
      <ClickableCardList cardData={cardDataFoundations} />
    </>
  )
}

export default StyleGuideNavigationPage
