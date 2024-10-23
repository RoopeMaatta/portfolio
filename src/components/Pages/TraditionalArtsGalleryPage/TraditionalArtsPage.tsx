import React from 'react'
import GalleryPageTemplate from 'src/components/Templates/GalleryPageTemplate'
import { imageData } from './imageDataTraditionalArts'

const TraditionalArtsPage: React.FC = () => {
  return (
    <>
      <GalleryPageTemplate
        title='Traditional Arts'
        content='I really enjoy working with watercolors and doing traditional art. I also like to experiment with combining different media. I enjoy live drawing, capturing things in the moment.'
        imageData={imageData}
        routeLink='test'
        buttonLabelLink='For more you can look at my instargram'
      />
    </>
  )
}

export default TraditionalArtsPage
