import React from 'react'
import styled, { css } from 'styled-components'

interface CapsuleImageProps {
  src: string
  alt?: string
  gridColumn?: string
}

interface CapsuleImageWrapperProps {
  gridColumn?: string
}

const CapsuleImageWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !['gridColumn'].includes(prop),
})<CapsuleImageWrapperProps>`
  ${({ theme, gridColumn }) => {
    const { colors, spacing } = theme

    return css`
      grid-column: ${gridColumn || 'auto'};
      width: 100%;
      position: relative;
      overflow: hidden;

      /* Maintain aspect ratio of 3:4 (height is 1.33 times the width) */
      aspect-ratio: 3 / 4;

      /* Capsule shape */
      border-radius: 45% / 35%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        box-shadow: inset 0 0 0 ${spacing['004px']} ${colors.stroke.brand.weak};
        pointer-events: none;
      }
    `
  }}
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CapsuleImage: React.FC<CapsuleImageProps> = ({
  src,
  alt,
  gridColumn,
}) => {
  return (
    <CapsuleImageWrapper gridColumn={gridColumn}>
      <Image src={src} alt={alt || 'Capsule Image'} loading='lazy' />
    </CapsuleImageWrapper>
  )
}

export default CapsuleImage
