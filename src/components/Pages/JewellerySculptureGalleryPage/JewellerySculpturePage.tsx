import React from 'react'
import GalleryPageTemplate from 'src/components/Templates/GalleryPageTemplate'
import { imageData } from './imageDataJewellerySculpture'

const JewellerySculpturePage: React.FC = () => {
  return (
    <>
      <GalleryPageTemplate
        title='Jewellery and sculpture'
        content='I really enjoy working with silver clay, glass, sterling silver, and natural materials like horn and bone to create unique jewelry pieces. I like working with clay for more descriptive sculpting. I also have a coin to my name through a desing competition "Children&apos;s Creativity"'
        imageData={imageData}
        routeLink='test'
        buttonLabelLink='For more you can look at my instargram'
      />
    </>
  )
}

export default JewellerySculpturePage
