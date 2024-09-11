import React from 'react'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'
import { StyledCardOverlay, StyledCardRaised, CardImage } from './CardStyles'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'

type CardVariant = 'overlay' | 'raised'

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
}

const Card: React.FC<CardProps> = ({
  cardStyle = 'overlay',
  title = 'title: Placeholder. If not needed, set to {false}',
  description = 'description: Placeholder. If not needed, set to {false}',
  content = <PlaceholderComponent />,
  style,
  image = false, // Default to false
  isHorizontal = false,
}) => {
  const StyledCard = variantMap[cardStyle]

  // Define the placeholder image URL
  const placeholderImage =
    'https://hds.hel.fi/images/foundation/visual-assets/placeholders/image-m@2x.png'

  // Determine which image to show: the placeholder, a string, or no image
  const imageToShow =
    typeof image === 'boolean' && image === true ? placeholderImage : image

  return (
    <StyledCard style={style} isHorizontal={isHorizontal}>
      {imageToShow && (
        <CardImage
          src={imageToShow}
          alt='Card image'
          isHorizontal={isHorizontal}
        />
      )}
      <div>
        <H4TitleContentBlock
          title={title}
          description={description}
          content={content}
          customSpacingHeight={'016px'}
        />
      </div>
    </StyledCard>
  )
}

export default Card
