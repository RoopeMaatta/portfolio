import React from 'react'
import ClickableCardList from '../../Organisms/ClickableCardList'
import { useFoundationsCardData } from './cardDataFoundations'
import { Spacer } from 'src/components/Atoms/Spacer'

const StyleGuideNavigationPage: React.FC = () => {
  const cardData = useFoundationsCardData()

  return (
    <>
      <h1>Saana Design System</h1>
      <h2>Components</h2>
      <h2>Foundations</h2>

      <Spacer height={'024px'} />

      <ClickableCardList cardData={cardData} />
    </>
  )
}

export default StyleGuideNavigationPage
