import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonIcon } from 'src/components/Atoms/Button'
import { FileText, X } from 'react-feather'
import Paper from 'src/components/Atoms/Paper/Paper'

interface ImageProps {
  src: string
  alt: string
  description?: string
  trigger?: React.ReactElement
  isScrollable?: boolean
}

// Utility function to check if the source is a PDF
const isPdf = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url, window.location.href) // Ensure relative URLs work
    return parsedUrl.pathname.toLowerCase().endsWith('.pdf')
  } catch {
    return false
  }
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  description,
  trigger,
  isScrollable,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (triggerRef.current) {
      setTriggerRect(triggerRef.current.getBoundingClientRect())
    } else if (imageRef.current) {
      setTriggerRect(imageRef.current.getBoundingClientRect())
    }
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  const composeHandlers =
    (...handlers: Array<((e: React.MouseEvent) => void) | undefined>) =>
    (e: React.MouseEvent) => {
      handlers.forEach(handler => {
        if (handler) {
          handler(e)
        }
      })
    }

  return (
    <>
      {trigger ? (
        React.cloneElement(trigger, {
          ref: triggerRef,
          onClick: composeHandlers(trigger.props.onClick, handleClick),
        })
      ) : (
        <ThumbnailWrapper>
          <Thumbnail
            onClick={handleClick}
            cardStyle='raised'
            hoverStyle='overlay'
          >
            {isPdf(src) ? (
              <PdfThumbnail ref={imageRef} aria-label={alt}>
                <FileText size={64} />
              </PdfThumbnail>
            ) : (
              <img ref={imageRef} src={src} alt={alt} />
            )}
          </Thumbnail>
        </ThumbnailWrapper>
      )}
      {isExpanded && triggerRect && (
        <ExpandedView
          src={src}
          alt={alt}
          description={description}
          initialRect={triggerRect}
          onClose={handleClose}
          isScrollable={isScrollable}
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
  isScrollable?: boolean
}

const ExpandedView: React.FC<ExpandedViewProps> = ({
  src,
  alt,
  description,
  initialRect,
  onClose,
  isScrollable,
}) => {
  const [isAnimating, setIsAnimating] = useState(true)
  const expandedImageRef = useRef<HTMLDivElement>(null)

  // State to hold the natural dimensions of the image
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null)
  const [naturalHeight, setNaturalHeight] = useState<number | null>(null)

  // Ref and state to measure the description's height
  const descriptionRef = useRef<HTMLDivElement>(null)
  const [descriptionHeight, setDescriptionHeight] = useState(0)

  // Utility function to append parameters to PDF URLs to control display
  const appendPdfParameters = (urlString: string): string => {
    try {
      const url = new URL(urlString, window.location.href)

      // Parameters to hide toolbar, navpanes, scrollbar and set zoom
      const params = ['zoom=1500', 'view=Fit']

      if (url.hash) {
        params.forEach(param => {
          if (!url.hash.includes(param.split('=')[0])) {
            url.hash += `&${param}`
          }
        })
      } else {
        url.hash = `#${params.join('&')}`
      }
      return url.toString()
    } catch {
      return `${urlString}#toolbar=0&navpanes=0&scrollbar=0&zoom=100&view=Fit`
    }
  }

  useEffect(() => {
    if (isPdf(src)) {
      // Set dimensions for PDFs based on viewport
      const padding = 16
      const maxAvailableWidth = window.innerWidth * 0.95 - padding * 2
      const maxAvailableHeight =
        window.innerHeight - padding * 2 - descriptionHeight
      setNaturalWidth(maxAvailableWidth)
      setNaturalHeight(maxAvailableHeight)
    } else {
      // Load the image to get its natural dimensions
      const img = new Image()
      img.src = src
      img.onload = () => {
        setNaturalWidth(img.naturalWidth)
        setNaturalHeight(img.naturalHeight)
      }
    }
  }, [src, descriptionHeight])

  useEffect(() => {
    // Measure the description's height after it renders
    if (descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.clientHeight)
    } else {
      setDescriptionHeight(0)
    }
  }, [description])

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

    // Prevent body from scrolling when the image is expanded, unless isScrollable is true
    if (!isScrollable) {
      document.body.style.overflow = 'hidden'
    }

    // Focus on the expanded image for accessibility
    if (expandedImageRef.current) {
      expandedImageRef.current.focus()
    }

    // Clean up event listeners and styles when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, isScrollable])

  // Initialize expandedWidth and expandedHeight with initialRect dimensions
  let expandedWidth: number = initialRect.width
  let expandedHeight: number = initialRect.height

  const padding = 16 // in pixels (per side, so total vertical padding is 32)

  if (naturalWidth && naturalHeight) {
    const aspectRatio = naturalWidth / naturalHeight

    if (isScrollable) {
      // When scrollable, do not constrain the height to the viewport height
      expandedWidth = Math.min(
        naturalWidth,
        window.innerWidth * 0.95 - padding * 2
      )
      expandedHeight = expandedWidth / aspectRatio
    } else {
      // Calculate maximum available height for the image
      const maxAvailableHeight =
        window.innerHeight - padding * 2 - descriptionHeight

      const maxWidth = window.innerWidth * 0.95 - padding * 2 // Adjusted for horizontal padding
      const maxHeight = maxAvailableHeight // Use adjusted maxHeight when not scrollable

      if (aspectRatio > maxWidth / maxHeight) {
        // Image is wider relative to the viewport
        expandedWidth = maxWidth
        expandedHeight = maxWidth / aspectRatio
      } else {
        // Image is taller relative to the viewport
        expandedHeight = maxHeight
        expandedWidth = maxHeight * aspectRatio
      }
    }
  }

  return (
    <>
      <Overlay onClick={onClose} />
      <ExpandedImage
        ref={expandedImageRef}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
        cardStyle='raised'
        isScrollable={isScrollable}
        style={{
          top: isAnimating
            ? initialRect.top
            : isScrollable
              ? '0px'
              : `calc(50% - ${
                  (expandedHeight + padding * 2 + descriptionHeight) / 2
                }px)`,
          left: isAnimating
            ? initialRect.left
            : `calc(50% - ${(expandedWidth + padding * 2) / 2}px)`,
          width: isAnimating ? initialRect.width : expandedWidth + padding * 2,
          height: isAnimating
            ? initialRect.height
            : isScrollable
              ? '100%'
              : 'auto',
          transform: isAnimating ? 'translate(0, 0)' : 'none',
        }}
      >
        <CloseButton isScrollable={isScrollable}>
          <ButtonIcon
            onClick={onClose}
            buttonStyle='tonal'
            shape='round'
            icon={<X />}
            aria-label='Close image'
          />
        </CloseButton>
        {isPdf(src) ? (
          <PdfViewer src={appendPdfParameters(src)} title={alt} />
        ) : (
          <img src={src} alt={alt} />
        )}
        {description && (
          <Description ref={descriptionRef}>
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

// Styled component for PDF thumbnail
const PdfThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
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

const ExpandedImage = styled(Paper)<{ isScrollable?: boolean }>`
  position: fixed;
  z-index: 1000;
  transition: all 0.5s ease;
  cursor: default;
  overflow-y: ${props => (props.isScrollable ? 'auto' : 'hidden')};
  outline: none;
  padding: 8px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => (props.isScrollable ? '100%' : 'auto')};
  width: ${props => (props.isScrollable ? '100%' : 'auto')};

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: inherit;
    box-shadow: ${({ theme }) => theme.shadow.raised};
  }
`

// Styled component for PDF viewer
const PdfViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const CloseButton = styled.div<{ isScrollable?: boolean }>`
  position: ${props => (props.isScrollable ? 'sticky' : 'absolute')};
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
