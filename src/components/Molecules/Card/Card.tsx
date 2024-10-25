import React, { useMemo } from 'react'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'
import {
  StyledCard,
  CardContentWrapper,
  CardImage,
  IconWrapper,
} from './CardStyles'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'
import { Compass } from 'react-feather'
import { ButtonIcon } from 'src/components/Atoms/Button'
import { Spacer } from 'src/components/Atoms/Spacer'

type CardVariant = 'overlay' | 'raised'

type GridColumnValue =
  | 'auto'
  | `span ${number}`
  | `${number} / ${number}`
  | `${number} / span ${number}`
  | '1 / -1'
  | 'inherit'

interface CardProps {
  cardStyle?: CardVariant
  icon?: React.ReactNode | boolean
  title?: string | boolean | React.ReactElement
  description?: string | boolean
  content?: React.ReactNode | boolean
  style?: React.CSSProperties
  image?: string | boolean
  isHorizontal?: boolean
  gridColumn?: GridColumnValue
}

const Card: React.FC<CardProps> = ({
  cardStyle = 'raised',
  icon = false,
  title = 'title: Placeholder. If not needed, set to {false}',
  description = 'description: Placeholder. If not needed, set to {false}',
  content = false,
  style,
  image = false,
  isHorizontal = false,
  gridColumn = '1 / -1',
}) => {
  // Memoizing the placeholder image URL
  const placeholderImage = useMemo(
    () =>
      'https://hds.hel.fi/images/foundation/visual-assets/placeholders/image-m@2x.png',
    []
  )

  // Memoize the icon
  const iconToShow = useMemo(() => {
    if (typeof icon === 'boolean' && icon === true) {
      return (
        <ButtonIcon
          buttonStyle='tonal'
          shape='round'
          isInteractive={false}
          icon={<Compass />}
          size='regular'
        />
      )
    }
    return (
      icon && (
        <ButtonIcon
          buttonStyle='tonal'
          shape='round'
          isInteractive={false}
          icon={icon}
          size='regular'
        />
      )
    )
  }, [icon])

  const imageToShow = useMemo(() => {
    if (typeof image === 'boolean' && image === true) {
      return placeholderImage
    }
    return image || null
  }, [image, placeholderImage])

  const contentToShow = useMemo(() => {
    if (typeof content === 'boolean' && content === true) {
      return <PlaceholderComponent />
    }
    return content || null
  }, [content])

  return (
    <StyledCard
      cardStyle={cardStyle}
      style={style}
      isHorizontal={isHorizontal}
      gridColumn={gridColumn}
    >
      {imageToShow && (
        <CardImage
          src={imageToShow}
          alt='Card image'
          isHorizontal={isHorizontal}
        />
      )}
      <CardContentWrapper isHorizontal={isHorizontal}>
        {icon && (
          <IconWrapper>
            {iconToShow}
            <Spacer height={'016px'} />
          </IconWrapper>
        )}
        <H4TitleContentBlock
          title={title}
          description={description}
          content={contentToShow}
        />
      </CardContentWrapper>
    </StyledCard>
  )
}

export default Card
