import React from 'react'
import { Spacer } from 'src/components/Atoms/Spacer'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'
import CapsuleImage from 'src/components/Atoms/CapsuleImage'
import useResponsiveValue from '@hooks/useResponsiveValue'

const HomePage: React.FC = () => {
  const test = useResponsiveValue(['1', '2', '3'])
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hello World</h1>
      <h1 style={{ textAlign: 'center' }}>{test}</h1>
      <Spacer height={'048px'} />
      <GridWrapper>
        <CapsuleImage
          src='https://via.placeholder.com/300'
          alt='Capsule Image'
          gridColumn='span 4'
        />
      </GridWrapper>
    </>
  )
}

export default HomePage
