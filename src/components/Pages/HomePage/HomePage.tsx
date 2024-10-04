import React from 'react'
import { Spacer } from 'src/components/Atoms/Spacer'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'
import CapsuleImage from 'src/components/Atoms/CapsuleImage'
import PlaceholderComponent from 'src/components/Atoms/PlaceholderComponent'
import { useTheme } from 'styled-components'
import { Button } from 'src/components/Atoms/Button'
import useResponsiveValue from '@hooks/useResponsiveValue'
import CardListOnGrid from 'src/components/Organisms/CardListOnGrid'
import { useCardDataCv } from './cardDataCv'
import { useCardDataProjects } from './cardDataProjects'

const HomePage: React.FC = () => {
  const theme = useTheme()
  const faceImageSpan = useResponsiveValue(['span 4', 'span 4', 'span 6'])
  const introSpan = useResponsiveValue(['span 4', 'span 4', 'span 6'])
  const cardDataCv = useCardDataCv()
  const cardDataProjects = useCardDataProjects()
  return (
    <>
      <Spacer height={'024px'} />
      <GridWrapper>
        <CapsuleImage
          src='https://res.cloudinary.com/dbm0udwcq/image/upload/v1727943590/IMG_2093_ps6okz.jpg'
          alt='Capsule Image'
          gridColumn={faceImageSpan}
        />

        <div style={{ gridColumn: introSpan }}>
          <Spacer height={'048px'} />
          <PlaceholderComponent />
          <Spacer height={'012px'} />
          <h1>{"Hey there, I'm Roope"}</h1>
          <Spacer height={'012px'} />
          <p style={{ color: theme.colors.text.neutral.weak }}>
            Full Stack developer, architect and crafter
          </p>
          <Spacer height={'024px'} />
          <Button label='Contact' />
          <Spacer width={'012px'} />
          <Button label='Projects' buttonStyle='clear' />
        </div>
      </GridWrapper>
      <Spacer height={'096px'} />

      <h2 style={{ textAlign: 'center' }}>
        {"Since childhood I've always loved doing things by hand"}
      </h2>
      <Spacer height={'024px'} />
      <CardListOnGrid cardData={cardDataCv} isClickable={false} />
      <Spacer height={'096px'} />

      <h2 style={{ textAlign: 'center' }}>Projects</h2>
      <Spacer height={'024px'} />
      <CardListOnGrid cardData={cardDataProjects} />
      <Spacer height={'096px'} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2>Contact</h2>
        <p style={{ color: theme.colors.text.neutral.weak }}>
          Was nice seeing you here
        </p>
        <Spacer height={'048px'} />
        <Button label="Let's get connected" />
        <Spacer height={'012px'} />
      </div>
    </>
  )
}

export default HomePage
