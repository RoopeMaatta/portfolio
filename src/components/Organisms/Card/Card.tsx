import React from 'react'
import { useTheme } from 'styled-components'
import { Spacer } from 'src/components/Atoms/Spacer'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'
import { StyledCardOverlay, StyledCardRaised } from './CardStyles'

type CardVariant = 'overlay' | 'raised'

const variantMap = {
  overlay: StyledCardOverlay,
  raised: StyledCardRaised,
}

interface Cardprops {
  cardStyle?: CardVariant
  title?: string | boolean
  description?: string | boolean
  content?: React.ReactNode | boolean
  style?: React.CSSProperties
}

// Main component rendering the content
const Card: React.FC<Cardprops> = ({
  cardStyle = 'overlay',
  title = 'title: Placeholder. If not needed set to {false}',
  description = 'description: Placeholder, text underneath title in gray. If not needed set to {false}',
  content = 'content: Placeholder, can be table, text, JSX, image, etc. If not needed set to {false}',
  style,
}) => {
  const theme = useTheme()
  const StyledCard = variantMap[cardStyle]

  return (
    <StyledCard style={style}>
      <H4TitleContentBlock
        title={title}
        description={description}
        content={content}
      />
    </StyledCard>
  )
}

export default Card
