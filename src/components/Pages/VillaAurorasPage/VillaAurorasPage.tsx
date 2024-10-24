import React from 'react'
import GalleryPageTemplate from 'src/components/Templates/GalleryPageTemplate'
import { imageData } from './imageDataVillaAuroras'

const VillaAurorasPage: React.FC = () => {
  return (
    <>
      <GalleryPageTemplate
        title='Villa Auroras Cottages'
        content="I am the lead architect of Villa Aurora's summer house and small cottages. This was an very rewarding project, involving the design of multiple buildings on a compact, steep site. The total area of the buildings is 311m²."
        imageData={imageData}
        routeLink='https://villaauroras.com/'
        buttonLabelLink='See more about Auroras here'
      />
    </>
  )
}

export default VillaAurorasPage
