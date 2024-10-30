import React from 'react'
import { Spacer } from 'src/components/Atoms/Spacer'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'
import CapsuleImage from 'src/components/Atoms/CapsuleImage'
import { useTheme } from 'styled-components'
import { Button } from 'src/components/Atoms/Button'
import useResponsiveValue from '@hooks/useResponsiveValue'
import CardListOnGrid from 'src/components/Organisms/CardListOnGrid'
import { useCardDataCv } from './cardDataCv'
import { useCardDataProjects } from './cardDataProjects'
import { Mail } from 'react-feather'

const HomePage: React.FC = () => {
  const theme = useTheme()
  const faceImageSpan = useResponsiveValue(['span 4', 'span 4', 'span 4'])
  const introSpan = useResponsiveValue(['span 4', 'span 4', 'span 8'])
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
          {/* <Spacer height={'024px'} />
          <Logo width='150px' height='auto' /> */}
          <Spacer height={'024px'} />
          <h1>{"Hey there, I'm Roope"}</h1>
          <Spacer height={'012px'} />
          <p style={{ color: theme.colors.text.neutral.weak }}>
            Full Stack developer, architect and crafter
            <br />
            <br />
            Shall we develop digital services together? I&apos;m an architect
            transitioning to web development, studying full-stack. My passions
            lie in user-centric design and design systems. In my free time, I
            enjoy tennis, art, board games, and spending time with my boyfriend
            and our dog, Kita 🐶. <br />
            <strong>roopemaatta(at)gmail.com</strong>
          </p>
          <Spacer height={'024px'} />
          <Button
            label='Contact'
            icon={<Mail />}
            onClick={() =>
              (window.location.href = 'mailto:roopemaatta@gmail.com')
            }
          />
          <Spacer width={'012px'} />
          <Button
            label='Projects'
            buttonStyle='clear'
            onClick={() => {
              const targetElement = document.getElementById('projects-section')
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          />
        </div>
      </GridWrapper>
      <Spacer height={'096px'} />

      <h2 style={{ textAlign: 'center' }}>
        {"Since childhood I've always loved doing things by hand"}
      </h2>
      <Spacer height={'024px'} />
      <CardListOnGrid cardData={cardDataCv} isClickable={false} />
      <Spacer height={'096px'} />

      <h2 id='projects-section' style={{ textAlign: 'center' }}>
        Projects
      </h2>
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
        <h2>Contact</h2> <Spacer height={'018px'} />
        <p style={{ color: theme.colors.text.neutral.weak }}>
          Was nice seeing you here <br />
          roopemaatta(at)gmail.com
        </p>
        <Spacer height={'024px'} />
        <Button
          label="Let's keep in touch"
          icon={<Mail />}
          onClick={() =>
            (window.location.href = 'mailto:roopemaatta@gmail.com')
          }
        />
      </div>
    </>
  )
}

export default HomePage
