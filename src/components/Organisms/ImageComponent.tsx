import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonIcon } from 'src/components/Atoms/Button'
import { X } from 'react-feather'
import Paper from 'src/components/Atoms/Paper/Paper'

interface ImageProps {
  src: string
  alt: string
  description?: string
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageRect, setImageRect] = useState<DOMRect | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    if (imageRef.current) {
      setImageRect(imageRef.current.getBoundingClientRect())
    }
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  return (
    <>
      <ThumbnailWrapper>
        <Thumbnail
          onClick={handleClick}
          cardStyle='raised'
          hoverStyle='overlay'
        >
          <img ref={imageRef} src={src} alt={alt} />
        </Thumbnail>
      </ThumbnailWrapper>
      {isExpanded && imageRect && (
        <ExpandedView
          src={src}
          alt={alt}
          description={description}
          initialRect={imageRect}
          onClose={handleClose}
        />
      )}
    </>
  )
}

interface ExpandedViewProps {
  src: string
  alt: string
  description?: string
  initialRect: DOMRect
  onClose: () => void
}

const ExpandedView: React.FC<ExpandedViewProps> = ({
  src,
  alt,
  description,
  initialRect,
  onClose,
}) => {
  const [isAnimating, setIsAnimating] = useState(true)
  const expandedImageRef = useRef<HTMLDivElement>(null)

  // State to hold the natural dimensions of the image
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null)
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null)

  useEffect(() => {
    // Load the image to get its natural dimensions
    const img = new Image()
    img.src = src
    img.onload = () => {
      setNaturalWidth(img.naturalWidth)
      setNaturalHeight(img.naturalHeight)
    }
  }, [src])

  useEffect(() => {
    // Trigger reflow to ensure the transition starts correctly
    requestAnimationFrame(() => {
      setIsAnimating(false)
    })

    // Add event listener for 'Escape' key to close the expanded image
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Prevent body from scrolling when the image is expanded
    document.body.style.overflow = 'hidden'

    // Focus on the expanded image for accessibility
    if (expandedImageRef.current) {
      expandedImageRef.current.focus()
    }

    // Clean up event listeners and styles when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Initialize expandedWidth and expandedHeight with initialRect dimensions
  let expandedWidth: number = initialRect.width
  let expandedHeight: number = initialRect.height

  if (naturalWidth && naturalHeight) {
    const aspectRatio = naturalWidth / naturalHeight
    const maxWidth = window.innerWidth * 0.95 - 32 // 95% of viewport width minus padding
    const maxHeight = window.innerHeight * 0.95 - 32 // 95% of viewport height minus padding

    if (aspectRatio > maxWidth / maxHeight) {
      // Image is wider relative to the viewport
      expandedWidth = maxWidth
      expandedHeight = maxWidth / aspectRatio
    } else {
      // Image is taller relative to the viewport
      expandedWidth = maxHeight * aspectRatio
      expandedHeight = maxHeight
    }
  }

  const padding = 16 // in pixels

  return (
    <>
      <Overlay onClick={onClose} />
      <ExpandedImage
        ref={expandedImageRef}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
        cardStyle='raised'
        style={{
          top: isAnimating
            ? initialRect.top
            : `calc(50% - ${(expandedHeight + padding * 2 + (description ? 60 : 0)) / 2}px)`,
          left: isAnimating
            ? initialRect.left
            : `calc(50% - ${(expandedWidth + padding * 2) / 2}px)`,
          width: isAnimating ? initialRect.width : expandedWidth + padding * 2,
          height: isAnimating ? initialRect.height : 'auto',
          transform: isAnimating ? 'translate(0, 0)' : 'none',
        }}
      >
        <CloseButton>
          <ButtonIcon
            onClick={onClose}
            buttonStyle='tonal'
            shape='round'
            icon={<X />}
            aria-label='Close image'
          />
        </CloseButton>
        <img src={src} alt={alt} />
        {description && (
          <Description>
            <h4>{description}</h4>
          </Description>
        )}
      </ExpandedImage>
    </>
  )
}

const ThumbnailWrapper = styled.div`
  position: relative;
`

const Thumbnail = styled(Paper)`
  cursor: pointer;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.raised};
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    display: block;
    transition: transform 0.3s ease;
  }

  /* Use increased specificity */
  &&:hover {
    z-index: 2;
  }

  /* Move the transform to the img:hover */
  img:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadow.overlay};
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ExpandedImage = styled(Paper)`
  position: fixed;
  z-index: 1000;
  transition: all 0.5s ease;
  cursor: default;
  overflow: auto;
  outline: none;
  padding: 8px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: inherit;
    box-shadow: ${({ theme }) => theme.shadow.raised};
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 1001;
`

const Description = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  max-width: 80%;
  text-align: center;
`

export default ImageComponent
