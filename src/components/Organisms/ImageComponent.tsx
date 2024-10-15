import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonIcon } from 'src/components/Atoms/Button'
import { X } from 'react-feather'

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
      <Thumbnail onClick={handleClick}>
        <img ref={imageRef} src={src} alt={alt} />
      </Thumbnail>
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
    const maxWidth = window.innerWidth * 0.95 // 95% of viewport width
    const maxHeight = window.innerHeight * 0.95 // 95% of viewport height

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

  return (
    <>
      <Overlay onClick={onClose} />
      <ExpandedImage
        ref={expandedImageRef}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
        style={{
          top: isAnimating
            ? initialRect.top
            : `calc(50% - ${expandedHeight / 2}px)`,
          left: isAnimating
            ? initialRect.left
            : `calc(50% - ${expandedWidth / 2}px)`,
          width: isAnimating ? initialRect.width : expandedWidth,
          height: isAnimating ? initialRect.height : expandedHeight,
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
        {description && <Description>{description}</Description>}
      </ExpandedImage>
    </>
  )
}

const Thumbnail = styled.div`
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
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

const ExpandedImage = styled.div`
  position: fixed;
  z-index: 1000;
  transition: all 0.5s ease;
  cursor: default;
  overflow: auto;
  outline: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1001;
`

const Description = styled.div`
  margin-top: 20px;
  color: #fff;
  font-size: 1rem;
  max-width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export default ImageComponent
