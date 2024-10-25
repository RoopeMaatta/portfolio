import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from 'src/components/Atoms/Button'
import Card from 'src/components/Molecules/Card/Card'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'

interface CardData {
  key: string
  style?: React.CSSProperties
  gridColumn?: string
  gridRow?: string
  route?: string
  isExternal?: boolean
  isHorizontal?: boolean
  image?: string | boolean
  content?: React.ReactNode | boolean
  description?: string
  title?: string | React.ReactElement
  icon?: React.ReactNode | boolean
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

  const handleCardClick = (route: string, isExternal: boolean = false) => {
    if (isExternal) {
      window.open(route, '_blank')
    } else {
      window.scrollTo(0, 0)
      navigate(route)
    }
  }

  return (
    <GridWrapper rowGap>
      {cardData.map(
        ({
          key,
          style,
          gridColumn,
          gridRow,
          route,
          isExternal = false,
          isHorizontal = false,
          image = false,
          content = false,
          icon = false,
          description = '',
          title = '',
        }) =>
          isClickable ? (
            <ButtonContainer
              key={key}
              style={{ gridColumn, gridRow }}
              onClick={() => handleCardClick(route!, isExternal)}
            >
              <Card
                style={style}
                isHorizontal={isHorizontal}
                image={image}
                content={content}
                icon={icon}
                description={description}
                title={title}
              />
            </ButtonContainer>
          ) : (
            <div key={key} style={{ gridColumn, gridRow }}>
              <Card
                style={style}
                isHorizontal={isHorizontal}
                image={image}
                content={content}
                icon={icon}
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
