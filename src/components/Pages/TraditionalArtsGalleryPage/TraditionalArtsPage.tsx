import React from 'react'
import GalleryPageTemplate from 'src/components/Templates/GalleryPageTemplate'
import { imageData } from './imageDataTraditionalArts'

const TraditionalArtsPage: React.FC = () => {
  return (
    <>
      <GalleryPageTemplate
        title='Traditional Arts'
        content='I really enjoy working with watercolors and doing traditional art. I also like to experiment with combining different media. I enjoy live drawing, capturing things in the moment, and every now and then, I switch things up with a bit of clay sculpting when I have the opportunity.'
        imageData={imageData}
        routeLink='test'
        buttonLabelLink='test'
      />
    </>
  )
}

export default TraditionalArtsPage
