import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from 'src/components/Atoms/Button'
import Card from 'src/components/Molecules/Card/Card'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'

interface CardData {
  key: string
  gridColumn: string
  route?: string
  isHorizontal?: boolean
  image?: boolean
  content?: boolean
  description?: string
  title?: string
}

interface CardListOnGridProps {
  cardData: CardData[]
  isClickable?: boolean
}

const CardListOnGrid: React.FC<CardListOnGridProps> = ({
  cardData,
  isClickable = true,
}) => {
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
        }) =>
          isClickable ? (
            <ButtonContainer
              key={key}
              style={{ gridColumn }}
              onClick={() => handleCardClick(route!)}
            >
              <Card
                isHorizontal={isHorizontal}
                image={image}
                content={content}
                description={description}
                title={title}
              />
            </ButtonContainer>
          ) : (
            <div key={key} style={{ gridColumn }}>
              <Card
                isHorizontal={isHorizontal}
                image={image}
                content={content}
                description={description}
                title={title}
              />
            </div>
          )
      )}
    </GridWrapper>
  )
}

export default CardListOnGrid
