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
      <h1>Saana Design System</h1>
      <Spacer height={'024px'} />
      <h2>Components</h2>
      <Spacer height={'024px'} />
      <ClickableCardList cardData={cardDataComponents} />
      <Spacer height={'024px'} />
      <h2>Foundations</h2>
      <Spacer height={'024px'} />
      <ClickableCardList cardData={cardDataFoundations} />
    </>
  )
}

export default StyleGuideNavigationPage
