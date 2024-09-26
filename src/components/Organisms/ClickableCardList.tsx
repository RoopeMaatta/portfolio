import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from 'src/components/Atoms/Button'
import Card from 'src/components/Molecules/Card/Card'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'

interface CardData {
  key: string
  gridColumn: string
  route: string
  isHorizontal?: boolean
  image?: boolean
  content?: boolean
  description?: string
  title?: string
}

interface ClickableCardListProps {
  cardData: CardData[]
}

const ClickableCardList: React.FC<ClickableCardListProps> = ({ cardData }) => {
  const navigate = useNavigate()

  const handleCardClick = (route: string) => {
    navigate(route) // Programmatically navigate to the route
  }

  return (
    <GridWrapper rowGap>
      {cardData.map(
        ({
          key,
          gridColumn,
          route,
          isHorizontal = false,
          image = false,
          content = false,
          description = '',
          title = '',
        }) => (
          <ButtonContainer
            key={key}
            style={{ gridColumn }}
            onClick={() => handleCardClick(route)}
          >
            <Card
              isHorizontal={isHorizontal}
              image={image}
              content={content}
              description={description}
              title={title}
            />
          </ButtonContainer>
        )
      )}
    </GridWrapper>
  )
}

export default ClickableCardList
