import React, { useMemo } from 'react'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'
import { StyledCardOverlay, StyledCardRaised, CardImage } from './CardStyles'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'

type CardVariant = 'overlay' | 'raised'

type GridColumnValue =
  | 'auto' // Default value
  | `span ${number}` // "span n" format
  | `${number} / ${number}` // "start / end" format
  | `${number} / span ${number}` // "start / span n" format
  | '1 / -1' // Common full-width usage
  | 'inherit'

const variantMap = {
  overlay: StyledCardOverlay,
  raised: StyledCardRaised,
}

// Update the CardProps interface to allow image to accept a boolean or string
interface CardProps {
  cardStyle?: CardVariant
  title?: string | boolean
  description?: string | boolean
  content?: React.ReactNode | boolean
  style?: React.CSSProperties
  image?: string | boolean // Image can be a string (URL) or a boolean
  isHorizontal?: boolean
  gridColumn?: GridColumnValue
}

const Card: React.FC<CardProps> = ({
  cardStyle = 'raised',
  title = 'title: Placeholder. If not needed, set to {false}',
  description = 'description: Placeholder. If not needed, set to {false}',
  content = false,
  style,
  image = false, // Default to false
  isHorizontal = false,
  gridColumn = '1 / -1',
}) => {
  const StyledCard = variantMap[cardStyle]

  // Memoizing the placeholder image URL
  const placeholderImage = useMemo(
    () =>
      'https://hds.hel.fi/images/foundation/visual-assets/placeholders/image-m@2x.png',
    []
  )

  // Memoize the image to avoid recalculation on every render
  const imageToShow = useMemo(() => {
    if (typeof image === 'boolean' && image === true) {
      return placeholderImage
    }
    return image
  }, [image, placeholderImage])

  const contentToShow = useMemo(() => {
    if (typeof content === 'boolean' && content === true) {
      return <PlaceholderComponent /> // Use PlaceholderComponent when content is true
    }
    return content // Otherwise, use the actual content
  }, [content])

  return (
    <StyledCard
      gridColumn={gridColumn}
      style={style}
      isHorizontal={isHorizontal}
    >
      {imageToShow && (
        <CardImage
          src={imageToShow}
          alt='Card image'
          isHorizontal={isHorizontal}
        />
      )}

      <H4TitleContentBlock
        title={title}
        description={description}
        content={contentToShow}
        customSpacingHeight={'016px'}
      />
    </StyledCard>
  )
}

export default Card
