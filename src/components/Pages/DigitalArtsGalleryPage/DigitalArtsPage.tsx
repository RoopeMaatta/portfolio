import React from 'react'
import GalleryPageTemplate from 'src/components/Templates/GalleryPageTemplate'
import { imageData } from './imageDataDigitalArts'

const DigitalArtsPage: React.FC = () => {
  return (
    <>
      <GalleryPageTemplate
        title='Digital Arts'
        content='I find digital painting interesting for its flexibility. It allows me to experiment with different techniques. Working from life in this medium is a unique experience, offering a fresh perspective.'
        imageData={imageData}
      />
    </>
  )
}

export default DigitalArtsPage
