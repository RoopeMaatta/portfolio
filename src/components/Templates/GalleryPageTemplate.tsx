import React from 'react'
import { Spacer } from '../Atoms/Spacer'
import MasonryContainer from '../Molecules/MasonryColumnsWrapper'
import ImageComponent from '../Organisms/ImageComponent/ImageComponent'
import { Button } from '../Atoms/Button'
import { ExternalLink } from 'react-feather'

interface ImageData {
  key: string
  src: string
  alt: string
  description?: string
}

interface GalleryPageProps {
  title: string
  content: string
  imageData: ImageData[]
  routeLink?: string
  buttonLabelLink?: string
}

const GalleryPageTemplate: React.FC<GalleryPageProps> = ({
  title,
  content,
  imageData,
  routeLink = '',
  buttonLabelLink = 'Link to external site',
}) => {
  return (
    <>
      <h1>{title}</h1>
      <Spacer height={'040px'} />
      <p>{content}</p>
      <Spacer height={'008px'} />
      {routeLink && buttonLabelLink && (
        <>
          <Button
            buttonStyle='tonal'
            label={buttonLabelLink}
            onClick={() => {
              window.open(routeLink, '_blank')
            }}
            icon={<ExternalLink />}
          />
        </>
      )}
      <Spacer height={'080px'} />
      <MasonryContainer>
        {imageData.map(({ key, src, alt, description }) => (
          <ImageComponent
            key={key}
            src={src}
            alt={alt}
            description={description}
          />
        ))}
      </MasonryContainer>
    </>
  )
}

export default GalleryPageTemplate
