import React from 'react'
import styled from 'styled-components'

interface CapsuleImageProps {
  src: string
  alt?: string
  gridColumn?: string
}

const CapsuleImageWrapper = styled.div<{ gridColumn?: string }>`
  grid-column: ${({ gridColumn }) => gridColumn || 'auto'};
  width: 100%;
  position: relative;
  overflow: hidden;

  /* Maintain aspect ratio of 3:4 (height is 1.33 times the width) */
  aspect-ratio: 3 / 4;

  /* Capsule shape */
  border-radius: 50% / 35%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 12px rgba(0, 0, 255, 0.3);
    pointer-events: none;
  }
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
      <Image src={src} alt={alt || 'Capsule Image'} />
    </CapsuleImageWrapper>
  )
}

export default CapsuleImage
